import mongoose, { Types } from "mongoose";
import { activitySchema } from "./activity_schema.js";

const userSchema = new mongoose.Schema({
  _id: {
    type: Types.ObjectId,
    auto: true,
  },
  user_firstname: {
    type: String,
    required: true,
  },
  user_lastname: {
    type: String,
    required: true,
  },
  user_nickname: {
    type: String,
    required: true,
  },
  user_age: {
    type: Number,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
    unique: true,
    immutable: true,
  },
  user_activity: [activitySchema],
  user_createdAt: { type: Date, immutable: true, default: () => Date.now() },
  user_updatedAt: { type: Date, required: false },
});

userSchema.pre("save", function (next) {
  this.user_updatedAt = new Date();
  next();
});

export const userModel = mongoose.model("Users", userSchema);
