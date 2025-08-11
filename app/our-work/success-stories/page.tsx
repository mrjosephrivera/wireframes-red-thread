import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, DollarSign, Award, Calendar, Quote } from "lucide-react"
import Link from "next/link"

export default function SuccessStoriesPage() {
  const successStories = [
    {
      id: 1,
      authorName: "Sarah Mitchell",
      bookTitle: "The Executive's Guide to Digital Transformation",
      authorImage: "/professional-headshot.png",
      bookImage: "/professional-book-cover.png",
      category: "Business Leadership",
      publishDate: "March 2024",
      challenge:
        "Sarah was a successful executive but struggled to establish thought leadership in the digital transformation space. She had valuable insights but no platform to share them effectively.",
      solution:
        "We worked with Sarah to structure her experiences into a comprehensive guide, developed her personal brand, and created a multi-channel launch strategy including speaking engagements and media appearances.",
      results: {
        bookSales: "15,000+ copies sold",
        revenue: "$2.3M in consulting contracts",
        speaking: "25+ keynote speaking engagements",
        media: "Featured in Forbes, Harvard Business Review",
        followers: "50,000+ LinkedIn followers gained",
      },
      testimonial:
        "Red Thread didn't just help me write a book—they transformed my entire career. The strategic approach to positioning and launch exceeded every expectation I had.",
      timeline: "8 months from concept to bestseller",
      awards: ["Business Book Award 2024", "Readers' Choice Award"],
    },
    {
      id: 2,
      authorName: "Dr. James Chen",
      bookTitle: "Mindful Leadership in Crisis",
      authorImage: "/professional-headshot.png",
      bookImage: "/professional-book-cover.png",
      category: "Leadership Development",
      publishDate: "September 2023",
      challenge:
        "Dr. Chen had decades of leadership experience but wanted to transition from corporate roles to executive coaching and consulting. He needed credibility and a platform to attract high-level clients.",
      solution:
        "We helped Dr. Chen craft his unique methodology into a compelling book, developed case studies from his experience, and created a thought leadership platform that positioned him as the go-to expert for crisis leadership.",
      results: {
        bookSales: "12,000+ copies sold",
        revenue: "$1.8M in coaching revenue",
        speaking: "40+ corporate workshops delivered",
        media: "Regular contributor to Inc. Magazine",
        followers: "35,000+ professional network growth",
      },
      testimonial:
        "The book became the foundation for my entire consulting practice. Red Thread's strategic guidance helped me build a seven-figure business around my expertise.",
      timeline: "10 months from manuscript to market leader",
      awards: ["Leadership Excellence Award", "Top Business Book 2023"],
    },
    {
      id: 3,
      authorName: "Maria Rodriguez",
      bookTitle: "The Innovation Paradox",
      authorImage: "/professional-headshot.png",
      bookImage: "/professional-book-cover.png",
      category: "Innovation Strategy",
      publishDate: "January 2024",
      challenge:
        "Maria was a brilliant innovation strategist working behind the scenes at Fortune 500 companies. She wanted to build her own consultancy but lacked the visibility and credibility to attract enterprise clients.",
      solution:
        "We worked with Maria to distill her proprietary innovation framework into an accessible book, developed compelling case studies, and created a launch strategy that positioned her as a thought leader in innovation consulting.",
      results: {
        bookSales: "18,000+ copies sold",
        revenue: "$3.1M in consulting contracts",
        speaking: "30+ conference presentations",
        media: "Featured in Fast Company, Entrepreneur",
        followers: "75,000+ social media following",
      },
      testimonial:
        "Red Thread helped me transform from an unknown consultant to a recognized authority in innovation. The book opened doors I never thought possible.",
      timeline: "9 months from idea to industry recognition",
      awards: ["Innovation Book of the Year", "Thinkers50 Recognition"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">Success Stories</h1>
            <p className="text-xl text-gray-600 mb-8 font-lato">
              Real transformations from our published authors. See how strategic book publishing has elevated careers,
              built businesses, and created lasting impact.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-2 font-playfair">$50M+</div>
                <div className="text-sm text-gray-600 font-lato">Revenue Generated</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-2 font-playfair">500K+</div>
                <div className="text-sm text-gray-600 font-lato">Books Sold</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-2 font-playfair">200+</div>
                <div className="text-sm text-gray-600 font-lato">Speaking Engagements</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-2 font-playfair">95%</div>
                <div className="text-sm text-gray-600 font-lato">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {successStories.map((story, index) => (
              <div
                key={story.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Author & Book Info */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={story.authorImage || "/placeholder.svg"}
                      alt={story.authorName}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 font-playfair">{story.authorName}</h3>
                      <p className="text-gray-600 font-lato">{story.category}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-6">
                    <img
                      src={story.bookImage || "/placeholder.svg"}
                      alt={story.bookTitle}
                      className="w-24 h-32 object-cover rounded shadow-lg"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2 font-playfair">{story.bookTitle}</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600 font-lato">{story.publishDate}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {story.awards.map((award, awardIndex) => (
                          <Badge key={awardIndex} variant="outline" className="text-xs">
                            <Award className="h-3 w-3 mr-1" />
                            {award}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <Quote className="h-6 w-6 text-gray-400 mb-3" />
                    <p className="text-gray-700 italic mb-3 font-lato">"{story.testimonial}"</p>
                    <p className="text-sm text-gray-600 font-lato">— {story.authorName}</p>
                  </div>
                </div>

                {/* Challenge, Solution, Results */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3 font-playfair">The Challenge</h4>
                      <p className="text-gray-600 font-lato">{story.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3 font-playfair">Our Solution</h4>
                      <p className="text-gray-600 font-lato">{story.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3 font-playfair">The Results</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="h-4 w-4 text-gray-600" />
                            <span className="text-sm text-gray-600 font-lato">Book Sales</span>
                          </div>
                          <div className="font-bold text-gray-900 font-lato">{story.results.bookSales}</div>
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <DollarSign className="h-4 w-4 text-gray-600" />
                            <span className="text-sm text-gray-600 font-lato">Revenue</span>
                          </div>
                          <div className="font-bold text-gray-900 font-lato">{story.results.revenue}</div>
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Users className="h-4 w-4 text-gray-600" />
                            <span className="text-sm text-gray-600 font-lato">Speaking</span>
                          </div>
                          <div className="font-bold text-gray-900 font-lato">{story.results.speaking}</div>
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Award className="h-4 w-4 text-gray-600" />
                            <span className="text-sm text-gray-600 font-lato">Media</span>
                          </div>
                          <div className="font-bold text-gray-900 font-lato">{story.results.media}</div>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1 font-lato">Timeline:</div>
                        <div className="font-semibold text-gray-900 font-lato">{story.timeline}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-gray-600 mb-8 font-lato">
              Join our community of successful authors who have transformed their careers and businesses through
              strategic book publishing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-800 hover:bg-gray-900 font-lato" asChild>
                <Link href="/get-started">Start Your Journey</Link>
              </Button>
              <Button size="lg" variant="outline" className="font-lato bg-transparent" asChild>
                <Link href="/our-work/testimonials">Read More Testimonials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
