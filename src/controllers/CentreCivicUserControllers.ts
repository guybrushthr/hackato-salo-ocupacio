import { Request, Response } from "express";
import { CentreCivicUserService } from "../services/CentreCivicUserService.js";
import { CentreCivicUserInterface } from "../services/CentreCivicUserInterface.js";

export const CentreCivicUserController = {
  createUser: async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        user_firstname,
        user_lastname,
        user_nickname,
        user_age,
        user_email,
        user_activity,
        user_createdAt,
        user_updatedAt,
      } = req.body;

      const newUser: CentreCivicUserInterface =
        await CentreCivicUserService.createUser({
          user_firstname,
          user_lastname,
          user_nickname,
          user_age,
          user_email,
          user_activity,
          user_createdAt,
          user_updatedAt,
        });
      console.log(newUser);
      res.status(201).json(newUser);
      return;
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ error: error.message });
        return;
      }
      res.status(500).json({ error: "An unknown error occurred" });
    }
  },
  updateUser: async (req: Request, res: Response): Promise<void> => {
    try {
      const userEmail: string | undefined = req.params.id;
      let user;
      const dataToBeUptaded: Partial<CentreCivicUserInterface> = {};
      if (req.body.user_firstname)
        dataToBeUptaded.user_firstname = req.body.user_firstname;
      if (req.body.user_lastname)
        dataToBeUptaded.user_lastname = req.body.user_lastname;
      if (req.body.user_nickname)
        dataToBeUptaded.user_nickname = req.body.user_nickname;
      if (req.body.user_age) dataToBeUptaded.user_age = req.body.user_age;
      if (req.body.user_email) dataToBeUptaded.user_email = req.body.user_email;
      if (req.body.user_activity)
        dataToBeUptaded.user_activity = req.body.user_activity;
      let updatedUser: CentreCivicUserInterface;
      if (userEmail) {
        updatedUser = await CentreCivicUserService.updateUser(
          userEmail,
          dataToBeUptaded
        );
      }
      if (updatedUser) {
        res.status(200).json(updatedUser);
        return;
      } else {
        res.status(404).send({ error: "User not found" });
        return;
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ error: error.message });
        return;
      }
      res.status(500).json({ error: "An unknown error occurred" });
      return;
    }
  },
  getUser: async (req: Request, res: Response): Promise<void> => {
    try {
      const userEmail: string | undefined = req.params.id;
      let user;
      if (userEmail) {
        user = await CentreCivicUserService.getUser(userEmail);
      } else {
        res.status(404).json({ message: "Please provide valid email" });
        return;
      }
      if (user) {
        res.status(200).json(user);
        return;
      } else {
        res.status(404).json({ message: "User not found" });
        return;
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ error: error.message });
        return;
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
        return;
      }
    }
  },
  deleteUser: async (req: Request, res: Response): Promise<void> => {
    try {
      const userEmail: string | undefined = req.params.id;
      let user;
      if (userEmail) {
        user = await CentreCivicUserService.deleteUser(userEmail);
      } else {
        res.status(404).json({ message: "Please provide valid email" });
        return;
      }
      if (user) {
        res.status(200).json({ message: "user successfully deleted", user });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ error: error.message });
        return;
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
        return;
      }
    }
  },
  //   signUpToActivity: async (req: Request, res: Response): Promise<void> => {
  //     try {
  //       const userEmail: string | undefined = req.params.id;
  //       const activityName: string | undefined = req.params.activitat;
  //       let user;
  //       if (userEmail && activityName) {
  //         user = await CentreCivicUserService.signUpToActivity(userEmail, activityName)
  //       }

  //     }
  //   }
};

export const CentreCivicActivityController = {};
