import { CentreCivicServiceInterface } from "./CentreCivicServiceInterface.js";
import {
  CentreCivicUserInterface,
  PartialCentreCivicUserInterface,
} from "./CentreCivicUserInterface.js";

import { userModel, activityModel } from "../database/schema.js";

export const CentreCivicService: CentreCivicServiceInterface = {
  async createUser(
    user: Omit<
      CentreCivicUserInterface,
      "_id" | "user_createdAt" | "user_updatedAt"
    >
  ): Promise<CentreCivicUserInterface> {
    const newUser = new userModel(user);
    const createdUser = await newUser.save();
    return createdUser.toObject({ getters: true }) as CentreCivicUserInterface;
  },
  async getUser(userEmail: string): Promise<CentreCivicUserInterface> {
    try {
      const user = await userModel.findOne({ user_email: userEmail }).exec();
      if (user) {
        return user.toObject({ getters: true }) as CentreCivicUserInterface;
      }
    } catch (error) {
      console.error("User could not be found in DB", error);
      throw new Error("Error fetching user");
    }
  },
  //   async updateUser(
  //     userName: string,
  //     updates: PartialCentreCivicUserInterface
  //   ): Promise<PartialCentreCivicUserInterface> {},
};
