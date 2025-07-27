"use client"

import { useEffect, useState } from "react"

interface FloatingPathsProps {
  position: number
  isAnimated: boolean
  isMobile: boolean
}

function FloatingPaths({ position, isAnimated, isMobile }: FloatingPathsProps) {
  // Mobile-optimized settings
  const pathCount = isMobile ? 12 : 36
  const baseStrokeWidth = isMobile ? 1.5 : 0.5
  const strokeWidthIncrement = isMobile ? 0.1 : 0.03
  const baseOpacity = isMobile ? 0.08 : 0.03
  const opacityIncrement = isMobile ? 0.008 : 0.002
  
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
      : `M-${380 - i * 5 * position} -${189 + i * 6}C-${
          380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
          152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
          684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: baseStrokeWidth + i * strokeWidthIncrement,
    baseStrokeOpacity: baseOpacity + i * opacityIncrement,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg 
        className="w-full h-full text-accent-lime" 
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} 
        fill="none"
        preserveAspectRatio={isMobile ? "xMidYMid slice" : "xMidYMid meet"}
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.baseStrokeOpacity}
            className={`floating-path ${isAnimated ? 'animate-float' : ''}`}
            style={{
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${isMobile ? 15 + Math.random() * 8 : 20 + Math.random() * 10}s`
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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 w-full h-full">
        <FloatingPaths position={1} isAnimated={isAnimated} isMobile={isMobile} />
        <FloatingPaths position={-1} isAnimated={isAnimated} isMobile={isMobile} />
      </div>
    </div>
  )
}
