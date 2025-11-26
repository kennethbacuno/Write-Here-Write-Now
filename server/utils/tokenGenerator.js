import jwt from "jsonwebtoken";

export const GenerateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  const isProduction = process.env.NODE_ENV === "production";
  res.cookie("token", token, {
    httpOnly: true,
    secure: isProduction, // true in production, false in development
    sameSite: isProduction ? "none" : "lax", // 'none' in production, 'lax' in development
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    path: "/",
  });
};
