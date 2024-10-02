import mongoose from "mongoose";

export const activitySchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    immutable: true,
  },
  descripció: {
    type: String,
    required: true,
  },
  capacitat_màxima: {
    type: Number,
    required: true,
  },
  parcipants_comptador: { type: Number, default: 0 },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

export const activityModel = mongoose.model("Activities", activitySchema);
