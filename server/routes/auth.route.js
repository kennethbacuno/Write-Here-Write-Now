import express from "express";
import { ValidateInput } from "../middleware/inputs.validator.js";
import { SignupInputSchema } from "../utils/inputs.schema.js";
import { Signup, Login, Logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", ValidateInput(SignupInputSchema), Signup);
router.post("/login", Login);
router.post("/logout", Logout);

export default router;
