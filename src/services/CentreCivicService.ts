import { CentreCivicServiceInterface } from "./CentreCivicServiceInterface.js";
import { CentreCivicUserInterface } from "./CentreCivicUserInterface.js";

export const CentreCivicService: CentreCivicServiceInterface = {
  async createUser(user: CentreCivicUserInterface) {
    const createdUser: CentreCivicUserInterface = {
      user_firstname: user.user_firstname,
      user_lastname: user.user_lastname,
      user_nickname: user.user_nickname,
      user_age: user.user_age,
      user_email: user.user_email,
      user_activity: user.user_activity,
      user_createdAt: user.user_createdAt,
      user_updatedAt: user.user_updatedAt,
    };
    return createdUser;
  },
};
