import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.route";
import { connectDB } from "./config/db";
dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Server is running");
});

app.use("/users", userRouter);

const port = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Express server listening on the port ${port}`);
  });
});
