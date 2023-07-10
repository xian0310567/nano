import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NANO_PRIVATE_KEY,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "userId",
          type: "userId",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req: any) {
        console.log(credentials);
        return credentials;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
};

export default NextAuth(authOptions);
