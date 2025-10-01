"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/motion"
import TertiaryCTA from "./tertiary-cta" // Import the new component
import { Github, Linkedin, Instagram } from "lucide-react"

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

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/h8inc",
      delay: 0.5,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "hhttps://www.linkedin.com/in/atanas-terziev-jr/",
      delay: 0.6,
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/atanastrziev/",
      delay: 0.7,
    },
  ]

  return (
    <div id="help-section" className="mb-64">
      <motion.h2 className="text-[20px] font-normal text-muted-text mb-8 font-aeonik-regular" variants={fadeIn("up", 0.1)}>
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

      {/* Social Media Section */}
      <motion.div 
        className="mt-16 flex flex-col items-center"
        variants={fadeIn("up", 0.5)}
      >
        <h3 className="text-[20px] font-normal text-muted-text mb-6 font-aeonik-regular">
          Connect with me
        </h3>
        <div className="flex gap-4 md:gap-6">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full liquid-glass-card transition-all hover:scale-110 hover:border-primary/30"
              variants={fadeIn("up", social.delay)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.name}
            >
              <social.icon className="w-6 h-6 md:w-7 md:h-7 text-main-text group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
