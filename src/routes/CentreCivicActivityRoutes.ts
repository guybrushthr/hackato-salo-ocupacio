import { Router } from "express";
import { CentreCivicActivityController } from "../controllers/CentreCivicActivityControllers.js";

export const CentreCivicActivityRouter = Router();

// Registre d'una nova activitat.
// CentreCivicActivityController.post(
//   "/activity",
//   CentreCivicActivityController.createActivity
// );
