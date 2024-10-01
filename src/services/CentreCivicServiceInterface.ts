import {
  CentreCivicUserInterface,
  PartialCentreCivicUserInterface,
} from "./CentreCivicUserInterface.js";

export interface CentreCivicServiceInterface {
  createUser(user: CentreCivicUserInterface): Promise<CentreCivicUserInterface>;
  updateUser(
    userEmail: string,
    updates: PartialCentreCivicUserInterface
  ): Promise<CentreCivicUserInterface | null>;
  getUser(userEmail: string | undefined): Promise<CentreCivicUserInterface>;
  deleteUser(userEmail: string | undefined): Promise<CentreCivicUserInterface>;
}
