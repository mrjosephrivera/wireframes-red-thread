import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ArrowRight, Play, Users, BookOpen } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded border">
                  Premium Author Development
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-playfair">
                  Transform Your Expertise Into
                  <span className="text-gray-700"> Award-Winning</span> Books
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed font-lato">
                  Transform your expertise into published authority with our proven manuscript-to-market publishing
                  system trusted by successful entrepreneurs worldwide.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 font-lato" asChild>
                  <Link href="/how-we-help">
                    Discover Our Proven Process
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-400 text-gray-700 px-8 py-4 font-lato bg-transparent"
                  asChild
                >
                  <Link href="/get-started">
                    <Play className="mr-2 h-5 w-5" />
                    Book a Strategy Call
                  </Link>
                </Button>
              </div>

              <div className="pt-8">
                <p className="text-sm text-gray-500 mb-4 font-lato">As seen on:</p>
                <div className="flex items-center space-x-8">
                  <div className="w-24 h-8 bg-gray-300 rounded"></div>
                  <div className="w-24 h-8 bg-gray-300 rounded"></div>
                  <div className="w-24 h-8 bg-gray-300 rounded"></div>
                  <div className="w-24 h-8 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gray-300 rounded-2xl border-2 border-gray-400 flex items-center justify-center">
                <div className="text-gray-600 font-lato">Hero Image/Video</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Award-Winning Results</h2>
            <p className="text-gray-600 font-lato">Recognized excellence in publishing and author development</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-24 h-16 bg-gray-200 rounded border"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Who We Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-lato">
              We specialize in helping successful entrepreneurs and business leaders transform their expertise into
              published authority
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1: Expertise Without Direction */}
            <div className="text-center space-y-6 p-8 border-2 border-gray-300 rounded-lg">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto border">
                <Users className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-playfair">Established Entrepreneurs</h3>
              <div className="space-y-4">
                <p className="text-gray-600 font-lato font-semibold">You have the expertise, but...</p>
                <ul className="text-gray-600 space-y-2 font-lato text-left">
                  <li>• Don't know how to structure your knowledge into a book</li>
                  <li>• Struggle to find time for writing while running your business</li>
                  <li>• Feel overwhelmed by the publishing process</li>
                  <li>• Want to establish thought leadership but don't know where to start</li>
                </ul>
              </div>
              <div className="pt-4">
                <Button className="bg-gray-800 hover:bg-gray-900 text-white font-lato" asChild>
                  <Link href="/how-we-help/write-together">
                    See How We Help
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Column 2: Time-Constrained Leaders */}
            <div className="text-center space-y-6 p-8 border-2 border-gray-300 rounded-lg">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto border">
                <BookOpen className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-playfair">Busy Business Leaders</h3>
              <div className="space-y-4">
                <p className="text-gray-600 font-lato font-semibold">You need to publish, but...</p>
                <ul className="text-gray-600 space-y-2 font-lato text-left">
                  <li>• Have limited time to dedicate to writing</li>
                  <li>• Need professional quality without the learning curve</li>
                  <li>• Want to maintain focus on your core business</li>
                  <li>• Require expert guidance through every step</li>
                </ul>
              </div>
              <div className="pt-4">
                <Button className="bg-gray-800 hover:bg-gray-900 text-white font-lato" asChild>
                  <Link href="/how-we-help/publish-with-confidence">
                    Explore Full Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Column 3: Authority Builders */}
            <div className="text-center space-y-6 p-8 border-2 border-gray-300 rounded-lg">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto border">
                <Star className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-playfair">Aspiring Thought Leaders</h3>
              <div className="space-y-4">
                <p className="text-gray-600 font-lato font-semibold">You want maximum impact, but...</p>
                <ul className="text-gray-600 space-y-2 font-lato text-left">
                  <li>• Don't know how to leverage your book for speaking opportunities</li>
                  <li>• Need media training and PR support</li>
                  <li>• Want to build a platform beyond just publishing</li>
                  <li>• Seek ongoing visibility and thought leadership positioning</li>
                </ul>
              </div>
              <div className="pt-4">
                <Button className="bg-gray-800 hover:bg-gray-900 text-white font-lato" asChild>
                  <Link href="/how-we-help/grow-your-impact">
                    Maximize Impact
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 font-lato mb-6">Ready to transform your expertise into published authority?</p>
            <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 font-lato" asChild>
              <Link href="/get-started">
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Our Proven 3-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-lato">
              From manuscript to thought leadership, we guide you through every step of your publishing journey
            </p>
          </div>

          {/* Step 1: Write */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded border">
                  Manuscript Development
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-playfair">Write</h3>
                <p className="text-lg text-gray-600 font-lato">
                  Manuscript development and coaching services for compelling nonfiction books. Our expert team helps
                  you structure your ideas, develop your voice, and create content that resonates with your target
                  audience.
                </p>
                <Button className="bg-gray-800 hover:bg-gray-900 text-white font-lato">
                  Start Writing Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-gray-300 rounded-2xl border-2 border-gray-400 flex items-center justify-center">
                  <div className="text-gray-600 font-lato">Writing Process Image</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Publish */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <div className="aspect-[4/3] bg-gray-300 rounded-2xl border-2 border-gray-400 flex items-center justify-center">
                  <div className="text-gray-600 font-lato">Publishing Process Image</div>
                </div>
              </div>
              <div className="space-y-6 lg:order-2">
                <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded border">
                  Professional Publishing
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-playfair">Publish</h3>
                <p className="text-lg text-gray-600 font-lato">
                  Full-service publishing including editing, design, distribution, and award-winning positioning. We
                  handle every aspect of bringing your book to market with professional quality and strategic
                  positioning.
                </p>
                <Button className="bg-gray-800 hover:bg-gray-900 text-white font-lato">
                  Explore Publishing Options
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Step 3: Impact */}
          <div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded border">
                  Thought Leadership
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-playfair">Impact</h3>
                <p className="text-lg text-gray-600 font-lato">
                  Media training, PR support, speaking opportunities, and thought leadership visibility strategies.
                  Transform your published book into a platform for influence and business growth.
                </p>
                <Button className="bg-gray-800 hover:bg-gray-900 text-white font-lato">
                  Maximize Your Impact
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-gray-300 rounded-2xl border-2 border-gray-400 flex items-center justify-center">
                  <div className="text-gray-600 font-lato">Impact & Media Image</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">What Our Authors Say</h2>
            <p className="text-xl text-gray-600 font-lato">
              Success stories from entrepreneurs who transformed their expertise into bestselling books
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-2 border-gray-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 fill-gray-400 text-gray-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic font-lato">
                    "Red Thread Publishing transformed my business expertise into a bestselling book that opened doors I
                    never imagined. Sierra and her team are simply exceptional."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 border"></div>
                    <div>
                      <p className="font-semibold text-gray-900 font-lato">Sarah Johnson</p>
                      <p className="text-gray-600 text-sm font-lato">CEO, Tech Innovations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bookshelf */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Our Published Authors</h2>
            <p className="text-xl text-gray-600 font-lato">64 published books and counting - see the success stories</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-300 rounded-lg border-2 border-gray-400 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                  <div className="text-gray-600 font-lato text-sm">Book {i}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 font-playfair">Meet Sierra Melcher</h2>
              <p className="text-lg text-gray-600 font-lato">
                With 4.5 years of dedicated experience in author development, Sierra Melcher has built Red Thread
                Publishing into a premier destination for entrepreneurs ready to share their expertise with the world.
              </p>
              <p className="text-lg text-gray-600 font-lato">
                Under her leadership, we've guided 64 successful entrepreneurs through their complete publishing
                journey, from initial manuscript to award-winning thought leadership positioning.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center p-4 border border-gray-300 rounded">
                  <div className="text-3xl font-bold text-gray-800 font-playfair">64+</div>
                  <div className="text-gray-600 font-lato">Books Published</div>
                </div>
                <div className="text-center p-4 border border-gray-300 rounded">
                  <div className="text-3xl font-bold text-gray-800 font-playfair">4.5</div>
                  <div className="text-gray-600 font-lato">Years Experience</div>
                </div>
                <div className="text-center p-4 border border-gray-300 rounded">
                  <div className="text-3xl font-bold text-gray-800 font-playfair">100%</div>
                  <div className="text-gray-600 font-lato">Success Rate</div>
                </div>
              </div>
              <div className="pt-6">
                <Button className="bg-gray-800 hover:bg-gray-900 text-white font-lato" asChild>
                  <Link href="/about/meet-the-team">
                    Meet Our Full Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-300 rounded-2xl border-2 border-gray-400 flex items-center justify-center">
                <div className="text-gray-600 font-lato">Sierra Melcher Photo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Free Resources</h2>
            <p className="text-xl text-gray-600 font-lato">Start your author journey with our expert guidance</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Play className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Free Webinar</h3>
                <p className="text-gray-600 mb-6 font-lato">
                  "From Expertise to Authority: The 3-Step Process to Becoming a Published Thought Leader"
                </p>
                <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-lato">Register Now</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Users className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Join Our Community</h3>
                <p className="text-gray-600 mb-6 font-lato">
                  Connect with fellow entrepreneurs and published authors in our exclusive community
                </p>
                <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-lato">Join Community</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <BookOpen className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Download eBook</h3>
                <p className="text-gray-600 mb-6 font-lato">
                  "The Entrepreneur's Guide to Writing and Publishing Your First Book"
                </p>
                <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-lato">Download Free</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white font-playfair">
              Ready to Transform Your Expertise Into a Published Book?
            </h2>
            <p className="text-xl text-gray-300 font-lato">
              Join the ranks of successful entrepreneurs who've built their thought leadership through publishing. Book
              a strategy call today and discover how we can bring your book to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-gray-800 hover:bg-gray-100 px-12 py-4 text-lg font-lato"
                asChild
              >
                <Link href="/get-started">
                  Book Your Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-800 px-12 py-4 text-lg font-lato bg-transparent"
                asChild
              >
                <Link href="/our-work/book-catalog">
                  Browse Our Published Books
                  <BookOpen className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-gray-400 text-sm font-lato">
              Free 30-minute consultation • No obligation • Immediate insights
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
                  <Link href="#" className="hover:text-white font-lato">
                    Manuscript Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white font-lato">
                    Publishing Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white font-lato">
                    Media Training
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white font-lato">
                    Thought Leadership
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-lato">Resources</h4>
              <ul className="space-y-2 text-gray-400 font-lato">
                <li>
                  <Link href="#" className="hover:text-white font-lato">
                    Free Webinar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white font-lato">
                    Author Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white font-lato">
                    Publishing Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white font-lato">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 font-lato">Contact</h4>
              <ul className="space-y-2 text-gray-400 font-lato">
                <li>hello@redthreadpublishing.com</li>
                <li>(555) 123-4567</li>
                <li>Book a Strategy Call</li>
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
