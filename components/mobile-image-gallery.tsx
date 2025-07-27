"use client"
import { useRef } from "react" // Removed useEffect, useState
import Image from "next/image"
import { motion } from "framer-motion"

interface MobileImageGalleryProps {
  images: {
    src: string
    alt: string
    width: number
    height: number
  }[]
  className?: string
}

export default function MobileImageGallery({ images, className = "" }: MobileImageGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Removed all state variables (isDragging, startX, scrollLeft, autoScrollPaused)
  // Removed all useEffect hooks for auto-scroll
  // Removed all drag event handlers (handleMouseDown, handleMouseMove, etc.)
  // Removed onScroll handler from the div

  return (
    <div className={`mobile-gallery-container ${className}`}>
      <div
        ref={scrollRef}
        className="mobile-gallery-scroll" // Removed dynamic cursor class
        // Removed all onMouseDown, onMouseMove, onMouseUp, onMouseLeave,
        // onTouchStart, onTouchMove, onTouchEnd, and onScroll props
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="mobile-gallery-item"
            initial={{ opacity: 0 }} // Keep item animation for fade-in
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="mobile-gallery-image"
              priority={index < 2}
            />
          </motion.div>
        ))}
      </div>

      {/* Scroll indicators still function by scrolling the container */}
    </div>
  )
}
