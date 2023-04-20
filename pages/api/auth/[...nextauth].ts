import NextAuth, { NextAuthOptions } from "next-auth";
import { authOptions } from "@/lib/auth";
export default NextAuth(authOptions);
