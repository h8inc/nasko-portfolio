import type React from "react"
import type { Metadata } from "next" // Metadata type can still be used
import ClientLayout from "./clientLayout"
import { montserrat, manrope, aeonikExtended, aeonikRegular, aeonikMono } from "@/app/fonts"
import "@/app/globals.css"

// Metadata can still be exported from a client component in Next.js 13+ App Router
// However, for dynamic metadata based on props, you'd use the generateMetadata function.
// For static metadata like this, it's fine.
export const metadata: Metadata = {
  title: "Nasko Terziev - Designer/PM for startups and scale ups",
  description:
    "Hello, my name is Nasko. I've shipped features generating millions and worked with companies backed by Sequoia and Seedcamp.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${manrope.variable} ${montserrat.variable} ${aeonikExtended.variable} ${aeonikRegular.variable} ${aeonikMono.variable}`}>
      <head />
      <body className="relative">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
