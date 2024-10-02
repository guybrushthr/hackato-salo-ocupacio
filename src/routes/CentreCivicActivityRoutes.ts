import { Router } from "express";
import { CentreCivicActivityController } from "../controllers/CentreCivicActivityControllers.js";

export const CentreCivicActivityRouter = Router();

// Registre d'una nova activitat.
CentreCivicActivityRouter.post(
  "/activity",
  CentreCivicActivityController.createActivity
);
