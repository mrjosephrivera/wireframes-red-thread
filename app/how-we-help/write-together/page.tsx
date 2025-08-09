import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, BookOpen, Users, Clock, Award } from "lucide-react"
import { WireframeNavigation } from "@/components/wireframe-navigation"
import Link from "next/link"

export default function WriteTogetherPage() {
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
                  Step 1: WRITE Together
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-playfair">
                  Transform Your Expertise Into a Compelling Manuscript
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed font-lato">
                  Our manuscript development and coaching program helps you organize your knowledge, find your unique
                  voice, and create content that resonates with your target audience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 font-lato" asChild>
                  <Link href="/get-started">
                    Start Your Manuscript Journey
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
                <div className="text-gray-600 font-lato">Writing Process Image</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">What's Included in WRITE Together</h2>
            <p className="text-xl text-gray-600 font-lato">
              Comprehensive support to take you from idea to finished manuscript
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <BookOpen className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-playfair">
                  Book Concept Development
                </h3>
                <ul className="space-y-3 text-gray-600 font-lato">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Target audience identification</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Unique angle positioning</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Competitive analysis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Book title and subtitle development</span>
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
                  1-on-1 Coaching Sessions
                </h3>
                <ul className="space-y-3 text-gray-600 font-lato">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Weekly 60-minute sessions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Personalized writing guidance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Accountability and motivation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Real-time feedback and direction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Award className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-playfair">
                  Manuscript Structure & Outline
                </h3>
                <ul className="space-y-3 text-gray-600 font-lato">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Detailed chapter outlines</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Content flow optimization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Story arc development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Key message reinforcement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Clock className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-playfair">
                  Writing Process & Timeline
                </h3>
                <ul className="space-y-3 text-gray-600 font-lato">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Customized writing schedule</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Milestone tracking and deadlines</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Progress reviews and adjustments</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Final manuscript preparation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <BookOpen className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-playfair">
                  Content Development Tools
                </h3>
                <ul className="space-y-3 text-gray-600 font-lato">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Writing templates and frameworks</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Research and citation guidance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Case study development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Voice and tone refinement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Users className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-playfair">Community & Support</h3>
                <ul className="space-y-3 text-gray-600 font-lato">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Access to author community</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Peer feedback and support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>Monthly group workshops</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <span>24/7 email support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Your Writing Journey Timeline</h2>
            <p className="text-xl text-gray-600 font-lato">A structured 12-week program to complete your manuscript</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  week: "Weeks 1-2",
                  title: "Foundation & Strategy",
                  description:
                    "Book concept refinement, target audience analysis, competitive positioning, and detailed outline creation.",
                },
                {
                  week: "Weeks 3-6",
                  title: "Core Content Development",
                  description:
                    "Writing the main chapters with weekly coaching sessions, content reviews, and structure optimization.",
                },
                {
                  week: "Weeks 7-10",
                  title: "Content Expansion & Refinement",
                  description:
                    "Adding case studies, examples, and supporting content while refining voice and message clarity.",
                },
                {
                  week: "Weeks 11-12",
                  title: "Manuscript Completion",
                  description:
                    "Final content review, manuscript polishing, and preparation for the editing and publishing phase.",
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">WRITE Together Investment</h2>
            <p className="text-xl text-gray-600 font-lato">
              Professional manuscript development that transforms your expertise into compelling content
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-gray-800 bg-gray-50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">WRITE Together Package</h3>
                <div className="text-5xl font-bold text-gray-800 mb-2 font-playfair">$12,500</div>
                <div className="text-gray-600 mb-8 font-lato">Complete 12-week manuscript development program</div>

                <div className="space-y-4 mb-8 text-left">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-700 font-lato">12 weekly 1-on-1 coaching sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-700 font-lato">Complete book concept and outline development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-700 font-lato">Manuscript structure and content guidance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-700 font-lato">Access to author community and resources</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gray-700" />
                    <span className="text-gray-700 font-lato">Completed manuscript ready for editing</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 font-lato" asChild>
                    <Link href="/get-started">
                      Start Your Manuscript Journey
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
            <h2 className="text-4xl font-bold text-white font-playfair">Ready to Write Your Book?</h2>
            <p className="text-xl text-gray-300 font-lato">
              Transform your expertise into a compelling manuscript with our proven WRITE Together program. Book your
              strategy call to get started today.
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
                <Link href="/how-we-help/publish-with-confidence">
                  See Publishing Options
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
