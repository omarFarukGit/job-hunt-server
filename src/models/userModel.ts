import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({}, {
  strict: false,
  collection: "user",
});

export const UserModel = mongoose.model("user", UserSchema);