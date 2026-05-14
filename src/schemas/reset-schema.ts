import * as z from "zod";

export const resetSchema = z.object({
    email: z
        .string()
        .trim()
        .min(7, "Email must be at least 7 characters long")
        .max(255, "Email must not exceed 255 characters")
        .email("Invalid email address")
})

export type ResetSchema = z.infer<typeof resetSchema>