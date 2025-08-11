import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, BookOpen, Award, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function PublishedAuthorsPage() {
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Featured Success Stories</h2>
            <p className="text-xl text-gray-600 font-lato">
              Entrepreneurs who leveraged our programs to become published thought leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gray-300 rounded-full border"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-playfair">Dr. Sarah Mitchell</h3>
                    <p className="text-gray-600 font-lato">Healthcare Innovation Expert</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-[3/4] bg-gray-300 rounded border-2 border-gray-400 flex items-center justify-center">
                    <div className="text-gray-600 font-lato text-center">
                      "The Future of
                      <br />
                      Healthcare Leadership"
                      <br />
                      Book Cover
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gray-400 text-gray-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 font-lato">
                    "Red Thread helped me transform 20 years of healthcare experience into a compelling book that's now
                    required reading in several MBA programs."
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Amazon Bestseller
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Industry Award Winner
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gray-300 rounded-full border"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-playfair">Marcus Johnson</h3>
                    <p className="text-gray-600 font-lato">Tech Entrepreneur</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-[3/4] bg-gray-300 rounded border-2 border-gray-400 flex items-center justify-center">
                    <div className="text-gray-600 font-lato text-center">
                      "Scaling Beyond
                      <br />
                      Silicon Valley"
                      <br />
                      Book Cover
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gray-400 text-gray-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 font-lato">
                    "The comprehensive approach from writing to media training positioned me as a thought leader. I now
                    keynote major conferences worldwide."
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Wall Street Journal Feature
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      TEDx Speaker
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gray-300 rounded-full border"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-playfair">Jennifer Rodriguez</h3>
                    <p className="text-gray-600 font-lato">Financial Services CEO</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-[3/4] bg-gray-300 rounded border-2 border-gray-400 flex items-center justify-center">
                    <div className="text-gray-600 font-lato text-center">
                      "Women in Finance:
                      <br />
                      Breaking Barriers"
                      <br />
                      Book Cover
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gray-400 text-gray-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 font-lato">
                    "From manuscript to bestseller in 8 months. The publishing and media training opened doors I never
                    imagined possible."
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Forbes Feature
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Industry Recognition
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gray-300 rounded-full border"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-playfair">David Chen</h3>
                    <p className="text-gray-600 font-lato">Manufacturing Executive</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-[3/4] bg-gray-300 rounded border-2 border-gray-400 flex items-center justify-center">
                    <div className="text-gray-600 font-lato text-center">
                      "Lean Manufacturing
                      <br />
                      Revolution"
                      <br />
                      Book Cover
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gray-400 text-gray-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 font-lato">
                    "The structured writing process helped me organize 30 years of experience into a practical guide
                    that's now used by Fortune 500 companies."
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Industry Standard
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Corporate Training
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gray-300 rounded-full border"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-playfair">Lisa Thompson</h3>
                    <p className="text-gray-600 font-lato">Marketing Strategist</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-[3/4] bg-gray-300 rounded border-2 border-gray-400 flex items-center justify-center">
                    <div className="text-gray-600 font-lato text-center">
                      "Digital Marketing
                      <br />
                      Mastery"
                      <br />
                      Book Cover
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gray-400 text-gray-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 font-lato">
                    "The media training component was game-changing. I've been featured on major podcasts and my
                    consulting rates tripled after publication."
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Podcast Circuit
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Speaking Engagements
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gray-300 rounded-full border"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-playfair">Robert Williams</h3>
                    <p className="text-gray-600 font-lato">Real Estate Mogul</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-[3/4] bg-gray-300 rounded border-2 border-gray-400 flex items-center justify-center">
                    <div className="text-gray-600 font-lato text-center">
                      "Building Wealth
                      <br />
                      Through Real Estate"
                      <br />
                      Book Cover
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gray-400 text-gray-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 font-lato">
                    "Red Thread's all-in approach took me from idea to published author to recognized expert in just one
                    year. The ROI has been incredible."
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Real Estate Today Feature
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Conference Keynote
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gray-600 text-gray-600" />
                  ))}
                </div>
                <p className="text-gray-700 font-lato italic mb-6">
                  "Working with Red Thread was the best investment I've made in my business. They didn't just help me
                  write a book – they positioned me as the go-to expert in my industry. My speaking fees increased 400%
                  and I now have a waiting list for my consulting services."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full border"></div>
                  <div>
                    <div className="font-semibold text-gray-900 font-lato">Amanda Foster</div>
                    <div className="text-gray-600 text-sm font-lato">Business Strategy Consultant</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gray-600 text-gray-600" />
                  ))}
                </div>
                <p className="text-gray-700 font-lato italic mb-6">
                  "The comprehensive approach from manuscript development to media training was exactly what I needed.
                  My book became a bestseller, and I've been featured in major publications. Red Thread made me a
                  thought leader in my space."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full border"></div>
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

      {/* Industries Served */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Industries We Serve</h2>
            <p className="text-xl text-gray-600 font-lato">
              Our authors represent diverse industries and expertise areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Technology & Software",
              "Healthcare & Medical",
              "Financial Services",
              "Real Estate",
              "Manufacturing",
              "Professional Services",
              "Marketing & Advertising",
              "Leadership & Management",
              "Entrepreneurship",
              "Non-Profit & Social Impact",
              "Education & Training",
              "Retail & E-commerce",
            ].map((industry, index) => (
              <div key={index} className="text-center p-6 border border-gray-300 rounded-lg">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 border">
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </div>
                <h3 className="font-semibold text-gray-900 font-lato">{industry}</h3>
              </div>
            ))}
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
