import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Star, Crown } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function PricingPackagesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-gray-400 text-gray-700">
                Investment Options
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight font-playfair">
                Choose Your Author Journey
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-lato max-w-3xl mx-auto">
                From manuscript development to thought leadership, select the package that aligns with your publishing
                goals and business objectives.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 font-lato" asChild>
                <Link href="/get-started">
                  Book Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 text-gray-700 px-8 py-4 font-lato bg-transparent"
                asChild
              >
                <Link href="/our-work/published-authors">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Individual Service Packages</h2>
            <p className="text-xl text-gray-600 font-lato">Choose the specific service that meets your current needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-gray-300 relative">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 border">
                  <div className="w-8 h-8 bg-gray-400 rounded"></div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 font-playfair">WRITE Together</CardTitle>
                <p className="text-gray-600 font-lato">Manuscript Development & Coaching</p>
                <div className="text-4xl font-bold text-gray-800 mt-4 font-playfair">$8,500 - $15,000</div>
                <p className="text-sm text-gray-500 font-lato">Based on complexity & timeline</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">12-16 weekly 1-on-1 coaching sessions</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Complete book concept & outline development</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Target audience strategy & positioning</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Developmental editing & feedback</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Publishing-ready manuscript</span>
                  </div>
                </div>
                <div className="pt-6">
                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-lato" asChild>
                    <Link href="/how-we-help/write-together">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 relative">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 border">
                  <div className="w-8 h-8 bg-gray-400 rounded"></div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 font-playfair">
                  PUBLISH with Confidence
                </CardTitle>
                <p className="text-gray-600 font-lato">Professional Publishing Services</p>
                <div className="text-4xl font-bold text-gray-800 mt-4 font-playfair">$15,000 - $25,000</div>
                <p className="text-sm text-gray-500 font-lato">Based on scope & formats</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Professional editing (developmental, line, copy)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Custom cover & interior design</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Global distribution setup</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">ISBN registration & legal setup</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Launch strategy & marketing support</span>
                  </div>
                </div>
                <div className="pt-6">
                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-lato" asChild>
                    <Link href="/how-we-help/publish-with-confidence">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 relative">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 border">
                  <div className="w-8 h-8 bg-gray-400 rounded"></div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 font-playfair">Grow Your IMPACT</CardTitle>
                <p className="text-gray-600 font-lato">Thought Leadership & Media Training</p>
                <div className="text-4xl font-bold text-gray-800 mt-4 font-playfair">$18,000 - $30,000</div>
                <p className="text-sm text-gray-500 font-lato">Based on campaign scope</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Comprehensive media training & coaching</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">PR campaign & media outreach</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Speaking opportunity development</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Digital platform optimization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-lato">Professional content & collateral</span>
                  </div>
                </div>
                <div className="pt-6">
                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-lato" asChild>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Complete Author Journey</h2>
            <p className="text-xl text-gray-600 font-lato">
              The comprehensive solution for entrepreneurs serious about becoming published thought leaders
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-4 border-gray-800 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gray-800 text-white px-6 py-2 rounded-bl-lg">
                <div className="flex items-center space-x-2">
                  <Crown className="h-4 w-4" />
                  <span className="font-semibold font-lato">MOST POPULAR</span>
                </div>
              </div>

              <CardHeader className="text-center pb-8 pt-12">
                <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Crown className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 font-playfair">All-In Author Package</CardTitle>
                <p className="text-gray-600 font-lato text-lg">
                  Complete journey from manuscript to thought leadership
                </p>
                <div className="text-6xl font-bold text-gray-800 mt-6 font-playfair">$35,000 - $65,000</div>
                <p className="text-gray-500 font-lato">Comprehensive program investment</p>
                <div className="bg-gray-100 rounded-lg p-4 mt-6">
                  <p className="text-gray-700 font-lato">
                    <span className="font-semibold">Save $8,000 - $15,000</span> compared to individual packages
                  </p>
                </div>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 font-playfair">WRITE Together Included</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <Check className="h-4 w-4 text-gray-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-lato">12-16 weekly coaching sessions</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Check className="h-4 w-4 text-gray-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-lato">Complete manuscript development</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Check className="h-4 w-4 text-gray-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-lato">Target audience strategy</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 font-playfair">
                        PUBLISH with Confidence Included
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <Check className="h-4 w-4 text-gray-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-lato">Professional editing & design</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Check className="h-4 w-4 text-gray-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-lato">Global distribution setup</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Check className="h-4 w-4 text-gray-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-lato">Launch strategy</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 font-playfair">Grow Your IMPACT Included</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <Check className="h-4 w-4 text-gray-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-lato">Media training & PR campaign</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Check className="h-4 w-4 text-gray-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-lato">Speaking opportunities</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Check className="h-4 w-4 text-gray-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-lato">Thought leadership positioning</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 font-playfair">Exclusive Bonuses</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <Check className="h-4 w-4 text-gray-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-lato">Priority scheduling & support</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Check className="h-4 w-4 text-gray-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-lato">Quarterly strategy sessions</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Check className="h-4 w-4 text-gray-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-lato">12-month ongoing support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <Button
                    size="lg"
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 text-lg font-lato"
                    asChild
                  >
                    <Link href="/get-started">
                      Start Complete Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <p className="text-center text-gray-500 text-sm mt-4 font-lato">
                    12-18 month comprehensive program • Payment plans available
                  </p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Flexible Payment Options</h2>
            <p className="text-xl text-gray-600 font-lato">Choose the payment plan that works best for your business</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900 font-playfair">Pay in Full</CardTitle>
                <p className="text-gray-600 font-lato">Save with upfront payment</p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-4xl font-bold text-green-600 font-playfair">5% Discount</div>
                <p className="text-gray-700 font-lato">
                  Save money and start your program immediately with full payment
                </p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700 font-lato">Immediate program start</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700 font-lato">5% discount on total investment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700 font-lato">No payment processing delays</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900 font-playfair">3-Month Plan</CardTitle>
                <p className="text-gray-600 font-lato">Spread payments over 3 months</p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-4xl font-bold text-gray-800 font-playfair">0% Interest</div>
                <p className="text-gray-700 font-lato">
                  Split your investment into three equal payments with no additional fees
                </p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700 font-lato">No interest or fees</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700 font-lato">Automatic monthly billing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700 font-lato">Start program immediately</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">What Our Authors Say</h2>
            <p className="text-xl text-gray-600 font-lato">
              Success stories from entrepreneurs who invested in their author journey
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
                  "The All-In Package was the best investment I've made in my business. From manuscript to thought
                  leadership, Red Thread guided me through every step. My book became a bestseller and I'm now a
                  recognized expert in my field."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full border"></div>
                  <div>
                    <div className="font-semibold text-gray-900 font-lato">Sarah Johnson</div>
                    <div className="text-gray-600 text-sm font-lato">Tech Entrepreneur</div>
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
                  "The ROI on my investment has been incredible. My speaking fees increased 400%, my consulting practice
                  grew exponentially, and I've been featured in major publications. Red Thread delivered on every
                  promise."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full border"></div>
                  <div>
                    <div className="font-semibold text-gray-900 font-lato">Michael Chen</div>
                    <div className="text-gray-600 text-sm font-lato">Business Consultant</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 font-lato">
              Common questions about our packages and investment options
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-lato">
                How do you determine the exact price within each range?
              </h3>
              <p className="text-gray-700 font-lato">
                Pricing is customized based on your specific needs, manuscript complexity, timeline, and scope of
                services. During your strategy call, we'll assess your project and provide a detailed quote within the
                stated range.
              </p>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-lato">
                Can I upgrade from an individual package to the All-In Package?
              </h3>
              <p className="text-gray-700 font-lato">
                Many clients start with one service and upgrade later. We'll credit your initial investment toward the
                All-In Package, ensuring you get the full savings benefit.
              </p>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-lato">
                What's included in the 30-day money-back guarantee?
              </h3>
              <p className="text-gray-700 font-lato">
                If you're not completely satisfied with our service within the first 30 days, we'll refund your
                investment in full. We're confident in our process and want you to feel secure in your decision.
              </p>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-lato">
                How long does each program take to complete?
              </h3>
              <p className="text-gray-700 font-lato">
                WRITE Together: 3-6 months, PUBLISH with Confidence: 8-12 weeks, Grow Your IMPACT: 6 months. The All-In
                Package typically takes 12-18 months for the complete journey from manuscript to thought leadership.
              </p>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-lato">
                Do you offer any other payment options?
              </h3>
              <p className="text-gray-700 font-lato">
                We offer the two payment plans shown above. For special circumstances, we may consider custom payment
                arrangements on a case-by-case basis. Discuss your needs during your strategy call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white font-playfair">Ready to Start Your Author Journey?</h2>
            <p className="text-xl text-gray-300 font-lato">
              Book a free 30-minute strategy call to discuss your goals, get a custom quote, and learn how we can help
              you become a published thought leader in your industry.
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
                <Link href="/our-work/published-authors">View Success Stories</Link>
              </Button>
            </div>
            <p className="text-gray-400 text-sm font-lato">
              Free consultation • Custom pricing • No obligation • 30-day guarantee
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
