-- Create profiles table
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  full_name text,
  role text check (role in ('admin', 'presenter', 'attendee')) default 'attendee',
  affiliation text,
  country text
);

-- Enable Row Level Security (RLS)
alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone." on public.profiles
  for select using (true);

create policy "Users can insert their own profile." on public.profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on public.profiles
  for update using (auth.uid() = id);

-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, role)
  values (
    new.id, 
    new.raw_user_meta_data->>'full_name', 
    coalesce(new.raw_user_meta_data->>'role', 'attendee')
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger the function every time a user is created
create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- Create details table
create table public.conference_details (
  id serial primary key,
  name text,
  dates text,
  venue text,
  deadlines jsonb
);

-- Enable RLS for conference_details
alter table public.conference_details enable row level security;

-- Allow everyone to view conference details
create policy "Conference details are viewable by everyone" 
on public.conference_details for select using (true);

-- Allow only admins to update conference details
create policy "Admins can update conference details" 
on public.conference_details for all 
using (
  auth.uid() in (
    select id from public.profiles where role = 'admin'
  )
);

-- Create registrations table
create table public.registrations (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text not null,
  affiliation text,
  category text,
  payment_proof_url text, -- Path in storage
  status text check (status in ('pending', 'verified', 'rejected')) default 'pending',
  amount numeric
);

alter table public.registrations enable row level security;

create policy "Users can see their own registrations" on public.registrations
  for select using (auth.uid() = user_id);

create policy "Users can insert their own registrations" on public.registrations
  for insert with check (auth.uid() = user_id);

-- Create submissions table
create table public.submissions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  abstract text not null,
  track text,
  authors text, -- Stores author names as string or JSON
  file_url text not null, -- Path in storage
  status text check (status in ('submitted', 'under_review', 'accepted', 'rejected')) default 'submitted'
);

alter table public.submissions enable row level security;

create policy "Users can see their own submissions" on public.submissions
  for select using (auth.uid() = user_id);

create policy "Users can insert their own submissions" on public.submissions
  for insert with check (auth.uid() = user_id);



