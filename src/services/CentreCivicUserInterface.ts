import { CentreCivicActivitiesInterface } from "./CentreCivicActivityInterface.js";
import { Types } from "mongoose";

export interface CentreCivicUserInterface {
  _id?: Types.ObjectId;
  user_firstname: string;
  user_lastname: string;
  user_nickname: string;
  user_age: number;
  user_email: string;
  user_activity: Types.DocumentArray<CentreCivicActivitiesInterface>;
  user_createdAt: Date;
  user_updatedAt?: Date;
}
