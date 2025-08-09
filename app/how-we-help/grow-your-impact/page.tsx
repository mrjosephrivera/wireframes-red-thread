import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Mic, Users, TrendingUp, Award, Camera, Globe } from "lucide-react"
import { WireframeNavigation } from "@/components/wireframe-navigation"
import Link from "next/link"

export default function GrowYourImpactPage() {
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
                  Step 3: Grow Your IMPACT
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-playfair">
                  Transform Your Book Into Thought Leadership
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed font-lato">
                  Leverage your published work to build a powerful personal brand, secure media opportunities, and
                  establish yourself as the go-to expert in your field.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 font-lato" asChild>
                  <Link href="/get-started">
                    Amplify Your Impact
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
                <div className="text-gray-600 font-lato">Impact & Media Image</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Complete Thought Leadership Program</h2>
            <p className="text-xl text-gray-600 font-lato">
              Everything you need to maximize your book's impact and build lasting influence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Mic className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-playfair">Media Training</h3>
                <ul className="space-y-3 text-gray-600 font-lato">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Interview skills development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Message crafting and delivery</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Podcast appearance coaching</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>TV and radio preparation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Globe className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-playfair">PR & Media Outreach</h3>
                <ul className="space-y-3 text-gray-600 font-lato">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Press release creation and distribution</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Media kit development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Journalist and producer outreach</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Media opportunity coordination</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Users className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-playfair">
                  Speaking Opportunities
                </h3>
                <ul className="space-y-3 text-gray-600 font-lato">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Keynote topic development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Speaker bureau submissions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Conference and event outreach</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Presentation skills coaching</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <TrendingUp className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-playfair">
                  Digital Platform Building
                </h3>
                <ul className="space-y-3 text-gray-600 font-lato">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>LinkedIn thought leadership strategy</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Content calendar development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Social media optimization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Personal website enhancement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Award className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-playfair">Industry Recognition</h3>
                <ul className="space-y-3 text-gray-600 font-lato">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Award submission strategy</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Industry publication outreach</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Thought leadership positioning</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Expert commentary opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Camera className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-playfair">Content & Collateral</h3>
                <ul className="space-y-3 text-gray-600 font-lato">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Professional headshots and photos</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Speaker one-sheet creation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Bio and press materials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Video content development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Timeline */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Your Impact Growth Timeline</h2>
            <p className="text-xl text-gray-600 font-lato">Building thought leadership over 6 months</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  month: "Month 1",
                  title: "Foundation & Training",
                  description:
                    "Media training sessions, message development, and creation of all marketing materials and collateral.",
                },
                {
                  month: "Month 2",
                  title: "Platform Building",
                  description:
                    "Digital platform optimization, content strategy implementation, and initial media outreach campaigns.",
                },
                {
                  month: "Months 3-4",
                  title: "Media & Speaking",
                  description:
                    "Securing podcast interviews, media appearances, and speaking opportunities while building momentum.",
                },
                {
                  month: "Months 5-6",
                  title: "Thought Leadership",
                  description:
                    "Established as go-to expert with regular media appearances, speaking engagements, and industry recognition.",
                },
              ].map((phase, i) => (
                <div key={i} className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gray-200 rounded-full border-2 border-gray-400 flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-700 font-lato text-center">{phase.month}</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Grow Your IMPACT Investment</h2>
            <p className="text-xl text-gray-600 font-lato">
              Comprehensive thought leadership program that maximizes your book's impact
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-gray-800 bg-gray-50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">Grow Your IMPACT Package</h3>
                <div className="text-5xl font-bold text-gray-800 mb-2 font-playfair">$22,500</div>
                <div className="text-gray-600 mb-8 font-lato">Complete 6-month thought leadership program</div>

                <div className="space-y-4 mb-8 text-left">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-700 font-lato">Comprehensive media training and coaching</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-700 font-lato">PR campaign and media outreach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-700 font-lato">Speaking opportunity development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-700 font-lato">Digital platform optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-700 font-lato">Professional content and collateral creation</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 font-lato" asChild>
                    <Link href="/get-started">
                      Amplify Your Impact
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <p className="text-sm text-gray-500 font-lato">Payment plans available • Results guaranteed</p>
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
            <h2 className="text-4xl font-bold text-white font-playfair">Ready to Grow Your Impact?</h2>
            <p className="text-xl text-gray-300 font-lato">
              Transform your published book into a powerful platform for thought leadership and business growth. Book
              your strategy call to discuss your impact goals.
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
                <Link href="/pricing/packages">
                  View All Packages
                  <Award className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-gray-400 text-sm font-lato">
              Free 30-minute consultation • No obligation • Maximize your influence
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
