import {
  CentreCivicUserInterface,
  PartialCentreCivicUserInterface,
} from "./CentreCivicUserInterface.js";

export interface CentreCivicServiceInterface {
  createUser(user: CentreCivicUserInterface): Promise<CentreCivicUserInterface>;
  updateUser(): Promise<PartialCentreCivicUserInterface>;
  getUser(): Promise<CentreCivicUserInterface>;
  deleteUser(): Promise<PartialCentreCivicUserInterface>;
}
