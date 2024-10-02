import { Router } from "express";
import { CentreCivicUserController } from "../controllers/CentreCivicUserControllers.js";

export const CentreCivicUserRouter = Router();

// Registre d'un nou usuari.
CentreCivicUserRouter.post("/user", CentreCivicUserController.createUser);
// Actualització de les dades d'un usuari.
CentreCivicUserRouter.put("/users/:id", CentreCivicUserController.updateUser);
// Consulta de la informació d'un usuari.
CentreCivicUserRouter.get("/users/:id", CentreCivicUserController.getUser);
// Eliminació d'un usuari.
CentreCivicUserRouter.delete(
  "/users/:id",
  CentreCivicUserController.deleteUser
);
// Apuntar usuari a una activitat.
// CentreCivicUserRouter.put("/users/:id/:activitat", CentreCivicUserController.signUpToActivity)
