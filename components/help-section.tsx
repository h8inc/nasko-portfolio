"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/motion"
import TertiaryCTA from "./tertiary-cta" // Import the new component

export default function HelpSection() {
  const helpItems = [
    {
      title: "0 to 1",
      description: "Figure out winning product strategies",
      href: "#tide",
      delay: 0.2,
    },
    {
      title: "1 and beyond",
      description: "Hands-on design and mentorship in hyper-growth",
      href: "#insurify",
      delay: 0.3,
    },
    {
      title: "PLG",
      description: "Drive revenue with product-led motions",
      href: "#hotjar",
      delay: 0.4,
    },
  ]

  return (
    <div id="help-section" className="mb-64">
      <motion.h2 className="text-[20px] font-normal text-muted-text mb-8" variants={fadeIn("up", 0.1)}>
        3 ways I can help
      </motion.h2>
      <div className="help-container">
        {helpItems.map((item) => (
          <motion.div className="help-child liquid-glass-card" key={item.title} variants={fadeIn("up", item.delay)}>
            <div className="text-base font-normal text-main-text mb-2 font-aeonik-mono">{item.title}</div>
            <div className="text-[28px] leading-[1.25] font-bold text-main-text mb-4 h-[108px] font-aeonik-extended">
              {item.description}
            </div>
            <div className="mt-auto">
              <TertiaryCTA href={item.href}>Learn more</TertiaryCTA>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
