import Image from "next/image"
import MainCTA from "../main-cta"
import TertiaryCTA from "../tertiary-cta"

export default function HotjarProject() {
  return (
    <section id="hotjar">
      <div className="liquid-glass-card p-10 mb-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <Image
              src="/images/hotjar-logo-white.svg"
              alt="Hotjar logo - white"
              width={98}
              height={43}
              className="h-auto w-auto max-h-[43px]"
              unoptimized={true} // Crucial for SVGs
            />
          </div>
          <span className="text-[20px] text-main-text/80">2022</span>
        </div>

        <h3 className="text-[20px] md:text-5xl font-medium mb-10 leading-[1.3] pr-6 md:pr-0 font-aeonik-extended">
          New onboarding experience for 15,000+ sign ups/mo
        </h3>

        <div className="flex items-center justify-center">
          <Image
            src="https://cdn.prod.website-files.com/62a720ecb0d1768ffdfcf075/666c43b2ce87f484505ba64c_hotjar-cover.gif"
            alt="Hotjar onboarding experience"
            width={1000}
            height={800}
            className="w-full h-auto object-contain rounded-lg"
            priority
            unoptimized
          />
        </div>
        
        <div className="flex flex-col items-center gap-4 mt-10">
          <MainCTA href="https://pitch.com/v/hotjar-case-study-adw94r" className="w-fit">
            Onboarding case study
          </MainCTA>
          <TertiaryCTA href="https://pitch.com/v/hotjar---pricing-case-pd244x" 
                       target="_blank" 
                       rel="noopener noreferrer">
            Pricing case study
          </TertiaryCTA>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-10 mb-28 text-main-text/90">
        <div className="md:col-span-2">
          <div className="project-label-heading">Summary:</div>
          <p className="text-base font-aeonik-regular mb-4">
            New users couldn't reach insights fast enough — 5% activation despite 15k monthly signups.
          </p>
          
          <p className="text-base font-aeonik-regular mb-4">
            <strong>Approach:</strong> Ran experiments with the pricing page (which accounted for 20% of signups). Separately, tested and removed friction points in the sign-up and onboarding process that weren't relevant to all user personas, then designed a personalized onboarding flow for our target customers—product teams in small and medium tech companies.
          </p>
          
          
        </div>
        <div>
          <div className="project-label-heading">Role:</div>
          <div className="text-base font-aeonik-regular">
            <p>Senior Product Designer</p>
            <p>Product Manager</p>
          </div>
          
          <div className="project-label-heading mt-6">Team:</div>
          <div className="text-base font-aeonik-regular">
            <p>1 designer</p>
            <p>8 full-stack engineers</p>
            <p>2 product managers</p>
            <p>Myself</p>
          </div>
        </div>
        <div>
          <div className="project-label-heading">Key Achievements:</div>
          <ul className="text-base text-main-text/90 font-aeonik-regular space-y-2">
            <li>• 10% overall improvement in activation across all segments</li>
            <li>• 30x improvement in sales pipeline (0.5% to 15% demos booked)</li>
            <li>• Redesigned onboarding for 15k monthly signups</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
