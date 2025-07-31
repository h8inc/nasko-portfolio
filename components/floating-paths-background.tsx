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

  const paths = Array.from({ length: pathCount }, (_, i) => ({
    id: i,
    d: isMobile 
      ? `M-${400 - i * 20 * position} -${600 + i * 20}C-${
          400 - i * 20 * position
        } -${600 + i * 20} -${300 - i * 20 * position} ${200 - i * 20} ${
          200 - i * 20 * position
        } ${800 - i * 20}C${600 - i * 20 * position} ${1000 - i * 20} ${
          700 - i * 20 * position
        } ${1200 - i * 20} ${700 - i * 20 * position} ${1200 - i * 20}`
      : `M-${380 - i * 8 * position} -${189 + i * 10}C-${
          380 - i * 8 * position
        } -${189 + i * 10} -${312 - i * 8 * position} ${216 - i * 10} ${
          152 - i * 8 * position
        } ${343 - i * 10}C${616 - i * 8 * position} ${470 - i * 10} ${
          684 - i * 8 * position
        } ${875 - i * 10} ${684 - i * 8 * position} ${875 - i * 10}`,
    width: baseStrokeWidth + i * strokeWidthIncrement,
    baseStrokeOpacity: baseOpacity + i * opacityIncrement,
  }))

  // Use consistent opacity values for smooth transitions
  const staticOpacityValue = 1.0
  const animatedOpacityValue = 1.0

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
            variants={{
              static: {
                pathLength: 1,
                opacity: staticOpacityValue / path.baseStrokeOpacity,
                pathOffset: 0,
              },
              animated: {
                pathLength: 1,
                opacity: animatedOpacityValue / path.baseStrokeOpacity,
                pathOffset: [0, 1, 0],
              },
            }}
            initial="static"
            animate={isAnimated ? "animated" : "static"}
            transition={{
              opacity: { 
                duration: 0.3,
                ease: "easeInOut" 
              },
              pathOffset: isAnimated ? {
                duration: isMobile ? 15 + Math.random() * 8 : 20 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear"
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
      // Start animation when "help-section-wrapper" reaches the top of viewport
      const helpSection = document.getElementById('help-section-wrapper')
      if (helpSection) {
        const rect = helpSection.getBoundingClientRect()
        // Start animation when help section is at or above the top of the screen
        const shouldStartAnimating = rect.top <= 0
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
        <FloatingPaths position={1} isAnimated={isAnimated && shouldAnimate} isMobile={isMobile} />
        <FloatingPaths position={-1} isAnimated={isAnimated && shouldAnimate} isMobile={isMobile} />
      </div>
    </div>
  )
}