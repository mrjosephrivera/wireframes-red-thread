import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Award, Users, Target, BookOpen } from "lucide-react"
import { WireframeNavigation } from "@/components/wireframe-navigation"
import Link from "next/link"

export default function WhyRedThreadPage() {
  return (
    <div className="min-h-screen bg-white">
      <WireframeNavigation />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-playfair mb-6">
              Why Choose Red Thread Publishing?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-lato mb-8">
              Discover what sets us apart from other publishing services and why successful entrepreneurs trust us with
              their most important business asset - their expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">What Makes Us Different</h2>
            <p className="text-xl text-gray-600 font-lato">
              We're not just a publishing service - we're your strategic partner in building thought leadership
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="space-y-8">
              <Card className="border-2 border-gray-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center border flex-shrink-0">
                      <Award className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
                        Proven Track Record of Excellence
                      </h3>
                      <p className="text-gray-600 font-lato">
                        With 64+ published books and numerous industry awards, we have a demonstrated history of
                        transforming entrepreneurs into recognized thought leaders.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center border flex-shrink-0">
                      <Users className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
                        Dedicated Team of Specialists
                      </h3>
                      <p className="text-gray-600 font-lato">
                        Unlike freelance services, you get access to our entire team of editors, designers, marketers,
                        and media specialists working together on your project.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center border flex-shrink-0">
                      <Target className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">Strategic Business Focus</h3>
                      <p className="text-gray-600 font-lato">
                        We understand that your book is a business asset. Every decision is made with your long-term
                        business goals and thought leadership objectives in mind.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <Card className="border-2 border-gray-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center border flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
                        Complete Manuscript-to-Market System
                      </h3>
                      <p className="text-gray-600 font-lato">
                        From initial concept development to media training and thought leadership positioning, we handle
                        every aspect of your publishing journey.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center border flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">
                        Personalized Attention & Support
                      </h3>
                      <p className="text-gray-600 font-lato">
                        You're not just another client. We work with a select number of authors to ensure each receives
                        the personalized attention they deserve.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center border flex-shrink-0">
                      <ArrowRight className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">Beyond Publishing Support</h3>
                      <p className="text-gray-600 font-lato">
                        Our relationship doesn't end at publication. We provide ongoing support for media opportunities,
                        speaking engagements, and thought leadership development.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Red Thread vs. Other Options</h2>
            <p className="text-xl text-gray-600 font-lato">See how we compare to traditional and self-publishing</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Traditional Publishing */}
              <Card className="border-2 border-gray-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center font-playfair">
                    Traditional Publishing
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600 font-lato">Long wait times (1-2 years)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600 font-lato">Limited creative control</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600 font-lato">Low royalty rates</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600 font-lato">Difficult to get accepted</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600 font-lato">Limited marketing support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Self-Publishing */}
              <Card className="border-2 border-gray-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center font-playfair">Self-Publishing</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600 font-lato">Overwhelming process</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600 font-lato">Quality inconsistency</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600 font-lato">Time-intensive</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600 font-lato">Limited credibility</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600 font-lato">No strategic guidance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Red Thread Publishing */}
              <Card className="border-2 border-gray-800 bg-gray-50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center font-playfair">
                    Red Thread Publishing
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-gray-700" />
                      <span className="text-gray-700 font-lato">90-day publishing timeline</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-gray-700" />
                      <span className="text-gray-700 font-lato">Full creative control</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-gray-700" />
                      <span className="text-gray-700 font-lato">100% royalties</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-gray-700" />
                      <span className="text-gray-700 font-lato">Premium quality guaranteed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-gray-700" />
                      <span className="text-gray-700 font-lato">Complete marketing support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Our Results Speak for Themselves</h2>
            <p className="text-xl text-gray-600 font-lato">The numbers that matter to your success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 border-2 border-gray-300 rounded-lg">
              <div className="text-4xl font-bold text-gray-800 mb-2 font-playfair">100%</div>
              <div className="text-gray-600 font-lato">Client Satisfaction Rate</div>
            </div>
            <div className="text-center p-8 border-2 border-gray-300 rounded-lg">
              <div className="text-4xl font-bold text-gray-800 mb-2 font-playfair">90</div>
              <div className="text-gray-600 font-lato">Average Days to Publish</div>
            </div>
            <div className="text-center p-8 border-2 border-gray-300 rounded-lg">
              <div className="text-4xl font-bold text-gray-800 mb-2 font-playfair">25+</div>
              <div className="text-gray-600 font-lato">Industry Awards Won</div>
            </div>
            <div className="text-center p-8 border-2 border-gray-300 rounded-lg">
              <div className="text-4xl font-bold text-gray-800 mb-2 font-playfair">95%</div>
              <div className="text-gray-600 font-lato">Authors Become Thought Leaders</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white font-playfair">
              Ready to Experience the Red Thread Difference?
            </h2>
            <p className="text-xl text-gray-300 font-lato">
              Join the successful entrepreneurs who chose Red Thread Publishing to transform their expertise into
              published authority. Book your strategy call today.
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
                <Link href="/our-work/published-authors">
                  See Our Success Stories
                  <Award className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-gray-400 text-sm font-lato">
              Free 30-minute consultation • No obligation • Discover your potential
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
