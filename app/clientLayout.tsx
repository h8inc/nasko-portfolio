"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import FloatingPathsBackground from "@/components/floating-paths-background"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [animatePaths, setAnimatePaths] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.25 // Start at 25% of viewport height
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }

      if (window.scrollY > threshold) {
        // Start animation immediately when scrolling down
        setAnimatePaths(true)
      } else {
        // Add a small delay when scrolling back up to prevent flickering
        timeoutRef.current = setTimeout(() => {
          setAnimatePaths(false)
        }, 300) // Reduced delay from 1000ms to 300ms
      }
    }

    // Add throttling to improve performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
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
