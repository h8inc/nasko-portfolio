import Image from "next/image"
import MobileImageGallery from "../mobile-image-gallery"

export default function InsurifyProject() {
  const insurifyImages = [
    {
      src: "https://cdn.prod.website-files.com/62a720ecb0d1768ffdfcf075/66701beeabfff3979378bb46_1.%20year-page-insufiry.png",
      alt: "Insurify year page",
      width: 810,
      height: 1500,
    },
    {
      src: "https://cdn.prod.website-files.com/62a720ecb0d1768ffdfcf075/66701c01a7e45fecbc781ba7_2.%20car-page-insufiry.png",
      alt: "Insurify car page",
      width: 810,
      height: 1500,
    },
    {
      src: "https://cdn.prod.website-files.com/62a720ecb0d1768ffdfcf075/66701c1de037fe86e40179c4_3.%20driver-page-insufiry.png",
      alt: "Insurify driver page",
      width: 810,
      height: 1500,
    },
    {
      src: "https://cdn.prod.website-files.com/62a720ecb0d1768ffdfcf075/66701c9ccd40c4d5bdd350e1_4.%20quotes-page-insufiry.png",
      alt: "Insurify quotes page",
      width: 810,
      height: 1500,
    },
  ]

  return (
    <section id="insurify">
      <div className="liquid-glass-card pt-6 pb-6 pl-6 pr-0 md:p-10 mb-10">
        <div className="flex justify-between items-center mb-6 pr-6 md:pr-0">
          <div>
            <Image
              src="https://cdn.prod.website-files.com/62a720ecb0d1768ffdfcf075/6474e73028dbb715771e7569_insurify-logo.svg"
              alt="Insurify"
              width={100}
              height={50}
              className="h-10 w-auto"
            />
          </div>
          <span className="text-[20px] text-main-text/80">2021</span>
        </div>

        <h3 className="text-[20px] md:text-5xl font-medium mb-10 leading-[1.3] pr-6 md:pr-0 font-aeonik-extended">
          Redesign of a marketplace with millions of daily users
        </h3>

        <div className="md:hidden p-0 m-0">
          <MobileImageGallery images={insurifyImages} />
        </div>

        <div className="hidden md:flex md:flex-wrap lg:flex-nowrap gap-6 md:gap-4 lg:gap-6">
          {insurifyImages.map((image, index) => (
            <div key={index} className="w-full md:w-[calc(50%-8px)] lg:w-1/4">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 25vw"
                className="w-full h-auto object-contain rounded-lg"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-10 mb-28 text-main-text/90">
        <div className="md:col-span-2">
          <div className="project-label-heading">Summary:</div>
          <p className="text-base font-aeonik-regular mb-4">
            Users didn't trust the clunky interface for high-stakes insurance decisions. I led a comprehensive redesign as Lead Product Designer driving growth strategy.
          </p>
          
          <p className="text-base font-aeonik-regular mb-4">
            <strong>Approach:</strong> Transformed a 30-field form into a conversational flow that guides users through complex decisions with confidence and clarity.
          </p>
          
          <p className="text-base font-aeonik-regular mb-4">
            Hired and led 2 designers across 3 engineering teams, establishing the company's first design system to enable rapid iteration. Built the first end-to-end product development process—from requirements definition through design execution to engineering handoff.
          </p>
          
      
        </div>
        <div>
          <div className="project-label-heading">Role:</div>
          <div className="text-base font-aeonik-regular">
            <p>Lead product designer</p>
            <p>Growth product manager</p>
          </div>
          
          <div className="project-label-heading mt-6">Team:</div>
          <div className="text-base font-aeonik-regular">
            <p>Myself</p>
            <p>2 designers</p>
            <p>CPO, VP of marketing</p>
            <p>2 product managers</p>
            <p>3 engineering teams</p>
            <p>1 analyst</p>
          </div>
        </div>
        <div>
          <div className="project-label-heading">Key Achievements:</div>
          <ul className="text-base text-main-text/90 font-aeonik-regular space-y-2">
            <li>• 32% increase in flow completions</li>
            <li>• $1.2M additional monthly revenue</li>
            <li>• 20% MoM sales growth </li>
            <li>• Built first design system</li>
            <li>• Hired and led 2 designers</li>
            <li>• Established end-to-end product development process</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
