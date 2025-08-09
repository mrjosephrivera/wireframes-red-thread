import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, CheckCircle, BookOpen, Play, ArrowRight } from "lucide-react"
import Link from "next/link"
import { WireframeNavigation } from "@/components/wireframe-navigation"

export default function EbookPage() {
  return (
    <div className="min-h-screen bg-white">
      <WireframeNavigation />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded border">
                  Free Resource
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-playfair">
                  The Entrepreneur's Guide to Writing and Publishing Your First Book
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed font-lato">
                  A comprehensive 50-page guide that walks you through every step of the publishing process, from
                  initial concept to bestseller status.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 font-playfair">What You'll Learn:</h3>
                <div className="space-y-3">
                  {[
                    "How to identify your unique expertise and angle",
                    "The 3-step process from manuscript to market",
                    "Publishing options: Traditional vs. Self-Publishing",
                    "Marketing strategies that actually work",
                    "Building thought leadership through your book",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-lato">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 font-lato">
                Download Free eBook
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] bg-gray-300 rounded-2xl border-2 border-gray-400 flex items-center justify-center max-w-md mx-auto">
                <div className="text-center">
                  <BookOpen className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <div className="text-gray-600 font-lato">eBook Cover</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Form Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Get Your Free Copy</h2>
                  <p className="text-gray-600 font-lato">
                    Enter your details below to download the complete guide instantly.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">First Name</label>
                      <div className="h-12 bg-gray-100 border-2 border-gray-300 rounded"></div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">Last Name</label>
                      <div className="h-12 bg-gray-100 border-2 border-gray-300 rounded"></div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">Email Address</label>
                    <div className="h-12 bg-gray-100 border-2 border-gray-300 rounded"></div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">
                      Company/Business (Optional)
                    </label>
                    <div className="h-12 bg-gray-100 border-2 border-gray-300 rounded"></div>
                  </div>

                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 font-lato">
                    Download Your Free eBook
                    <Download className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-sm text-gray-500 text-center font-lato">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Ready to Take the Next Step?</h2>
            <p className="text-xl text-gray-600 font-lato">Explore how we can help you publish your book</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6 border"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Free Consultation</h3>
                <p className="text-gray-600 mb-6 font-lato">Book a 30-minute strategy call to discuss your book idea</p>
                <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-lato" asChild>
                  <Link href="/get-started">Book Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6 border"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Join Our Community</h3>
                <p className="text-gray-600 mb-6 font-lato">
                  Connect with other aspiring authors in our Skool community
                </p>
                <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-lato" asChild>
                  <Link href="/resources/community">Join Community</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6 border"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Watch Our Webinar</h3>
                <p className="text-gray-600 mb-6 font-lato">Learn our proven 3-step publishing process</p>
                <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-lato" asChild>
                  <Link href="/resources/webinar-series">Watch Now</Link>
                </Button>
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
              Ready to Turn Your Expertise Into Your First Book?
            </h2>
            <p className="text-xl text-gray-300 font-lato">
              You've downloaded the guide - now let's make it happen. Book a strategy call to discuss your book idea and
              get personalized guidance from our publishing experts.
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
                <Link href="/resources/webinar-series">
                  Watch Our Free Webinar
                  <Play className="ml-2 h-5 w-5" />
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
                  <Link href="/resources/webinar-series" className="hover:text-white font-lato">
                    Free Webinar
                  </Link>
                </li>
                <li>
                  <Link href="/resources/community" className="hover:text-white font-lato">
                    Author Community
                  </Link>
                </li>
                <li>
                  <Link href="/resources/ebook" className="hover:text-white font-lato">
                    Publishing Guide
                  </Link>
                </li>
                <li>
                  <Link href="/our-work/testimonials" className="hover:text-white font-lato">
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
