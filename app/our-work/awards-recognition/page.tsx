import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Star, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function AwardsRecognitionPage() {
  const companyAwards = [
    {
      id: 1,
      title: "Publishing Excellence Award 2024",
      organization: "Independent Publishers Association",
      year: "2024",
      category: "Best Publishing Services",
      description: "Recognized for outstanding quality in manuscript development, design, and author support services.",
      image: "/book-excellence-award.png",
    },
    {
      id: 2,
      title: "Small Business Innovation Award",
      organization: "Chamber of Commerce",
      year: "2023",
      category: "Creative Services",
      description: "Honored for innovative approaches to author development and thought leadership building.",
      image: "/book-excellence-award.png",
    },
    {
      id: 3,
      title: "Top 50 Publishing Companies",
      organization: "Industry Weekly",
      year: "2024",
      category: "Boutique Publishers",
      description: "Ranked among the top boutique publishing companies for author satisfaction and book quality.",
      image: "/book-excellence-award.png",
    },
  ]

  const bookAwards = [
    {
      id: 1,
      bookTitle: "The Executive's Guide to Digital Transformation",
      author: "Sarah Mitchell",
      awards: [
        {
          title: "Business Book Award 2024",
          organization: "Business Book Awards",
          category: "Leadership & Management",
        },
        {
          title: "Readers' Choice Award",
          organization: "Goodreads",
          category: "Business",
        },
        {
          title: "Editor's Pick",
          organization: "Harvard Business Review",
          category: "Must-Read Business Books",
        },
      ],
      image: "/professional-book-cover.png",
    },
    {
      id: 2,
      bookTitle: "Mindful Leadership in Crisis",
      author: "Dr. James Chen",
      awards: [
        {
          title: "Leadership Excellence Award",
          organization: "Leadership Institute",
          category: "Best Leadership Book",
        },
        {
          title: "Top Business Book 2023",
          organization: "Inc. Magazine",
          category: "Leadership Development",
        },
        {
          title: "Gold Medal",
          organization: "Independent Publisher Book Awards",
          category: "Business/Career/Sales",
        },
      ],
      image: "/professional-book-cover.png",
    },
    {
      id: 3,
      bookTitle: "The Innovation Paradox",
      author: "Maria Rodriguez",
      awards: [
        {
          title: "Innovation Book of the Year",
          organization: "Innovation Excellence Awards",
          category: "Best Innovation Book",
        },
        {
          title: "Thinkers50 Recognition",
          organization: "Thinkers50",
          category: "Innovation Thinking",
        },
        {
          title: "Silver Medal",
          organization: "Axiom Business Book Awards",
          category: "Innovation/Creativity",
        },
      ],
      image: "/professional-book-cover.png",
    },
  ]

  const mediaFeatures = [
    {
      id: 1,
      publication: "Forbes",
      title: "The Rise of Boutique Publishing: How Red Thread is Changing the Game",
      date: "March 2024",
      type: "Feature Article",
      logo: "/forbes-logo-generic.png",
      url: "#",
    },
    {
      id: 2,
      publication: "Entrepreneur",
      title: "From Manuscript to Thought Leader: The Red Thread Method",
      date: "January 2024",
      type: "Cover Story",
      logo: "/entrepreneur-logo.png",
      url: "#",
    },
    {
      id: 3,
      publication: "Inc. Magazine",
      title: "How to Build Authority Through Strategic Book Publishing",
      date: "November 2023",
      type: "Expert Column",
      logo: "/inc-logo.png",
      url: "#",
    },
    {
      id: 4,
      publication: "Fast Company",
      title: "The Future of Executive Publishing",
      date: "September 2023",
      type: "Industry Analysis",
      logo: "/fast-company-logo.png",
      url: "#",
    },
  ]

  const industryRecognition = [
    {
      title: "Top 10 Publishing Innovators",
      organization: "Publishing Weekly",
      year: "2024",
      description: "Recognized for innovative author development programs",
    },
    {
      title: "Best Client Satisfaction Rating",
      organization: "Independent Publishers Guild",
      year: "2023",
      description: "98% client satisfaction rate, highest in category",
    },
    {
      title: "Excellence in Book Design",
      organization: "Book Design Association",
      year: "2024",
      description: "Outstanding achievement in book cover and interior design",
    },
    {
      title: "Thought Leadership Award",
      organization: "Content Marketing Institute",
      year: "2023",
      description: "For helping executives build authority through publishing",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">Awards & Recognition</h1>
            <p className="text-xl text-gray-600 mb-8 font-lato">
              Our commitment to excellence has been recognized by industry leaders, media outlets, and the authors we
              serve. Here's how our work has been celebrated.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <Trophy className="h-8 w-8 text-gray-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-2 font-playfair">25+</div>
                <div className="text-sm text-gray-600 font-lato">Industry Awards</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <Award className="h-8 w-8 text-gray-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-2 font-playfair">50+</div>
                <div className="text-sm text-gray-600 font-lato">Book Awards</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <Star className="h-8 w-8 text-gray-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-2 font-playfair">4.9/5</div>
                <div className="text-sm text-gray-600 font-lato">Client Rating</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <ExternalLink className="h-8 w-8 text-gray-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-2 font-playfair">100+</div>
                <div className="text-sm text-gray-600 font-lato">Media Features</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Awards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-playfair">Company Awards</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {companyAwards.map((award) => (
              <div
                key={award.id}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <img
                  src={award.image || "/placeholder.svg"}
                  alt={award.title}
                  className="w-20 h-20 mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">{award.title}</h3>
                <p className="text-gray-600 font-semibold mb-2 font-lato">{award.organization}</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-500 font-lato">{award.year}</span>
                  <Badge variant="outline">{award.category}</Badge>
                </div>
                <p className="text-gray-600 text-sm font-lato">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Awards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-playfair">Award-Winning Books</h2>
          <div className="space-y-12">
            {bookAwards.map((book) => (
              <div key={book.id} className="bg-white border border-gray-200 rounded-lg p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <img
                      src={book.image || "/placeholder.svg"}
                      alt={book.bookTitle}
                      className="w-full max-w-48 mx-auto object-cover rounded shadow-lg"
                    />
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-playfair">{book.bookTitle}</h3>
                    <p className="text-gray-600 mb-6 font-lato">by {book.author}</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {book.awards.map((award, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Award className="h-5 w-5 text-yellow-500" />
                            <span className="font-semibold text-gray-900 font-lato">{award.title}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-1 font-lato">{award.organization}</p>
                          <Badge variant="outline" className="text-xs">
                            {award.category}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-playfair">Media Features</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {mediaFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={feature.logo || "/placeholder.svg"}
                    alt={feature.publication}
                    className="h-8 object-contain"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 font-playfair">{feature.publication}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span className="font-lato">{feature.date}</span>
                      <Badge variant="outline" className="text-xs">
                        {feature.type}
                      </Badge>
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 font-lato">{feature.title}</h4>
                <Button variant="outline" size="sm" className="font-lato bg-transparent">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Read Article
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-playfair">Industry Recognition</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {industryRecognition.map((recognition, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Trophy className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-playfair">{recognition.title}</h3>
                    <p className="text-gray-600 font-semibold mb-2 font-lato">
                      {recognition.organization} • {recognition.year}
                    </p>
                    <p className="text-gray-600 text-sm font-lato">{recognition.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-playfair">Join Our Award-Winning Authors</h2>
            <p className="text-xl text-gray-600 mb-8 font-lato">
              Work with a recognized leader in publishing excellence. Let us help you create a book that stands out and
              wins recognition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-800 hover:bg-gray-900 font-lato" asChild>
                <Link href="/get-started">Start Your Award-Winning Book</Link>
              </Button>
              <Button size="lg" variant="outline" className="font-lato bg-transparent" asChild>
                <Link href="/our-work/success-stories">See Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
