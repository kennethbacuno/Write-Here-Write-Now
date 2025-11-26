import jwt from "jsonwebtoken";

export const VerifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    console.error("No token provided");
    return res.status(401).json({ success: false, message: "Unauthorized!" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      console.error("Invalid token.");
      return res.status(401).json({ success: false, message: "Unauthorized!" });
    }
    req.userId = decoded.userId; // Attach the decoded user information to the request object
    next();
  } catch (error) {
    console.log("Error verifying token:", error);
    return res.status(401).json({ success: false, message: "Server Error!" });
  }
};
