import * as z from "zod"

export const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

export const signupSchema = z.object({
    fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    role: z.enum(['presenter', 'attendee'], { message: "Please select a role" }),
})

export const registrationSchema = z.object({
    fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
    affiliation: z.string().min(2, { message: "Affiliation is required" }),
    category: z.enum(['Postgraduate Student', 'Research Scholar', 'Academician', 'Industry Professional', 'Foreign Delegate']),
    paymentProofUrl: z.string().url({ message: "Please enter a valid Google Drive URL for payment proof" }),
})

export const paperSubmissionSchema = z.object({
    title: z.string().min(5, { message: "Title must be at least 5 characters" }),
    abstract: z.string().min(20, { message: "Abstract must be at least 20 characters" }).max(5000),
    track: z.enum(['AI & Machine Learning', 'Data Science & Big Data', 'Cybersecurity', 'IoT & Cloud Computing', 'Software Engineering']),
    paperUrl: z.string().url({ message: "Please enter a valid Google Drive or Cloud Storage URL for the paper" }),
})
