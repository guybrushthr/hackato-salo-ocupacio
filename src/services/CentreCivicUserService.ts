import { CentreCivicUserServiceInterface } from "./CentreCivicUserServiceInterface.js";
import { CentreCivicUserInterface } from "./CentreCivicUserInterface.js";
import { userModel } from "../database/user_schema.js";

export const CentreCivicUserService: CentreCivicUserServiceInterface = {
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
  async updateUser(
    userEmail,
    updates
  ): Promise<CentreCivicUserInterface | null> {
    try {
      const user = await userModel
        .findOneAndUpdate(
          { user_email: userEmail },
          { $set: updates },
          { new: true, runValidators: true }
        )
        .exec();
      if (!user) {
        throw new Error("User not found");
      }
      return user.toObject({ getters: true }) as CentreCivicUserInterface;
    } catch (error) {
      console.error("Error updating user: ", error);
      throw new Error("Error updating user");
    }
  },
  async deleteUser(
    userEmail: string | undefined
  ): Promise<CentreCivicUserInterface> {
    try {
      const user = await userModel
        .findOneAndDelete({ user_email: userEmail })
        .exec();
      if (!user) {
        throw new Error("User not found");
      }
      return user.toObject({ getters: true }) as CentreCivicUserInterface;
    } catch (error) {
      console.error("Error deleting user: ", error);
      throw new Error("Error deleting user");
    }
  },
  //   async signUpToActivity(userEmail: string | undefined, activityName: string | undefined): Promise<CentreCivicUserInterface> {
  //     try {
  //       const user = await userModel.findOne( { user_email: userEmail }).exec();
  //       const activity = await activityModel.findOne( { activity: activityName})
  //       if (!user && activity) {
  //         throw new Error("User not found");
  //       }
  //     }
  //   }
};
