import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "Enter username",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "Enter password",
        },
      },
      async authorize(credentials) {
        console.log(credentials);
        return {
          id: "1",
          name: "sukomal",
          email: "sukomal@gmail.com",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: ({ token }) => {
      console.log(token);
      token.userId = token.sub;
      return token;
    },
    session: ({ session, token, user }) => {
      if (session && session.user) {
        session.user.id = token.userId;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
