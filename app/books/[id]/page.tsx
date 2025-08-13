import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Award, Calendar, User, BookOpen, Star } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const books = {
  "the-future-of-healthcare-leadership": {
    title: "The Future of Healthcare Leadership",
    author: "Dr. Sarah Mitchell",
    authorId: "sarah-mitchell",
    genre: "Healthcare",
    publishDate: "2024",
    pages: 284,
    isbn: "978-1-234567-89-0",
    publisher: "Red Thread Publishing",
    cover: "/professional-book-cover.png",
    description:
      "A comprehensive guide to leading digital transformation initiatives in healthcare organizations and building patient-centered care systems.",
    longDescription:
      "In 'The Future of Healthcare Leadership,' Dr. Sarah Mitchell draws on her 20+ years of experience in healthcare innovation to provide a roadmap for leaders navigating the complex landscape of modern healthcare. This book addresses the critical challenges facing healthcare organizations today, from digital transformation and patient experience to regulatory compliance and operational efficiency. Through real-world case studies, practical frameworks, and actionable insights, Dr. Mitchell demonstrates how healthcare leaders can drive meaningful change while maintaining the highest standards of patient care. The book covers essential topics including telemedicine implementation, AI integration, change management, and building high-performance healthcare teams. Whether you're a C-suite executive, department head, or emerging leader, this book provides the tools and strategies needed to lead healthcare organizations into the future.",
    awards: ["Healthcare Innovation Award", "Amazon Bestseller", "MBA Required Reading"],
    tableOfContents: [
      "Chapter 1: The Healthcare Leadership Imperative",
      "Chapter 2: Digital Transformation in Healthcare",
      "Chapter 3: Patient-Centered Care Design",
      "Chapter 4: Leading Through Change",
      "Chapter 5: Technology Integration Strategies",
      "Chapter 6: Building High-Performance Teams",
      "Chapter 7: Regulatory Navigation",
      "Chapter 8: Measuring Success and Impact",
      "Chapter 9: The Future of Healthcare Delivery",
      "Chapter 10: Your Leadership Action Plan",
    ],
    keyTakeaways: [
      "Framework for leading digital transformation in healthcare",
      "Strategies for improving patient experience and outcomes",
      "Best practices for technology adoption and integration",
      "Change management techniques for healthcare environments",
      "Methods for building and leading high-performance teams",
    ],
    targetAudience: [
      "Healthcare executives and C-suite leaders",
      "Department heads and middle management",
      "Healthcare consultants and advisors",
      "MBA students studying healthcare management",
      "Emerging leaders in healthcare organizations",
    ],
    testimonials: [
      {
        quote:
          "Dr. Mitchell's book is now required reading for our leadership development program. The practical frameworks and real-world examples make it invaluable for any healthcare leader.",
        author: "John Smith",
        title: "CEO, Regional Medical Center",
      },
      {
        quote:
          "This book perfectly captures the challenges and opportunities facing healthcare leaders today. The digital transformation strategies alone are worth the price of admission.",
        author: "Mary Johnson",
        title: "Chief Innovation Officer, Health System",
      },
    ],
    purchaseLinks: [
      { platform: "Amazon", url: "#", price: "$24.99" },
      { platform: "Barnes & Noble", url: "#", price: "$24.99" },
      { platform: "Apple Books", url: "#", price: "$19.99" },
      { platform: "Kindle", url: "#", price: "$14.99" },
    ],
  },
  "scaling-beyond-silicon-valley": {
    title: "Scaling Beyond Silicon Valley",
    author: "Marcus Johnson",
    authorId: "marcus-johnson",
    genre: "Technology",
    publishDate: "2023",
    pages: 312,
    isbn: "978-1-234567-90-6",
    publisher: "Red Thread Publishing",
    cover: "/professional-book-cover.png",
    description:
      "Practical strategies for tech entrepreneurs looking to scale their startups beyond traditional tech hubs and into global markets.",
    longDescription:
      "In 'Scaling Beyond Silicon Valley,' serial entrepreneur Marcus Johnson shares the hard-won lessons from building and scaling three successful technology companies. This book challenges the conventional wisdom that successful tech companies must be based in traditional tech hubs like Silicon Valley. Through detailed case studies, practical frameworks, and actionable strategies, Johnson demonstrates how entrepreneurs can build world-class technology companies from anywhere in the world. The book covers everything from remote team building and global talent acquisition to international market expansion and cross-cultural management. Johnson also addresses the unique challenges and opportunities that come with building distributed teams, managing across time zones, and creating company culture in a remote-first environment. Whether you're a first-time entrepreneur or a seasoned executive looking to expand globally, this book provides the roadmap for scaling your technology company beyond geographical boundaries.",
    awards: ["Tech Book of the Year", "Entrepreneur's Choice", "Wall Street Journal Bestseller"],
    tableOfContents: [
      "Chapter 1: The Myth of Geographic Necessity",
      "Chapter 2: Building Remote-First Culture",
      "Chapter 3: Global Talent Acquisition Strategies",
      "Chapter 4: Managing Distributed Teams",
      "Chapter 5: International Market Expansion",
      "Chapter 6: Cross-Cultural Communication",
      "Chapter 7: Time Zone Management",
      "Chapter 8: Scaling Operations Globally",
      "Chapter 9: Legal and Regulatory Considerations",
      "Chapter 10: The Future of Distributed Companies",
    ],
    keyTakeaways: [
      "Strategies for building successful remote-first companies",
      "Framework for global talent acquisition and management",
      "Best practices for international market expansion",
      "Techniques for managing distributed teams effectively",
      "Methods for creating strong company culture remotely",
    ],
    targetAudience: [
      "Tech entrepreneurs and startup founders",
      "Technology executives and leaders",
      "Remote team managers and directors",
      "Business school students and faculty",
      "Investors and venture capitalists",
    ],
    testimonials: [
      {
        quote:
          "Marcus has cracked the code on building global tech companies. This book is essential reading for any entrepreneur looking to scale beyond traditional boundaries.",
        author: "Sarah Chen",
        title: "Partner, TechVentures Capital",
      },
      {
        quote:
          "The practical strategies in this book helped us expand our team globally and increase our talent pool 10x. Game-changing insights for modern entrepreneurs.",
        author: "David Park",
        title: "Founder & CEO, CloudTech Solutions",
      },
    ],
    purchaseLinks: [
      { platform: "Amazon", url: "#", price: "$26.99" },
      { platform: "Barnes & Noble", url: "#", price: "$26.99" },
      { platform: "Apple Books", url: "#", price: "$21.99" },
      { platform: "Kindle", url: "#", price: "$16.99" },
    ],
  },
}

