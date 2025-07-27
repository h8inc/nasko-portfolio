import Image from "next/image"

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

        <h3 className="text-[20px] md:text-5xl font-normal mb-10 leading-tight pr-6 md:pr-0">
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
      </div>

      <div className="grid md:grid-cols-4 gap-10 mb-28 text-main-text/90">
        <div>
          <div className="project-label-heading">Summary:</div>
          <p className="text-base">
            Enhanced the initial interactions for thousands of new Hotjar customers. Worked on pricing, sign-up, and
            onboarding experience, resulting in a threefold increase in activation from our target customers.
          </p>
        </div>
        <div>
          <div className="project-label-heading">Role:</div>
          <div className="text-base">
            <p>Senior Product Designer</p>
            <p>Product Manager</p>
          </div>
        </div>
        <div>
          <div className="project-label-heading">Skills:</div>
          <div className="text-base">
            <p>Product strategy</p>
            <p>User experience</p>
            <p>User testing/research</p>
            <p>Data analytics</p>
            <p>Story mapping</p>
          </div>
        </div>
        <div>
          <div className="project-label-heading">Team:</div>
          <div className="text-base">
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
