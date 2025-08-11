import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Calendar } from "lucide-react"
import Link from "next/link"

export default function BookCatalogPage() {
  const featuredBooks = [
    {
      id: 1,
      title: "The Executive's Guide to Digital Transformation",
      author: "Sarah Mitchell",
      category: "Business",
      rating: 4.8,
      reviews: 127,
      publishDate: "2024",
      awards: ["Business Book Award 2024", "Readers' Choice"],
      description: "A comprehensive guide to leading digital transformation initiatives in enterprise organizations.",
      image: "/professional-book-cover.png",
      amazonRating: 4.7,
      goodreadsRating: 4.9,
    },
    {
      id: 2,
      title: "Mindful Leadership in Crisis",
      author: "Dr. James Chen",
      category: "Leadership",
      rating: 4.9,
      reviews: 89,
      publishDate: "2023",
      awards: ["Leadership Excellence Award"],
      description: "Practical strategies for maintaining clarity and composure during organizational challenges.",
      image: "/professional-book-cover.png",
      amazonRating: 4.8,
      goodreadsRating: 4.9,
    },
    {
      id: 3,
      title: "The Innovation Paradox",
      author: "Maria Rodriguez",
      category: "Innovation",
      rating: 4.7,
      reviews: 156,
      publishDate: "2024",
      awards: ["Innovation Book of the Year"],
      description: "Why breakthrough innovations often come from unexpected places and how to foster them.",
      image: "/professional-book-cover.png",
      amazonRating: 4.6,
      goodreadsRating: 4.8,
    },
  ]

  const allBooks = [
    ...featuredBooks,
    {
      id: 4,
      title: "Sustainable Business Practices",
      author: "David Thompson",
      category: "Sustainability",
      rating: 4.6,
      reviews: 73,
      publishDate: "2023",
      awards: ["Green Business Award"],
      description: "A practical approach to implementing sustainable practices in modern business.",
      image: "/professional-book-cover.png",
      amazonRating: 4.5,
      goodreadsRating: 4.7,
    },
    {
      id: 5,
      title: "The Future of Remote Work",
      author: "Lisa Park",
      category: "Workplace",
      rating: 4.8,
      reviews: 94,
      publishDate: "2024",
      awards: ["HR Excellence Award"],
      description: "Strategies for building effective remote teams and maintaining company culture.",
      image: "/professional-book-cover.png",
      amazonRating: 4.7,
      goodreadsRating: 4.9,
    },
    {
      id: 6,
      title: "Data-Driven Decision Making",
      author: "Michael Zhang",
      category: "Analytics",
      rating: 4.7,
      reviews: 112,
      publishDate: "2023",
      awards: ["Analytics Book Award"],
      description: "How to leverage data analytics for strategic business decisions.",
      image: "/professional-book-cover.png",
      amazonRating: 4.6,
      goodreadsRating: 4.8,
    },
  ]

  const categories = ["All", "Business", "Leadership", "Innovation", "Sustainability", "Workplace", "Analytics"]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">Our Published Books</h1>
            <p className="text-xl text-gray-600 mb-8 font-lato">
              Discover the diverse collection of books we've helped bring to life. From business strategy to personal
              development, our authors are making an impact across industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white px-6 py-3 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-gray-900 font-playfair">150+</div>
                <div className="text-sm text-gray-600 font-lato">Books Published</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-gray-900 font-playfair">4.7★</div>
                <div className="text-sm text-gray-600 font-lato">Average Rating</div>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-gray-900 font-playfair">25+</div>
                <div className="text-sm text-gray-600 font-lato">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-playfair">Featured Books</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[3/4] bg-gray-100 relative">
                  <img src={book.image || "/placeholder.svg"} alt={book.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gray-800 text-white">{book.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">{book.title}</h3>
                  <p className="text-gray-600 mb-3 font-lato">by {book.author}</p>
                  <p className="text-gray-600 text-sm mb-4 font-lato">{book.description}</p>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold font-lato">{book.rating}</span>
                      <span className="text-gray-500 text-sm font-lato">({book.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-lato">{book.publishDate}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2 font-lato">Platform Ratings:</div>
                    <div className="flex gap-4 text-sm">
                      <span className="font-lato">Amazon: {book.amazonRating}★</span>
                      <span className="font-lato">Goodreads: {book.goodreadsRating}★</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2 font-lato">Awards:</div>
                    <div className="flex flex-wrap gap-2">
                      {book.awards.map((award, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          <Award className="h-3 w-3 mr-1" />
                          {award}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gray-800 hover:bg-gray-900 font-lato">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Catalog */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-playfair">Complete Catalog</h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-gray-800 hover:bg-gray-900" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="w-20 h-28 bg-gray-100 rounded flex-shrink-0">
                    <img
                      src={book.image || "/placeholder.svg"}
                      alt={book.title}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-gray-100 text-gray-800">{book.category}</Badge>
                    <h3 className="font-bold text-gray-900 mb-1 font-playfair">{book.title}</h3>
                    <p className="text-gray-600 text-sm mb-2 font-lato">by {book.author}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold font-lato">{book.rating}</span>
                      </div>
                      <span className="text-gray-500 text-xs font-lato">({book.reviews})</span>
                      <span className="text-gray-500 text-xs font-lato">{book.publishDate}</span>
                    </div>
                    <p className="text-gray-600 text-xs mb-3 font-lato">{book.description}</p>
                    <Button size="sm" className="bg-gray-800 hover:bg-gray-900 font-lato">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
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
    </div>
  )
}
