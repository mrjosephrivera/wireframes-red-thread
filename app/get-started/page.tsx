"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Calendar, Clock, Award, Users } from "lucide-react"
import { WireframeNavigation } from "@/components/wireframe-navigation"
import Link from "next/link"

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-white">
      <WireframeNavigation />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-playfair mb-6">
              Book Your Free Strategy Call
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-lato mb-8">
              Discover how to transform your expertise into a published book that establishes your thought leadership
              and grows your business. Get personalized guidance from our publishing experts.
            </p>

            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 font-playfair">30 min</div>
                <div className="text-gray-600 font-lato">Free Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 font-playfair">No</div>
                <div className="text-gray-600 font-lato">Obligation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 font-playfair">Expert</div>
                <div className="text-gray-600 font-lato">Guidance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">What You'll Get on Your Call</h2>
            <p className="text-xl text-gray-600 font-lato">
              A comprehensive consultation designed to give you clarity and direction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Award className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-playfair">Book Concept Review</h3>
                <p className="text-gray-600 font-lato">
                  We'll evaluate your book idea and help you refine your unique angle and positioning
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Users className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-playfair">Target Audience Analysis</h3>
                <p className="text-gray-600 font-lato">
                  Identify your ideal readers and how to position your book to reach them effectively
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <Calendar className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-playfair">Custom Timeline</h3>
                <p className="text-gray-600 font-lato">
                  Get a personalized publishing timeline based on your goals and availability
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 border">
                  <CheckCircle className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-playfair">Next Steps Plan</h3>
                <p className="text-gray-600 font-lato">
                  Leave with a clear action plan, whether you work with us or pursue other options
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Schedule Your Strategy Call</h2>
              <p className="text-xl text-gray-600 font-lato">
                Fill out the form below and we'll contact you within 24 hours to schedule your call
              </p>
            </div>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <form className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 font-playfair">Personal Information</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">First Name *</label>
                        <div className="h-12 bg-gray-100 border-2 border-gray-300 rounded"></div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">Last Name *</label>
                        <div className="h-12 bg-gray-100 border-2 border-gray-300 rounded"></div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">
                          Email Address *
                        </label>
                        <div className="h-12 bg-gray-100 border-2 border-gray-300 rounded"></div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">Phone Number *</label>
                        <div className="h-12 bg-gray-100 border-2 border-gray-300 rounded"></div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">
                        Company/Business Name
                      </label>
                      <div className="h-12 bg-gray-100 border-2 border-gray-300 rounded"></div>
                    </div>
                  </div>

                  {/* Book Information */}
                  <div className="space-y-6 pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 font-playfair">About Your Book</h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">
                        What stage are you at with your book? *
                      </label>
                      <div className="h-12 bg-gray-100 border-2 border-gray-300 rounded flex items-center px-4">
                        <span className="text-gray-500 font-lato">Select your current stage...</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">
                        What's your book topic/area of expertise? *
                      </label>
                      <div className="h-32 bg-gray-100 border-2 border-gray-300 rounded"></div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">
                        Who is your target audience?
                      </label>
                      <div className="h-24 bg-gray-100 border-2 border-gray-300 rounded"></div>
                    </div>
                  </div>

                  {/* Business Goals */}
                  <div className="space-y-6 pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 font-playfair">Your Goals</h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">
                        What do you hope to achieve with your book? *
                      </label>
                      <div className="h-12 bg-gray-100 border-2 border-gray-300 rounded flex items-center px-4">
                        <span className="text-gray-500 font-lato">Select your primary goal...</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">
                        What's your ideal timeline for publishing?
                      </label>
                      <div className="h-12 bg-gray-100 border-2 border-gray-300 rounded flex items-center px-4">
                        <span className="text-gray-500 font-lato">Select your timeline...</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">
                        What's your approximate budget range for this project?
                      </label>
                      <div className="h-12 bg-gray-100 border-2 border-gray-300 rounded flex items-center px-4">
                        <span className="text-gray-500 font-lato">Select your budget range...</span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-6 pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 font-playfair">Additional Information</h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">
                        Have you written a book before?
                      </label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-4 bg-gray-200 border border-gray-400 rounded-full"></div>
                          <span className="text-gray-700 font-lato">Yes, I'm a published author</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-4 bg-gray-200 border border-gray-400 rounded-full"></div>
                          <span className="text-gray-700 font-lato">I've written but not published</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-4 bg-gray-200 border border-gray-400 rounded-full"></div>
                          <span className="text-gray-700 font-lato">This is my first book</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">
                        What questions do you have about the publishing process?
                      </label>
                      <div className="h-24 bg-gray-100 border-2 border-gray-300 rounded"></div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">
                        How did you hear about Red Thread Publishing?
                      </label>
                      <div className="h-12 bg-gray-100 border-2 border-gray-300 rounded flex items-center px-4">
                        <span className="text-gray-500 font-lato">Select source...</span>
                      </div>
                    </div>
                  </div>

                  {/* Preferred Contact */}
                  <div className="space-y-6 pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 font-playfair">Scheduling Preferences</h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">
                        Preferred call time
                      </label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-4 bg-gray-200 border border-gray-400 rounded"></div>
                          <span className="text-gray-700 font-lato">Morning (9 AM - 12 PM EST)</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-4 bg-gray-200 border border-gray-400 rounded"></div>
                          <span className="text-gray-700 font-lato">Afternoon (12 PM - 5 PM EST)</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-4 bg-gray-200 border border-gray-400 rounded"></div>
                          <span className="text-gray-700 font-lato">Evening (5 PM - 8 PM EST)</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">
                        Preferred days of the week
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                          <div key={day} className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-gray-200 border border-gray-400 rounded"></div>
                            <span className="text-gray-700 font-lato text-sm">{day}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 text-lg font-lato">
                      Schedule My Free Strategy Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-sm text-gray-500 text-center mt-4 font-lato">
                      We'll contact you within 24 hours to schedule your call • No spam, ever
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Join 64+ Successful Authors</h2>
            <p className="text-xl text-gray-600 font-lato">
              See what entrepreneurs are saying about their Red Thread Publishing experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-2 border-gray-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="w-5 h-5 bg-gray-400 rounded-full mr-1"></div>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic font-lato">
                    "The strategy call was incredibly valuable. Sierra helped me clarify my book concept and gave me a
                    clear roadmap for moving forward. Even if I hadn't decided to work with them, the call alone was
                    worth it."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 border"></div>
                    <div>
                      <p className="font-semibold text-gray-900 font-lato">Sarah Johnson</p>
                      <p className="text-gray-600 text-sm font-lato">CEO, Tech Innovations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 font-lato">Common questions about our strategy calls</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                question: "Is the strategy call really free?",
                answer:
                  "Yes, absolutely. This is a genuine consultation where we provide value regardless of whether you decide to work with us. There are no hidden fees or obligations.",
              },
              {
                question: "How long is the call?",
                answer:
                  "The call typically lasts 30-45 minutes. We want to give you enough time to discuss your goals and get meaningful guidance without overwhelming your schedule.",
              },
              {
                question: "Will you try to sell me during the call?",
                answer:
                  "Our focus is on providing value and helping you understand your options. If our services are a good fit, we'll discuss them, but there's no pressure to make any decisions on the call.",
              },
              {
                question: "What if I'm not ready to start immediately?",
                answer:
                  "That's perfectly fine. Many of our authors take time to prepare before beginning their publishing journey. We'll provide guidance for your timeline and stay in touch when you're ready.",
              },
              {
                question: "Do you work with authors in all industries?",
                answer:
                  "We specialize in working with successful entrepreneurs and business leaders across all industries. Whether you're in tech, healthcare, finance, consulting, or any other field, we can help you share your expertise through publishing.",
              },
              {
                question: "What happens after the strategy call?",
                answer:
                  "After the call, we'll send you a summary of what we discussed and any next steps we recommended. If you decide to move forward with us, we'll provide a detailed proposal. If not, you'll still have valuable insights to guide your publishing journey.",
              },
            ].map((faq, i) => (
              <Card key={i} className="border-2 border-gray-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">{faq.question}</h3>
                  <p className="text-gray-600 font-lato">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white font-playfair">
              Ready to Transform Your Expertise Into a Book?
            </h2>
            <p className="text-xl text-gray-300 font-lato">
              Don't let another year pass without sharing your knowledge with the world. Book your free strategy call
              today and take the first step toward becoming a published thought leader.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-gray-800 hover:bg-gray-100 px-12 py-4 text-lg font-lato"
                onClick={() => document.querySelector("form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Schedule My Call Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-800 px-12 py-4 text-lg font-lato bg-transparent"
                asChild
              >
                <Link href="/resources/ebook">
                  Download Free Guide First
                  <Clock className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-gray-400 text-sm font-lato">
              Free 30-minute consultation • No obligation • Expert guidance guaranteed
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
