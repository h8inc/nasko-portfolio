"use client"

import Image from "next/image"
import MobileImageGallery from "../mobile-image-gallery"
import MainCTA from "../main-cta"
import AnimatedSection from "../animated-section"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/motion"

export default function TideProject() {
  const tideImages = [
    {
      src: "https://cdn.prod.website-files.com/62a720ecb0d1768ffdfcf075/67cd7360f626c3661b5b9e56_%E2%9C%85%20Admin%20-%20no%20tasks%20comeplete.png",
      alt: "Tide admin interface",
      width: 762,
      height: 1500,
    },
    {
      src: "https://cdn.prod.website-files.com/62a720ecb0d1768ffdfcf075/6751cda3ab6b8524a4125726_Task%20manager.png",
      alt: "Tide task manager",
      width: 762,
      height: 1500,
    },
    {
      src: "https://cdn.prod.website-files.com/62a720ecb0d1768ffdfcf075/6751cde675b7e91a69007167_Cashflow%20new.png",
      alt: "Tide cashflow",
      width: 762,
      height: 1500,
    },
    {
      src: "https://cdn.prod.website-files.com/62a720ecb0d1768ffdfcf075/6751c49c85e17ab23d15e4aa_Tax%20estimate.png",
      alt: "Tide tax estimate",
      width: 762,
      height: 1500,
    },
  ]

  return (
    <AnimatedSection id="tide">
      <div className="liquid-glass-card pt-6 pb-6 pl-6 pr-0 md:p-10 mb-10">
        <div className="flex justify-between items-center mb-6 pr-6 md:pr-0">
          <div>
            <Image
              src="/images/tide-logo-white.svg"
              alt="Tide logo - white"
              width={85} // Updated width
              height={35} // Updated height
              className="h-auto w-auto max-h-[22px]" // This will scale the logo down to a max height of 22px while maintaining aspect ratio
              unoptimized={true}
            />
          </div>
          <span className="text-[20px] text-main-text/80">Since 2023</span>
        </div>

        <motion.h3
          className="text-[20px] md:text-5xl font-medium text-main-text mb-10 leading-[1.3] pr-6 md:pr-0 font-aeonik-extended"
          variants={fadeIn("up", 0.2)}
        >
          Fintech product <span className="block md:inline">from 0 to 8+ million in net revenue</span>
        </motion.h3>

        <div className="md:hidden p-0 m-0">
          <MobileImageGallery images={tideImages} />
        </div>

        <motion.div
          className="hidden md:flex md:flex-wrap lg:flex-nowrap gap-6 md:gap-4 lg:gap-6"
          variants={fadeIn("up", 0.3)}
        >
          {tideImages.map((image, index) => (
            <div key={index} className="w-full md:w-[calc(50%-8px)] lg:w-1/4">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 25vw"
                className="w-full h-auto object-contain rounded-lg"
                priority={index < 2}
              />
            </div>
          ))}
        </motion.div>
        <div className="flex justify-center mt-10 pr-6 md:pr-0">
          <MainCTA href="https://app.pitch.com/app/player/bbdfda9b-8742-42ce-953e-6ff650d8bfa1/aa660b39-43fb-4b3b-bcb7-61e1d8f63829">
            View case study
          </MainCTA>
        </div>
      </div>

      <motion.div className="grid md:grid-cols-5 lg:grid-cols-6 gap-10 mb-28" variants={fadeIn("up", 0.4)}>
        <div className="md:col-span-3 lg:col-span-4">
          <div className="project-label-heading">Summary:</div>
          <p className="text-base text-main-text/90 leading-relaxed font-aeonik-regular mb-4">
            As Staff Designer, I lead the design strategy for a comprehensive subscription service that integrates
            payroll, tax, reporting, invoicing, and accounting functionalities. My focus is on creating an easy-to-use
            and secure solution for small businesses. We've successfully scaled from 0 to over 20,000 subscribers and $8
            million in net revenue.
          </p>
          <p className="text-base text-main-text/90 leading-relaxed font-aeonik-regular mb-4">
            In my day-to-day I use data-driven insights, AI and write code to prototype design artefacts, facilitating
            discussions and informing roadmaps.
          </p>
          <p className="text-base text-main-text/90 leading-relaxed font-aeonik-regular">
            I've overseen two major information architecture redesigns, improved onboarding processes, and introduced a
            freemium model that significantly boosted net revenue. Working closely with the VP, Head of Product, and
            engineering leads we ensure strategic alignment and effectively fulfilling user needs. I'm also actively
            integrating our services with Tide's broader financial tools for micro SMEs, taking a hands-on approach to
            drive project success.
          </p>
        </div>
        <div className="md:col-span-2 lg:col-span-2">
          <div className="project-label-heading">Role:</div>
          <div className="text-base text-main-text/90 font-aeonik-regular">
            <p>Fractional product manager/ staff designer</p>
            <p>Mentoring 2 designers, 2 junior PMs and a researcher</p>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}
