import { CentreCivicActivityInterface } from "./CentreCivicActivityInterface.js";

export interface CentreCivicActivityServiceInterface {
  createActivity(
    activity: CentreCivicActivityInterface
  ): Promise<CentreCivicActivityInterface>;
}
