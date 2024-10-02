import { Types } from "mongoose";

interface ActivityInterface {
  _id?: Types.ObjectId;
  nom: string;
  descripció: string;
  capacitat_màxima: number;
  parcipants_comptador: number;
  participants?: string;
}

export type CentreCivicActivityInterface = ActivityInterface[];
