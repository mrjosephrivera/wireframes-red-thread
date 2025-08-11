import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Award, BookOpen, Target } from "lucide-react"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-playfair mb-6">
              Our Story: Transforming Expertise Into Authority
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-lato mb-8">
              Founded with a mission to help successful entrepreneurs share their knowledge with the world, Red Thread
              Publishing has become the premier destination for premium author development.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded border">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold text-gray-900 font-playfair">
                  Empowering Entrepreneurs to Become Published Thought Leaders
                </h2>
                <p className="text-lg text-gray-600 font-lato">
                  We believe that every successful entrepreneur has valuable knowledge that deserves to be shared. Our
                  mission is to bridge the gap between expertise and published authority, providing the guidance,
                  support, and professional services needed to transform ideas into award-winning books.
                </p>
              </div>

              <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded border">
                  Our Vision
                </div>
                <h2 className="text-3xl font-bold text-gray-900 font-playfair">
                  A World Where Business Wisdom Is Accessible to All
                </h2>
                <p className="text-lg text-gray-600 font-lato">
                  We envision a future where the most valuable business insights and entrepreneurial wisdom are
                  preserved and shared through high-quality published works, creating a lasting impact on future
                  generations of business leaders.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gray-300 rounded-2xl border-2 border-gray-400 flex items-center justify-center">
                <div className="text-gray-600 font-lato">Mission & Vision Image</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Our Core Values</h2>
            <p className="text-xl text-gray-600 font-lato">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Award className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Excellence</h3>
                <p className="text-gray-600 font-lato">
                  We maintain the highest standards in every aspect of the publishing process
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Users className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Partnership</h3>
                <p className="text-gray-600 font-lato">
                  We work closely with our authors as true partners in their publishing journey
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Target className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Results</h3>
                <p className="text-gray-600 font-lato">
                  We're committed to delivering measurable outcomes and lasting impact
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <BookOpen className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Innovation</h3>
                <p className="text-gray-600 font-lato">
                  We continuously evolve our methods to stay ahead of industry trends
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Our Journey</h2>
            <p className="text-xl text-gray-600 font-lato">Key milestones in our company's growth</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  year: "2019",
                  title: "Red Thread Publishing Founded",
                  description:
                    "Sierra Melcher establishes Red Thread Publishing with a vision to help entrepreneurs become published thought leaders.",
                },
                {
                  year: "2020",
                  title: "First 10 Books Published",
                  description:
                    "Successfully guided our first cohort of entrepreneurs through the complete publishing process.",
                },
                {
                  year: "2021",
                  title: "Award Recognition",
                  description: "Our authors begin receiving industry awards and recognition for their published works.",
                },
                {
                  year: "2022",
                  title: "Expanded Services",
                  description:
                    "Launched comprehensive media training and thought leadership programs to complement our publishing services.",
                },
                {
                  year: "2023",
                  title: "50+ Books Milestone",
                  description: "Celebrated publishing our 50th book and established our author community platform.",
                },
                {
                  year: "2024",
                  title: "Industry Leadership",
                  description:
                    "Recognized as a premier publishing partner with 64+ published books and expanding international reach.",
                },
              ].map((milestone, i) => (
                <div key={i} className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gray-200 rounded-full border-2 border-gray-400 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-700 font-playfair">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair">{milestone.title}</h3>
                    <p className="text-gray-600 font-lato">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Our Impact by the Numbers</h2>
            <p className="text-xl text-gray-600 font-lato">The results speak for themselves</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 border-2 border-gray-300 rounded-lg">
              <div className="text-4xl font-bold text-gray-800 mb-2 font-playfair">64+</div>
              <div className="text-gray-600 font-lato">Books Published</div>
            </div>
            <div className="text-center p-8 border-2 border-gray-300 rounded-lg">
              <div className="text-4xl font-bold text-gray-800 mb-2 font-playfair">4.5</div>
              <div className="text-gray-600 font-lato">Years of Excellence</div>
            </div>
            <div className="text-center p-8 border-2 border-gray-300 rounded-lg">
              <div className="text-4xl font-bold text-gray-800 mb-2 font-playfair">100%</div>
              <div className="text-gray-600 font-lato">Client Satisfaction</div>
            </div>
            <div className="text-center p-8 border-2 border-gray-300 rounded-lg">
              <div className="text-4xl font-bold text-gray-800 mb-2 font-playfair">25+</div>
              <div className="text-gray-600 font-lato">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white font-playfair">Ready to Become Part of Our Story?</h2>
            <p className="text-xl text-gray-300 font-lato">
              Join the growing community of successful entrepreneurs who have transformed their expertise into published
              authority with Red Thread Publishing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-gray-800 hover:bg-gray-100 px-12 py-4 text-lg font-lato"
                asChild
              >
                <Link href="/get-started">
                  Start Your Publishing Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-800 px-12 py-4 text-lg font-lato bg-transparent"
                asChild
              >
                <Link href="/about/meet-the-team">
                  Meet Our Team
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
