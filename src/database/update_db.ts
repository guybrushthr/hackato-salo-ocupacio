import mongoose from "mongoose";
import { userModel, activityModel } from "./database/schema.js";
import CentreCivicUserInterfac from "../src/";

mongoose.connect("mongodb://localhost:27017");

export async function newUser({});

const newUser = new userModel({
  user_firstname: "Juan",
  user_lastname: "Pérez",
  user_nickname: "Juanchi",
  user_age: 30,
  user_email: "juan.perez@example.com",
  user_activity: [
    {
      nom: "Yoga",
      descripció: "Una sesión de yoga relajante",
      capacitat_màxima: 20,
    },
    {
      nom: "Clase de Cocina",
      descripció: "Aprende a cocinar comidas deliciosas",
      capacitat_màxima: 15,
    },
  ],
});

newUser
  .save()
  .then((user) =>
    console
      .log("User saved: ", user)
      .catch((err: Error) => console.error("Error saving user:", err))
  );
