import { CentreCivicActivityServiceInterface } from "./CentreCivicActivityServiceInterface.js";
import { CentreCivicActivityInterface } from "./CentreCivicActivityInterface.js";
import { activityModel } from "../database/activity_schema.js";

export const CentreCivicActivityService: CentreCivicActivityServiceInterface = {
  async createActivity(
    activity: CentreCivicActivityInterface
  ): Promise<CentreCivicActivityInterface> {
    const newActivity = new activityModel(activity);
    const createdActivity = await newActivity.save();
    console.log("CreatedActivity is: ", createdActivity);
    const createdActivityAsObject = createdActivity.toObject({
      getters: true,
    }) as CentreCivicActivityInterface;
    console.log(
      "createdActivityAsObject looks like this: ",
      createdActivityAsObject
    );
    return createdActivityAsObject;
  },
};
