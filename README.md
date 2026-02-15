# International Conference on Advanced Research (ICAR) 2025

A modern, full-featured conference website built with **Next.js 16**, **Supabase**, and **Shadcn UI**.

## 🚀 Features

- **Authentication**: Secure user login and signup via Supabase Auth.
- **Registration System**: Conference registration with payment proof upload.
- **Paper Submission**: Multi-track paper submission system with PDF/DOCX upload.
- **User Dashboard**: Track registration status and view submitted papers.
- **Dynamic Content**:
  - **Home**: Hero section with countdown timer, featured speakers, and sponsors.
  - **Speakers**: Detailed speaker profiles and bios.
  - **Schedule**: Interactive timeline of important dates.
- **Admin Ready**: Database schema supports role-based access control (RLS).
- **Responsive Design**: Fully responsive UI tailored for all devices.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database & Auth**: [Supabase](https://supabase.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: React Hook Form + Zod Validation

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/conference-web.git
cd conference-web
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Database Setup

Run the SQL script located in `supabase/schema.sql` in your Supabase SQL Editor to create the necessary tables and security policies.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `/app`: App Router pages and layouts.
- `/components`: Reusable UI components.
- `/lib`: Utility functions and Supabase client.
- `/supabase`: SQL schema and database definitions.
- `proxy.ts`: Next.js 16 middleware for route protection.

## 🚢 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/).

1. Push your code to a Git repository.
2. Import the project into Vercel.
3. Add the `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel Project Settings > Environment Variables.
4. Deploy!

## 📄 License

This project is licensed under the MIT License.
