import type { Metadata } from "next"
import { Playfair_Display, Lato } from 'next/font/google'
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Red Thread Publishing - Premium Author Development",
  description: "Transform your expertise into award-winning books with Red Thread Publishing. Complete manuscript-to-market publishing journey for successful entrepreneurs.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-lato antialiased">
        {children}
      </body>
    </html>
  )
}
