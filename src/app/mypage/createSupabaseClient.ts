'use client'
import {createClient} from "@supabase/supabase-js"
import {useSession} from "next-auth/react";

export const useSupabaseClient = () => {
  const {data: session} = useSession();
  const supabaseAccessToken = session?.supabaseAccessToken ?? "";

  const client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
    {
      global: {
        headers: {
          Authorization: `Bearer ${supabaseAccessToken}`,
        },
      },
    }
  )

  return () => client
}
