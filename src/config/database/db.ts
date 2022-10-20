import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || "");

    console.log(`MongoDB Connected...  ${conn.connection.host}  `);
  } catch (err: any) {
    console.error(`Error: ${err.message}`);
    process.exit(); // process.exit() is used to terminate the process
  }
};
