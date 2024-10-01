import { Router } from "express";
import { CentreCivicController } from "../controllers/CentreCivicControllers.js";

export const CentreCivicRouter = Router();

// POST /appActivitats/user: Registre d'un nou usuari.
CentreCivicRouter.post("/appActivitats/user", CentreCivicController.createUser);
// PUT /appActivitats/users/:id: Actualització de les dades d'un usuari.
CentreCivicRouter.put(
  "/appActivitats/users/:id",
  CentreCivicController.updateUser
);
// GET /appActivitats/users/:id: Consulta de la informació d'un usuari.
CentreCivicRouter.get(
  "/appActivitats/users/:id",
  CentreCivicController.getUser
);
/*
  // PUT /appActivitats/users/:id: Actualització de les dades d'un usuari.
  CentreCivicRouter.put(
    "/appActivitats/users/:id",
    CentreCivicController.updateUser
    );
  // DELETE /appActivitats/users/:id: Eliminació d'un usuari.
CentreCivicRouter.delete(
  "/appActivitats/users/:id",
  CentreCivicController.deleteUser
);*/
