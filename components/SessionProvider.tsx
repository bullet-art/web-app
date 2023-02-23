"use client"

import { ReactNode } from "react";
import { SessionProvider as NextSessionProvider } from "next-auth/react"

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  return <NextSessionProvider>{children}</NextSessionProvider>
}
