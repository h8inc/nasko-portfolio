import Image from "next/image"
import MainCTA from "../main-cta"
import { TechStackList } from "../tech-stack-list"

export default function TideAi() {
  const technologies = ["Next.js", "TypeScript", "OpenAI API", "Vector Database", "Tailwind CSS"]

  return (
    <section id="side-gig-2">
      <div className="liquid-glass-card p-6 md:p-10 mb-10">
        <div className="flex flex-row justify-between items-center mb-6 w-full">
          <div className="flex items-center gap-2">
            <Image
              src="/images/tide-logo-white.svg"
              alt="Tide"
              width={85}
              height={35}
              className="h-auto w-auto max-h-[22px]"
              unoptimized={true}
            />
            <span className="text-[24px] font-medium">AI</span>
          </div>
          <span className="text-[20px] text-main-text/80">2025</span>
        </div>

        <h3 className="text-[20px] md:text-5xl font-medium mb-10 leading-[1.3] font-aeonik-extended">AI-assistant for 3000+ employees</h3>

        <div className="flex justify-center mb-6">
          <MainCTA href="https://tide-ai-mock.vercel.app/">Sandbox</MainCTA>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mb-28 text-main-text/90">
        <div className="md:col-span-2">
          <div className="project-label-heading">Summary:</div>
          <p className="text-base font-aeonik-regular">
          Developed an AI-assistant for Tide employees from various departments and use cases. A powerful knowledge bot that increases velocity, decreases silos, and enables cross-team collaboration.
          Impact: 3K+ users, 50K+ queries/month, 40% reduction in cross-team questions. Built with OpenAI API + RAG on 10K+ internal docs
 in confluence and now exploring adding additional sources of information.</p>
        </div>
        <div>
          <div className="project-label-heading">Tech Stack:</div>
          <TechStackList technologies={technologies} />
          <div className="project-label-heading mt-6">Team:</div>
          <div className="text-base font-aeonik-regular">
            <p>1 product AI engineer</p>
            <p>Myself</p>
          </div>
        </div>
      </div>
    </section>
  )
}
