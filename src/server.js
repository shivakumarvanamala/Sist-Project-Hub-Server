import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const port = process.env.FRONTEND_PORTAL || 5000;
const mongoUrl = process.env.MONGO_PROJECT_HUB_URI;

dotenv.config();
const app = express();
app.use(express.json());

const dbConnection = () => {
  mongoose
    .connect(mongoUrl)
    .then(() => {
      console.log(
        "Database connected successfully!\n********************************\n"
      );
    })
    .catch((err) => {
      console.error(`error occurred while connecting database - ${err}`);
    });
};

app.listen(port, () => {
  dbConnection();
  console.log(
    `\n********************************\nserver running at port ${port}`
  );
});
