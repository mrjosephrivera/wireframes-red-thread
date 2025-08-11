import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, Award, BookOpen, Users, Zap } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function PublishWithConfidencePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-gray-400 text-gray-700">
                  Professional Publishing
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight font-playfair">
                  PUBLISH with Confidence
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed font-lato">
                  Transform your completed manuscript into a professionally published book with our comprehensive
                  publishing services. From editing to distribution, we handle every detail of bringing your book to
                  market.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 font-lato" asChild>
                  <Link href="/get-started">
                    Start Publishing Today
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
              <div className="aspect-video bg-gray-300 rounded-2xl border-2 border-gray-400 flex items-center justify-center">
                <div className="text-gray-600 font-lato">Publishing Process Image</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">What's Included</h2>
            <p className="text-xl text-gray-600 font-lato">
              Complete publishing services from manuscript to market-ready book
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 border">
                  <BookOpen className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Professional Editing</h3>
                <p className="text-gray-600 font-lato">
                  Comprehensive developmental, line, and copy editing to ensure your manuscript meets professional
                  publishing standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 border">
                  <Award className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Book Design & Layout</h3>
                <p className="text-gray-600 font-lato">
                  Professional interior design, typesetting, and cover design that positions your book for success in
                  the marketplace.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 border">
                  <Zap className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">ISBN & Distribution</h3>
                <p className="text-gray-600 font-lato">
                  Complete ISBN registration and distribution setup across major platforms including Amazon, Barnes &
                  Noble, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 border">
                  <Users className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Launch Strategy</h3>
                <p className="text-gray-600 font-lato">
                  Strategic book launch planning including pre-launch marketing, launch week coordination, and
                  post-launch momentum building.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 border">
                  <CheckCircle className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Quality Assurance</h3>
                <p className="text-gray-600 font-lato">
                  Multiple rounds of proofreading and quality checks to ensure your published book meets the highest
                  professional standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 border">
                  <Award className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Award Submissions</h3>
                <p className="text-gray-600 font-lato">
                  Strategic submission to relevant industry awards and recognition programs to enhance your book's
                  credibility and visibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Your Publishing Journey</h2>
            <p className="text-xl text-gray-600 font-lato">
              A comprehensive 4-month process from manuscript to published book
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">Month 1: Editorial Phase</h3>
                  <p className="text-gray-600 font-lato">
                    Comprehensive editing process including developmental editing, line editing, and copy editing to
                    polish your manuscript to professional standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">Month 2: Design & Production</h3>
                  <p className="text-gray-600 font-lato">
                    Professional book design including cover creation, interior layout, and typesetting. ISBN
                    registration and distribution setup.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">
                    Month 3: Pre-Launch Preparation
                  </h3>
                  <p className="text-gray-600 font-lato">
                    Final quality assurance, launch strategy development, marketing material creation, and distribution
                    platform setup.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">Month 4: Launch & Distribution</h3>
                  <p className="text-gray-600 font-lato">
                    Coordinated book launch across all platforms, award submissions, and ongoing support for initial
                    marketing efforts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Investment</h2>
            <p className="text-xl text-gray-600 font-lato">
              Professional publishing services with comprehensive support and quality assurance
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-gray-300 bg-gray-50">
              <CardContent className="p-8 text-center">
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-gray-800 mb-2 font-playfair">$20,000 - $35,000</div>
                    <div className="text-gray-600 font-lato">Complete PUBLISH with Confidence Program</div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-gray-300">
                      <span className="font-lato text-gray-700">4-Month Program Duration</span>
                      <CheckCircle className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-300">
                      <span className="font-lato text-gray-700">Professional Editing & Design</span>
                      <CheckCircle className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-300">
                      <span className="font-lato text-gray-700">Complete Distribution Setup</span>
                      <CheckCircle className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="font-lato text-gray-700">Launch Strategy & Support</span>
                      <CheckCircle className="h-5 w-5 text-gray-600" />
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white rounded border">
                        <div className="font-semibold text-gray-800 font-lato">Pay in Full</div>
                        <div className="text-sm text-gray-600 font-lato">5% discount applied</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded border">
                        <div className="font-semibold text-gray-800 font-lato">3-Month Plan</div>
                        <div className="text-sm text-gray-600 font-lato">0% interest</div>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="w-full bg-gray-800 hover:bg-gray-900 text-white font-lato" asChild>
                    <Link href="/get-started">
                      Start Your Publishing Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Authors Say */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">What Authors Say</h2>
            <p className="text-xl text-gray-600 font-lato">
              Success stories from entrepreneurs who published with our comprehensive program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gray-600 text-gray-600" />
                  ))}
                </div>
                <p className="text-gray-700 font-lato italic mb-6">
                  "The publishing process was seamless and professional. My book looks incredible and the distribution
                  setup made it available everywhere. The quality exceeded my expectations."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full border"></div>
                  <div>
                    <div className="font-semibold text-gray-900 font-lato">David Martinez</div>
                    <div className="text-gray-600 text-sm font-lato">Financial Advisor</div>
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
                  "From editing to launch, every detail was handled professionally. My book won an industry award and
                  became a bestseller. The investment was worth every penny."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full border"></div>
                  <div>
                    <div className="font-semibold text-gray-900 font-lato">Lisa Thompson</div>
                    <div className="text-gray-600 text-sm font-lato">Marketing Executive</div>
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
                  "The launch strategy was brilliant. My book reached bestseller status in the first week. The team's
                  expertise in positioning and marketing made all the difference."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full border"></div>
                  <div>
                    <div className="font-semibold text-gray-900 font-lato">Robert Chen</div>
                    <div className="text-gray-600 text-sm font-lato">Tech Entrepreneur</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 font-lato">Common questions about our publishing services</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  Do I retain full rights to my book?
                </h3>
                <p className="text-gray-600 font-lato">
                  Absolutely. You retain 100% ownership and rights to your book. We provide publishing services while
                  you maintain complete control over your intellectual property and future decisions about your book.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  What formats will my book be available in?
                </h3>
                <p className="text-gray-600 font-lato">
                  Your book will be available in multiple formats including paperback, hardcover, and eBook (Kindle,
                  ePub). We handle the formatting and distribution for all major platforms and retailers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  How do you handle book marketing and promotion?
                </h3>
                <p className="text-gray-600 font-lato">
                  Our publishing package includes launch strategy and initial marketing support. For comprehensive
                  ongoing marketing and media training, we recommend our "Grow Your IMPACT" program which can be added
                  or purchased separately.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  What if I need revisions during the process?
                </h3>
                <p className="text-gray-600 font-lato">
                  We include reasonable revisions at each stage of the process. Our goal is your complete satisfaction
                  with the final product. Additional major revisions beyond the scope can be accommodated for an
                  additional fee.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white font-playfair">Ready to Publish Your Book?</h2>
            <p className="text-xl text-gray-300 font-lato">
              Transform your manuscript into a professionally published book with our comprehensive publishing services.
              From editing to distribution, we handle every detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-gray-800 hover:bg-gray-100 px-12 py-4 text-lg font-lato"
                asChild
              >
                <Link href="/get-started">
                  Start Publishing Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-800 px-12 py-4 text-lg font-lato bg-transparent"
                asChild
              >
                <Link href="/pricing/packages">View All Packages</Link>
              </Button>
            </div>
            <p className="text-gray-400 text-sm font-lato">
              Free consultation • Professional quality • 4-month timeline
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
                  <Link href="/resources/ebook" className="hover:text-white font-lato">
                    Free eBook
                  </Link>
                </li>
                <li>
                  <Link href="/resources/webinar-series" className="hover:text-white font-lato">
                    Webinar Series
                  </Link>
                </li>
                <li>
                  <Link href="/resources/community" className="hover:text-white font-lato">
                    Author Community
                  </Link>
                </li>
                <li>
                  <Link href="/resources/blog" className="hover:text-white font-lato">
                    Blog
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
