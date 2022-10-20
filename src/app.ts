import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.route";
import { connectDB } from "./config/database/db";
dotenv.config();
const app = express();

app.use(express.json());

app.use("/users", userRouter);

const port = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(port, (): void => {
    // void use for if function not returning
    console.log(`Server listening on the port ${port}`);
  });
});
