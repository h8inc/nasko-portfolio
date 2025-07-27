import Image from "next/image"

export default function Skills() {
  return (
    <div className="mb-32 md:mb-64">
      <h2 className="text-base font-normal text-gray-600 mb-8">Here's the spread of my skills</h2>
      <div className="hidden md:block">
        <Image
          src="https://cdn.prod.website-files.com/62a720ecb0d1768ffdfcf075/6739dda5ebf91b07fc6504d7_myskills-desktop.png"
          alt="Skills visualization - desktop"
          width={4053}
          height={1200}
          className="w-full h-auto"
        />
      </div>
      <div className="md:hidden">
        <Image
          src="https://cdn.prod.website-files.com/62a720ecb0d1768ffdfcf075/6739ddc49820f5ce5a3596c8_myskills-mobile.png"
          alt="Skills visualization - mobile"
          width={954}
          height={800}
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}
