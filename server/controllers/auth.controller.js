import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { GenerateVerificationCode } from "../utils/verificationCodeGenerator.js";
import { GenerateToken } from "../utils/tokenGenerator.js";

export const Signup = async (req, res) => {
  const { username, email, password } = req.validated.body;
  try {
    const existingUser = await User.findOne({ email }).lean();
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email is already used." });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const verificationCode = await GenerateVerificationCode();
    const verificationCodeExpiry = Date.now() + 2 * 60 * 60 * 1000;

    const user = new User({
      username,
      email,
      password: hashPassword,
      verificationCode,
      verificationCodeExpiry,
    });

    await user.save();

    GenerateToken(res, user._id);

    res.status(201).json({
      success: true,
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.error("Failed to sign up:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.validated.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      return res.status(401).json({ success: false, message: "Unauthorized." });
    }

    GenerateToken(res, user._id);
    user.lastLogin = Date.now();
    await user.save();
    res.status(200).json({
      success: true,
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.error("Failed to login:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error." });
  }
};

export const Logout = (req, res) => {
  try {
    const isProduction = process.env.NODE_ENV === "production";
    res.clearCookie("token", {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      path: "/",
    });
    res.status(200).json({ success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error." });
  }
};

export const VerifyEmail = async (req, res) => {
  const userId = req.userId;
  const { code } = req.validated.body;
  try {
    const user = await User.findOne({
      _id: userId,
      verificationCode: code,
      verificationCodeExpiry: { $gt: Date.now() },
    });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid code or expired." });
    }

    user.isVerified = true;
    user.verificationCode = undefined;
    user.verificationCodeExpiry = undefined;

    await user.save();
    return res.status(200).json({
      success: true,
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.error("Failed to verify the email:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
};
