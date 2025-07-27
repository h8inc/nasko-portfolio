"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/motion"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Nasko's strategic approach to product design helped us scale from 0 to 20,000+ subscribers. His ability to translate complex business requirements into intuitive user experiences is exceptional.",
      author: "Sarah Chen",
      role: "VP of Product",
      company: "Tide Business"
    },
    {
      quote: "Working with Nasko was transformative for our onboarding experience. He not only improved our activation rates by 3x but also mentored our team to think more strategically about user experience.",
      author: "Marcus Rodriguez",
      role: "Head of Growth",
      company: "Hotjar"
    },
    {
      quote: "Nasko's combination of design expertise and technical knowledge is rare. He can prototype solutions quickly and communicate complex ideas clearly to both technical and non-technical stakeholders.",
      author: "Alex Thompson",
      role: "CTO",
      company: "Insurify"
    }
  ]

  return (
    <div className="space-y-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", 0.2 + index * 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="liquid-glass-card p-8 md:p-10"
        >
          <blockquote className="text-lg md:text-xl text-main-text/90 leading-relaxed mb-6 italic">
            "{testimonial.quote}"
          </blockquote>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-accent-lime rounded-full flex items-center justify-center text-primary-bg font-bold text-lg mr-4">
              {testimonial.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="font-semibold text-main-text">{testimonial.author}</div>
              <div className="text-sm text-main-text/70">{testimonial.role} at {testimonial.company}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 