import Image from "next/image"
import MainCTA from "../main-cta"
import TertiaryCTA from "../tertiary-cta"

export default function CaliperProject() {
  return (
    <section id="caliper">
      <div className="liquid-glass-card p-10 mb-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <Image
              src="/images/Calliper Logo - Black.svg"
              alt="Caliper logo"
              width={100}
              height={50}
              className="h-auto w-auto max-h-[43px]"
              unoptimized={true} // Crucial for SVGs
            />
          </div>
          <span className="text-[20px] text-main-text/80">2022</span>
        </div>

        <h3 className="text-[20px] md:text-5xl font-medium mb-10 leading-[1.3] pr-6 md:pr-0 font-aeonik-extended">
          Democratize data. Make it social. Let anyone get answers in seconds, not weeks.
        </h3>

        <div className="flex items-center justify-center">
          <Image
            src="/images/Portfolio 2024.gif"
            alt="Portfolio 2024 animation"
            width={1000}
            height={800}
            className="w-full h-auto object-contain rounded-lg"
            priority
            unoptimized
          />
        </div>
        
        {/* <div className="flex flex-col items-center gap-4 mt-10">
          <MainCTA href="#" className="w-fit">
            View case study
          </MainCTA>
        </div> */}
      </div>

      <div className="grid md:grid-cols-5 lg:grid-cols-6 gap-10 mb-28 text-main-text/90">
        <div className="md:col-span-3 lg:col-span-4">
          <div className="project-label-heading">Summary:</div>
          <p className="text-base text-main-text/90 leading-relaxed font-aeonik-regular mb-4">
            Business data is scattered across multiple tools like Stripe, Google Analytics, Facebook Ads, HubSpot, and other tools. Nobody knows what's actually working. Calliper connected everything into one feed where anyone could ask questions in plain English and get instant answers. "Which ads drove our best customers?" "Is our pricing experiment working?" No SQL, no spreadsheets, no begging engineers for reports.
          </p>
          <p className="text-base text-main-text/90 leading-relaxed font-aeonik-regular mb-4">
            Think: social feed meets data warehouse and a friendly slack bot. Ask questions, share insights, make decisions fast. Sequoia wrote us a $1.2M check to build it. We shipped the MVP in 2022. Company later shut down, but the problem we were solving was real as hell.
          </p>
        </div>
        <div className="md:col-span-2 lg:col-span-2">
          <div className="project-label-heading">Role:</div>
          <div className="text-base text-main-text/90 font-aeonik-regular">
            <p>Conducted a dozen founder interviews across early stage companies</p>
            <p>Built the design system from zero</p>
            <p>Shipped core product features including the data feed, goal tracking, smart alerts, slack bot</p>
          </div>
        </div>
      </div>
    </section>
  )
}
