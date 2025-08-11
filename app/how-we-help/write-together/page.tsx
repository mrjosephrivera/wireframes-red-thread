import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Clock, Star, Users, BookOpen, Award } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function WriteTogetherPage() {
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
                  Manuscript Development
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight font-playfair">WRITE Together</h1>
                <p className="text-xl text-gray-600 leading-relaxed font-lato">
                  Transform your expertise into a compelling manuscript with our comprehensive writing and coaching
                  program. From concept to completed draft, we guide you through every step of the writing process.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 font-lato" asChild>
                  <Link href="/get-started">
                    Start Writing Today
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
                <div className="text-gray-600 font-lato">Writing Process Image</div>
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
              Comprehensive manuscript development from concept to completion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 border">
                  <BookOpen className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Book Concept Development</h3>
                <p className="text-gray-600 font-lato">
                  Strategic planning sessions to define your book's core message, target audience, and unique value
                  proposition.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 border">
                  <Users className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">1:1 Writing Coaching</h3>
                <p className="text-gray-600 font-lato">
                  Weekly coaching sessions with experienced writing professionals to guide your manuscript development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 border">
                  <CheckCircle className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Chapter-by-Chapter Review</h3>
                <p className="text-gray-600 font-lato">
                  Detailed feedback and editing suggestions for each chapter as you progress through your manuscript.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 border">
                  <Award className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Content Strategy</h3>
                <p className="text-gray-600 font-lato">
                  Strategic guidance on structuring your content for maximum impact and reader engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 border">
                  <Clock className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Writing Accountability</h3>
                <p className="text-gray-600 font-lato">
                  Regular check-ins and milestone tracking to keep you on schedule and motivated throughout the process.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 border">
                  <Users className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Author Community Access</h3>
                <p className="text-gray-600 font-lato">
                  Exclusive access to our community of authors for support, networking, and collaboration opportunities.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Your Writing Journey</h2>
            <p className="text-xl text-gray-600 font-lato">A structured 6-month process to complete your manuscript</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">
                    Months 1-2: Foundation & Planning
                  </h3>
                  <p className="text-gray-600 font-lato">
                    Book concept development, audience research, detailed outline creation, and writing strategy
                    development.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">
                    Months 3-4: Active Writing Phase
                  </h3>
                  <p className="text-gray-600 font-lato">
                    Intensive writing sessions with weekly coaching, chapter reviews, and continuous feedback to
                    maintain momentum.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">
                    Months 5-6: Refinement & Completion
                  </h3>
                  <p className="text-gray-600 font-lato">
                    Manuscript refinement, final edits, and preparation for the publishing phase with comprehensive
                    review.
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
              Professional manuscript development with expert guidance and support
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-gray-300 bg-gray-50">
              <CardContent className="p-8 text-center">
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-gray-800 mb-2 font-playfair">$15,000 - $25,000</div>
                    <div className="text-gray-600 font-lato">Complete WRITE Together Program</div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-gray-300">
                      <span className="font-lato text-gray-700">6-Month Program Duration</span>
                      <CheckCircle className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-300">
                      <span className="font-lato text-gray-700">Weekly 1:1 Coaching Sessions</span>
                      <CheckCircle className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-300">
                      <span className="font-lato text-gray-700">Complete Manuscript Development</span>
                      <CheckCircle className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="font-lato text-gray-700">Author Community Access</span>
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
                      Start Your Writing Journey
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
              Success stories from entrepreneurs who completed our WRITE Together program
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
                  "The WRITE Together program transformed my scattered ideas into a cohesive, compelling manuscript. The
                  weekly coaching kept me accountable and the feedback was invaluable."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full border"></div>
                  <div>
                    <div className="font-semibold text-gray-900 font-lato">Sarah Chen</div>
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
                  "I had been trying to write my book for years. The structured approach and expert guidance helped me
                  complete my manuscript in just 6 months. Incredible program!"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full border"></div>
                  <div>
                    <div className="font-semibold text-gray-900 font-lato">Michael Rodriguez</div>
                    <div className="text-gray-600 text-sm font-lato">Business Consultant</div>
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
                  "The chapter-by-chapter review process ensured my content was always on track. My manuscript is now
                  ready for publishing and I couldn't be more proud of the result."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full border"></div>
                  <div>
                    <div className="font-semibold text-gray-900 font-lato">Jennifer Walsh</div>
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
            <p className="text-xl text-gray-600 font-lato">Common questions about our WRITE Together program</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  What if I've never written a book before?
                </h3>
                <p className="text-gray-600 font-lato">
                  Our program is specifically designed for first-time authors. We provide comprehensive guidance from
                  concept to completion, ensuring you have all the support needed to succeed regardless of your writing
                  experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  How much time do I need to commit each week?
                </h3>
                <p className="text-gray-600 font-lato">
                  We recommend 8-10 hours per week for writing and program activities. This includes your weekly
                  coaching session, writing time, and review of feedback. The schedule is flexible to accommodate your
                  business commitments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  What happens after I complete my manuscript?
                </h3>
                <p className="text-gray-600 font-lato">
                  Upon completion, you'll have a polished manuscript ready for our PUBLISH with Confidence program. We
                  can seamlessly transition you to the publishing phase or you can choose to work with other publishers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  Do you provide ghostwriting services?
                </h3>
                <p className="text-gray-600 font-lato">
                  No, our focus is on coaching you to write your own book. We believe your authentic voice and
                  perspective are what make your book valuable. We guide and support you throughout the writing process
                  while ensuring the work remains genuinely yours.
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
            <h2 className="text-4xl font-bold text-white font-playfair">Ready to Start Writing Your Book?</h2>
            <p className="text-xl text-gray-300 font-lato">
              Join our WRITE Together program and transform your expertise into a compelling manuscript with expert
              guidance and support every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-gray-800 hover:bg-gray-100 px-12 py-4 text-lg font-lato"
                asChild
              >
                <Link href="/get-started">
                  Start Your Writing Journey
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
            <p className="text-gray-400 text-sm font-lato">Free consultation • Custom approach • 6-month program</p>
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
