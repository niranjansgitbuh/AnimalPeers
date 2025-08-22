"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, PawPrint, BarChart2 } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Centralised list of dashboard navigation links.
 * Add new links here to have them appear automatically.
 */
const NAV_ITEMS = [
  {
    href: "/dashboard",
    title: "Overview",
    icon: LayoutDashboard,
  },
  {
    href: "/dashboard/cases",
    title: "Cases",
    icon: PawPrint,
  },
  {
    href: "/dashboard/impact",
    title: "Impact Dashboard",
    icon: BarChart2,
  },
]

/**
 * DashboardNav
 * Provides the vertical navigation used inside the Dashboard layout.
 * Keeps the original export name so existing imports do not break.
 */
export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-1">
      {NAV_ITEMS.map(({ href, title, icon: Icon }) => {
        const isActive = pathname === href

        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              isActive ? "bg-muted text-primary" : "text-muted-foreground hover:bg-muted",
            )}
            aria-current={isActive ? "page" : undefined}
          >
            <Icon className="size-4 shrink-0" />
            <span>{title}</span>
          </Link>
        )
      })}
    </nav>
  )
}
