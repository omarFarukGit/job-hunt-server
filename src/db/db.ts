import mongoose from "mongoose";
import config from "../config/env.config";

export const connectDB = async () => {
  try {
    mongoose.connect(config.mongo_uri);
    console.log("db connected suceessfully");
  } catch (error) {
    console.log("db not connect");
  }
};
