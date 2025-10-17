import { z } from "zod";

export const signupSchema = z.object({
  userName: z.string().min(3, "Username must be at least 3 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must include an uppercase letter")
    .regex(/[a-z]/, "Must include a lowercase letter")
    .regex(/[0-9]/, "Must include a number")
    .regex(/[@$!%*?&]/, "Must include a special character (@$!%*?&)"),
});
