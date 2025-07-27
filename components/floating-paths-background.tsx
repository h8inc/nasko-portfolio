"use client"

import { motion } from "framer-motion"

interface FloatingPathsProps {
  position: number
  isAnimated: boolean
}

function FloatingPaths({ position, isAnimated }: FloatingPathsProps) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    // color: `rgba(15,23,42,${0.1 + i * 0.03})`, // Color is set on SVG parent
    width: 0.5 + i * 0.03,
    baseStrokeOpacity: 0.03 + i * 0.002, // Adjusted for more subtle variation, max around 0.1
  }))

  const staticOpacityValue = 0.06 // Opacity for static paths
  const animatedOpacityValues = [0.05, 0.1, 0.05] // Opacity pulsation for animated paths

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-accent-lime" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.baseStrokeOpacity} // Base varied intensity
            variants={{
              static: {
                pathLength: 1,
                opacity: staticOpacityValue / path.baseStrokeOpacity, // Adjust static opacity relative to baseStrokeOpacity
                pathOffset: 0,
              },
              animated: {
                pathLength: 1,
                opacity: animatedOpacityValues.map((op) => op / path.baseStrokeOpacity), // Adjust animated opacities relative
                pathOffset: [0, 1, 0],
              },
            }}
            initial="static" // Start in static state
            animate={isAnimated ? "animated" : "static"}
            transition={
              isAnimated
                ? {
                    opacity: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    pathOffset: { duration: 20 + Math.random() * 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  }
                : {
                    duration: 0.5, // Smooth transition back to static
                    ease: "easeInOut",
                  }
            }
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
  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 w-full h-full">
        <FloatingPaths position={1} isAnimated={isAnimated} />
        <FloatingPaths position={-1} isAnimated={isAnimated} />
      </div>
    </div>
  )
}
