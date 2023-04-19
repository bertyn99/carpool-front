import { ITokens, IUser } from "@/types/types";
import { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
type JSONResponse = {
  data?: ITokens;
  errors?: Array<{ message: string }>;
};

async function refreshAccessToken(token: ITokens) {
  console.log("UPDATE");
  const refresh = await fetch(process.env.BACKEND_URL + "/auth/token/refresh", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token.refreshToken,
    },
  });

  const res: JSONResponse = await refresh.json();

  if (res.data) {
    return {
      accessToken: res.data.accessToken,
      refreshToken: res.data.refreshToken,
      expireAt: Date.now() + 10 * 1000,
    };
  }
  return {
    ...token,
    error: "RefreshAccessTokenError",
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials, req) => {
        const response = await fetch(process.env.BACKEND_URL + "/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });

        if (!response.ok) throw new Error("failed login user");
        const user = await response.json();

        return user.data;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        const {
          tokens: { accessToken, refreshToken },
          ...rest
        } = user;
        return {
          // works normally
          user: rest,
          accessToken: user.tokens?.accessToken,
          refreshToken: user.tokens?.refreshToken,
          expiresAt: Date.now() + 10 * 1000,
        };
      }

      if (Date.now() < token.expiresAt) {
        return token;
      }

      // token is obtaining in refreshAccessToken but not saved...
      // next request refreshAccessToken will be called again...
      const newTok = await refreshAccessToken(token);
      return { ...newTok };
    },
    session: async (session, token) => {
      console.log("token", token);
      console.log("session 1", session);
      const { accessToken, refreshToken, ...u } = token;
      session.token = accessToken;
      session.user = u;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
