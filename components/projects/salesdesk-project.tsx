import MainCTA from "../main-cta"
import AnimatedSection from "../animated-section"
import { TechStackList } from "../tech-stack-list"

export default function SalesDeskProject() {
  const skills = [
    "User Research",
    "UX Strategy",
    "Persona Development",
    "Journey Mapping",
    "Competitive Analysis",
    "Stakeholder Workshops",
  ]

  return (
    <AnimatedSection id="salesdesk">
      <div className="liquid-glass-card pt-6 pb-6 pl-6 pr-0 md:p-10 mb-10">
        <div className="flex justify-between items-center mb-6 pr-6 md:pr-0">
          <div className="text-2xl font-bold text-main-text">SalesDesk</div>
          <span className="text-[20px] text-main-text/80">2023</span>
        </div>

        <h3 className="text-[20px] md:text-5xl font-normal mb-10 leading-tight pr-6 md:pr-0">
          Foundational research and UX strategy for AI CRM
        </h3>

        <div className="flex justify-center mt-10 pr-6 md:pr-0">
          <MainCTA href="https://docs.google.com/presentation/d/1S5Wc2WMqZubWOwHRBgogk6osc8jahhVNL2pI8SUShv4/edit?usp=sharing">
            Check out research findings
          </MainCTA>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mb-28 text-main-text/90">
        <div className="md:col-span-2">
          <div className="project-label-heading">Summary:</div>
          <p className="text-base">
            Conducted foundational user research to inform the product direction for a new AI-powered CRM. This project involved working closely with the founders, recruitment strategy and in-depth user interviews, competitive analysis, and market research to identify key pain points and opportunities. The insights were synthesized into detailed user personas and journey maps, which laid the groundwork for the core UX strategy and feature prioritization.
          </p>
        </div>
        <div>
          <div className="project-label-heading">Tech Stack:</div>
          <TechStackList technologies={skills} />
        </div>
      </div>
    </AnimatedSection>
  )
}
