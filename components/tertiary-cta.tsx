import type React from "react"
import { cn } from "@/lib/utils"

interface TertiaryCTAProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

export default function TertiaryCTA({ href, children, className, ...props }: TertiaryCTAProps) {
  return (
    <a
      href={href}
      className={cn(
        "text-sm text-accent-lime hover:text-white transition-colors flex items-center group font-semibold",
        className,
      )}
      {...props}
    >
      {children}
      <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
    </a>
  )
}
