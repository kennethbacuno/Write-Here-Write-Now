import { z } from "zod";

export const UsernameSchema = z
  .string({ required_error: "Username is required." })
  .trim() // Removes whitespace from both ends
  .min(4, { message: "Username must be at least 4 characters." })
  .max(20, { message: "Username cannot exceed 20 characters." })
  .regex(/^[a-zA-Z0-9._-]+$/, {
    message:
      "Username can only contain letters, numbers, dots, dashes, and underscores.",
  });

export const EmailSchema = z
  .string({ required_error: "Email is required." })
  .trim()
  .email({ message: "Invalid email address format." });

export const PasswordSchema = z
  .string({ required_error: "Password is required." })
  .min(8, { message: "Password must be at least 8 characters." })
  .max(64, { message: "Password cannot exceed 64 characters." })
  .regex(/.*[A-Z].*/, {
    message: "Password must contain at least one uppercase letter.",
  })
  .regex(/.*[a-z].*/, {
    message: "Password must contain at least one lowercase letter.",
  })
  .regex(/.*[0-9].*/, { message: "Password must contain at least one number." })
  .regex(/.*[\W_].*/, {
    message: "Password must contain at least one special character.",
  });

export const VerificationCodeSchema = z
  .string({ required_error: "Verification code is required." })
  .regex(/^\d{6}$/, {
    message: "Verification code must be exactly six digits.",
  });

export const SignupBodySchema = z.object({
  username: UsernameSchema,
  email: EmailSchema,
  password: PasswordSchema,
});

/** 2. Schema for User Login */
export const LoginBodySchema = z.object({
  email: EmailSchema,
  password: z
    .string({ required_error: "Password is required." })
    .min(1, { message: "Password is required." }),
});

export const VerifyEmailBodySchema = z.object({
  code: VerificationCodeSchema,
});

export const ForgotPasswordBodySchema = z.object({
  email: EmailSchema,
});

export const ResetPasswordBodySchema = z.object({
  token: z.string({ required_error: "Reset token is required." }),
  newPassword: PasswordSchema,
});

export const UpdateProfileBodySchema = z
  .object({
    username: UsernameSchema.optional(), // Allows updating only a subset of fields
    email: EmailSchema.optional(),
    profile: z.string().optional().nullable().default(null), // Corresponds to the Attachment ObjectId
    // Note: Password change should usually be a separate, secured endpoint.
  })
  .refine(
    (data) =>
      data.username !== undefined ||
      data.email !== undefined ||
      data.profile !== undefined,
    {
      message:
        "At least one field (username, email, or profile) must be provided for update.",
      path: ["body"],
    }
  );
