import { UserDetailsType } from "./UserDetails";

export type AuthStateType = {
  userId: string | null;
  firstname: string | null;
  user: string | null;
  token: string | null;
  roles: string[] | null;
  userDetails: UserDetailsType | null
};