export default function BookPage({ params }: { params: { id: string } }) {
  const book = books[params.id as keyof typeof books]

  if (!book) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Back Navigation */}
      <section className="py-6 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <Link
            href="/our-work/book-catalog"
            className="inline-flex items-center text-gray-600 hover:text-gray-800 font-lato"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Book Catalog
          </Link>
        </div>
      </section>

      {/* Book Hero */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="aspect-[3/4] max-w-sm mx-auto">
                  <img
                    src={book.cover || "/placeholder.svg"}
                    alt={book.title}
                    className="w-full h-full object-cover rounded-lg border-4 border-gray-200 shadow-lg"
                  />
                </div>
              </div>

              <div className="md:col-span-3 space-y-6">
                <div>
                  <Badge className="mb-4 bg-gray-100 text-gray-800 border-gray-300">{book.genre}</Badge>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">{book.title}</h1>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-gray-600" />
                      <Link
                        href={`/authors/${book.authorId}`}
                        className="text-lg text-gray-700 hover:text-gray-900 font-lato font-semibold hover:underline"
                      >
                        {book.author}
                      </Link>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-5 w-5" />
                      <span className="font-lato">{book.publishDate}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 font-lato text-lg leading-relaxed">{book.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900 font-lato">Pages:</span>
                    <span className="text-gray-700 font-lato ml-2">{book.pages}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 font-lato">ISBN:</span>
                    <span className="text-gray-700 font-lato ml-2">{book.isbn}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 font-lato">Publisher:</span>
                    <span className="text-gray-700 font-lato ml-2">{book.publisher}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 font-lato">Published:</span>
                    <span className="text-gray-700 font-lato ml-2">{book.publishDate}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-gray-600" />
                    <span className="font-semibold text-gray-900 font-lato">Awards & Recognition:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {book.awards.map((award, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {award}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 font-lato">Purchase Options:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {book.purchaseLinks.map((link, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="justify-between font-lato bg-transparent"
                        asChild
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <span>{link.platform}</span>
                          <span className="font-semibold">{link.price}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* About This Book */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">About This Book</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 font-lato leading-relaxed text-lg">{book.longDescription}</p>
              </div>
            </div>

            {/* Key Takeaways */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">Key Takeaways</h2>
              <ul className="space-y-3">
                {book.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700 font-lato text-lg">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Audience */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">Who Should Read This Book</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {book.targetAudience.map((audience, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <BookOpen className="h-5 w-5 text-gray-600 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">{audience}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Table of Contents */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">Table of Contents</h2>
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {book.tableOfContents.map((chapter, index) => (
                      <li key={index} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-500 font-lato text-sm mt-1 flex-shrink-0">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-gray-700 font-lato">{chapter}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair text-center">What Readers Are Saying</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {book.testimonials.map((testimonial, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-8">
                    <div className="flex space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 font-lato italic mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
                    <div>
                      <div className="font-semibold text-gray-900 font-lato">{testimonial.author}</div>
                      <div className="text-gray-600 text-sm font-lato">{testimonial.title}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Author */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair text-center">About the Author</h2>
            <Card className="border border-gray-200">
              <CardContent className="p-8">
                <div className="flex gap-6 items-start">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src="/professional-headshot.png"
                      alt={book.author}
                      className="w-full h-full object-cover rounded-full border-2 border-gray-200"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 font-playfair">{book.author}</h3>
                      <p className="text-gray-600 font-lato">Author of {book.title}</p>
                    </div>
                    <p className="text-gray-700 font-lato leading-relaxed">
                      Learn more about {book.author.split(" ")[0]} and explore their background, expertise, and other
                      published works.
                    </p>
                    <Button className="bg-gray-800 hover:bg-gray-900 font-lato" asChild>
                      <Link href={`/authors/${book.authorId}`}>
                        <User className="h-4 w-4 mr-2" />
                        View Author Profile
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white font-playfair">Ready to Write Your Own Book?</h2>
            <p className="text-xl text-gray-300 font-lato">
              Join the ranks of published authors and share your expertise with the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100 font-lato" asChild>
                <Link href="/get-started">Start Your Book Journey</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-800 font-lato bg-transparent"
                asChild
              >
                <Link href="/our-work/book-catalog">Browse More Books</Link>
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
