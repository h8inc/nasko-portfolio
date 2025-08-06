import Image from "next/image"

export default function Header() {
  return (
    <>
      <div className="flex items-center gap-3 mb-16 md:mb-32">
        <Image
          src="https://cdn.prod.website-files.com/62a720ecb0d1768ffdfcf075/66640d623f05fc5b8390eca8_nasko-snow-round-2.png"
          alt="Nasko Terziev"
          width={48}
          height={48}
          className="rounded-full"
        />
        <span className="text-lg text-gray-900 font-aeonik-regular">Nasko Terziev</span>
      </div>

      <h1 className="text-[2.5rem] font-normal leading-[130%] text-[#162c29] mb-4 font-aeonik-extended tracking-wider">
        Designer & PM for startups and scale ups
      </h1>
      <p className="text-xl text-gray-500 mb-32 md:mb-60">Indie Hacker and Hobbyist Coder</p>
    </>
  )
}
