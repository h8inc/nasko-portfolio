import Image from "next/image"
import MainCTA from "../main-cta"
import { TechStackList } from "../tech-stack-list"

export default function InnerGlow() {
  const technologies = ["Next.js", "TypeScript", "Tailwind CSS", "Blockchain Integration", "Serverless Functions"]

  return (
    <section id="side-gig-1">
      <div className="liquid-glass-card p-6 md:p-10 mb-10">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/opaa-logo-white.svg"
              alt="Opaa Logo - White"
              width={120}
              height={40}
              className="h-10 w-auto"
              unoptimized={true}
            />
            <div className="h-10 w-auto text-[24px] font-medium flex items-center">Opaa</div>
          </div>
          <span className="text-[20px] text-main-text/80">Since 2025</span>
        </div>

        <h3 className="text-[20px] md:text-5xl font-normal mb-10 leading-tight">
          Restaurant ordering with QR codes and digital payments in SE
        </h3>

        <div className="flex justify-center mb-6">
          <MainCTA href="https://opaa-website.vercel.app/">View Project</MainCTA>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mb-28 text-main-text/90">
        <div className="md:col-span-2">
          <div className="project-label-heading">Summary:</div>
          <p className="text-base">
            Opaa is a point-of-sale system designed specifically for restaurants and cafes in Eastern Europe. The
            platform enables customers to scan QR codes at their tables to browse menus, place orders, and pay
            digitally—all without waiting for service staff. This approach caters to the digital-first preferences of
            younger generations who value convenience, speed, and contactless interactions.
          </p>
          <p className="text-base mt-4">
            What sets Opaa apart is its comprehensive support for various payment methods including cryptocurrency
            options like Bitcoin and Stablecoins. This flexibility addresses the growing demand for alternative payment
            solutions in Eastern European markets, where digital adoption is rapidly accelerating but international
            payment systems often have limitations.
          </p>
        </div>
        <div>
          <div className="project-label-heading">Tech Stack:</div>
          <TechStackList technologies={technologies} />
          <div className="project-label-heading mt-6">Role:</div>
          <div className="text-base">
            <p>Co-Founder</p>
            <p>Product design</p>
            <p>Front-end</p>
            <p>Blockchain Integrations</p>
          </div>
        </div>
      </div>
    </section>
  )
}
