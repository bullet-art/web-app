import { Inter } from "@next/font/google"
import { SessionProvider } from "@/components/SessionProvider";

const font = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={"en"} className={font.className}>
      <head/>
        <body>
          <SessionProvider>
            {children}
          </SessionProvider>
        </body>
    </html>
  )
}
