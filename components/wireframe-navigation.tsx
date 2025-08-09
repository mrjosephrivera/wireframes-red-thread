"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"

export function WireframeNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="border-b-2 border-gray-300 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gray-400 rounded border-2 border-gray-500"></div>
            <span className="text-xl font-bold text-gray-900 font-playfair">Red Thread Publishing</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {/* How We Help */}
              <div className="relative group">
                <button className="font-lato text-gray-700 hover:text-gray-900 flex items-center">
                  How We Help
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-96 bg-white border-2 border-gray-300 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold font-playfair text-gray-900 border-b border-gray-200 pb-2">
                          Our Services
                        </h4>
                        <Link
                          href="/how-we-help/write-together"
                          className="block p-3 border border-gray-200 rounded hover:bg-gray-50"
                        >
                          <div className="font-semibold font-lato text-gray-800">WRITE Together</div>
                          <div className="text-sm text-gray-600 font-lato">Manuscript development</div>
                        </Link>
                        <Link
                          href="/how-we-help/publish-with-confidence"
                          className="block p-3 border border-gray-200 rounded hover:bg-gray-50"
                        >
                          <div className="font-semibold font-lato text-gray-800">PUBLISH with Confidence</div>
                          <div className="text-sm text-gray-600 font-lato">Full-service publishing</div>
                        </Link>
                        <Link
                          href="/how-we-help/grow-your-impact"
                          className="block p-3 border border-gray-200 rounded hover:bg-gray-50"
                        >
                          <div className="font-semibold font-lato text-gray-800">Grow your IMPACT</div>
                          <div className="text-sm text-gray-600 font-lato">Media training</div>
                        </Link>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold font-playfair text-gray-900 border-b border-gray-200 pb-2">
                          Pricing
                        </h4>
                        <Link
                          href="/pricing/packages"
                          className="block p-3 border border-gray-200 rounded hover:bg-gray-50"
                        >
                          <div className="font-semibold font-lato text-gray-800">Individual Packages</div>
                          <div className="text-sm text-gray-600 font-lato">Write, Publish, or Impact</div>
                        </Link>
                        <Link
                          href="/pricing/all-in-package"
                          className="block p-3 border border-gray-200 rounded hover:bg-gray-50"
                        >
                          <div className="font-semibold font-lato text-gray-800">All-in Package</div>
                          <div className="text-sm text-gray-600 font-lato">Complete journey</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Work */}
              <div className="relative group">
                <button className="font-lato text-gray-700 hover:text-gray-900 flex items-center">
                  Our Work
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-80 bg-white border-2 border-gray-300 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-6 space-y-3">
                    <Link
                      href="/our-work/published-authors"
                      className="block p-3 border border-gray-200 rounded hover:bg-gray-50"
                    >
                      <div className="font-semibold font-lato text-gray-800">Published Authors</div>
                      <div className="text-sm text-gray-600 font-lato">Meet our authors</div>
                    </Link>
                    <Link
                      href="/our-work/book-catalog"
                      className="block p-3 border border-gray-200 rounded hover:bg-gray-50"
                    >
                      <div className="font-semibold font-lato text-gray-800">Book Catalog</div>
                      <div className="text-sm text-gray-600 font-lato">Browse published books</div>
                    </Link>
                    <Link href="/our-work/awards" className="block p-3 border border-gray-200 rounded hover:bg-gray-50">
                      <div className="font-semibold font-lato text-gray-800">Awards</div>
                      <div className="text-sm text-gray-600 font-lato">Recognition</div>
                    </Link>
                    <Link
                      href="/our-work/testimonials"
                      className="block p-3 border border-gray-200 rounded hover:bg-gray-50"
                    >
                      <div className="font-semibold font-lato text-gray-800">Testimonials</div>
                      <div className="text-sm text-gray-600 font-lato">Client feedback</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="relative group">
                <button className="font-lato text-gray-700 hover:text-gray-900 flex items-center">
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-80 bg-white border-2 border-gray-300 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-6 space-y-3">
                    <Link href="/resources/ebook" className="block p-3 border border-gray-200 rounded hover:bg-gray-50">
                      <div className="font-semibold font-lato text-gray-800">Download eBook</div>
                      <div className="text-sm text-gray-600 font-lato">Free guide</div>
                    </Link>
                    <Link
                      href="/resources/webinar-series"
                      className="block p-3 border border-gray-200 rounded hover:bg-gray-50"
                    >
                      <div className="font-semibold font-lato text-gray-800">Webinar Series</div>
                      <div className="text-sm text-gray-600 font-lato">Training sessions</div>
                    </Link>
                    <Link
                      href="/resources/community"
                      className="block p-3 border border-gray-200 rounded hover:bg-gray-50"
                    >
                      <div className="font-semibold font-lato text-gray-800">Community</div>
                      <div className="text-sm text-gray-600 font-lato">Join authors</div>
                    </Link>
                    <Link
                      href="/resources/newsletter"
                      className="block p-3 border border-gray-200 rounded hover:bg-gray-50"
                    >
                      <div className="font-semibold font-lato text-gray-800">Newsletter</div>
                      <div className="text-sm text-gray-600 font-lato">Weekly insights</div>
                    </Link>
                    <Link href="/resources/blog" className="block p-3 border border-gray-200 rounded hover:bg-gray-50">
                      <div className="font-semibold font-lato text-gray-800">Blog</div>
                      <div className="text-sm text-gray-600 font-lato">Articles & tips</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* About Red Thread */}
              <div className="relative group">
                <button className="font-lato text-gray-700 hover:text-gray-900 flex items-center">
                  About Red Thread
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-80 bg-white border-2 border-gray-300 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-6 space-y-3">
                    <Link href="/about/our-story" className="block p-3 border border-gray-200 rounded hover:bg-gray-50">
                      <div className="font-semibold font-lato text-gray-800">Our Story</div>
                      <div className="text-sm text-gray-600 font-lato">Mission & values</div>
                    </Link>
                    <Link
                      href="/about/meet-the-team"
                      className="block p-3 border border-gray-200 rounded hover:bg-gray-50"
                    >
                      <div className="font-semibold font-lato text-gray-800">Meet the Team</div>
                      <div className="text-sm text-gray-600 font-lato">Our experts</div>
                    </Link>
                    <Link
                      href="/about/why-red-thread"
                      className="block p-3 border border-gray-200 rounded hover:bg-gray-50"
                    >
                      <div className="font-semibold font-lato text-gray-800">Why Red Thread</div>
                      <div className="text-sm text-gray-600 font-lato">What makes us different</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Button className="bg-gray-800 hover:bg-gray-900 text-white border-2 border-gray-700 font-lato" asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 border border-gray-400 rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t-2 border-gray-300">
            <div className="space-y-4 pt-4">
              <div className="space-y-2 p-4 border border-gray-300 rounded">
                <div className="font-semibold font-playfair text-gray-900">How We Help</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/how-we-help/write-together"
                    className="block text-gray-600 font-lato py-1 border-l-2 border-gray-300 pl-3"
                  >
                    WRITE Together
                  </Link>
                  <Link
                    href="/how-we-help/publish-with-confidence"
                    className="block text-gray-600 font-lato py-1 border-l-2 border-gray-300 pl-3"
                  >
                    PUBLISH with Confidence
                  </Link>
                  <Link
                    href="/how-we-help/grow-your-impact"
                    className="block text-gray-600 font-lato py-1 border-l-2 border-gray-300 pl-3"
                  >
                    Grow your IMPACT
                  </Link>
                  <Link
                    href="/pricing/packages"
                    className="block text-gray-600 font-lato py-1 border-l-2 border-gray-300 pl-3"
                  >
                    Pricing
                  </Link>
                </div>
              </div>

              <div className="space-y-2 p-4 border border-gray-300 rounded">
                <div className="font-semibold font-playfair text-gray-900">Our Work</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/our-work/published-authors"
                    className="block text-gray-600 font-lato py-1 border-l-2 border-gray-300 pl-3"
                  >
                    Published Authors
                  </Link>
                  <Link
                    href="/our-work/book-catalog"
                    className="block text-gray-600 font-lato py-1 border-l-2 border-gray-300 pl-3"
                  >
                    Book Catalog
                  </Link>
                  <Link
                    href="/our-work/awards"
                    className="block text-gray-600 font-lato py-1 border-l-2 border-gray-300 pl-3"
                  >
                    Awards
                  </Link>
                  <Link
                    href="/our-work/testimonials"
                    className="block text-gray-600 font-lato py-1 border-l-2 border-gray-300 pl-3"
                  >
                    Testimonials
                  </Link>
                </div>
              </div>

              <div className="space-y-2 p-4 border border-gray-300 rounded">
                <div className="font-semibold font-playfair text-gray-900">Resources</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/resources/ebook"
                    className="block text-gray-600 font-lato py-1 border-l-2 border-gray-300 pl-3"
                  >
                    Download eBook
                  </Link>
                  <Link
                    href="/resources/webinar-series"
                    className="block text-gray-600 font-lato py-1 border-l-2 border-gray-300 pl-3"
                  >
                    Webinar Series
                  </Link>
                  <Link
                    href="/resources/community"
                    className="block text-gray-600 font-lato py-1 border-l-2 border-gray-300 pl-3"
                  >
                    Community
                  </Link>
                  <Link
                    href="/resources/newsletter"
                    className="block text-gray-600 font-lato py-1 border-l-2 border-gray-300 pl-3"
                  >
                    Newsletter
                  </Link>
                  <Link
                    href="/resources/blog"
                    className="block text-gray-600 font-lato py-1 border-l-2 border-gray-300 pl-3"
                  >
                    Blog
                  </Link>
                </div>
              </div>

              <div className="space-y-2 p-4 border border-gray-300 rounded">
                <div className="font-semibold font-playfair text-gray-900">About Red Thread</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/about/our-story"
                    className="block text-gray-600 font-lato py-1 border-l-2 border-gray-300 pl-3"
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/about/meet-the-team"
                    className="block text-gray-600 font-lato py-1 border-l-2 border-gray-300 pl-3"
                  >
                    Meet the Team
                  </Link>
                  <Link
                    href="/about/why-red-thread"
                    className="block text-gray-600 font-lato py-1 border-l-2 border-gray-300 pl-3"
                  >
                    Why Red Thread
                  </Link>
                </div>
              </div>

              <Button
                className="w-full bg-gray-800 hover:bg-gray-900 text-white border-2 border-gray-700 font-lato"
                asChild
              >
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
