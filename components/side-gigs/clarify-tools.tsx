import Image from "next/image"
import MainCTA from "../main-cta"
import { TechStackList } from "../tech-stack-list"

export default function ClarifyTools() {
  const technologies = ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form", "Chart.js"]

  return (
    <section id="side-gig-4">
      <div className="liquid-glass-card p-6 md:p-10 mb-10">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/clarify-logo-white.svg"
              alt="Clarify Logo - White"
              width={124}
              height={121}
              className="h-10 w-10"
              unoptimized={true}
            />
            <div className="h-10 w-auto text-[24px] font-medium flex items-center">Clarify CRM</div>
          </div>
          <span className="text-[20px] text-main-text/80">2025</span>
        </div>

        <h3 className="text-[20px] md:text-5xl font-medium mb-10 leading-[1.3] font-aeonik-extended">
          Engineering-as-marketing: showcasing the benefits of an AI-powered CRM that saves time in building relationships
        </h3>


        <div className="flex justify-center mt-10">
          <MainCTA href="https://v0-ai-chat-28-april.vercel.app/">View the calculator</MainCTA>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mb-28 text-main-text/90">
        <div className="md:col-span-2">
          <div className="project-label-heading">Summary:</div>
          <p className="text-base font-aeonik-regular">
            Developed an interactive marketing tool for Clarify, a next-generation AI-first CRM platform. The
            centerpiece includes a time-savings calculator and a visualization tool that demonstrate the stark contrast
            between traditional manual CRM workflows and Clarify's AI-native approach.
          </p>
          <p className="text-base mt-4">
            The tool serves as an asset in Clarify's Go-To-Market strategy, allowing potential customers to input their
            current sales data and instantly see how Clarify's AI capabilities could transform their workflow. The
            side-by-side comparison vividly illustrates how sales professionals can reclaim hours previously lost to
            administrative tasks and data entry, redirecting that time toward meaningful customer interactions and
            closing deals.
          </p>
        </div>
        <div>
          <div className="project-label-heading">Tech Stack:</div>
          <TechStackList technologies={technologies} />
          <div className="project-label-heading mt-6">Target Audience:</div>
          <div className="text-base font-aeonik-regular">
            <p>Sales leaders and executives</p>
            <p>Real estate professionals</p>
            <p>Sales operations managers</p>
            <p>Business development teams</p>
          </div>
        </div>
      </div>
    </section>
  )
}
