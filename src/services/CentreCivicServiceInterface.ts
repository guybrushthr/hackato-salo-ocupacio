import {
  CentreCivicUserInterface,
  PartialUserInterface,
} from "./CentreCivicUserInterface.js";

export interface CentreCivicServiceInterface {
  createUser(): Promise<CentreCivicUserInterface>;
  updateUser(): Promise<PartialUserInterface>;
  getUser(): Promise<CentreCivicUserInterface>;
  deleteUser(): Promise<PartialUserInterface>;
}
