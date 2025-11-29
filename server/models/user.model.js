import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    profile: { type: mongoose.Schema.Types.ObjectId, ref: "Attachment" },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: function () {
        return !this.googleId;
      },
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true, // Allows multiple null values, but unique if a value exists
    },
    isVerified: { type: Boolean, default: false },
    lastLogin: { type: Date, default: Date.now },
    lastPasswordChange: { type: Date, default: Date.now },
    resetPasswordToken: String,
    resetPasswordTokenExpiry: Date,
    verificationCode: String,
    verificationCodeExpiry: Date,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
