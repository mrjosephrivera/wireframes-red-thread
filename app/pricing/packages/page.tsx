import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Star } from "lucide-react"
import { WireframeNavigation } from "@/components/wireframe-navigation"
import Link from "next/link"

export default function PricingPackagesPage() {
  return (
    <div className="min-h-screen bg-white">
      <WireframeNavigation />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-playfair mb-6">
              Choose Your Publishing Journey
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-lato mb-8">
              Select the perfect package for your goals, timeline, and budget. Each solution is designed to deliver
              exceptional results at every stage of your author journey.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Packages */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Individual Service Packages</h2>
            <p className="text-xl text-gray-600 font-lato">
              Choose one or combine multiple services based on your specific needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* WRITE Together */}
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded border mb-4">
                    Step 1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">WRITE Together</h3>
                  <div className="text-4xl font-bold text-gray-800 mb-2 font-playfair">$12,500</div>
                  <div className="text-gray-600 font-lato">12-week manuscript development</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">12 weekly 1-on-1 coaching sessions</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Complete book concept development</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Detailed manuscript outline</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Writing process guidance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Author community access</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Completed manuscript ready for editing</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-lato" asChild>
                    <Link href="/get-started">
                      Start Writing
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gray-400 text-gray-700 font-lato bg-transparent"
                    asChild
                  >
                    <Link href="/how-we-help/write-together">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* PUBLISH with Confidence */}
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded border mb-4">
                    Step 2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">PUBLISH with Confidence</h3>
                  <div className="text-4xl font-bold text-gray-800 mb-2 font-playfair">$18,500</div>
                  <div className="text-gray-600 font-lato">Complete publishing service</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Professional editing (dev, line, copy)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Custom cover and interior design</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Global distribution setup</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">ISBN registration & legal setup</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Launch strategy & marketing</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Multiple format production</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-lato" asChild>
                    <Link href="/get-started">
                      Start Publishing
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gray-400 text-gray-700 font-lato bg-transparent"
                    asChild
                  >
                    <Link href="/how-we-help/publish-with-confidence">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Grow Your IMPACT */}
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded border mb-4">
                    Step 3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">Grow Your IMPACT</h3>
                  <div className="text-4xl font-bold text-gray-800 mb-2 font-playfair">$22,500</div>
                  <div className="text-gray-600 font-lato">6-month thought leadership program</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Comprehensive media training</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">PR campaign & media outreach</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Speaking opportunity development</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Digital platform optimization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Professional content creation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Industry recognition strategy</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-lato" asChild>
                    <Link href="/get-started">
                      Amplify Impact
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gray-400 text-gray-700 font-lato bg-transparent"
                    asChild
                  >
                    <Link href="/how-we-help/grow-your-impact">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All-In Package */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-gray-800 text-white text-sm rounded border mb-4">
              Most Popular
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Complete Author Journey Package</h2>
            <p className="text-xl text-gray-600 font-lato">
              The complete manuscript-to-thought-leader transformation at significant savings
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-gray-800 bg-white">
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                        <Star className="h-6 w-6 text-gray-800" />
                        <h3 className="text-3xl font-bold text-gray-900 font-playfair">All-In Package</h3>
                      </div>
                      <div className="space-y-2">
                        <div className="text-6xl font-bold text-gray-800 font-playfair">$45,000</div>
                        <div className="text-lg text-gray-500 line-through font-lato">Regular Price: $53,500</div>
                        <div className="text-xl text-gray-700 font-bold font-lato">Save $8,500</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900 font-playfair">Complete Journey Includes:</h4>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-gray-700" />
                          <span className="text-gray-700 font-lato">
                            <strong>WRITE Together:</strong> 12-week manuscript development
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-gray-700" />
                          <span className="text-gray-700 font-lato">
                            <strong>PUBLISH with Confidence:</strong> Complete publishing service
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-gray-700" />
                          <span className="text-gray-700 font-lato">
                            <strong>Grow Your IMPACT:</strong> 6-month thought leadership program
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Button
                        size="lg"
                        className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 font-lato"
                        asChild
                      >
                        <Link href="/get-started">
                          Start Complete Journey
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <p className="text-sm text-gray-500 text-center font-lato">
                        Payment plans available • 30-day money-back guarantee
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-gray-900 font-playfair">Exclusive All-In Bonuses:</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Star className="h-5 w-5 text-gray-700 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900 font-lato">Priority Support</div>
                          <div className="text-gray-600 text-sm font-lato">
                            Direct access to Sierra and priority scheduling
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Star className="h-5 w-5 text-gray-700 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900 font-lato">Hardcover Edition</div>
                          <div className="text-gray-600 text-sm font-lato">
                            Premium hardcover version included at no extra cost
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Star className="h-5 w-5 text-gray-700 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900 font-lato">Audiobook Production</div>
                          <div className="text-gray-600 text-sm font-lato">
                            Professional audiobook creation and distribution
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Star className="h-5 w-5 text-gray-700 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900 font-lato">Ongoing Support</div>
                          <div className="text-gray-600 text-sm font-lato">
                            12 months of continued guidance and support
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Star className="h-5 w-5 text-gray-700 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900 font-lato">VIP Author Events</div>
                          <div className="text-gray-600 text-sm font-lato">
                            Exclusive access to author networking events
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Flexible Payment Options</h2>
            <p className="text-xl text-gray-600 font-lato">
              We offer payment plans to make your publishing journey accessible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Pay in Full</h3>
                <div className="text-3xl font-bold text-gray-800 mb-4 font-playfair">5% Discount</div>
                <p className="text-gray-600 mb-6 font-lato">
                  Save 5% when you pay the full amount upfront for any package
                </p>
                <div className="space-y-2 text-sm text-gray-600 font-lato">
                  <div>• Immediate access to all services</div>
                  <div>• Maximum savings</div>
                  <div>• Priority scheduling</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">3-Month Plan</h3>
                <div className="text-3xl font-bold text-gray-800 mb-4 font-playfair">0% Interest</div>
                <p className="text-gray-600 mb-6 font-lato">
                  Split your investment into 3 equal monthly payments with no additional fees
                </p>
                <div className="space-y-2 text-sm text-gray-600 font-lato">
                  <div>• No interest or fees</div>
                  <div>• Automatic payments</div>
                  <div>• Start immediately</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">6-Month Plan</h3>
                <div className="text-3xl font-bold text-gray-800 mb-4 font-playfair">Low Interest</div>
                <p className="text-gray-600 mb-6 font-lato">
                  Extended payment plan with minimal interest for maximum affordability
                </p>
                <div className="space-y-2 text-sm text-gray-600 font-lato">
                  <div>• Lowest monthly payments</div>
                  <div>• Flexible terms</div>
                  <div>• Easy approval</div>
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
            <h2 className="text-4xl font-bold text-white font-playfair">Ready to Begin Your Author Journey?</h2>
            <p className="text-xl text-gray-300 font-lato">
              Book a free strategy call to discuss your goals, timeline, and which package is right for you. No
              obligation, just expert guidance to help you make the best decision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-gray-800 hover:bg-gray-100 px-12 py-4 text-lg font-lato"
                asChild
              >
                <Link href="/get-started">
                  Book Your Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-800 px-12 py-4 text-lg font-lato bg-transparent"
                asChild
              >
                <Link href="/resources/ebook">
                  Download Free Guide
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-gray-400 text-sm font-lato">
              Free 30-minute consultation • No obligation • Expert guidance included
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
