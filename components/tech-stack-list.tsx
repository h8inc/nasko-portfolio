import { TechBadge, type TechBadgeProps } from "./tech-badge"

export interface TechStackListProps {
  technologies: string[]
  variant?: TechBadgeProps["variant"]
  size?: TechBadgeProps["size"]
  className?: string
}

export function TechStackList({ technologies, variant = "default", size = "md", className = "" }: TechStackListProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech) => (
        <TechBadge key={tech} tech={tech} variant={variant} size={size} />
      ))}
    </div>
  )
}
