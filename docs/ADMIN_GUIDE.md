# ICAR 2026 - Admin Guide

This guide is for administrators of the ICAR 2026 Conference Management System.

## 1. Creating the First Admin Account

Since the public signup form controls "Attendee" and "Presenter" roles, the initial Admin account must be created via a secure script.

### Prerequisites
-   Ensure you have the `SUPABASE_SERVICE_ROLE_KEY` in your `.env.local` file. This key has high-level permissions, so keep it safe.

### Steps
1.  Open your terminal in the project directory.
2.  Run the creation script with your desired email and password:

    ```bash
    node scripts/create-admin.js admin@icar2026.org SuperSecurePass123!
    ```

3.  The script will:
    -   Create a new user in Supabase.
    -   Automatically confirm their email.
    -   Set their role metadata to `admin`.

---

## 2. Accessing the Dashboard

1.  **Login**: Go to [/login](http://localhost:3000/login) and sign in with the admin credentials you just created.
2.  **Dashboard**: Once logged in, navigate to [/admin/admin](http://localhost:3000/admin/admin).

*Note: If a regular user tries to access this URL, they will be redirected to the user dashboard.*

---

## 3. Managing Registrations

**URL**: [/admin/admin/registrations](http://localhost:3000/admin/admin/registrations)

-   **View All**: See a list of all registered users.
-   **Verify Payment**: Check the "Payment Proof URL" (link to Google Drive).
    -   Click the link to view the receipt.
    -   If valid, click "Approve" (Functionality to be linked to API).
    -   If invalid, click "Reject".

---

## 4. Managing Papers

**URL**: [/admin/admin/submissions](http://localhost:3000/admin/admin/submissions)

-   **View Submissions**: See all submitted papers grouped by Track.
-   **Download**: Click the "File Link" to view the paper on Google Drive/Cloud.
-   **Review**: Change status to Accepted/Rejected/Under Review.

---

## 5. Troubleshooting

-   **I can't access the dashboard**:
    -   Check if your user has the `admin` role in Supabase -> Authentication -> Users -> Columns -> `raw_user_meta_data`.
-   **Emails aren't sending**:
    -   Verify the `RESEND_API_KEY` is correct in `.env.local`.
