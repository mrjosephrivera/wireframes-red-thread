"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gray-800 rounded"></div>
            <span className="text-xl font-bold text-gray-900 font-playfair">Red Thread Publishing</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                {/* How We Help */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-lato text-gray-700 hover:text-gray-800">
                    How We Help
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] gap-3 p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <NavigationMenuLink asChild>
                            <Link href="/how-we-help/write-together" className="block p-3 rounded-lg hover:bg-gray-50">
                              <div className="font-semibold font-lato">WRITE Together</div>
                              <div className="text-sm text-gray-600 font-lato">Manuscript development & coaching</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/how-we-help/publish-with-confidence"
                              className="block p-3 rounded-lg hover:bg-gray-50"
                            >
                              <div className="font-semibold font-lato">PUBLISH with Confidence</div>
                              <div className="text-sm text-gray-600 font-lato">Full-service publishing</div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div className="space-y-3">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/how-we-help/grow-your-impact"
                              className="block p-3 rounded-lg hover:bg-gray-50"
                            >
                              <div className="font-semibold font-lato">Grow your IMPACT</div>
                              <div className="text-sm text-gray-600 font-lato">Media training & thought leadership</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link href="/pricing/packages" className="block p-3 rounded-lg hover:bg-gray-50">
                              <div className="font-semibold font-lato">View Pricing</div>
                              <div className="text-sm text-gray-600 font-lato">Individual & package options</div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Our Work */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-lato text-gray-700 hover:text-gray-800">
                    Our Work
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] gap-3 p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <NavigationMenuLink asChild>
                            <Link href="/our-work/published-authors" className="block p-3 rounded-lg hover:bg-gray-50">
                              <div className="font-semibold font-lato">Published Authors</div>
                              <div className="text-sm text-gray-600 font-lato">Meet our successful authors</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link href="/our-work/book-catalog" className="block p-3 rounded-lg hover:bg-gray-50">
                              <div className="font-semibold font-lato">Book Catalog</div>
                              <div className="text-sm text-gray-600 font-lato">Browse our published books</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link href="/our-work/success-stories" className="block p-3 rounded-lg hover:bg-gray-50">
                              <div className="font-semibold font-lato">Success Stories</div>
                              <div className="text-sm text-gray-600 font-lato">Detailed case studies</div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div className="space-y-3">
                          <NavigationMenuLink asChild>
                            <Link href="/our-work/awards-recognition" className="block p-3 rounded-lg hover:bg-gray-50">
                              <div className="font-semibold font-lato">Awards & Recognition</div>
                              <div className="text-sm text-gray-600 font-lato">Industry achievements</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link href="/our-work/testimonials" className="block p-3 rounded-lg hover:bg-gray-50">
                              <div className="font-semibold font-lato">Client Testimonials</div>
                              <div className="text-sm text-gray-600 font-lato">What our authors say</div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-lato text-gray-700 hover:text-gray-800">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] gap-3 p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <NavigationMenuLink asChild>
                            <Link href="/resources/ebook" className="block p-3 rounded-lg hover:bg-gray-50">
                              <div className="font-semibold font-lato">Download the eBook</div>
                              <div className="text-sm text-gray-600 font-lato">Free publishing guide</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link href="/resources/webinar-series" className="block p-3 rounded-lg hover:bg-gray-50">
                              <div className="font-semibold font-lato">Webinar Series</div>
                              <div className="text-sm text-gray-600 font-lato">Expert training sessions</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link href="/resources/community" className="block p-3 rounded-lg hover:bg-gray-50">
                              <div className="font-semibold font-lato">Skool Community</div>
                              <div className="text-sm text-gray-600 font-lato">"Write Your Book" community</div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div className="space-y-3">
                          <NavigationMenuLink asChild>
                            <Link href="/resources/newsletter" className="block p-3 rounded-lg hover:bg-gray-50">
                              <div className="font-semibold font-lato">Newsletter</div>
                              <div className="text-sm text-gray-600 font-lato">Weekly publishing insights</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link href="/resources/blog" className="block p-3 rounded-lg hover:bg-gray-50">
                              <div className="font-semibold font-lato">Blog</div>
                              <div className="text-sm text-gray-600 font-lato">Latest articles & tips</div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* About Red Thread */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-lato text-gray-700 hover:text-gray-800">
                    About Red Thread
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] gap-3 p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <NavigationMenuLink asChild>
                            <Link href="/about/our-story" className="block p-3 rounded-lg hover:bg-gray-50">
                              <div className="font-semibold font-lato">Our Story</div>
                              <div className="text-sm text-gray-600 font-lato">Mission, values & history</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link href="/about/meet-the-team" className="block p-3 rounded-lg hover:bg-gray-50">
                              <div className="font-semibold font-lato">Meet the Team</div>
                              <div className="text-sm text-gray-600 font-lato">Our expert team members</div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div className="space-y-3">
                          <NavigationMenuLink asChild>
                            <Link href="/about/why-red-thread" className="block p-3 rounded-lg hover:bg-gray-50">
                              <div className="font-semibold font-lato">Why Red Thread</div>
                              <div className="text-sm text-gray-600 font-lato">What makes us different</div>
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link href="/about/in-the-media" className="block p-3 rounded-lg hover:bg-gray-50">
                              <div className="font-semibold font-lato">In the Media</div>
                              <div className="text-sm text-gray-600 font-lato">Press coverage & features</div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button className="bg-gray-800 hover:bg-gray-900 font-lato" asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <div className="font-semibold font-playfair text-gray-900">How We Help</div>
                <div className="pl-4 space-y-2">
                  <Link href="/how-we-help/write-together" className="block text-gray-600 font-lato">
                    WRITE Together
                  </Link>
                  <Link href="/how-we-help/publish-with-confidence" className="block text-gray-600 font-lato">
                    PUBLISH with Confidence
                  </Link>
                  <Link href="/how-we-help/grow-your-impact" className="block text-gray-600 font-lato">
                    Grow your IMPACT
                  </Link>
                  <Link href="/pricing/packages" className="block text-gray-600 font-lato">
                    Pricing
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-semibold font-playfair text-gray-900">Our Work</div>
                <div className="pl-4 space-y-2">
                  <Link href="/our-work/published-authors" className="block text-gray-600 font-lato">
                    Published Authors
                  </Link>
                  <Link href="/our-work/book-catalog" className="block text-gray-600 font-lato">
                    Book Catalog
                  </Link>
                  <Link href="/our-work/success-stories" className="block text-gray-600 font-lato">
                    Success Stories
                  </Link>
                  <Link href="/our-work/awards-recognition" className="block text-gray-600 font-lato">
                    Awards & Recognition
                  </Link>
                  <Link href="/our-work/testimonials" className="block text-gray-600 font-lato">
                    Testimonials
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-semibold font-playfair text-gray-900">Resources</div>
                <div className="pl-4 space-y-2">
                  <Link href="/resources/ebook" className="block text-gray-600 font-lato">
                    Download eBook
                  </Link>
                  <Link href="/resources/webinar-series" className="block text-gray-600 font-lato">
                    Webinar Series
                  </Link>
                  <Link href="/resources/community" className="block text-gray-600 font-lato">
                    Community
                  </Link>
                  <Link href="/resources/blog" className="block text-gray-600 font-lato">
                    Blog
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-semibold font-playfair text-gray-900">About Red Thread</div>
                <div className="pl-4 space-y-2">
                  <Link href="/about/our-story" className="block text-gray-600 font-lato">
                    Our Story
                  </Link>
                  <Link href="/about/meet-the-team" className="block text-gray-600 font-lato">
                    Meet the Team
                  </Link>
                  <Link href="/about/why-red-thread" className="block text-gray-600 font-lato">
                    Why Red Thread
                  </Link>
                </div>
              </div>

              <Button className="w-full bg-gray-800 hover:bg-gray-900 font-lato" asChild>
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
