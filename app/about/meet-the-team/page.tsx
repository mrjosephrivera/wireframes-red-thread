import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Linkedin, Mail, Award } from "lucide-react"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function MeetTheTeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-playfair mb-6">
              Meet the Red Thread Publishing Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-lato mb-8">
              Our expert team combines decades of publishing experience with a passion for helping entrepreneurs share
              their knowledge with the world.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded border mb-4">
                Founder & CEO
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Sierra Melcher</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/5] bg-gray-300 rounded-2xl border-2 border-gray-400 flex items-center justify-center">
                  <div className="text-gray-600 font-lato">Sierra Melcher Photo</div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-600 font-lato">
                  With 4.5 years of dedicated experience in author development, Sierra Melcher has built Red Thread
                  Publishing into the premier destination for entrepreneurs ready to share their expertise through
                  published works.
                </p>

                <p className="text-lg text-gray-600 font-lato">
                  Under her leadership, Red Thread Publishing has guided 64+ successful entrepreneurs through their
                  complete publishing journey, from initial manuscript development to award-winning thought leadership
                  positioning.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 border-2 border-gray-300 rounded">
                    <div className="text-2xl font-bold text-gray-800 font-playfair">64+</div>
                    <div className="text-gray-600 font-lato">Books Published</div>
                  </div>
                  <div className="text-center p-4 border-2 border-gray-300 rounded">
                    <div className="text-2xl font-bold text-gray-800 font-playfair">100%</div>
                    <div className="text-gray-600 font-lato">Success Rate</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 font-playfair">Expertise & Specializations:</h3>
                  <ul className="space-y-2 text-gray-600 font-lato">
                    <li>• Manuscript Development & Coaching</li>
                    <li>• Publishing Strategy & Planning</li>
                    <li>• Author Brand Development</li>
                    <li>• Thought Leadership Positioning</li>
                    <li>• Media Training & PR Strategy</li>
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" className="border-gray-400 text-gray-700 font-lato bg-transparent">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="border-gray-400 text-gray-700 font-lato bg-transparent">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Our Core Team</h2>
            <p className="text-xl text-gray-600 font-lato">
              Meet the experts who make your publishing journey seamless and successful
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "Senior Editor",
                specialization: "Manuscript Development",
                experience: "8+ years",
                description:
                  "Specializes in transforming complex business concepts into engaging, accessible content that resonates with target audiences.",
              },
              {
                name: "Michael Chen",
                role: "Publishing Director",
                specialization: "Production Management",
                experience: "10+ years",
                description:
                  "Oversees the entire production process from final manuscript to published book, ensuring quality and timeline adherence.",
              },
              {
                name: "Emily Rodriguez",
                role: "Design Lead",
                specialization: "Book Design & Branding",
                experience: "6+ years",
                description:
                  "Creates compelling book covers and interior designs that capture the essence of each author's message and brand.",
              },
              {
                name: "David Thompson",
                role: "Marketing Strategist",
                specialization: "Author Platform Building",
                experience: "7+ years",
                description:
                  "Develops comprehensive marketing strategies to maximize book visibility and establish thought leadership.",
              },
              {
                name: "Lisa Park",
                role: "Media Relations Manager",
                specialization: "PR & Media Training",
                experience: "9+ years",
                description:
                  "Connects authors with media opportunities and provides training to maximize their impact and visibility.",
              },
              {
                name: "James Wilson",
                role: "Client Success Manager",
                specialization: "Author Support",
                experience: "5+ years",
                description:
                  "Ensures every author receives personalized support throughout their publishing journey and beyond.",
              },
            ].map((member, i) => (
              <Card key={i} className="border-2 border-gray-300">
                <CardContent className="p-6 text-center">
                  <div className="aspect-square bg-gray-300 rounded-full border-2 border-gray-400 flex items-center justify-center mx-auto mb-6 max-w-32">
                    <div className="text-gray-600 font-lato text-sm">Photo</div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">{member.name}</h3>
                  <div className="text-gray-700 font-semibold mb-1 font-lato">{member.role}</div>
                  <div className="text-gray-600 text-sm mb-2 font-lato">{member.specialization}</div>
                  <div className="text-gray-500 text-sm mb-4 font-lato">{member.experience} experience</div>

                  <p className="text-gray-600 text-sm mb-6 font-lato">{member.description}</p>

                  <div className="flex justify-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-400 text-gray-700 font-lato bg-transparent"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-400 text-gray-700 font-lato bg-transparent"
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Our Team Culture</h2>
            <p className="text-xl text-gray-600 font-lato">What makes working with Red Thread Publishing different</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Award className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Excellence First</h3>
                <p className="text-gray-600 font-lato">
                  Every team member is committed to delivering exceptional quality in their area of expertise
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <ArrowRight className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Collaborative Approach</h3>
                <p className="text-gray-600 font-lato">
                  We work as an integrated team, ensuring seamless communication and coordination
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Mail className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">Author-Centric</h3>
                <p className="text-gray-600 font-lato">
                  Every decision we make is guided by what's best for our authors and their success
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white font-playfair">Ready to Work With Our Expert Team?</h2>
            <p className="text-xl text-gray-300 font-lato">
              Experience the difference that comes from working with a dedicated team of publishing professionals who
              are committed to your success.
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
                <Link href="/about/why-red-thread">
                  Why Choose Red Thread
                  <Award className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-gray-400 text-sm font-lato">
              Free 30-minute consultation • No obligation • Meet your potential team
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
