import * as z from "zod"

export const loginSchema = z.object({
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
        .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).+$/,"The password must contain at least one letter, one number, and one special character.")
})

export type LoginSchema = z.infer<typeof loginSchema>