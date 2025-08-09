import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Calendar, BookOpen, TrendingUp } from "lucide-react"
import { WireframeNavigation } from "@/components/wireframe-navigation"
import { ArrowRight, Users } from "lucide-react"
import Link from "next/link"

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-white">
      <WireframeNavigation />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded border mb-6">
              Weekly Newsletter
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-playfair mb-6">
              The Author's Edge Newsletter
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-lato mb-8">
              Get weekly insights, publishing tips, and exclusive content delivered straight to your inbox. Join 2,500+
              entrepreneurs building their thought leadership through books.
            </p>

            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 font-playfair">2,500+</div>
                <div className="text-gray-600 font-lato">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 font-playfair">Weekly</div>
                <div className="text-gray-600 font-lato">Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 font-playfair">5 min</div>
                <div className="text-gray-600 font-lato">Read Time</div>
              </div>
            </div>

            <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 font-lato">
              Subscribe Free
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">What You'll Get Every Week</h2>
            <p className="text-xl text-gray-600 font-lato">Actionable insights to accelerate your publishing journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <BookOpen className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-playfair">Writing Tips</h3>
                <p className="text-gray-600 font-lato">
                  Practical advice for improving your manuscript and writing process
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <TrendingUp className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-playfair">Industry Insights</h3>
                <p className="text-gray-600 font-lato">Latest trends and opportunities in the publishing world</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Mail className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-playfair">Success Stories</h3>
                <p className="text-gray-600 font-lato">Real examples from our published authors and their journeys</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Calendar className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-playfair">Exclusive Content</h3>
                <p className="text-gray-600 font-lato">
                  Subscriber-only resources, templates, and early access to events
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Issues */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Recent Newsletter Issues</h2>
            <p className="text-xl text-gray-600 font-lato">See what our subscribers have been reading</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                issue: "Issue #47",
                date: "March 8, 2024",
                title: "The 5 Biggest Mistakes First-Time Authors Make",
                preview:
                  "Learn how to avoid the common pitfalls that can derail your publishing timeline and budget...",
              },
              {
                issue: "Issue #46",
                date: "March 1, 2024",
                title: "How to Build Your Author Platform Before You Publish",
                preview: "Start building your audience now with these proven strategies that successful authors use...",
              },
              {
                issue: "Issue #45",
                date: "February 23, 2024",
                title: "The ROI of Publishing: What to Expect",
                preview: "Real numbers from our published authors on book sales, speaking fees, and business growth...",
              },
            ].map((newsletter, i) => (
              <Card key={i} className="border-2 border-gray-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600 font-lato">{newsletter.issue}</span>
                    <span className="text-sm text-gray-600 font-lato">{newsletter.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 font-playfair">{newsletter.title}</h3>

                  <p className="text-gray-600 mb-4 font-lato">{newsletter.preview}</p>

                  <Button variant="outline" className="w-full border-gray-400 text-gray-700 font-lato bg-transparent">
                    Read Issue
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Form */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">
                    Subscribe to The Author's Edge
                  </h2>
                  <p className="text-gray-600 font-lato">
                    Join thousands of entrepreneurs getting weekly publishing insights.
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
                      What stage are you at?
                    </label>
                    <div className="h-12 bg-gray-100 border-2 border-gray-300 rounded"></div>
                  </div>

                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 font-lato">
                    Subscribe Free
                    <Mail className="ml-2 h-5 w-5" />
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

      {/* Final CTA */}
      <section className="py-20 bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white font-playfair">
              Ready to Transform Your Weekly Insights Into Action?
            </h2>
            <p className="text-xl text-gray-300 font-lato">
              You're getting the knowledge - now let's create your personalized publishing plan. Book a strategy call to
              turn your expertise into your first book.
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
                <Link href="/resources/community">
                  Join Our Community
                  <Users className="ml-2 h-5 w-5" />
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
