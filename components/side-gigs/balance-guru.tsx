import Image from "next/image"
import MainCTA from "../main-cta"
import { TechStackList } from "../tech-stack-list"
import TertiaryCTA from "../tertiary-cta"

export default function BalanceGuru() {
  const technologies = ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma ORM", "Vercel"]

  return (
    <section id="side-gig-3">
      <div className="liquid-glass-card p-6 md:p-10 mb-10">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/balance-guru-logo.svg"
              alt="Balance Guru Logo"
              width={37}
              height={37}
              className="h-10 w-10"
              unoptimized={true}
            />
            <div className="h-10 w-auto text-[24px] font-medium flex items-center">Balance Guru</div>
          </div>
          <span className="text-[20px] text-main-text/80">2023-2024</span>
        </div>

        <h3 className="text-[20px] md:text-5xl font-semibold mb-10 leading-[1.15] font-aeonik-extended">
          The power of smart software and expert accountants, all in one place.
        </h3>

        <div className="flex flex-col items-center mt-6">
          <MainCTA href="https://balanceguru.bg/" className="mb-4 w-full max-w-[336px]">
            Visit Balance Guru
          </MainCTA>
          <div className="flex flex-col sm:flex-row items-center gap-x-12 gap-y-2">
            <TertiaryCTA href="https://www.balanceguru.bg/dds-kalkulator" target="_blank" rel="noopener noreferrer">
              VAT checker
            </TertiaryCTA>
            <TertiaryCTA href="https://www.balanceguru.bg/kalkulator-zaplata" target="_blank" rel="noopener noreferrer">
              Salary calculator
            </TertiaryCTA>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mb-28 text-main-text/90">
        <div className="md:col-span-2">
          <div className="project-label-heading">Summary:</div>
          <p className="text-base font-aeonik-regular">
            BalanceGuru was an accounting automation platform designed to simplify financial management for businesses.
            Our journey began with thorough product discovery, building a list of interested customers, and launching an
            MVP that quickly gained traction. We generated traffic and onboarded two paying customers. However, after a
            year, we decided to shut down the project. Achieving product-market fit in a relatively small market proved
            challenging due to the lack of documented APIs for banks, the national tax agency, and other institutions.
            The necessary integrations required over a year of development just to establish basic connectivity, making
            automation and scalability unfeasible from a return-on-investment perspective. Given these constraints, we
            chose to explore other opportunities.
          </p>
        </div>
        <div>
          <div className="project-label-heading">Tech Stack:</div>
          <TechStackList technologies={technologies} />
          <div className="project-label-heading mt-6">Role:</div>
          <div className="text-base font-aeonik-regular">
            <p>Myself as full-stack design, development, and product strategy.</p>
            <p>Co-founder as back-end engineering, system architecture.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
