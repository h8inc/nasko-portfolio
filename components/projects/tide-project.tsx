"use client"

import Image from "next/image"
import MobileImageGallery from "../mobile-image-gallery"
import MainCTA from "../main-cta"
import TertiaryCTA from "../tertiary-cta"
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
      src: "/images/Cashflow - Bar chart - Expected only.png",
      alt: "Tide cashflow",
      width: 762,
      height: 1500,
    },
    {
      src: "/images/Bookkeeping - Slice 4.png",
      alt: "Tide bookkeeping",
      width: 762,
      height: 1500,
    },
    {
      src: "/images/Registered Business - VAT registered - Connected (subscribed).png",
      alt: "Tide VAT registered business",
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
          SaaS in fintech <span className="block md:inline">from 0 to 8+ million in ARR</span>
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
        <div className="flex flex-col items-center gap-4 mt-10 pr-6 md:pr-0">
          <MainCTA href="https://www.figma.com/deck/yryrn4jmKZIQ1zRUqXQ8Wm/Tide-IA-case-study?node-id=1-42&viewport=-2768%2C-59%2C0.61&t=IzFIPtzoJScxMLwy-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">
            View case study
          </MainCTA>
          <TertiaryCTA href="https://tide-mocks.netlify.app/cash-flow" 
                       target="_blank" 
                       rel="noopener noreferrer">
            Play with interactive prototypes
          </TertiaryCTA>
        </div>
      </div>

      <motion.div className="grid md:grid-cols-5 lg:grid-cols-6 gap-10 mb-28" variants={fadeIn("up", 0.4)}>
        <div className="md:col-span-3 lg:col-span-4">
          <div className="project-label-heading">Summary:</div>
          <p className="text-base text-main-text/90 leading-relaxed font-aeonik-regular mb-4">
          Small business owners are blindsided by tax bills and can't answer "Am I profitable?" or "Can I pay my bills?" I built 0-to-1 tax management and financial analytics tools that solve these painful questions. As Staff Designer leading strategy across payroll, tax, reporting, and accounting, we scaled from 0 to 10,000+ subscribers and $8+ million ARR. Also built AI assistant used by 3K+ Tide employees for internal knowledge search.
          </p>
          <p className="text-base text-main-text/90 leading-relaxed font-aeonik-regular mb-4">
          In my day-to-day I use data-driven insights, AI and write code to prototype design artefacts, facilitating discussions and informing roadmaps. I've overseen two major IA redesigns, improved onboarding, and introduced a freemium model that boosted net revenue.
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
