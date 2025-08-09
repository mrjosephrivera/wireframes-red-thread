import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ExternalLink, Calendar, Play, Award } from "lucide-react"
import { WireframeNavigation } from "@/components/wireframe-navigation"
import Link from "next/link"

export default function InTheMediaPage() {
  return (
    <div className="min-h-screen bg-white">
      <WireframeNavigation />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-playfair mb-6">
              Red Thread Publishing in the Media
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-lato mb-8">
              Discover how Red Thread Publishing and our authors have been featured across major media outlets,
              podcasts, and industry publications.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Coverage */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Featured Coverage</h2>
            <p className="text-xl text-gray-600 font-lato">Major media outlets covering our work and success stories</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="aspect-video bg-gray-300 rounded border-2 border-gray-400 flex items-center justify-center mb-6">
                  <div className="text-gray-600 font-lato">Forbes Feature Image</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="font-lato">Forbes</span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="font-lato">March 2024</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-playfair">
                    "The New Wave of Entrepreneur Authors: How Red Thread Publishing is Changing the Game"
                  </h3>
                  <p className="text-gray-600 font-lato">
                    Forbes explores how Red Thread Publishing is revolutionizing the way entrepreneurs share their
                    expertise through high-quality published works.
                  </p>
                  <Button variant="outline" className="border-gray-400 text-gray-700 font-lato bg-transparent">
                    Read Article
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <div className="aspect-video bg-gray-300 rounded border-2 border-gray-400 flex items-center justify-center mb-6">
                  <div className="text-gray-600 font-lato">Entrepreneur Feature Image</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="font-lato">Entrepreneur Magazine</span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="font-lato">February 2024</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-playfair">
                    "From Business Owner to Thought Leader: The Publishing Path"
                  </h3>
                  <p className="text-gray-600 font-lato">
                    Entrepreneur Magazine features Sierra Melcher's insights on how entrepreneurs can leverage
                    publishing to build thought leadership.
                  </p>
                  <Button variant="outline" className="border-gray-400 text-gray-700 font-lato bg-transparent">
                    Read Article
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Appearances */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Podcast & Media Appearances</h2>
            <p className="text-xl text-gray-600 font-lato">
              Sierra Melcher and our team sharing insights across popular podcasts and shows
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                show: "The Entrepreneur Hour",
                host: "John Smith",
                date: "March 15, 2024",
                topic: "Building Authority Through Publishing",
                duration: "45 min",
              },
              {
                show: "Business Growth Podcast",
                host: "Sarah Johnson",
                date: "February 28, 2024",
                topic: "The ROI of Thought Leadership",
                duration: "38 min",
              },
              {
                show: "Author Success Stories",
                host: "Mike Chen",
                date: "February 10, 2024",
                topic: "Behind the Scenes of Publishing",
                duration: "52 min",
              },
              {
                show: "Marketing Masters",
                host: "Lisa Park",
                date: "January 25, 2024",
                topic: "Book Marketing That Works",
                duration: "41 min",
              },
              {
                show: "The Leadership Show",
                host: "David Wilson",
                date: "January 12, 2024",
                topic: "From Expert to Authority",
                duration: "47 min",
              },
              {
                show: "Startup Stories",
                host: "Emily Rodriguez",
                date: "December 20, 2023",
                topic: "Publishing for Business Growth",
                duration: "35 min",
              },
            ].map((appearance, i) => (
              <Card key={i} className="border-2 border-gray-300">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gray-300 rounded border-2 border-gray-400 flex items-center justify-center mb-4">
                    <Play className="h-8 w-8 text-gray-600" />
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600 font-lato">{appearance.show}</div>
                    <h3 className="text-lg font-bold text-gray-900 font-playfair">{appearance.topic}</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-lato">Host: {appearance.host}</span>
                        <span className="font-lato">{appearance.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="font-lato">{appearance.date}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full border-gray-400 text-gray-700 font-lato bg-transparent">
                      <Play className="mr-2 h-4 w-4" />
                      Listen Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Press Releases & Announcements</h2>
            <p className="text-xl text-gray-600 font-lato">Latest news and company announcements</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                date: "March 20, 2024",
                title: "Red Thread Publishing Reaches 64 Published Books Milestone",
                excerpt:
                  "Company celebrates significant growth in helping entrepreneurs become published thought leaders with expanded team and services.",
              },
              {
                date: "February 15, 2024",
                title: "Red Thread Authors Win 5 Industry Awards in Publishing Excellence",
                excerpt:
                  "Multiple Red Thread Publishing authors recognized for outstanding contributions to business literature and thought leadership.",
              },
              {
                date: "January 30, 2024",
                title: "Sierra Melcher Named to '40 Under 40' Publishing Innovators List",
                excerpt:
                  "Red Thread Publishing founder recognized for revolutionary approach to entrepreneur author development and publishing services.",
              },
              {
                date: "December 10, 2023",
                title: "Red Thread Publishing Launches Enhanced Media Training Program",
                excerpt:
                  "New comprehensive program helps published authors maximize their thought leadership impact through strategic media appearances.",
              },
            ].map((release, i) => (
              <Card key={i} className="border-2 border-gray-300">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="font-lato">{release.date}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded border">
                      Press Release
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">{release.title}</h3>
                  <p className="text-gray-600 mb-4 font-lato">{release.excerpt}</p>
                  <Button variant="outline" className="border-gray-400 text-gray-700 font-lato bg-transparent">
                    Read Full Release
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Media Kit & Resources</h2>
            <p className="text-xl text-gray-600 font-lato">
              Everything media professionals need to cover Red Thread Publishing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Award className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-playfair">Company Fact Sheet</h3>
                <p className="text-gray-600 mb-6 font-lato">Key statistics, milestones, and company information</p>
                <Button variant="outline" className="w-full border-gray-400 text-gray-700 font-lato bg-transparent">
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <ExternalLink className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-playfair">High-Res Photos</h3>
                <p className="text-gray-600 mb-6 font-lato">Professional headshots and company images</p>
                <Button variant="outline" className="w-full border-gray-400 text-gray-700 font-lato bg-transparent">
                  Download ZIP
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Play className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-playfair">Video Assets</h3>
                <p className="text-gray-600 mb-6 font-lato">B-roll footage and interview clips</p>
                <Button variant="outline" className="w-full border-gray-400 text-gray-700 font-lato bg-transparent">
                  Access Library
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Calendar className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-playfair">Interview Requests</h3>
                <p className="text-gray-600 mb-6 font-lato">Schedule interviews with Sierra Melcher</p>
                <Button variant="outline" className="w-full border-gray-400 text-gray-700 font-lato bg-transparent">
                  Contact PR Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white font-playfair">Ready to Join Our Success Stories?</h2>
            <p className="text-xl text-gray-300 font-lato">
              Become part of the growing community of entrepreneurs who are making headlines with their published
              expertise. Start your publishing journey today.
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
                  See Our Authors
                  <Award className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-gray-400 text-sm font-lato">
              Free 30-minute consultation • No obligation • Media-worthy results
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
