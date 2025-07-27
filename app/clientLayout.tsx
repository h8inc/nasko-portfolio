"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import FloatingPathsBackground from "@/components/floating-paths-background"
// Removed: import { motion, AnimatePresence } from "framer-motion"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [animatePaths, setAnimatePaths] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight / 2 // Paths animate when scrolled past half the viewport height
      if (window.scrollY > threshold) {
        setAnimatePaths(true)
      } else {
        setAnimatePaths(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* FloatingPathsBackground is now always rendered */}
      <FloatingPathsBackground isAnimated={animatePaths} />

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
