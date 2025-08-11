import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, CheckCircle, Star, Clock, Users, Award } from "lucide-react"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-playfair mb-6">
              Book Your Free Strategy Call
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-lato mb-8">
              Let's discuss your book goals, timeline, and how Red Thread Publishing can help you achieve thought
              leadership through professional publishing. No obligation, just expert guidance.
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-600 font-lato">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>30 minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>1-on-1 with Sierra</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Immediate insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Tell Us About Your Project</h2>
                <p className="text-gray-600 font-lato">
                  Help us understand your goals so we can provide the most valuable guidance during your strategy call.
                </p>
              </div>

              <form className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 font-playfair">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="font-lato">
                        First Name *
                      </Label>
                      <Input id="firstName" className="mt-1 border-gray-300" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="font-lato">
                        Last Name *
                      </Label>
                      <Input id="lastName" className="mt-1 border-gray-300" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-lato">
                      Email Address *
                    </Label>
                    <Input id="email" type="email" className="mt-1 border-gray-300" required />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-lato">
                      Phone Number *
                    </Label>
                    <Input id="phone" type="tel" className="mt-1 border-gray-300" required />
                  </div>
                  <div>
                    <Label htmlFor="company" className="font-lato">
                      Company/Organization
                    </Label>
                    <Input id="company" className="mt-1 border-gray-300" />
                  </div>
                  <div>
                    <Label htmlFor="title" className="font-lato">
                      Your Title/Role
                    </Label>
                    <Input id="title" className="mt-1 border-gray-300" />
                  </div>
                </div>

                {/* Book Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 font-playfair">About Your Book</h3>
                  <div>
                    <Label htmlFor="bookStage" className="font-lato">
                      What stage is your book project? *
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1 border-gray-300">
                        <SelectValue placeholder="Select current stage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="idea">Just an idea - need help developing concept</SelectItem>
                        <SelectItem value="outline">Have an outline or partial content</SelectItem>
                        <SelectItem value="draft">First draft completed</SelectItem>
                        <SelectItem value="manuscript">Completed manuscript ready for editing</SelectItem>
                        <SelectItem value="published">Already published, looking for impact services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="bookTopic" className="font-lato">
                      Book Topic/Subject Area *
                    </Label>
                    <Input
                      id="bookTopic"
                      placeholder="e.g., Leadership, Marketing, Personal Development"
                      className="mt-1 border-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="bookDescription" className="font-lato">
                      Brief Book Description
                    </Label>
                    <Textarea
                      id="bookDescription"
                      placeholder="Tell us about your book concept, main message, or key themes..."
                      className="mt-1 border-gray-300"
                      rows={4}
                    />
                  </div>
                  <div>
                    <Label htmlFor="targetAudience" className="font-lato">
                      Target Audience *
                    </Label>
                    <Input
                      id="targetAudience"
                      placeholder="e.g., Business executives, entrepreneurs, HR professionals"
                      className="mt-1 border-gray-300"
                      required
                    />
                  </div>
                </div>

                {/* Business Goals */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 font-playfair">Business Goals</h3>
                  <div>
                    <Label className="font-lato">
                      What do you hope to achieve with your book? (Select all that apply)
                    </Label>
                    <div className="mt-3 space-y-3">
                      {[
                        "Establish thought leadership in my industry",
                        "Generate leads for my business",
                        "Increase speaking opportunities",
                        "Build credibility and authority",
                        "Launch a new business or service",
                        "Share knowledge and help others",
                        "Personal legacy and achievement",
                      ].map((goal) => (
                        <div key={goal} className="flex items-center space-x-2">
                          <Checkbox id={goal} />
                          <Label htmlFor={goal} className="text-sm font-lato">
                            {goal}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="timeline" className="font-lato">
                      Desired Timeline *
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1 border-gray-300">
                        <SelectValue placeholder="When would you like to publish?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="3months">Within 3 months</SelectItem>
                        <SelectItem value="6months">Within 6 months</SelectItem>
                        <SelectItem value="year">Within a year</SelectItem>
                        <SelectItem value="flexible">Flexible timeline</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Budget and Experience */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 font-playfair">Investment & Experience</h3>
                  <div>
                    <Label htmlFor="budget" className="font-lato">
                      Investment Range You're Considering *
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1 border-gray-300">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-plus">$50,000+</SelectItem>
                        <SelectItem value="unsure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experience" className="font-lato">
                      Previous Writing/Publishing Experience
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1 border-gray-300">
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No previous experience</SelectItem>
                        <SelectItem value="articles">Written articles/blog posts</SelectItem>
                        <SelectItem value="ebook">Published eBooks or guides</SelectItem>
                        <SelectItem value="selfpub">Self-published books</SelectItem>
                        <SelectItem value="tradpub">Traditionally published</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Services Interest */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 font-playfair">Services of Interest</h3>
                  <div>
                    <Label className="font-lato">
                      Which services are you most interested in? (Select all that apply)
                    </Label>
                    <div className="mt-3 space-y-3">
                      {[
                        "WRITE Together - Manuscript Development ($8,500 - $15,000)",
                        "PUBLISH with Confidence - Full Publishing Service ($15,000 - $25,000)",
                        "Grow Your IMPACT - Thought Leadership Program ($18,000 - $30,000)",
                        "Complete Author Journey - All Services ($45,000 with savings)",
                        "Not sure - need guidance",
                      ].map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox id={service} />
                          <Label htmlFor={service} className="text-sm font-lato">
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Scheduling */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 font-playfair">Scheduling Preferences</h3>
                  <div>
                    <Label htmlFor="availability" className="font-lato">
                      Best times for your strategy call
                    </Label>
                    <Textarea
                      id="availability"
                      placeholder="e.g., Weekday mornings, Tuesday/Thursday afternoons, etc."
                      className="mt-1 border-gray-300"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="timezone" className="font-lato">
                      Time Zone
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1 border-gray-300">
                        <SelectValue placeholder="Select your time zone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pst">Pacific (PST/PDT)</SelectItem>
                        <SelectItem value="mst">Mountain (MST/MDT)</SelectItem>
                        <SelectItem value="cst">Central (CST/CDT)</SelectItem>
                        <SelectItem value="est">Eastern (EST/EDT)</SelectItem>
                        <SelectItem value="other">Other (please specify in comments)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 font-playfair">Additional Information</h3>
                  <div>
                    <Label htmlFor="questions" className="font-lato">
                      Questions or Additional Details
                    </Label>
                    <Textarea
                      id="questions"
                      placeholder="Any specific questions, concerns, or additional information you'd like to share..."
                      className="mt-1 border-gray-300"
                      rows={4}
                    />
                  </div>
                  <div>
                    <Label htmlFor="referral" className="font-lato">
                      How did you hear about Red Thread Publishing?
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1 border-gray-300">
                        <SelectValue placeholder="Select referral source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google search</SelectItem>
                        <SelectItem value="social">Social media</SelectItem>
                        <SelectItem value="referral">Referral from friend/colleague</SelectItem>
                        <SelectItem value="podcast">Podcast or interview</SelectItem>
                        <SelectItem value="event">Conference or event</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Submit */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="consent" required />
                    <Label htmlFor="consent" className="text-sm font-lato">
                      I agree to receive communications from Red Thread Publishing about my project and relevant
                      services. *
                    </Label>
                  </div>
                  <Button size="lg" className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 font-lato">
                    Book My Free Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm text-gray-500 text-center font-lato">
                    We'll review your information and contact you within 24 hours to schedule your call.
                  </p>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* What to Expect */}
              <Card className="border-2 border-gray-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 font-playfair">What to Expect on Your Call</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 font-lato">Goal Assessment</div>
                        <div className="text-gray-600 text-sm font-lato">
                          We'll discuss your book goals and how they align with your business objectives
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 font-lato">Custom Strategy</div>
                        <div className="text-gray-600 text-sm font-lato">
                          Receive a personalized roadmap for your author journey
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 font-lato">Service Recommendations</div>
                        <div className="text-gray-600 text-sm font-lato">
                          Learn which services best fit your timeline and budget
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 font-lato">Next Steps</div>
                        <div className="text-gray-600 text-sm font-lato">
                          Clear action plan whether you work with us or not
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonials */}
              <Card className="border-2 border-gray-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 font-playfair">Recent Success Stories</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-gray-600 text-gray-600" />
                        ))}
                      </div>
                      <p className="text-gray-700 font-lato text-sm italic mb-3">
                        "The strategy call alone was worth hours of research. Sierra immediately identified the gaps in
                        my approach and gave me a clear path forward."
                      </p>
                      <div className="text-sm font-semibold text-gray-900 font-lato">- Jennifer Walsh, CEO</div>
                    </div>
                    <div>
                      <div className="flex space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-gray-600 text-gray-600" />
                        ))}
                      </div>
                      <p className="text-gray-700 font-lato text-sm italic mb-3">
                        "Even though I decided to wait 6 months before starting, the insights from our call helped me
                        prepare and ultimately led to a better book."
                      </p>
                      <div className="text-sm font-semibold text-gray-900 font-lato">- Marcus Johnson, Consultant</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-2 border-gray-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 font-playfair">Questions?</h3>
                  <div className="space-y-4 text-gray-600 font-lato">
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div>hello@redthreadpublishing.com</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div>(555) 123-4567</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Response Time</div>
                      <div>Within 24 hours</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Trusted by Successful Entrepreneurs</h2>
            <p className="text-xl text-gray-600 font-lato">
              Join hundreds of business leaders who've transformed their expertise into published authority
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-800 mb-2 font-playfair">200+</div>
              <div className="text-gray-600 font-lato">Books Published</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-800 mb-2 font-playfair">95%</div>
              <div className="text-gray-600 font-lato">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-800 mb-2 font-playfair">50+</div>
              <div className="text-gray-600 font-lato">Award Winners</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Common Questions</h2>
            <p className="text-xl text-gray-600 font-lato">Quick answers to help you prepare for your strategy call</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-2 border-gray-300">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 font-playfair">Is there really no obligation?</h3>
                <p className="text-gray-700 font-lato">
                  Absolutely none. The strategy call is designed to provide value whether you work with us or not.
                  You'll receive actionable insights and a clear roadmap for your book project.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 font-playfair">
                  What if I'm not ready to start immediately?
                </h3>
                <p className="text-gray-700 font-lato">
                  That's perfectly fine! Many clients have strategy calls months before they're ready to begin. We'll
                  help you create a timeline that works for your schedule and goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 font-playfair">Do you work with all industries?</h3>
                <p className="text-gray-700 font-lato">
                  We specialize in business and professional development books for entrepreneurs, executives, and
                  consultants. If you're unsure if your topic fits, the strategy call is the perfect time to discuss it.
                </p>
              </CardContent>
            </Card>
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
