import { Resend } from 'resend';

// Initialize Resend with API Key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendWelcomeEmail = async (email: string, name: string) => {
    if (!process.env.RESEND_API_KEY) {
        console.log("Resend API Key missing. Skipping email.");
        return;
    }

    try {
        await resend.emails.send({
            from: 'ICAR 2026 <noreply@icar2026.org>', // You'll need to verify a domain or use 'onboarding@resend.dev' for testing
            to: email,
            subject: 'Welcome to ICAR 2026!',
            html: `<p>Hi ${name},</p><p>Thank you for registering for the International Conference on Advanced Research 2026.</p><p>We have received your registration details and will verify your payment proof shortly.</p><p>Best regards,<br>ICAR Team</p>`
        });
    } catch (error) {
        console.error("Failed to send welcome email:", error);
    }
};

export const sendSubmissionReceipt = async (email: string, name: string, paperTitle: string) => {
    if (!process.env.RESEND_API_KEY) {
        console.log("Resend API Key missing. Skipping email.");
        return;
    }

    try {
        await resend.emails.send({
            from: 'ICAR 2026 <noreply@icar2026.org>',
            to: email,
            subject: 'Paper Submission Received - ICAR 2026',
            html: `<p>Hi ${name},</p><p>We have received your paper submission: <strong>${paperTitle}</strong>.</p><p>Our committee will review it and notify you of the decision by Feb 20, 2026.</p><p>Best regards,<br>ICAR Team</p>`
        });
    } catch (error) {
        console.error("Failed to send submission receipt:", error);
    }
};
