import type React from "react"
import { cn } from "@/lib/utils"

export interface TechBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tech: string
  variant?: "default" | "outline" | "secondary" | "subtle"
  size?: "sm" | "md" | "lg"
}

export function TechBadge({ tech, variant = "default", size = "md", className, ...props }: TechBadgeProps) {
  const sizeStyles = {
    sm: "text-xs px-1.5 py-0.5",
    md: "text-sm px-2 py-1",
    lg: "text-base px-2.5 py-1.5",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md font-medium bg-accent-lime/10 text-accent-lime ring-1 ring-inset ring-accent-lime/20 font-aeonik-mono",
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {tech}
    </span>
  )
}
