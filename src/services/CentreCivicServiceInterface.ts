import {
  CentreCivicUserInterface,
  PartialCentreCivicUserInterface,
} from "./CentreCivicUserInterface.js";

export interface CentreCivicServiceInterface {
  createUser(user: CentreCivicUserInterface): Promise<CentreCivicUserInterface>;
  updateUser(
    user: string,
    updates: PartialCentreCivicUserInterface
  ): Promise<PartialCentreCivicUserInterface>;
  getUser(userEmail: string | undefined): Promise<CentreCivicUserInterface>;
  deleteUser(): Promise<PartialCentreCivicUserInterface>;
}
