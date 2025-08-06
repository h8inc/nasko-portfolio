import HeroSection from "@/components/hero-section"
import HelpSection from "@/components/help-section"
import SelectedProjects from "@/components/selected-projects"
import SkillsSection from "@/components/skills-section"
import Testimonials from "@/components/testimonials"
import SideGigs from "@/components/side-gigs"
import AnimatedSection from "@/components/animated-section"

export default function HomePage() {
  return (
    <div className="max-w-[1280px] mx-auto px-2 sm:px-4 md:px-0">
      <HeroSection />

      <AnimatedSection id="help-section-wrapper" className="my-12 md:my-14 scroll-mt-20" delay={0.2}>
        <HelpSection />
      </AnimatedSection>

      <AnimatedSection id="skills-section-wrapper" className="my-16 md:my-32 scroll-mt-20" delay={0.3}>
        <SkillsSection />
      </AnimatedSection>

      <AnimatedSection id="selected-projects-wrapper" className="my-16 md:my-32 scroll-mt-20" delay={0.4}>
        <h2 className="text-[20px] font-normal text-muted-text mb-8 font-aeonik-regular">Some of my work</h2>
        <SelectedProjects />
      </AnimatedSection>

      <AnimatedSection id="testimonials-wrapper" className="my-16 md:my-32 scroll-mt-20" delay={0.45}>
        <Testimonials />
      </AnimatedSection>

      <AnimatedSection id="side-gigs-wrapper" className="my-16 md:my-32 scroll-mt-20" delay={0.5}>
        <h2 className="text-[20px] font-normal text-muted-text mb-8 font-aeonik-regular">Side Gigs & Experiments</h2>
        <SideGigs />
      </AnimatedSection>

      <footer className="text-center py-10 text-muted-text">
        <p>&copy; {new Date().getFullYear()} Nasko Terziev. All rights reserved.</p>
      </footer>
    </div>
  )
}
