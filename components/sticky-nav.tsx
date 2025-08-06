"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export default function StickyNav() {
  const [activeSection, setActiveSection] = useState("selected-projects")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  const [prevScrollY, setPrevScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const visibilityThreshold = 20

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(window.scrollY > 10)

      if (Math.abs(currentScrollY - prevScrollY) > visibilityThreshold) {
        setIsVisible(currentScrollY <= prevScrollY)
        setPrevScrollY(currentScrollY)
      }

      const sections = ["selected-projects", "testimonials-wrapper", "side-gigs"]
      const offset = 200
      let currentSection = ""

      for (const id of sections) {
        const sectionEl = document.getElementById(id)
        if (sectionEl && sectionEl.getBoundingClientRect().top < offset) {
          currentSection = id
        }
      }
      if (currentSection) {
        setActiveSection(currentSection)
      } else {
        // Fallback or default section if none are in view
        const projectsSection = document.getElementById("selected-projects")
        if (projectsSection && projectsSection.getBoundingClientRect().top >= offset) {
          setActiveSection("")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollY])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const handleNavClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen
    setIsMenuOpen(newMenuState)
    if (newMenuState) {
      setIsVisible(true)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 px-2 sm:px-4 md:px-0 py-4 backdrop-blur-sm bg-primary-bg/80 transition-all duration-300 ${
          isScrolled ? "shadow-[0_4px_20px_-4px_rgba(0,0,0,0.2)]" : ""
        } transform ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="https://cdn.prod.website-files.com/62a720ecb0d1768ffdfcf075/66640d623f05fc5b8390eca8_nasko-snow-round-2.png"
              alt="Nasko Terziev"
              width={48}
              height={48}
              className="rounded-full"
            />
            <span className="text-lg text-main-text font-normal font-aeonik-regular">Nasko Terziev</span>
          </div>

          {!isMobile && (
            <nav className="flex gap-6">
              <Link
                href="#selected-projects"
                className={`text-lg font-normal transition-colors font-aeonik-regular ${
                  activeSection === "selected-projects" ? "text-accent-lime" : "text-muted-text"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("selected-projects")
                }}
              >
                Projects
              </Link>
              <Link
                href="#testimonials-wrapper"
                className={`text-lg font-normal transition-colors font-aeonik-regular ${
                  activeSection === "testimonials-wrapper" ? "text-accent-lime" : "text-muted-text"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("testimonials-wrapper")
                }}
              >
                Testimonials
              </Link>
              <Link
                href="#side-gigs"
                className={`text-lg font-normal transition-colors font-aeonik-regular ${
                  activeSection === "side-gigs" ? "text-accent-lime" : "text-muted-text"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("side-gigs")
                }}
              >
                Side Gigs
              </Link>
            </nav>
          )}

          {isMobile && (
            <button
              className="relative z-50 flex items-center justify-center w-10 h-10"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="flex flex-col justify-between w-6 h-5">
                <motion.span
                  className="block w-6 h-0.5 bg-main-text origin-center"
                  animate={isMenuOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block w-6 h-0.5 bg-main-text"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block w-6 h-0.5 bg-main-text origin-center"
                  animate={isMenuOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          )}
        </div>
      </header>

      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full backdrop-blur-md bg-primary-bg/90 z-40 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.nav
              className="flex flex-col items-center gap-10"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                show: { transition: { staggerChildren: 0.1 } },
                hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
            >
              {[
                { id: "help-section", label: "About" },
                { id: "selected-projects", label: "Projects" },
                { id: "testimonials-wrapper", label: "Testimonials" },
                { id: "side-gigs", label: "Side Gigs" },
              ].map((item) => (
                <motion.div
                  key={item.id}
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  transition={{ ease: "easeInOut" }}
                >
                  <Link
                    href={`#${item.id}`}
                    className={`text-2xl font-normal transition-colors ${
                      activeSection === item.id ? "text-accent-lime" : "text-muted-text"
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.id)
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
