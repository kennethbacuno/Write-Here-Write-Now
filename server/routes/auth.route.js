import express from "express";
import { z } from "zod";
import { ValidateInput } from "../middleware/inputs.validator.js";
import {
  LoginBodySchema,
  SignupBodySchema,
  VerifyEmailBodySchema,
} from "../schema/user.schema.js";
import {
  Signup,
  Login,
  Logout,
  VerifyEmail,
} from "../controllers/auth.controller.js";
import { VerifyToken } from "../middleware/tokenVerifier.js";

const router = express.Router();

router.post(
  "/signup",
  ValidateInput(z.object({ body: SignupBodySchema })),
  Signup
);

router.post(
  "/login",
  ValidateInput(z.object({ body: LoginBodySchema })),
  Login
);

router.post("/logout", VerifyToken, Logout);

router.post(
  "/verify-email",
  VerifyToken,
  ValidateInput(z.object({ body: VerifyEmailBodySchema })),
  VerifyEmail
);

export default router;
