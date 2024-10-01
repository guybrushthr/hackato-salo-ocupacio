import mongoose, { Types } from "mongoose";

const activitySchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  descripció: {
    type: String,
    required: true,
  },
  capacitat_màxima: {
    type: Number,
    required: true,
  },
});

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
  },
  user_activity: [activitySchema],
  user_createdAt: { type: Date, immutable: true, default: () => Date.now() },
  user_updatedAt: { type: Date },
});

userSchema.pre("save", function (next) {
  this.user_updatedAt = new Date();
  next();
});

export const userModel = mongoose.model("Users", userSchema);
export const activityModel = mongoose.model("Activities", activitySchema);
