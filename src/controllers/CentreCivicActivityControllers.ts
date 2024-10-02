import { Request, Response } from "express";
import { CentreCivicActivityService } from "../services/CentreCivicActivityService.js";
import { CentreCivicActivityInterface } from "../services/CentreCivicActivityInterface.js";

export const CentreCivicActivityController = {
  createActivity: async (req: Request, res: Response): Promise<void> => {
    try {
      const { nom, descripció, capacitat_màxima } = req.body;
      const newActivity: CentreCivicActivityInterface =
        CentreCivicActivityService.createActivity({
          nom,
          descripció,
          capacitat_màxima,
        });
      console.log(newActivity);
      res.status(201).json(newActivity);
      return;
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ error: error.message });
        return;
      }
      res.status(500).json({ error: "An unknown error occurred" });
    }
  },
};
