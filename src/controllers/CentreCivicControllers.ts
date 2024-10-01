import { Request, Response } from "express";
import { CentreCivicService } from "../services/CentreCivicService.js";
import { CentreCivicUserInterface } from "../services/CentreCivicUserInterface.js";

export const CentreCivicController = {
  createUser: async (req: Request, res: Response) => {
    try {
      const newUser: CentreCivicUserInterface =
        await CentreCivicService.createUser({
          user_firstname: req.body.user_firstname,
          user_lastname: req.body.user_lastname,
          user_nickname: req.body.user_nickname,
          user_age: req.body.user_age,
          user_email: req.body.user_email,
          user_activity: req.body.user_activity,
          user_createdAt: req.body.user_createdAt,
          user_updatedAt: req.body.user_updatedAt,
        });
      console.log(newUser);
      return res.status(201).json(newUser);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send({ error: error.message });
      }
    }
  },
};
