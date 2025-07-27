"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import FloatingPathsBackground from "@/components/floating-paths-background"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Always animate floating paths for static export */}
      <FloatingPathsBackground isAnimated={true} />

      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <main className="relative z-10">{children}</main>
      </ThemeProvider>

      {/* Vercel Web Analytics */}
      <Script id="vercel-analytics">
        {`
          window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
          window.va('init', { 
            domain: 'www.naskoterziev.com'
          });
          window.va('event', { name: 'pageview' });
        `}
      </Script>
      <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
    </>
  )
}
