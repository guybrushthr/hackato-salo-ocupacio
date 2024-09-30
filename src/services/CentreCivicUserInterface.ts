export interface UserInterface {
  user_firstname: string;
  user_lastname: string;
  user_nickname: string;
  user_age: number;
  user_email: string;
  user_createdAt: Date;
  user_updatedAt: Date;
}

export type PartialUserInterface = Partial<UserInterface>;
