# ICAR 2026 - Conference Management System Documentation

## 1. Project Overview
The **International Conference on Advanced Research (ICAR) 2026** website is a comprehensive event management platform designed to handle the entire lifecycle of a conference. It provides a polished, modern interface for attendees to register, authors to submit papers, and administrators to manage the event.

### Key Features
-   **Modern UI/UX**: Built with the "21st.dev" aesthetic, featuring glassmorphism, smooth animations (`framer-motion`), and responsive design.
-   **Role-Based Access Control (RBAC)**: Distinct flows for **Attendees**, **Presenters**, and **Admins**.
-   **Cloud-Native**: Fully integrated with **Supabase** for Authentication and Database.
-   **Link-Based Submissions**: simplified workflow using Google Drive/Cloud links for payment proofs and papers.
-   **Admin Dashboard**: Centralized control for managing registrations, users, and submissions.
-   **Email Notifications**: Automated emails via **Resend** for welcome messages and submission receipts.

---

## 2. Technical Architecture

### Tech Stack
-   **Framework**: Next.js 16 (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS v4, `tailwind-merge`, `clsx`
-   **UI Components**: Shadcn UI (Radix Primitives), Lucide Icons
-   **Animations**: Framer Motion, Custom Tailwind Utilities or `framer-motion`
-   **Backend/Database**: Supabase (PostgreSQL)
-   **Email Service**: Resend
-   **Validation**: Zod (Server-side schema validation)

### Directory Structure
```
├── app/
│   ├── (admin)/        # Admin-only routes (protected)
│   ├── (auth)/         # Login/Signup pages (custom layout)
│   ├── (main)/         # Main public pages (Home, About, Register)
│   ├── api/            # API routes (if any)
│   ├── globals.css     # Global styles & Tailwind imports
│   └── layout.tsx      # Root layout
├── components/
│   ├── home/           # Homepage-specific sections (Hero, Speakers)
│   ├── layout/         # SiteHeader, SiteFooter
│   └── ui/             # Reusable UI components (Buttons, Inputs, Cards)
├── lib/
│   ├── supabase/       # Supabase client/server utilities & Middleware
│   ├── validations/    # Zod schemas (login, signup, content forms)
│   └── mail/           # Email sending logic
├── scripts/            # Helper scripts (create-admin.js)
└── supabase/
    └── schema.sql      # Database schema definitions
```

---

## 3. Core Features Implementation

### A. Authentication & Roles
-   **System**: Supabase Auth (Email/Password).
-   **Roles**:
    -   `attendee`: Can register for tickets.
    -   `presenter`: Can register and submit papers.
    -   `admin`: Full access to the dashboard.
-   **Logic**: Role is selected during signup and stored in `user_metadata`.
-   **Protection**: `middleware.ts` intercepts requests and enforces role checks for `/admin` and `/submit-paper`.

### B. Registration Flow
-   **Route**: `/register`
-   **Logic**: Users select a pricing tier.
-   **Payment**: Users pay via UPI (offline) and paste a **Google Drive Link** as proof.
-   **Data**: Stored in `registrations` table with `status: pending`.

### C. Paper Submission
-   **Route**: `/submit-paper`
-   **Access**: Restricted to `presenter` role.
-   **Logic**: Authors provide Title, Abstract, Track, and a **File Link**.
-   **Data**: Stored in `submissions` table.

### D. Admin Dashboard
-   **Route**: `/admin/admin`
-   **Access**: Restricted to `admin` role.
-   **Functionality**:
    -   **Stats**: Real-time counts of users and submissions.
    -   **Registrations**: Table view to verify/reject attendees.
    -   **Submissions**: Table view to track paper status.

### E. Email System
-   **Provider**: Resend.
-   **Triggers**:
    -   `sendWelcomeEmail`: Fired on successful registration.
    -   `sendSubmissionReceipt`: Fired on successful paper submission.

---

## 4. Database Schema
The database is hosted on Supabase (PostgreSQL).

### Tables
1.  **`public.profiles`**: EXTENDS `auth.users`. Syncs `full_name` and `role`.
2.  **`public.registrations`**: Stores registration details, category, and proof link.
3.  **`public.submissions`**: Stores paper metadata and file link.

### Security (RLS)
-   **Profiles**: Public read, Owner write.
-   **Registrations**: Owner read/write. Admin read all.
-   **Submissions**: Owner read/write. Admin read all.

---

## 5. Setup & Deployment

### Prerequisites
1.  Node.js 18+ installed.
2.  A Supabase project.
3.  A Resend account (for emails).

### Installation
1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Set up Environment Variables (`.env.local`):
    ```bash
    NEXT_PUBLIC_SUPABASE_URL=...
    NEXT_PUBLIC_SUPABASE_ANON_KEY=...
    SUPABASE_SERVICE_ROLE_KEY=...  # For Admin Script
    RESEND_API_KEY=...             # For Emails
    ```
4.  Run Database Schema:
    -   Copy `supabase/schema.sql` content.
    -   Run in Supabase SQL Editor.

### Creating an Admin
Run the included script to generate your first admin user:
```bash
node scripts/create-admin.js admin@domain.com MySecurePass123!
```

### Running Locally
```bash
npm run dev
```
Visit `http://localhost:3000`.

### Deploying to Vercel
1.  Import project to Vercel.
2.  Add all Environment Variables.
3.  Deploy! (Next.js is auto-detected).

---

## 6. Performance & Credits
-   **Performance**:
    -   Static Rendering for public pages.
    -   Dynamic Rendering for Dashboard.
    -   `lucide-react` for lightweight icons.
    -   Optimized CSS with Tailwind.
-   **Credits**:
    -   [Radix UI](https://www.radix-ui.com/) for primitives.
    -   [Shadcn UI](https://ui.shadcn.com/) for component patterns.
    -   [Framer Motion](https://www.framer.com/motion/) for animations.
    -   [Supabase](https://supabase.com/) for backend.
