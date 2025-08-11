"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export function WireframeNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className="bg-white border-b-2 border-gray-300 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gray-400 rounded border-2 border-gray-500"></div>
            <span className="text-xl font-bold text-gray-900 font-lato">Red Thread Publishing</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* How We Help Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("help")}
                className="flex items-center text-gray-700 hover:text-gray-900 font-lato"
              >
                How We Help
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "help" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border-2 border-gray-300 rounded-lg shadow-lg z-50">
                  <div className="p-4 space-y-2">
                    <Link
                      href="/how-we-help/write-together"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded font-lato"
                      onClick={() => setActiveDropdown(null)}
                    >
                      WRITE Together
                    </Link>
                    <Link
                      href="/how-we-help/publish-with-confidence"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded font-lato"
                      onClick={() => setActiveDropdown(null)}
                    >
                      PUBLISH with Confidence
                    </Link>
                    <Link
                      href="/how-we-help/grow-your-impact"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded font-lato"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Grow Your IMPACT
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Our Work Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("work")}
                className="flex items-center text-gray-700 hover:text-gray-900 font-lato"
              >
                Our Work
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "work" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border-2 border-gray-300 rounded-lg shadow-lg z-50">
                  <div className="p-4 space-y-2">
                    <Link
                      href="/our-work/book-catalog"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded font-lato"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Book Catalog
                    </Link>
                    <Link
                      href="/our-work/success-stories"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded font-lato"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Success Stories
                    </Link>
                    <Link
                      href="/our-work/awards-recognition"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded font-lato"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Awards & Recognition
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className="flex items-center text-gray-700 hover:text-gray-900 font-lato"
              >
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border-2 border-gray-300 rounded-lg shadow-lg z-50">
                  <div className="p-4 space-y-2">
                    <Link
                      href="/about/our-story"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded font-lato"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Our Story
                    </Link>
                    <Link
                      href="/about/meet-the-team"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded font-lato"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Meet the Team
                    </Link>
                    <Link
                      href="/about/why-red-thread"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded font-lato"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Why Red Thread
                    </Link>
                    <Link
                      href="/about/in-the-media"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded font-lato"
                      onClick={() => setActiveDropdown(null)}
                    >
                      In the Media
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("resources")}
                className="flex items-center text-gray-700 hover:text-gray-900 font-lato"
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "resources" && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border-2 border-gray-300 rounded-lg shadow-lg z-50">
                  <div className="p-4 space-y-2">
                    <Link
                      href="/resources/blog"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded font-lato"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/resources/webinar-series"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded font-lato"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Webinar Series
                    </Link>
                    <Link
                      href="/resources/ebook"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded font-lato"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Free eBook
                    </Link>
                    <Link
                      href="/resources/community"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded font-lato"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Community
                    </Link>
                    <Link
                      href="/resources/newsletter"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded font-lato"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Newsletter
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Single Pricing Link */}
            <Link href="/pricing/packages" className="text-gray-700 hover:text-gray-900 font-lato">
              Pricing
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-gray-800 hover:bg-gray-900 text-white font-lato" asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-gray-700 hover:text-gray-900">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t-2 border-gray-300 py-4">
            <nav className="space-y-4">
              <div className="space-y-2">
                <div className="font-semibold text-gray-900 font-lato">How We Help</div>
                <Link
                  href="/how-we-help/write-together"
                  className="block pl-4 py-2 text-gray-700 hover:text-gray-900 font-lato"
                  onClick={() => setIsOpen(false)}
                >
                  WRITE Together
                </Link>
                <Link
                  href="/how-we-help/publish-with-confidence"
                  className="block pl-4 py-2 text-gray-700 hover:text-gray-900 font-lato"
                  onClick={() => setIsOpen(false)}
                >
                  PUBLISH with Confidence
                </Link>
                <Link
                  href="/how-we-help/grow-your-impact"
                  className="block pl-4 py-2 text-gray-700 hover:text-gray-900 font-lato"
                  onClick={() => setIsOpen(false)}
                >
                  Grow Your IMPACT
                </Link>
              </div>

              <div className="space-y-2">
                <div className="font-semibold text-gray-900 font-lato">Our Work</div>
                <Link
                  href="/our-work/book-catalog"
                  className="block pl-4 py-2 text-gray-700 hover:text-gray-900 font-lato"
                  onClick={() => setIsOpen(false)}
                >
                  Book Catalog
                </Link>
                <Link
                  href="/our-work/success-stories"
                  className="block pl-4 py-2 text-gray-700 hover:text-gray-900 font-lato"
                  onClick={() => setIsOpen(false)}
                >
                  Success Stories
                </Link>
              </div>

              <div className="space-y-2">
                <div className="font-semibold text-gray-900 font-lato">About</div>
                <Link
                  href="/about/our-story"
                  className="block pl-4 py-2 text-gray-700 hover:text-gray-900 font-lato"
                  onClick={() => setIsOpen(false)}
                >
                  Our Story
                </Link>
                <Link
                  href="/about/meet-the-team"
                  className="block pl-4 py-2 text-gray-700 hover:text-gray-900 font-lato"
                  onClick={() => setIsOpen(false)}
                >
                  Meet the Team
                </Link>
              </div>

              <div className="space-y-2">
                <div className="font-semibold text-gray-900 font-lato">Resources</div>
                <Link
                  href="/resources/blog"
                  className="block pl-4 py-2 text-gray-700 hover:text-gray-900 font-lato"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/resources/webinar-series"
                  className="block pl-4 py-2 text-gray-700 hover:text-gray-900 font-lato"
                  onClick={() => setIsOpen(false)}
                >
                  Webinar Series
                </Link>
              </div>

              <Link
                href="/pricing/packages"
                className="block py-2 text-gray-700 hover:text-gray-900 font-semibold font-lato"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>

              <div className="pt-4">
                <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-lato" asChild>
                  <Link href="/get-started" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
