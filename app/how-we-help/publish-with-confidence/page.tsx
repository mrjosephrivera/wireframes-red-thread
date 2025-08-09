import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, BookOpen, Award, Palette, Globe, Target } from "lucide-react"
import { WireframeNavigation } from "@/components/wireframe-navigation"
import Link from "next/link"

export default function PublishWithConfidencePage() {
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
                  Step 2: PUBLISH with Confidence
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-playfair">
                  Professional Publishing That Commands Respect
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed font-lato">
                  From manuscript to market-ready book, our full-service publishing program ensures your work meets the
                  highest professional standards and positions you as a credible thought leader.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 font-lato" asChild>
                  <Link href="/get-started">
                    Start Your Publishing Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-400 text-gray-700 px-8 py-4 font-lato bg-transparent"
                  asChild
                >
                  <Link href="/pricing/packages">View Pricing</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gray-300 rounded-2xl border-2 border-gray-400 flex items-center justify-center">
                <div className="text-gray-600 font-lato">Publishing Process Image</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">
              Complete Publishing Service Included
            </h2>
            <p className="text-xl text-gray-600 font-lato">
              Everything you need to transform your manuscript into a professional, market-ready book
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <BookOpen className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-playfair">Professional Editing</h3>
                <ul className="space-y-3 text-gray-600 font-lato">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Developmental editing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Line editing and copyediting</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Proofreading and final review</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Fact-checking and citations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Palette className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-playfair">Award-Winning Design</h3>
                <ul className="space-y-3 text-gray-600 font-lato">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Custom cover design (3 concepts)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Professional interior layout</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Typography and formatting</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Print and digital optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Globe className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-playfair">Global Distribution</h3>
                <ul className="space-y-3 text-gray-600 font-lato">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Amazon KDP setup and optimization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>IngramSpark distribution network</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Major bookstore availability</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>International market access</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Award className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-playfair">ISBN & Legal Setup</h3>
                <ul className="space-y-3 text-gray-600 font-lato">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>ISBN registration and assignment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Copyright registration assistance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Library of Congress cataloging</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Legal compliance and setup</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Target className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-playfair">Launch Strategy</h3>
                <ul className="space-y-3 text-gray-600 font-lato">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Pre-launch marketing plan</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Amazon optimization strategy</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Launch week coordination</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Initial promotion support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <BookOpen className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-playfair">Multiple Formats</h3>
                <ul className="space-y-3 text-gray-600 font-lato">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Paperback print edition</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Hardcover option available</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Kindle eBook format</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Audiobook production available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publishing Timeline */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Your Publishing Timeline</h2>
            <p className="text-xl text-gray-600 font-lato">From manuscript to published book in 8-10 weeks</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  week: "Weeks 1-2",
                  title: "Editing & Content Review",
                  description:
                    "Comprehensive editing process including developmental, line, and copy editing to ensure your content is polished and professional.",
                },
                {
                  week: "Weeks 3-4",
                  title: "Design & Layout",
                  description:
                    "Custom cover design creation and professional interior layout, with your input and approval at each stage.",
                },
                {
                  week: "Weeks 5-6",
                  title: "Production & Setup",
                  description:
                    "File preparation, ISBN registration, distribution setup, and final quality checks before publication.",
                },
                {
                  week: "Weeks 7-8",
                  title: "Launch & Distribution",
                  description:
                    "Book goes live across all platforms with coordinated launch strategy and initial marketing support.",
                },
              ].map((phase, i) => (
                <div key={i} className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gray-200 rounded-full border-2 border-gray-400 flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-700 font-lato text-center">{phase.week}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">{phase.title}</h3>
                    <p className="text-gray-600 font-lato">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">PUBLISH with Confidence Investment</h2>
            <p className="text-xl text-gray-600 font-lato">
              Professional publishing services that position you as a credible thought leader
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-gray-800 bg-gray-50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">PUBLISH with Confidence Package</h3>
                <div className="text-5xl font-bold text-gray-800 mb-2 font-playfair">$18,500</div>
                <div className="text-gray-600 mb-8 font-lato">Complete publishing and distribution service</div>

                <div className="space-y-4 mb-8 text-left">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-700 font-lato">Professional editing (developmental, line, copy)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-700 font-lato">Custom cover and interior design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-700 font-lato">Global distribution setup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-700 font-lato">ISBN registration and legal setup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-700 font-lato">Launch strategy and marketing support</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 font-lato" asChild>
                    <Link href="/get-started">
                      Start Your Publishing Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <p className="text-sm text-gray-500 font-lato">
                    Payment plans available • 30-day money-back guarantee
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white font-playfair">Ready to Publish with Confidence?</h2>
            <p className="text-xl text-gray-300 font-lato">
              Transform your manuscript into a professional, market-ready book that establishes your credibility and
              thought leadership. Book your strategy call today.
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
                <Link href="/how-we-help/grow-your-impact">
                  Explore Impact Services
                  <Target className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-gray-400 text-sm font-lato">
              Free 30-minute consultation • No obligation • Professional results guaranteed
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
