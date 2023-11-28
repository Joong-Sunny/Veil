import {NextAuthOptions} from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import GitHubProvider from "next-auth/providers/github";
import {SupabaseAdapter} from "@auth/supabase-adapter";

export const authOptions:NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID?? "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET?? "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    })
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL?? "",
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY?? "",
  }),
  secret: process.env.SESSION_SECRET,
};