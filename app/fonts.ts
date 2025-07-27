import { Montserrat } from "next/font/google"
import { Manrope } from "next/font/google"

// Define Montserrat with desired weights, subsets, and CSS variable
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Include '400' for normal and '700' for bold
  display: "swap", // Ensures text remains visible during font loading
  variable: "--font-montserrat", // Expose Montserrat as a CSS variable
})

// Define Manrope with desired weights, subsets, and CSS variable
export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Common weights for Manrope
  display: "swap",
  variable: "--font-manrope", // Expose Manrope as a CSS variable
})
