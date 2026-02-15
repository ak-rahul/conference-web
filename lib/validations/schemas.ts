import * as z from "zod"

export const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

export const signupSchema = z.object({
    fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

export const registrationSchema = z.object({
    fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
    affiliation: z.string().min(2, { message: "Affiliation is required" }),
    category: z.enum(['Postgraduate Student', 'Research Scholar', 'Academician', 'Industry Professional', 'Foreign Delegate']),
    paymentProofUrl: z.string().url({ message: "Please enter a valid URL for the payment proof" }),
})

export const paperSubmissionSchema = z.object({
    title: z.string().min(5, { message: "Title must be at least 5 characters" }),
    abstract: z.string().min(20, { message: "Abstract must be at least 20 characters" }).max(5000), // increased max for abstract
    track: z.enum(['AI & Machine Learning', 'Data Science & Big Data', 'Cybersecurity', 'IoT & Cloud Computing', 'Software Engineering']),
    paperUrl: z.string().url({ message: "Please enter a valid URL for the paper" }),
})
