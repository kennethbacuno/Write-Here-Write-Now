import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { GenerateVerificationCode } from "../utils/verificationCodeGenerator.js";
import { GenerateToken } from "../utils/tokenGenerator.js";

export const Signup = async (req, res) => {
  const { username, email, password } = req.validated.body;
  try {
    const existingUser = await User.findOne({ email }).lean();
    if (existingUser) {
      console.log(`Failed to create user. User with Email: ${email} exists.`);
      return res
        .status(400)
        .json({ success: false, message: "Email is already used." });
    }

    console.log(`Creating user: ${username}, ${email}`);

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

    console.log("User created successfully!");
    res.status(201).json({
      success: true,
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.error("Error in signing up:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

export const Login = (req, res) => {
  try {
    console.log("Logging in an account...");
    console.log("Log in successful!");
    res.status(200).json({ success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error." });
  }
};

export const Logout = (req, res) => {
  try {
    console.log("Logging out an account...");
    console.log("Log out successful!");
    res.status(200).json({ success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error." });
  }
};
