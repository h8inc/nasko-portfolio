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

        <h3 className="text-[20px] md:text-5xl font-semibold mb-10 leading-[1.15] pr-6 md:pr-0 font-aeonik-extended">
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
        <div>
          <div className="project-label-heading">Summary:</div>
          <p className="text-base">
            New website, product interface revamp, and the first design system. Hired two designers, led a dozen of A/B
            tests and releases. We achieved a 32% increase in conversions and a 20% month-over-month sales increase,
            totalling an additional $1.2 million of revenue each month.
          </p>
        </div>
        <div>
          <div className="project-label-heading">Role:</div>
          <div className="text-base">
            <p>Lead product designer</p>
            <p>Growth product manager</p>
          </div>
        </div>
        <div>
          <div className="project-label-heading">Skills:</div>
          <div className="text-base">
            <p>Project management</p>
            <p>Stakeholder mngmt</p>
            <p>User testing/research</p>
            <p>Data analytics</p>
            <p>Visual Design</p>
            <p>Design Systems</p>
          </div>
        </div>
        <div>
          <div className="project-label-heading">Team:</div>
          <div className="text-base">
            <p>Myself</p>
            <p>2 designers</p>
            <p>CPO, VP of marketing</p>
            <p>2 product managers</p>
            <p>3 engineering teams</p>
            <p>1 analyst</p>
          </div>
        </div>
      </div>
    </section>
  )
}
