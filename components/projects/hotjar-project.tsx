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
          <MainCTA href="https://app.pitch.com/app/player/bbdfda9b-8742-42ce-953e-6ff650d8bfa1/2da6d163-8aba-4185-9f68-9eb4006dc108" className="w-fit">
            Onboarding case study
          </MainCTA>
          <TertiaryCTA href="https://app.pitch.com/app/player/bbdfda9b-8742-42ce-953e-6ff650d8bfa1/82a0e37b-deca-4c52-b765-eec54e6e4bf7" 
                       target="_blank" 
                       rel="noopener noreferrer">
            Pricing case study
          </TertiaryCTA>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-10 mb-28 text-main-text/90">
        <div>
          <div className="project-label-heading">Summary:</div>
          <p className="text-base font-aeonik-regular">
            Enhanced the initial interactions for thousands of new Hotjar customers. Worked on pricing, sign-up, and
            onboarding experience, resulting in a threefold increase in activation from our target customers.
          </p>
        </div>
        <div>
          <div className="project-label-heading">Role:</div>
          <div className="text-base font-aeonik-regular">
            <p>Senior Product Designer</p>
            <p>Product Manager</p>
          </div>
        </div>
        <div>
          <div className="project-label-heading">Skills:</div>
          <div className="text-base font-aeonik-regular">
            <p>Product strategy</p>
            <p>User experience</p>
            <p>User testing/research</p>
            <p>Data analytics</p>
            <p>Story mapping</p>
          </div>
        </div>
        <div>
          <div className="project-label-heading">Team:</div>
          <div className="text-base font-aeonik-regular">
            <p>1 designer</p>
            <p>8 full-stack engineers</p>
            <p>2 product managers</p>
            <p>Myself</p>
          </div>
        </div>
      </div>
    </section>
  )
}
