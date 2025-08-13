"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function BookCatalogPage() {
  const books = [
    {
      id: "the-future-of-healthcare-leadership",
      title: "The Future of Healthcare Leadership",
      author: "Dr. Sarah Mitchell",
      authorId: "sarah-mitchell",
      genre: "Healthcare",
      publishDate: "2024",
      description:
        "A comprehensive guide to leading digital transformation initiatives in healthcare organizations and building patient-centered care systems.",
      cover: "/professional-book-cover.png",
      awards: ["Healthcare Innovation Award", "Amazon Bestseller"],
    },
    {
      id: "scaling-beyond-silicon-valley",
      title: "Scaling Beyond Silicon Valley",
      author: "Marcus Johnson",
      authorId: "marcus-johnson",
      genre: "Technology",
      publishDate: "2023",
      description:
        "Practical strategies for tech entrepreneurs looking to scale their startups beyond traditional tech hubs and into global markets.",
      cover: "/professional-book-cover.png",
      awards: ["Tech Book of the Year", "Entrepreneur's Choice"],
    },
    {
      id: "women-in-finance-breaking-barriers",
      title: "Women in Finance: Breaking Barriers",
      author: "Jennifer Rodriguez",
      authorId: "jennifer-rodriguez",
      genre: "Finance",
      publishDate: "2024",
      description:
        "An inspiring guide for women navigating the financial services industry and strategies for advancing to leadership positions.",
      cover: "/professional-book-cover.png",
      awards: ["Women in Business Award", "Finance Excellence"],
    },
    {
      id: "lean-manufacturing-revolution",
      title: "Lean Manufacturing Revolution",
      author: "David Chen",
      authorId: "david-chen",
      genre: "Manufacturing",
      publishDate: "2023",
      description:
        "Proven methodologies for implementing lean manufacturing principles that reduce waste and increase operational efficiency.",
      cover: "/professional-book-cover.png",
      awards: ["Manufacturing Excellence Award", "Industry Standard"],
    },
    {
      id: "digital-marketing-mastery",
      title: "Digital Marketing Mastery",
      author: "Lisa Thompson",
      authorId: "lisa-thompson",
      genre: "Marketing",
      publishDate: "2024",
      description:
        "Advanced digital marketing strategies that drive customer acquisition and retention in the modern marketplace.",
      cover: "/professional-book-cover.png",
      awards: ["Marketing Innovation Award", "Digital Excellence"],
    },
    {
      id: "building-wealth-through-real-estate",
      title: "Building Wealth Through Real Estate",
      author: "Robert Williams",
      authorId: "robert-williams",
      genre: "Real Estate",
      publishDate: "2023",
      description:
        "A comprehensive guide to real estate investing strategies that build long-term wealth and passive income streams.",
      cover: "/professional-book-cover.png",
      awards: ["Real Estate Book of the Year", "Investment Excellence"],
    },
  ]

  const genres = ["All", "Healthcare", "Technology", "Finance", "Manufacturing", "Marketing", "Real Estate"]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">Book Catalog</h1>
            <p className="text-xl text-gray-600 mb-8 font-lato">
              Explore our collection of published books by industry-leading entrepreneurs and thought leaders. Each book
              represents a journey from expertise to impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white px-6 py-3 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-gray-900 font-playfair">150+</div>
                <div className="text-sm text-gray-600 font-lato">Books Published</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-gray-900 font-playfair">25+</div>
                <div className="text-sm text-gray-600 font-lato">Awards Won</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-gray-900 font-playfair">12</div>
                <div className="text-sm text-gray-600 font-lato">Industries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genre Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {genres.map((genre) => (
              <Button
                key={genre}
                variant={genre === "All" ? "default" : "outline"}
                className={genre === "All" ? "bg-gray-800 hover:bg-gray-900 font-lato" : "font-lato bg-transparent"}
              >
                {genre}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Book Catalog */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <Card key={book.id} className="border border-gray-200 hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={book.cover || "/placeholder.svg"}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-3">
                      <Badge className="bg-gray-100 text-gray-800 border-gray-300">{book.genre}</Badge>

                      <h3 className="text-xl font-bold text-gray-900 font-playfair leading-tight">{book.title}</h3>

                      <div className="flex items-center gap-2 text-gray-600">
                        <User className="h-4 w-4" />
                        <Link
                          href={`/authors/${book.authorId}`}
                          className="font-lato hover:text-gray-800 hover:underline"
                        >
                          {book.author}
                        </Link>
                      </div>

                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span className="font-lato text-sm">{book.publishDate}</span>
                      </div>

                      <p className="text-gray-700 font-lato text-sm leading-relaxed">{book.description}</p>

                      {book.awards.length > 0 && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Award className="h-4 w-4" />
                            <span className="font-lato text-sm font-semibold">Awards:</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {book.awards.map((award, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {award}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <Button className="w-full bg-gray-800 hover:bg-gray-900 font-lato mt-4" asChild>
                        <Link href={`/books/${book.id}`}>View Book Details</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">
              Ready to Join Our Published Authors?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-lato">
              Let us help you bring your book to life and join this impressive catalog of published works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-800 hover:bg-gray-900 font-lato" asChild>
                <Link href="/get-started">Start Your Book Journey</Link>
              </Button>
              <Button size="lg" variant="outline" className="font-lato bg-transparent" asChild>
                <Link href="/how-we-help/write-together">Learn About Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gray-600 rounded border"></div>
                <span className="text-xl font-bold font-lato">Red Thread Publishing</span>
              </div>
              <p className="text-gray-400 font-lato">Premium author development for successful entrepreneurs.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-lato">Services</h4>
              <ul className="space-y-2 text-gray-400 font-lato">
                <li>
                  <Link href="/how-we-help/write-together" className="hover:text-white font-lato">
                    Manuscript Development
                  </Link>
                </li>
                <li>
                  <Link href="/how-we-help/publish-with-confidence" className="hover:text-white font-lato">
                    Publishing Services
                  </Link>
                </li>
                <li>
                  <Link href="/how-we-help/grow-your-impact" className="hover:text-white font-lato">
                    Media Training
                  </Link>
                </li>
                <li>
                  <Link href="/pricing/packages" className="hover:text-white font-lato">
                    View Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-lato">Our Work</h4>
              <ul className="space-y-2 text-gray-400 font-lato">
                <li>
                  <Link href="/our-work/published-authors" className="hover:text-white font-lato">
                    Published Authors
                  </Link>
                </li>
                <li>
                  <Link href="/our-work/book-catalog" className="hover:text-white font-lato">
                    Book Catalog
                  </Link>
                </li>
                <li>
                  <Link href="/our-work/success-stories" className="hover:text-white font-lato">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="/our-work/awards-recognition" className="hover:text-white font-lato">
                    Awards & Recognition
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-lato">Contact</h4>
              <ul className="space-y-2 text-gray-400 font-lato">
                <li>hello@redthreadpublishing.com</li>
                <li>(555) 123-4567</li>
                <li>
                  <Link href="/get-started" className="hover:text-white font-lato">
                    Book a Strategy Call
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 font-lato">
            <p>&copy; {new Date().getFullYear()} Red Thread Publishing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
