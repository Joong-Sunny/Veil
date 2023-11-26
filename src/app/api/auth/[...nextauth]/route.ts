import KakaoProvider from 'next-auth/providers/kakao'
import NextAuth from "next-auth";

export const authOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
