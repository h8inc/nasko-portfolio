"use client"

import type React from "react"
import { motion } from "framer-motion"

interface MainCTAProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function MainCTA({ href, children, className = "" }: MainCTAProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-block bg-accent-lime text-primary-bg font-bold py-3 px-6 rounded-lg transition-all text-sm text-center group hover:shadow-lg hover:shadow-accent-lime/20 font-aeonik-regular ${className}`}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 4px 20px rgba(204, 252, 26, 0.25)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.a>
  )
}
