import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play, Calendar, Clock, Users, Download } from "lucide-react"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function WebinarSeriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded border mb-6">
              Free Webinar Series
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-playfair mb-6">
              From Expertise to Authority: Master the Publishing Process
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-lato mb-8">
              Join our comprehensive webinar series and learn the exact system we use to help entrepreneurs become
              published thought leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 font-lato">
                Register for Next Session
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 text-gray-700 px-8 py-4 font-lato bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Previous Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Upcoming Live Sessions</h2>
            <p className="text-xl text-gray-600 font-lato">
              Join us live for interactive Q&A and personalized guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded border">
                    Live Session
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="text-sm font-lato">247 registered</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">The 3-Step Publishing Blueprint</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-3" />
                    <span className="font-lato">Tuesday, March 15, 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-3" />
                    <span className="font-lato">2:00 PM - 3:30 PM EST</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 font-lato">
                  Learn our proven system for taking your expertise from concept to published book in 90 days or less.
                </p>

                <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-lato">
                  Register Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded border">
                    Live Session
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="text-sm font-lato">189 registered</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  Marketing Your Book for Maximum Impact
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-3" />
                    <span className="font-lato">Thursday, March 22, 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-3" />
                    <span className="font-lato">2:00 PM - 3:30 PM EST</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 font-lato">
                  Discover the marketing strategies that turn published authors into recognized thought leaders.
                </p>

                <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-lato">
                  Register Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* On-Demand Library */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">On-Demand Webinar Library</h2>
            <p className="text-xl text-gray-600 font-lato">Access our complete collection of past webinars</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Finding Your Book's Unique Angle",
                duration: "45 min",
                views: "1,247",
              },
              {
                title: "The Publishing Timeline: What to Expect",
                duration: "52 min",
                views: "892",
              },
              {
                title: "Building Your Author Platform",
                duration: "38 min",
                views: "1,156",
              },
              {
                title: "Working with Editors and Designers",
                duration: "41 min",
                views: "734",
              },
              {
                title: "Book Launch Strategies That Work",
                duration: "49 min",
                views: "1,023",
              },
              {
                title: "Turning Your Book into Speaking Opportunities",
                duration: "44 min",
                views: "856",
              },
            ].map((webinar, i) => (
              <Card key={i} className="border-2 border-gray-300 group cursor-pointer hover:border-gray-400">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gray-300 rounded border-2 border-gray-400 flex items-center justify-center mb-4">
                    <Play className="h-12 w-12 text-gray-600" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 font-playfair">{webinar.title}</h3>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="font-lato">{webinar.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="font-lato">{webinar.views} views</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-lato">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Never Miss a Session</h2>
                  <p className="text-gray-600 font-lato">
                    Get notified about upcoming webinars and gain access to our exclusive content library.
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

                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 font-lato">
                    Join Webinar Series
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
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
              Ready to Fast-Track Your Publishing Journey?
            </h2>
            <p className="text-xl text-gray-300 font-lato">
              You've learned the process - now let's make it personal. Book a one-on-one strategy call to create your
              custom publishing roadmap and timeline.
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
                <Link href="/resources/ebook">
                  Download Free eBook
                  <Download className="ml-2 h-5 w-5" />
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
