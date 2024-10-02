import { CentreCivicUserInterface } from "./CentreCivicUserInterface.js";

export interface CentreCivicUserServiceInterface {
  createUser(user: CentreCivicUserInterface): Promise<CentreCivicUserInterface>;
  updateUser(
    userEmail: string,
    updates: Partial<CentreCivicUserInterface>
  ): Promise<CentreCivicUserInterface | null>;
  getUser(userEmail: string | undefined): Promise<CentreCivicUserInterface>;
  deleteUser(userEmail: string | undefined): Promise<CentreCivicUserInterface>;
}

export interface CentreCivicActivityServiceInterface {}
