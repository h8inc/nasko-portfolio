"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/motion"

interface AnimatedSectionProps {
  children: ReactNode
  id?: string
  className?: string
  delay?: number
}

export default function AnimatedSection({ children, id, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={fadeIn("up", delay)}
      initial="hidden"
      // Temporarily changed from whileInView="show" to animate="show"
      // and removed viewport prop for this test.
      animate="show"
      // viewport={{ once: true, amount: 0.25 }} // Temporarily commented out
    >
      {children}
    </motion.section>
  )
}
