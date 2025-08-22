"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Sun, Moon, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">AnimalPeers</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link
            href="/pet-care"
            className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
          >
            <Stethoscope className="h-4 w-4" />
            Pet Care
          </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            Blog
          </Link>
          <Link href="/success-stories" className="text-sm font-medium transition-colors hover:text-primary">
            Success Stories
          </Link>
          <Link href="/volunteer" className="text-sm font-medium transition-colors hover:text-primary">
            Volunteer
          </Link>
          <Link href="/donate" className="text-sm font-medium transition-colors hover:text-primary">
            Donate
          </Link>
        </nav>

        <div className="hidden md:flex md:items-center md:gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/report">Report Animal</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container pb-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/pet-care"
              className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              <Stethoscope className="h-4 w-4" />
              Pet Care
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/success-stories"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </Link>
            <Link
              href="/volunteer"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Volunteer
            </Link>
            <Link
              href="/donate"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/report" onClick={() => setIsMenuOpen(false)}>
                  Report Animal
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
