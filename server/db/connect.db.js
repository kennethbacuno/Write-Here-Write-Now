import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    console.log("Connecting to MongoDB");
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB connected successfully. Connection Host: ${conn.connection.host}`
    );
  } catch (error) {
    console.error(`Error in connecting MongoDB: ${error}`);
    process.exit(1);
  }
};
