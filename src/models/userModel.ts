import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    image: {
      type: String,
    },

    role: {
      type: String,
      enum: ["seeker", "admin"],
      default: "seeker",
    },

    plan: {
      type: String,
      enum: ["seeker_free", "seeker_premium"],
      default: "seeker_free",
    },

    emailVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("User", userSchema);