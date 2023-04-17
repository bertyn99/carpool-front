import { getServerSession } from "next-auth/next";

import { authOptions } from "../auth";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function useGetCurrentUser() {
  const session = await getSession();

  return session?.user;
}
