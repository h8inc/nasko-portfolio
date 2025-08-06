"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface FloatingPathsProps {
  position: number
  isAnimated: boolean
  isMobile: boolean
}

function FloatingPaths({ position, isAnimated, isMobile }: FloatingPathsProps) {
  // Mobile-optimized settings
  const pathCount = isMobile ? 12 : 24
  const baseStrokeWidth = isMobile ? 1.5 : 0.2
  const strokeWidthIncrement = isMobile ? 0.1 : 0.03
  const baseOpacity = isMobile ? 1.0 : 1.0
  const opacityIncrement = isMobile ? 0 : 0
  
  // Mobile: Portrait-oriented viewBox (narrow width, tall height)
  const viewBoxWidth = isMobile ? 800 : 696
  const viewBoxHeight = isMobile ? 1400 : 316

  // Create paths that enter from bottom-right and exit to top-left
  const paths = Array.from({ length: pathCount }, (_, i) => ({
    id: i,
    d: isMobile 
      ? `M${800 + i * 20 * position} ${1400 + i * 20}C${
          800 + i * 20 * position
        } ${1400 + i * 20} ${600 + i * 20 * position} ${800 - i * 20} ${
          400 + i * 20 * position
        } ${600 - i * 20}C${200 + i * 20 * position} ${400 - i * 20} ${
          0 + i * 20 * position
        } ${200 - i * 20} ${0 + i * 20 * position} ${200 - i * 20}`
      : `M${696 + i * 8 * position} ${316 + i * 10}C${
          696 + i * 8 * position
        } ${316 + i * 10} ${500 + i * 8 * position} ${200 - i * 10} ${
          300 + i * 8 * position
        } ${100 - i * 10}C${100 + i * 8 * position} ${0 - i * 10} ${
          0 + i * 8 * position
        } ${-50 - i * 10} ${0 + i * 8 * position} ${-50 - i * 10}`,
    width: baseStrokeWidth + i * strokeWidthIncrement,
    baseStrokeOpacity: baseOpacity + i * opacityIncrement,
  }))

  // Animation timing
  const baseDuration = isMobile ? 15 : 20
  const delayBetweenPaths = 0.2 // 200ms delay between each path

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg 
        className="w-full h-full text-floating-paths" 
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} 
        fill="none"
        preserveAspectRatio={isMobile ? "xMidYMid slice" : "xMidYMid meet"}
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.baseStrokeOpacity}
            initial={{
              pathLength: 0,
              opacity: 0,
              pathOffset: 1, // Start from the end (hidden)
            }}
            animate={isAnimated ? {
              pathLength: 1,
              opacity: 1,
              pathOffset: [1, 0, 1], // Move from end to start to end
            } : {
              pathLength: 0,
              opacity: 0,
              pathOffset: 1,
            }}
            transition={{
              pathLength: { 
                duration: 0.5,
                ease: "easeInOut",
                delay: path.id * delayBetweenPaths
              },
              opacity: { 
                duration: 0.5,
                ease: "easeInOut",
                delay: path.id * delayBetweenPaths
              },
              pathOffset: isAnimated ? {
                duration: baseDuration + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: path.id * delayBetweenPaths
              } : {
                duration: 0.3,
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </svg>
    </div>
  )
}

interface FloatingPathsBackgroundProps {
  isAnimated: boolean
}

export default function FloatingPathsBackground({ isAnimated }: FloatingPathsBackgroundProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Start animation when hero typewriter exits the viewport (bottom reaches top of screen)
      const heroSection = document.querySelector('[data-hero-typewriter]')
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        // Start animation when hero section's bottom reaches the top of the screen
        const shouldStartAnimating = rect.bottom <= 0
        setShouldAnimate(prev => prev !== shouldStartAnimating ? shouldStartAnimating : prev)
      }
    }

    // Check initial position
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 w-full h-full">
        {/* Floating paths for both mobile and desktop */}
        <>
          <FloatingPaths position={1} isAnimated={isAnimated && shouldAnimate} isMobile={isMobile} />
          <FloatingPaths position={-1} isAnimated={isAnimated && shouldAnimate} isMobile={isMobile} />
        </>
      </div>
    </div>
  )
}