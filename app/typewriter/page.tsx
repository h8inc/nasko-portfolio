import TypewriterHeading from "@/components/typewriter-heading"

export default function TypewriterDemoPage() {
  const phrases = [
    "a product designer",
    "a product manager",
    "an indie hacker",
    "a bitcoin maxi ₿",
    "a dog walker of Max",
    "shredding frozen water",
  ]

  const phraseStyles = {
    "a product designer": { color: "#FF4081", emoji: "🧑🏻‍🎨" },
    "a product manager": { color: "#354AFD", emoji: "📈" },
    "an indie hacker": { color: "#31EE5A", emoji: "🧑🏻‍🔬" }, // Added color
    "a bitcoin maxi ₿": { color: "#FF9900" },
    "a dog walker of Max": { color: "#F2756C", emoji: "🐕‍" }, // Added color
    "shredding frozen water": { color: "#2196F3", emoji: "⛷" },
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <TypewriterHeading
        staticPrefix="Hi, my name is Nasko. I am "
        phrases={phrases}
        phraseSpecificStyles={phraseStyles}
        h1ClassName={`text-[40px] leading-[1.2] font-bold text-center text-gray-900 dark:text-gray-100`}
      />
      <p className="mt-8 text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl">
        This is a demonstration of the typewriter effect. The heading above cycles through various roles, and its
        container width adjusts to the longest phrase to prevent layout shifts.
      </p>
    </div>
  )
}
