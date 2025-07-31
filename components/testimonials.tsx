"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Head of Product",
    company: "TechFlow",
    content:
      "Nasko's design thinking transformed our user experience. His ability to balance user needs with business goals is exceptional.",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CEO",
    company: "StartupX",
    content:
      "Working with Nasko was a game-changer. He delivered pixel-perfect designs that our users love, ahead of schedule.",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Engineering Lead",
    company: "DevCorp",
    content:
      "Nasko bridges the gap between design and development beautifully. His prototypes are always developer-friendly.",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 4,
    name: "Emma Thompson",
    role: "Product Manager",
    company: "InnovateLab",
    content:
      "His strategic approach to product design helped us increase user engagement by 40%. Highly recommend!",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 5,
    name: "David Kim",
    role: "Founder",
    company: "NextGen Solutions",
    content:
      "Nasko's attention to detail and user-centric approach made our product stand out in a crowded market.",
    avatar: "/placeholder-user.jpg",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }, [])

  const goToTestimonial = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(nextTestimonial, 5000) // Change every 5 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying, nextTestimonial])

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      prevTestimonial()
      setIsAutoPlaying(false)
    } else if (event.key === "ArrowRight") {
      nextTestimonial()
      setIsAutoPlaying(false)
    }
  }

  return (
    <section className="w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-0">
        <h2 className="text-[20px] font-normal text-muted-text mb-8">What people are saying</h2>
      </div>

      <div
        className="relative bg-card-dark rounded-2xl p-8 md:p-12 mx-4 sm:mx-8 md:mx-0 focus:outline-none"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        role="region"
        aria-label="Testimonials carousel"
      >
        <div className="relative overflow-hidden">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center"
          >
            <blockquote className="text-lg md:text-xl text-main-text mb-8 leading-relaxed max-w-4xl mx-auto">
              "{testimonials[currentIndex].content}"
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-muted-text/20 rounded-full mb-4 flex items-center justify-center">
                <span className="text-main-text font-semibold text-lg">
                  {testimonials[currentIndex].name.charAt(0)}
                </span>
              </div>
              <cite className="not-italic">
                <div className="text-main-text font-medium text-lg mb-1">{testimonials[currentIndex].name}</div>
                <div className="text-muted-text">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </div>
              </cite>
            </div>
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-accent-lime w-6" : "bg-muted-text/40 hover:bg-muted-text/60"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-text hover:text-main-text transition-colors"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-text hover:text-main-text transition-colors"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
} 