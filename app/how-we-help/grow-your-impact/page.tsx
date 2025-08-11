import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, Mic, Users, TrendingUp, Award, Camera, Zap } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function GrowYourImpactPage() {
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
                  Thought Leadership
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight font-playfair">Grow Your IMPACT</h1>
                <p className="text-xl text-gray-600 leading-relaxed font-lato">
                  Transform your published book into a platform for thought leadership with comprehensive media
                  training, PR support, and visibility strategies that position you as the go-to expert in your
                  industry.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 font-lato" asChild>
                  <Link href="/get-started">
                    Maximize Your Impact
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
                <div className="text-gray-600 font-lato">Media Training & Impact Image</div>
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
              Comprehensive thought leadership development and media positioning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 border">
                  <Mic className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Media Training</h3>
                <p className="text-gray-600 font-lato">
                  Professional media training including interview techniques, message development, and on-camera
                  presence for television, podcast, and digital media appearances.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 border">
                  <TrendingUp className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">PR Strategy & Outreach</h3>
                <p className="text-gray-600 font-lato">
                  Strategic public relations campaigns including media list development, pitch creation, and ongoing
                  outreach to secure high-value media placements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 border">
                  <Users className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Speaking Opportunities</h3>
                <p className="text-gray-600 font-lato">
                  Identification and securing of speaking engagements at industry conferences, corporate events, and
                  thought leadership forums.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 border">
                  <Camera className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Content Creation</h3>
                <p className="text-gray-600 font-lato">
                  Development of thought leadership content including articles, social media strategies, and multimedia
                  content that reinforces your expert positioning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 border">
                  <Award className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Industry Recognition</h3>
                <p className="text-gray-600 font-lato">
                  Strategic positioning for industry awards, recognition programs, and thought leadership rankings to
                  enhance credibility and visibility.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 border">
                  <Zap className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Digital Presence Optimization</h3>
                <p className="text-gray-600 font-lato">
                  Comprehensive optimization of your digital presence including LinkedIn strategy, personal website
                  enhancement, and social media positioning to amplify your thought leadership reach.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Your Impact Journey</h2>
            <p className="text-xl text-gray-600 font-lato">
              A strategic 6-month program to establish thought leadership
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">
                    Months 1-2: Foundation & Training
                  </h3>
                  <p className="text-gray-600 font-lato">
                    Comprehensive media training, message development, and personal brand positioning. Professional
                    photography and digital presence optimization.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">
                    Months 3-4: Active Outreach & Placement
                  </h3>
                  <p className="text-gray-600 font-lato">
                    Strategic PR campaigns, media outreach, and securing initial speaking engagements and media
                    appearances to build momentum.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">
                    Months 5-6: Amplification & Recognition
                  </h3>
                  <p className="text-gray-600 font-lato">
                    Scaling visibility through high-profile opportunities, award submissions, and establishing ongoing
                    thought leadership platforms and partnerships.
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
              Comprehensive thought leadership development with media training and PR support
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-gray-300 bg-gray-50">
              <CardContent className="p-8 text-center">
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-gray-800 mb-2 font-playfair">$25,000 - $40,000</div>
                    <div className="text-gray-600 font-lato">Complete Grow Your IMPACT Program</div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-gray-300">
                      <span className="font-lato text-gray-700">6-Month Program Duration</span>
                      <CheckCircle className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-300">
                      <span className="font-lato text-gray-700">Professional Media Training</span>
                      <CheckCircle className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-300">
                      <span className="font-lato text-gray-700">Strategic PR Campaigns</span>
                      <CheckCircle className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="font-lato text-gray-700">Speaking Opportunity Placement</span>
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
                      Start Growing Your Impact
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
              Success stories from entrepreneurs who amplified their impact through our program
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
                  "The media training transformed my confidence and message clarity. I've been featured on major
                  podcasts and my speaking fees increased 300%. The ROI has been incredible."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full border"></div>
                  <div>
                    <div className="font-semibold text-gray-900 font-lato">Amanda Foster</div>
                    <div className="text-gray-600 text-sm font-lato">Leadership Consultant</div>
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
                  "From unknown to industry thought leader in 6 months. The PR strategy secured features in Forbes and
                  Harvard Business Review. My business has grown exponentially."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full border"></div>
                  <div>
                    <div className="font-semibold text-gray-900 font-lato">Marcus Johnson</div>
                    <div className="text-gray-600 text-sm font-lato">Fintech Entrepreneur</div>
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
                  "The speaking opportunities alone paid for the program. I now keynote at major conferences and my
                  consulting pipeline is completely full. Best investment I've made."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full border"></div>
                  <div>
                    <div className="font-semibold text-gray-900 font-lato">Dr. Patricia Williams</div>
                    <div className="text-gray-600 text-sm font-lato">Healthcare Executive</div>
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
            <p className="text-xl text-gray-600 font-lato">Common questions about our thought leadership program</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  Do I need to have a published book to start this program?
                </h3>
                <p className="text-gray-600 font-lato">
                  While having a published book significantly enhances your credibility and provides content for thought
                  leadership, we can work with established experts who have other forms of published content or
                  significant industry recognition.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  What types of media opportunities can I expect?
                </h3>
                <p className="text-gray-600 font-lato">
                  Opportunities vary by industry and expertise but typically include podcast interviews, industry
                  publications, conference speaking, webinar hosting, and potential television appearances. We tailor
                  the strategy to your specific goals and market.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  How do you measure success in this program?
                </h3>
                <p className="text-gray-600 font-lato">
                  Success metrics include media placements secured, speaking engagements booked, social media growth,
                  website traffic increases, and ultimately business impact such as new clients, partnerships, or
                  revenue growth attributed to thought leadership activities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  What ongoing support is provided after the program?
                </h3>
                <p className="text-gray-600 font-lato">
                  We provide 3 months of ongoing support after program completion, including continued PR outreach,
                  opportunity identification, and strategic guidance. Extended support packages are available for
                  long-term thought leadership development.
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
            <h2 className="text-4xl font-bold text-white font-playfair">Ready to Amplify Your Impact?</h2>
            <p className="text-xl text-gray-300 font-lato">
              Transform your expertise into thought leadership with our comprehensive media training and PR program.
              Position yourself as the go-to expert in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-gray-800 hover:bg-gray-100 px-12 py-4 text-lg font-lato"
                asChild
              >
                <Link href="/get-started">
                  Start Growing Your Impact
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
            <p className="text-gray-400 text-sm font-lato">Free consultation • Strategic approach • 6-month program</p>
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
