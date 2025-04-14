import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "600", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Valdir Junior | IT Professional",
  description: "Personal portfolio of Valdir Junior, an experienced IT Professional",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}


import './globals.css'