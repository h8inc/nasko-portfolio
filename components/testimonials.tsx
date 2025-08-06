"use client"

import { motion, useMotionValue, useAnimationFrame } from "framer-motion"
import { cn } from "@/lib/utils"
import { useRef, useState } from "react"

interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  company: string
}

// You can easily edit the content of the testimonials here
const testimonials: Testimonial[] = [
  {
    id: 5,
    quote:
      "Nasko has a real drive and curiosity to understand the problems to solve. He uses his experience in design thinking and is skilled in bringing relevant stakeholders together in alignment.",
    author: "Andrew Denholm",
    role: "Head of Design",
    company: "Chip | previously, Tide",
  },
  {
    id: 2,
    quote:
      "At Calliper Nasko made impact in a very short time - organised a design system to designing several core product features. All the product discussions with Nasko are a delight.",
    author: "Tony Popov",
    role: "CTO",
    company: "Calliper",
  },
  {
    id: 3,
    quote:
      "Nasko is a fantastic designer, incredibly data-driven and user-focused. He skillfully combines this with a deep understanding of product requirements.",
    author: "Owen Bennett",
    role: "VP of Product Design",
    company: "JP Morgan Chase | previously, Tide",
  },
  {
    id: 4,
    quote:
      "In a product manager-designer relationship, transparency in feedback is essential. During our collaboration, this was evident as we aligned business requirements with design specifications.",
    author: "Tony Leung",
    role: "Director of Product Management",
    company: "iFLY Indoor Skydiving | previously, Insurify",
  },
  {
    id: 1,
    quote:
      "He demonstrates a strong grasp of product priorities, and ability to ship, particularly in ambiguous situations.",
    author: "Justin Drees",
    role: "VP of Admin Services",
    company: "Tide | previously, Klarna",
  },
  {
    id: 6,
    quote:
      "Nasko was always coming up with well-thought-out solutions. In addition, he established a set of processes to improve how the product and design team worked together.",
    author: "Kellen Urbon",
    role: "Senior Product manager",
    company: "Insurify",
  },
]

// Card styles for rotation and vertical positioning
const cardLayoutStyles = [
  { rotate: "rotate-[-2deg]", translateY: "translate-y-0" },
  { rotate: "rotate-[1.5deg]", translateY: "translate-y-[-20px]" },
  { rotate: "rotate-[-1deg]", translateY: "translate-y-[10px]" },
  { rotate: "rotate-[2.5deg]", translateY: "translate-y-[-5px]" },
  { rotate: "rotate-[-0.5deg]", translateY: "translate-y-[15px]" },
  { rotate: "rotate-[1deg]", translateY: "translate-y-[-10px]" },
]

const TestimonialCard = ({
  testimonial,
  layoutStyle,
}: {
  testimonial: Testimonial
  layoutStyle: (typeof cardLayoutStyles)[0]
}) => (
  <motion.div
    className={cn(
      "liquid-glass-card w-[320px] h-[280px] p-6 flex flex-col justify-between shrink-0",
      "transform transition-transform duration-300 hover:scale-105 hover:!rotate-0",
      layoutStyle.rotate,
      layoutStyle.translateY,
    )}
    whileHover={{ zIndex: 10 }}
  >
    <blockquote className="text-base text-main-text/90 leading-relaxed font-aeonik-regular">"{testimonial.quote}"</blockquote>
    <div className="mt-4 text-right">
      <p className="font-semibold text-main-text">{testimonial.author}</p>
      <p className="text-sm text-muted-text font-aeonik-regular">
        {testimonial.role}, {testimonial.company}
      </p>
    </div>
  </motion.div>
)

export default function TestimonialsSection() {
  const duplicatedTestimonials = [...testimonials, ...testimonials]
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const x = useMotionValue(0)

  useAnimationFrame((time, delta) => {
    if (isDragging || !trackRef.current) return

    const speed = -30 // pixels per second
    const moveBy = speed * (delta / 1000)
    const newX = x.get() + moveBy

    // The total width of one set of testimonials
    const trackWidth = trackRef.current.scrollWidth / 2

    // Reset position for seamless loop
    if (newX < -trackWidth) {
      x.set(newX + trackWidth)
    } else {
      x.set(newX)
    }
  })

  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-2 sm:px-4 md:px-0">
        <h2 className="text-[20px] font-normal text-muted-text mb-8 font-aeonik-regular">What people are saying</h2>
      </div>
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden">
        <motion.div
          className="py-12 flex gap-8 cursor-grab"
          style={{ x }}
          ref={trackRef}
          drag="x"
          dragConstraints={{
            left: -(trackRef.current?.scrollWidth ?? 0) / 2,
            right: 0,
          }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          whileTap={{ cursor: "grabbing" }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              layoutStyle={cardLayoutStyles[index % cardLayoutStyles.length]}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
} 