import NextAuth, { DefaultSession } from "next-auth";
import { IUser, ITokens } from "./types";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      token?: accessToken;
      avatar: string;
    } & DefaultSession["user"];
  }
  interface User extends IUser {}
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
    error?: "RefreshAccessTokenError";
  }
}
