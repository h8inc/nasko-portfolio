"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/motion"
import { useMobile } from "../hooks/use-mobile"

interface PhraseStyle {
  color?: string
  emoji?: string
}

interface TypewriterHeadingProps {
  staticPrefix: string
  phrases: string[]
  typingDelay?: number
  deletingDelay?: number
  pauseDelay?: number
  h1ClassName?: string
  phraseSpecificStyles?: Record<string, PhraseStyle>
}

export default function TypewriterHeading({
  staticPrefix,
  phrases = [],
  typingDelay = 80,
  deletingDelay = 35,
  pauseDelay = 1500,  h1ClassName = "text-3xl md:text-4xl lg:text-5xl font-bold text-main-text leading-[2.2]",
  phraseSpecificStyles = {},

}: TypewriterHeadingProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayedPhrase, setDisplayedPhrase] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [dynamicTextWidth, setDynamicTextWidth] = useState<number>(0)

  const measurementSpanRef = useRef<HTMLSpanElement>(null)
  const actualH1Ref = useRef<HTMLHeadingElement>(null)
  const isMobile = useMobile()

  const calculateMaxWidth = useCallback(() => {
    if (measurementSpanRef.current && actualH1Ref.current && phrases.length > 0) {
      const computedStyle = window.getComputedStyle(actualH1Ref.current)
      measurementSpanRef.current.style.fontSize = computedStyle.fontSize
      measurementSpanRef.current.style.fontWeight = computedStyle.fontWeight
      measurementSpanRef.current.style.fontFamily = computedStyle.fontFamily
      measurementSpanRef.current.style.letterSpacing = computedStyle.letterSpacing
      measurementSpanRef.current.style.textTransform = computedStyle.textTransform
      measurementSpanRef.current.style.visibility = "hidden"
      measurementSpanRef.current.style.position = "absolute"

      let maxWidth = 0
      phrases.forEach((phrase) => {
        if (measurementSpanRef.current) {
          const style = phraseSpecificStyles[phrase]
          const textToMeasure = phrase + (style?.emoji || "")
          measurementSpanRef.current.textContent = textToMeasure
          maxWidth = Math.max(maxWidth, measurementSpanRef.current.offsetWidth)
        }
      })
      setDynamicTextWidth(maxWidth > 0 ? maxWidth + 8 : 30) // +8 for cursor and small buffer
    } else if (phrases.length === 0) {
      setDynamicTextWidth(30) // Default small width if no phrases
    }
  }, [phrases, phraseSpecificStyles])

  useEffect(() => {
    if (phrases.length === 0) return

    const handleResizeOrMount = () => {
      if (actualH1Ref.current) {
        calculateMaxWidth()
      } else {
        requestAnimationFrame(handleResizeOrMount)
      }
    }
    Promise.all([document.fonts.ready, new Promise((resolve) => requestAnimationFrame(resolve))]).then(
      handleResizeOrMount,
    )

    window.addEventListener("resize", handleResizeOrMount)
    return () => {
      window.removeEventListener("resize", handleResizeOrMount)
    }
  }, [calculateMaxWidth, phrases.length])

  useEffect(() => {
    if (phrases.length === 0) {
      setDisplayedPhrase("")
      return
    }
    if (!isMobile && dynamicTextWidth === 0 && phrases.length > 0) {
      return
    }

    let timer: NodeJS.Timeout
    const currentFullPhrase = phrases[currentPhraseIndex]

    if (isDeleting) {
      if (displayedPhrase.length > 0) {
        timer = setTimeout(() => {
          setDisplayedPhrase((prev) => prev.substring(0, prev.length - 1))
        }, deletingDelay)
      } else {
        setIsDeleting(false)
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
      }
    } else {
      if (displayedPhrase.length < currentFullPhrase.length) {
        timer = setTimeout(() => {
          setDisplayedPhrase((prev) => currentFullPhrase.substring(0, prev.length + 1))
        }, typingDelay)
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, pauseDelay)
      }
    }
    return () => clearTimeout(timer)
  }, [
    displayedPhrase,
    isDeleting,
    currentPhraseIndex,
    phrases,
    typingDelay,
    deletingDelay,
    pauseDelay,
    dynamicTextWidth,
    isMobile,
  ])

  const currentFullPhrase = phrases[currentPhraseIndex] || ""
  const specificStyle = phraseSpecificStyles[currentFullPhrase]
  const textColor = specificStyle?.color
  const emoji = specificStyle?.emoji
  const baseEmojiStyle: React.CSSProperties = {
    fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", emoji',
    fontVariantEmoji: "emoji",
  }

  const h1Styles: React.CSSProperties = {}
  if (isMobile) {
    h1Styles.display = "flex"
    h1Styles.flexDirection = "column"
    h1Styles.height = "280px" // Mobile height
    h1Styles.overflow = "hidden"
  } else {
    h1Styles.minHeight = "1.3em"
    h1Styles.height = "120px" // Desktop height - increased from 107px
  }

  const staticPrefixStyles: React.CSSProperties = {}
  if (isMobile) {
    staticPrefixStyles.flexShrink = 0
  }

  const dynamicTextWrapperStyles: React.CSSProperties = {}
  let dynamicTextWrapperClassName = "text-left"

  if (isMobile) {
    dynamicTextWrapperClassName += " block"
    dynamicTextWrapperStyles.flexGrow = 1
    dynamicTextWrapperStyles.overflow = "hidden"
    dynamicTextWrapperStyles.minHeight = "1.5em"
  } else {
    dynamicTextWrapperStyles.width = `${dynamicTextWidth}px`
    dynamicTextWrapperStyles.minWidth = `${dynamicTextWidth}px`
    dynamicTextWrapperClassName += " inline-block whitespace-nowrap align-baseline"
  }

  const mobileInternalSpanStyle: React.CSSProperties = isMobile ? { display: "inline-block", verticalAlign: "top" } : {}

  const renderCursor = () => (
    <span
      className="animate-blink-cursor border-r-2 ml-px"
      style={{
        display: "inline-block",
        verticalAlign: isMobile ? "top" : "baseline",
        borderColor: "currentColor",
        height: "1.2em",
      }}
      aria-hidden="true"
    ></span>
  )

  let phraseContent
  const isEmptyAndDeleting = displayedPhrase === "" && isDeleting

  if (isMobile) {
    if (emoji && displayedPhrase === currentFullPhrase && !isDeleting) {
      const words = displayedPhrase.split(" ")
      const lastWord = words.pop() || ""
      const restOfPhrase = words.join(" ") + (words.length > 0 ? " " : "")
      phraseContent = (
        <>
          <span style={{ color: textColor || "inherit", ...mobileInternalSpanStyle }}>{restOfPhrase}</span>
          <span style={{ whiteSpace: "nowrap", ...mobileInternalSpanStyle }}>
            <span style={{ color: textColor || "inherit" }}>{lastWord}</span>
            <span style={{ ...baseEmojiStyle }} className="ml-1">
              {emoji}
            </span>
            {renderCursor()}
          </span>
        </>
      )
    } else {
      phraseContent = (
        <>
          <span style={{ color: textColor || "inherit", ...mobileInternalSpanStyle }}>
            {displayedPhrase || (isEmptyAndDeleting ? "\u00A0" : "")}
          </span>
          {emoji && displayedPhrase === currentFullPhrase && !isDeleting && (
            <span style={{ ...baseEmojiStyle, ...mobileInternalSpanStyle }} className="ml-1">
              {emoji}
            </span>
          )}
          {renderCursor()}
        </>
      )
    }
  } else {
    phraseContent = (
      <>
        <span style={{ color: textColor || "inherit" }}>{displayedPhrase}</span>
        {emoji && displayedPhrase === currentFullPhrase && !isDeleting && (
          <span style={{ ...baseEmojiStyle }} className="ml-1">
            {emoji}
          </span>
        )}
        {renderCursor()}
      </>
    )
  }

  return (
    <>
      <span
        ref={measurementSpanRef}
        className="absolute -left-[9999px] -top-[9999px] whitespace-nowrap"
        aria-hidden="true"
      ></span>
      <motion.h1
        ref={actualH1Ref}
        className={h1ClassName}
        style={h1Styles}
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="show"
      >
        <span style={staticPrefixStyles}>{staticPrefix}</span>
        <span style={dynamicTextWrapperStyles} className={dynamicTextWrapperClassName}>
          {phraseContent}
        </span>
      </motion.h1>
    </>
  )
}
