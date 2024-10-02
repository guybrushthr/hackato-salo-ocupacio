import mongoose from "mongoose";

export const activitySchema = new mongoose.Schema({
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

export const activityModel = mongoose.model("Activities", activitySchema);
