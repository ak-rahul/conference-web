# International Conference on Advanced Functional Materials (ICAFM) 2026

A modern, full-stack conference management system built with **Next.js 15**, **Supabase**, and **Tailwind CSS**.

## 🚀 Features

-   **Authentication**: Role-based access (Admin, Presenter, Attendee).
-   **Registration**: Secure attendee registration with payment proof verification.
-   **Paper Submission**: Link-based submission system for researchers (Google Drive/Dropbox).
-   **Admin Dashboard**: comprehensive tools to manage users, registrations, and submissions.
-   **Email System**: Professional automated notifications using Resend.
-   **Responsive Design**: Mobile-first approach with "21st.dev" inspired aesthetics.

## 📅 Important Dates

-   **Conference**: March 05-06, 2026
-   **Paper Submission Deadline**: Feb 01, 2026
-   **Early Bird Registration**: Feb 15, 2026

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

## 📚 Documentation

For a detailed breakdown of the architecture, features, and implementation details, please refer to the [Project Documentation](docs/project_documentation.md).
For administrative tasks, see the [Admin Guide](docs/ADMIN_GUIDE.md).

## 📄 License

This project is licensed under the MIT License.
