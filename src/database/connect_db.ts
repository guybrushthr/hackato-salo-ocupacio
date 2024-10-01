import mongoose from "mongoose";

const mongoURI = "mongodb://root:example@localhost:27017/centre_civic_database";

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(mongoURI, { authSource: "admin" });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
    throw error;
  }
};
