import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/auth";
import SessionProvider from "@/app/components/SessionProvider";
import TapBar from "./TapBar";
import RootLayoutByDevice from "@/app/RootLayoutByDevice";
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Veil',
  description: '철저하게, 안전하게, 연결되세요',
}

export default async function RootLayout({children,}: {
  children: React.ReactNode
}) {
  const sessionData = await getServerSession(authOptions)

  return (
    <html lang="en">
    <SessionProvider session={sessionData}>
      <body className={inter.className}>
      <RootLayoutByDevice>
        {children}
        <TapBar />
      </RootLayoutByDevice>
      </body>
    </SessionProvider>
    </html>
  )
}
