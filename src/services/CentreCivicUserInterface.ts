import { ActivitiesInterface } from "./CentreCivicActivityInterface.js";
import { Types } from "mongoose";

export interface CentreCivicUserInterface {
  _id?: Types.ObjectId
  user_firstname: string;
  user_lastname: string;
  user_nickname: string;
  user_age: number;
  user_email: string;
  user_activity: ActivitiesInterface;
  user_createdAt: Date;
  user_updatedAt: Date;
}

export type PartialCentreCivicUserInterface = Partial<CentreCivicUserInterface>;
