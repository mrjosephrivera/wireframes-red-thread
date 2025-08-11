import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Star, Quote, TrendingUp, Users, Award } from "lucide-react"
import Link from "next/link"

export default function TestimonialsPage() {
  const videoTestimonials = [
    {
      id: 1,
      authorName: "Sarah Mitchell",
      title: "CEO, Digital Transformation Consulting",
      bookTitle: "The Executive's Guide to Digital Transformation",
      videoThumbnail: "/professional-headshot.png",
      duration: "3:42",
      preview:
        "Sarah shares how her book led to $2.3M in new consulting contracts and established her as a thought leader in digital transformation.",
      results: {
        revenue: "$2.3M in consulting",
        speaking: "25+ keynotes",
        media: "Forbes, HBR features",
      },
    },
    {
      id: 2,
      authorName: "Dr. James Chen",
      title: "Executive Coach & Leadership Consultant",
      bookTitle: "Mindful Leadership in Crisis",
      videoThumbnail: "/professional-headshot.png",
      duration: "4:15",
      preview:
        "Dr. Chen explains how his book became the foundation for his seven-figure coaching practice and industry recognition.",
      results: {
        revenue: "$1.8M coaching revenue",
        speaking: "40+ workshops",
        media: "Inc. Magazine contributor",
      },
    },
    {
      id: 3,
      authorName: "Maria Rodriguez",
      title: "Innovation Strategy Consultant",
      bookTitle: "The Innovation Paradox",
      videoThumbnail: "/professional-headshot.png",
      duration: "2:58",
      preview:
        "Maria discusses her transformation from unknown consultant to recognized innovation authority through strategic publishing.",
      results: {
        revenue: "$3.1M in contracts",
        speaking: "30+ conferences",
        media: "Fast Company features",
      },
    },
  ]

  const detailedTestimonials = [
    {
      id: 1,
      authorName: "David Thompson",
      title: "Sustainability Director",
      company: "Fortune 500 Manufacturing",
      bookTitle: "Sustainable Business Practices",
      authorImage: "/professional-headshot.png",
      rating: 5,
      testimonial:
        "Red Thread didn't just help me write a book—they transformed my entire career trajectory. The strategic approach to positioning my expertise in sustainability led to speaking opportunities I never imagined. Within six months of publication, I was keynoting major industry conferences and consulting for companies I'd only dreamed of working with. The book became my business card, my credibility builder, and my revenue generator all in one.",
      results: {
        bookSales: "8,500+ copies",
        speakingFees: "$50K+ per keynote",
        consultingRevenue: "$850K annually",
        mediaAppearances: "15+ major publications",
      },
      timeline: "9 months from concept to industry recognition",
    },
    {
      id: 2,
      authorName: "Lisa Park",
      title: "HR Executive & Remote Work Expert",
      company: "Tech Startup Advisor",
      bookTitle: "The Future of Remote Work",
      authorImage: "/professional-headshot.png",
      rating: 5,
      testimonial:
        "The team at Red Thread understood my vision from day one. They helped me structure my experiences into a compelling narrative that resonated with both HR professionals and business leaders. The book launch strategy was phenomenal—we hit bestseller status in three categories on Amazon. More importantly, it opened doors to board positions and advisory roles that have been incredibly fulfilling and lucrative.",
      results: {
        bookSales: "12,000+ copies",
        boardPositions: "3 advisory roles",
        consultingRevenue: "$1.2M annually",
        networkGrowth: "40K+ LinkedIn followers",
      },
      timeline: "7 months from manuscript to bestseller",
    },
    {
      id: 3,
      authorName: "Michael Zhang",
      title: "Data Analytics Consultant",
      company: "Independent Consultant",
      bookTitle: "Data-Driven Decision Making",
      authorImage: "/professional-headshot.png",
      rating: 5,
      testimonial:
        "I was skeptical about whether a book could really impact my consulting business, but Red Thread proved me wrong. Their approach to identifying my unique methodology and presenting it in an accessible way was brilliant. The book has become the cornerstone of my practice. Clients now come to me specifically because they've read the book and want to implement my framework. It's the best marketing investment I've ever made.",
      results: {
        bookSales: "9,200+ copies",
        clientInquiries: "300% increase",
        consultingRates: "Doubled hourly rates",
        corporateTraining: "$500K+ annually",
      },
      timeline: "8 months from idea to industry authority",
    },
  ]

  const quickTestimonials = [
    {
      name: "Jennifer Walsh",
      title: "Marketing Director",
      quote: "Red Thread made the impossible possible. From scattered ideas to published author in 6 months.",
      rating: 5,
    },
    {
      name: "Robert Kim",
      title: "Financial Advisor",
      quote: "The book tripled my client base and established me as the go-to expert in my field.",
      rating: 5,
    },
    {
      name: "Amanda Foster",
      title: "Leadership Coach",
      quote: "Professional, strategic, and results-driven. They delivered beyond every expectation.",
      rating: 5,
    },
    {
      name: "Carlos Rivera",
      title: "Tech Entrepreneur",
      quote: "The thought leadership platform they built around my book generated $2M in new business.",
      rating: 5,
    },
    {
      name: "Dr. Patricia Lee",
      title: "Healthcare Executive",
      quote: "From concept to bestseller, Red Thread guided every step with expertise and care.",
      rating: 5,
    },
    {
      name: "Thomas Anderson",
      title: "Supply Chain Expert",
      quote: "The book opened doors to speaking opportunities and consulting contracts I never thought possible.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">Client Testimonials</h1>
            <p className="text-xl text-gray-600 mb-8 font-lato">
              Hear directly from our published authors about their transformative experiences. Real stories, real
              results, real impact.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-2 font-playfair">4.9/5</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-gray-600 font-lato">Average Rating</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-2 font-playfair">98%</div>
                <div className="text-sm text-gray-600 font-lato">Client Satisfaction</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-2 font-playfair">150+</div>
                <div className="text-sm text-gray-600 font-lato">Success Stories</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-2 font-playfair">100%</div>
                <div className="text-sm text-gray-600 font-lato">Would Recommend</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-playfair">Video Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {videoTestimonials.map((video) => (
              <div
                key={video.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video bg-gray-100">
                  <img
                    src={video.videoThumbnail || "/placeholder.svg"}
                    alt={video.authorName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full p-4">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm font-lato">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 font-playfair">{video.authorName}</h3>
                  <p className="text-gray-600 text-sm mb-2 font-lato">{video.title}</p>
                  <p className="text-gray-500 text-sm mb-4 font-lato italic">"{video.bookTitle}"</p>
                  <p className="text-gray-600 text-sm mb-4 font-lato">{video.preview}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-gray-500" />
                      <span className="font-lato">{video.results.revenue}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="font-lato">{video.results.speaking}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="h-4 w-4 text-gray-500" />
                      <span className="font-lato">{video.results.media}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-playfair">Detailed Success Stories</h2>
          <div className="space-y-12">
            {detailedTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white border border-gray-200 rounded-lg p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={testimonial.authorImage || "/placeholder.svg"}
                        alt={testimonial.authorName}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 font-playfair">{testimonial.authorName}</h3>
                        <p className="text-gray-600 font-lato">{testimonial.title}</p>
                        <p className="text-gray-500 text-sm font-lato">{testimonial.company}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 font-lato italic">"{testimonial.bookTitle}"</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1 font-lato">Book Sales</div>
                        <div className="font-bold text-gray-900 font-lato">{testimonial.results.bookSales}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1 font-lato">Timeline</div>
                        <div className="font-bold text-gray-900 font-lato">{testimonial.timeline}</div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-2/3">
                    <Quote className="h-8 w-8 text-gray-300 mb-4" />
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 font-lato italic">
                      "{testimonial.testimonial}"
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-2 font-lato">Key Results:</div>
                        <ul className="space-y-1 text-sm">
                          {Object.entries(testimonial.results).map(([key, value]) => (
                            <li key={key} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              <span className="font-lato">{value}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-2 font-lato">Impact Areas:</div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Revenue Growth</Badge>
                          <Badge variant="outline">Thought Leadership</Badge>
                          <Badge variant="outline">Media Recognition</Badge>
                          <Badge variant="outline">Speaking Opportunities</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-playfair">What Our Authors Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 font-lato italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900 font-playfair">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm font-lato">{testimonial.title}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">Ready to Share Your Success Story?</h2>
            <p className="text-xl text-gray-600 mb-8 font-lato">
              Join our community of successful authors who have transformed their careers and businesses through
              strategic book publishing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-800 hover:bg-gray-900 font-lato" asChild>
                <Link href="/get-started">Start Your Journey</Link>
              </Button>
              <Button size="lg" variant="outline" className="font-lato bg-transparent" asChild>
                <Link href="/our-work/success-stories">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
