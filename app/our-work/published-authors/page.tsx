import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Award, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function PublishedAuthorsPage() {
  const authors = [
    {
      id: "sarah-mitchell",
      name: "Dr. Sarah Mitchell",
      title: "Healthcare Innovation Expert",
      headshot: "/professional-headshot.png",
      bio: "Dr. Sarah Mitchell is a leading healthcare innovation expert with over 20 years of experience transforming healthcare systems. She has led digital transformation initiatives at Fortune 500 healthcare companies and now consults for organizations worldwide.",
      books: ["the-future-of-healthcare-leadership"],
      achievements: ["Amazon Bestseller", "Industry Award Winner", "MBA Required Reading"],
    },
    {
      id: "marcus-johnson",
      name: "Marcus Johnson",
      title: "Tech Entrepreneur",
      headshot: "/professional-headshot.png",
      bio: "Marcus Johnson is a serial tech entrepreneur who has founded and scaled three successful startups. His expertise in scaling technology companies has made him a sought-after advisor and keynote speaker at major conferences worldwide.",
      books: ["scaling-beyond-silicon-valley"],
      achievements: ["Wall Street Journal Feature", "TEDx Speaker", "Forbes 40 Under 40"],
    },
    {
      id: "jennifer-rodriguez",
      name: "Jennifer Rodriguez",
      title: "Financial Services CEO",
      headshot: "/professional-headshot.png",
      bio: "Jennifer Rodriguez is the CEO of a leading financial services firm and a champion for women in finance. She has been recognized as one of the most influential women in finance and speaks regularly on leadership and diversity topics.",
      books: ["women-in-finance-breaking-barriers"],
      achievements: ["Forbes Feature", "Industry Recognition", "Women in Finance Award"],
    },
    {
      id: "david-chen",
      name: "David Chen",
      title: "Manufacturing Executive",
      headshot: "/professional-headshot.png",
      bio: "David Chen has over 30 years of experience in manufacturing operations and lean management. His methodologies are now used by Fortune 500 companies and taught in business schools across the country.",
      books: ["lean-manufacturing-revolution"],
      achievements: ["Industry Standard", "Corporate Training", "Manufacturing Excellence Award"],
    },
    {
      id: "lisa-thompson",
      name: "Lisa Thompson",
      title: "Marketing Strategist",
      headshot: "/professional-headshot.png",
      bio: "Lisa Thompson is a digital marketing strategist who has helped hundreds of companies transform their marketing approach. Her innovative strategies have generated millions in revenue for her clients.",
      books: ["digital-marketing-mastery"],
      achievements: ["Podcast Circuit", "Speaking Engagements", "Marketing Innovation Award"],
    },
    {
      id: "robert-williams",
      name: "Robert Williams",
      title: "Real Estate Mogul",
      headshot: "/professional-headshot.png",
      bio: "Robert Williams has built a real estate empire worth over $500 million. He now teaches others how to build wealth through strategic real estate investments and has mentored thousands of investors.",
      books: ["building-wealth-through-real-estate"],
      achievements: ["Real Estate Today Feature", "Conference Keynote", "Real Estate Hall of Fame"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-gray-400 text-gray-700">
                Our Work
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight font-playfair">Published Authors</h1>
              <p className="text-xl text-gray-600 leading-relaxed font-lato max-w-3xl mx-auto">
                Meet the successful entrepreneurs and thought leaders who have transformed their expertise into
                published books through our comprehensive author development programs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 font-lato" asChild>
                <Link href="/get-started">
                  Start Your Author Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 text-gray-700 px-8 py-4 font-lato bg-transparent"
                asChild
              >
                <Link href="/our-work/book-catalog">View Book Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto border">
                <BookOpen className="h-8 w-8 text-gray-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 font-playfair">150+</div>
              <div className="text-gray-600 font-lato">Books Published</div>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto border">
                <Users className="h-8 w-8 text-gray-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 font-playfair">120+</div>
              <div className="text-gray-600 font-lato">Authors Served</div>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto border">
                <Award className="h-8 w-8 text-gray-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 font-playfair">25+</div>
              <div className="text-gray-600 font-lato">Award Winners</div>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto border">
                <TrendingUp className="h-8 w-8 text-gray-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 font-playfair">15+</div>
              <div className="text-gray-600 font-lato">Bestsellers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Authors */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Our Published Authors</h2>
            <p className="text-xl text-gray-600 font-lato">
              Entrepreneurs who leveraged our programs to become published thought leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author) => (
              <Link key={author.id} href={`/authors/${author.id}`}>
                <Card className="border-2 border-gray-300 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-8">
                    <div className="text-center space-y-6">
                      <div className="w-32 h-32 mx-auto">
                        <img
                          src={author.headshot || "/placeholder.svg"}
                          alt={author.name}
                          className="w-full h-full object-cover rounded-full border-4 border-gray-200"
                        />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-gray-900 font-playfair">{author.name}</h3>
                        <p className="text-gray-600 font-lato font-semibold">{author.title}</p>
                      </div>

                      <p className="text-gray-700 font-lato text-sm leading-relaxed">{author.bio}</p>

                      <div className="space-y-3">
                        <div className="text-sm text-gray-600 font-lato font-semibold">Key Achievements:</div>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {author.achievements.map((achievement, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-gray-800 hover:bg-gray-900 font-lato">View Author Profile</Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Author Testimonials */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">What Our Authors Say</h2>
            <p className="text-xl text-gray-600 font-lato">
              Hear directly from the entrepreneurs who transformed their expertise into published success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <p className="text-gray-700 font-lato italic mb-6 text-lg">
                  "Working with Red Thread was the best investment I've made in my business. They didn't just help me
                  write a book – they positioned me as the go-to expert in my industry. My speaking fees increased 400%
                  and I now have a waiting list for my consulting services."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16">
                    <img
                      src="/professional-headshot.png"
                      alt="Amanda Foster"
                      className="w-full h-full object-cover rounded-full border-2 border-gray-200"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 font-lato">Amanda Foster</div>
                    <div className="text-gray-600 text-sm font-lato">Business Strategy Consultant</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <p className="text-gray-700 font-lato italic mb-6 text-lg">
                  "The comprehensive approach from manuscript development to media training was exactly what I needed.
                  My book became a bestseller, and I've been featured in major publications. Red Thread made me a
                  thought leader in my space."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16">
                    <img
                      src="/professional-headshot.png"
                      alt="Michael Torres"
                      className="w-full h-full object-cover rounded-full border-2 border-gray-200"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 font-lato">Michael Torres</div>
                    <div className="text-gray-600 text-sm font-lato">Fintech Entrepreneur</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white font-playfair">Ready to Join Our Published Authors?</h2>
            <p className="text-xl text-gray-300 font-lato">
              Transform your expertise into a published book and establish yourself as a thought leader in your
              industry. Book a strategy call to discuss your author journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-gray-800 hover:bg-gray-100 px-12 py-4 text-lg font-lato"
                asChild
              >
                <Link href="/get-started">
                  Start Your Author Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-800 px-12 py-4 text-lg font-lato bg-transparent"
                asChild
              >
                <Link href="/pricing/packages">View Our Packages</Link>
              </Button>
            </div>
            <p className="text-gray-400 text-sm font-lato">
              Free 30-minute consultation • Custom approach • Proven results
            </p>
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
