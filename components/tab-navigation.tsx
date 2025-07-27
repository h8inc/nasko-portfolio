"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface TabNavigationProps {
  tabs: {
    id: string
    label: string
  }[]
  defaultSelectedTab: string
  onTabChange?: (tabId: string) => void
}

export default function TabNavigation({ tabs, defaultSelectedTab, onTabChange }: TabNavigationProps) {
  const [selectedTab, setSelectedTab] = useState(defaultSelectedTab)

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId)
    if (onTabChange) {
      onTabChange(tabId)
    }
  }

  return (
    <div className="flex space-x-6 my-10 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={cn("relative px-1 py-1.5 transition-colors")}
        >
          <span
            className={cn(
              "text-[20px] font-normal text-[#596866] font-variant-small-caps",
              selectedTab === tab.id && "text-[#162c29]",
            )}
          >
            {tab.label}
          </span>
          {selectedTab === tab.id && <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#162c29]" />}
        </button>
      ))}
    </div>
  )
}
