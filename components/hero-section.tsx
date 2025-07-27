"use client"
import StickyNav from "./sticky-nav"
import TypewriterHeading from "./typewriter-heading"

export default function HeroSection() {
  const heroPhrases = [
    "a product designer",
    "a product manager",
    "an indie hacker",
    "a bitcoin maxi ₿",
    "a dog walker of Max",
    "shredding frozen water",
  ]

  const heroPhraseStyles = {
    "a product designer": { color: "#FF4081", emoji: "🧑🏻‍🎨" },
    "a product manager": { color: "#58A6FF", emoji: "📈" },
    "an indie hacker": { color: "#31EE5A", emoji: "🧑🏻‍🔬" },
    "a bitcoin maxi ₿": { color: "#FF9900" },
    "a dog walker of Max": { color: "#F2756C", emoji: "🐕‍" },
    "shredding frozen water": { color: "#2196F3", emoji: "⛷" },
  }

  return (
    <>
      <StickyNav />
      {/* Spacer to prevent content from being hidden under the fixed header */}
      <div className="h-[80px] md:h-[72px]"></div>

      {/* Adjusted top and bottom margins for the TypewriterHeading container */}
      <div className="mt-32 md:mt-44 mb-36 md:mb-48 md:min-h-[60px] md:flex md:items-center">
        <TypewriterHeading
          staticPrefix="Hi, my name is Nasko. I am "
          phrases={heroPhrases}
          phraseSpecificStyles={heroPhraseStyles}
          h1ClassName={`text-[40px] leading-[1.2] font-bold text-main-text text-lifted`}
        />
      </div>
    </>
  )
}
