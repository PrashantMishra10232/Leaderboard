import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();

dotenv.config({
  path: "./.env",
});

app.use(express.json({ limit: "16mb" }));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
console.log("Allowed CORS Origin:", process.env.CORS_ORIGIN);

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(
      `\n Mongodb connected !! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(("MongoDB connection error", error));
    process.exit(1);
  }
};

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error:", error);
      throw error;
    });
    app.listen(process.env.PORT || 10000, () => {
      console.log(`Server running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err, "MongoDB Connection is failed");
  });
