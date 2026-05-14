import * as z from "zod";

export const registerSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, "Name is required")
        .max(255, "Name must not exceed 255 characters"),
    email: z
        .string()
        .trim()
        .min(7, "Email must be at least 7 characters long")
        .max(255, "Email must not exceed 255 characters")
        .email("Invalid email address"),
    password: z
        .string()
        .trim()
        .min(6, "Password must be at least 6 characters long")
        .max(255, "Password must not exceed 255 characters")
        .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,"The password must contain at least one letter, one number, and one special character.")
})

export type RegisterSchema = z.infer<typeof registerSchema>