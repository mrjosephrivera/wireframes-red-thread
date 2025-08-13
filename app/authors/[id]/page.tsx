import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Award, BookOpen, Mail, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const authors = {
  "sarah-mitchell": {
    name: "Dr. Sarah Mitchell",
    title: "Healthcare Innovation Expert",
    headshot: "/professional-headshot.png",
    bio: "Dr. Sarah Mitchell is a leading healthcare innovation expert with over 20 years of experience transforming healthcare systems. She has led digital transformation initiatives at Fortune 500 healthcare companies and now consults for organizations worldwide. Her work has been featured in major healthcare publications and she regularly speaks at industry conferences.",
    longBio:
      "Dr. Sarah Mitchell began her career as a practicing physician before transitioning into healthcare administration and innovation. She holds an MD from Harvard Medical School and an MBA from Wharton. Throughout her career, she has been at the forefront of healthcare technology adoption, leading digital transformation initiatives that have improved patient outcomes and operational efficiency. She has served as Chief Innovation Officer at three major healthcare systems and currently runs her own consulting firm, helping healthcare organizations navigate the complex landscape of modern medicine. Her expertise spans telemedicine, AI in healthcare, patient experience design, and healthcare policy.",
    achievements: [
      "Amazon Bestseller",
      "Industry Award Winner",
      "MBA Required Reading",
      "Healthcare Innovation Award",
      "Top 50 Healthcare Leaders",
    ],
    books: [
      {
        id: "the-future-of-healthcare-leadership",
        title: "The Future of Healthcare Leadership",
        cover: "/professional-book-cover.png",
        publishDate: "2024",
        description: "A comprehensive guide to leading digital transformation initiatives in healthcare organizations.",
      },
    ],
    expertise: [
      "Healthcare Innovation",
      "Digital Transformation",
      "Leadership",
      "Patient Experience",
      "Healthcare Policy",
    ],
    education: ["MD, Harvard Medical School", "MBA, Wharton School"],
    speaking: ["Healthcare Innovation Summit", "Digital Health Conference", "Medical Leadership Forum"],
    media: ["Forbes Healthcare", "Modern Healthcare", "Harvard Business Review"],
    contact: {
      email: "sarah@example.com",
      linkedin: "https://linkedin.com/in/sarahmitchell",
      twitter: "https://twitter.com/drsarahmitchell",
    },
  },
  "marcus-johnson": {
    name: "Marcus Johnson",
    title: "Tech Entrepreneur",
    headshot: "/professional-headshot.png",
    bio: "Marcus Johnson is a serial tech entrepreneur who has founded and scaled three successful startups. His expertise in scaling technology companies has made him a sought-after advisor and keynote speaker at major conferences worldwide.",
    longBio:
      "Marcus Johnson is a serial entrepreneur with over 15 years of experience building and scaling technology companies. He has founded three successful startups, with two successful exits totaling over $200 million. His first company, a mobile app development platform, was acquired by a Fortune 500 company in 2018. His second venture, a B2B SaaS platform, achieved unicorn status before being acquired in 2022. He currently serves as Managing Partner at TechScale Ventures, where he invests in and mentors early-stage technology companies. Marcus is also a frequent speaker at technology conferences and has been featured in major business publications for his insights on scaling technology companies.",
    achievements: [
      "Wall Street Journal Feature",
      "TEDx Speaker",
      "Forbes 40 Under 40",
      "Tech Entrepreneur of the Year",
      "Successful Exit: $200M+",
    ],
    books: [
      {
        id: "scaling-beyond-silicon-valley",
        title: "Scaling Beyond Silicon Valley",
        cover: "/professional-book-cover.png",
        publishDate: "2023",
        description:
          "Practical strategies for tech entrepreneurs looking to scale their startups beyond traditional tech hubs.",
      },
    ],
    expertise: ["Startup Scaling", "Technology Leadership", "Venture Capital", "Product Development", "Team Building"],
    education: ["BS Computer Science, Stanford University", "Executive Program, Y Combinator"],
    speaking: ["TechCrunch Disrupt", "Web Summit", "Startup Grind Global"],
    media: ["Wall Street Journal", "TechCrunch", "Forbes", "Entrepreneur Magazine"],
    contact: {
      email: "marcus@example.com",
      linkedin: "https://linkedin.com/in/marcusjohnson",
      twitter: "https://twitter.com/marcusjtech",
    },
  },
}

export default function AuthorPage({ params }: { params: { id: string } }) {
  const author = authors[params.id as keyof typeof authors]

  if (!author) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Back Navigation */}
      <section className="py-6 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <Link
            href="/our-work/published-authors"
            className="inline-flex items-center text-gray-600 hover:text-gray-800 font-lato"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Published Authors
          </Link>
        </div>
      </section>

      {/* Author Hero */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="w-64 h-64 mx-auto">
                  <img
                    src={author.headshot || "/placeholder.svg"}
                    alt={author.name}
                    className="w-full h-full object-cover rounded-lg border-4 border-gray-200"
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2 font-playfair">{author.name}</h1>
                  <p className="text-xl text-gray-600 font-lato font-semibold">{author.title}</p>
                </div>

                <p className="text-gray-700 font-lato text-lg leading-relaxed">{author.bio}</p>

                <div className="flex flex-wrap gap-2">
                  {author.achievements.map((achievement, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      <Award className="h-3 w-3 mr-1" />
                      {achievement}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  {author.contact.email && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${author.contact.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </a>
                    </Button>
                  )}
                  {author.contact.linkedin && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={author.contact.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  )}
                  {author.contact.twitter && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={author.contact.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4 mr-2" />
                        Twitter
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Published Books */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair">Published Books</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {author.books.map((book) => (
                <Link key={book.id} href={`/books/${book.id}`}>
                  <Card className="border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-24 h-32 flex-shrink-0">
                          <img
                            src={book.cover || "/placeholder.svg"}
                            alt={book.title}
                            className="w-full h-full object-cover rounded border"
                          />
                        </div>
                        <div className="flex-1 space-y-3">
                          <h3 className="text-xl font-bold text-gray-900 font-playfair">{book.title}</h3>
                          <p className="text-gray-600 font-lato text-sm">Published: {book.publishDate}</p>
                          <p className="text-gray-700 font-lato text-sm">{book.description}</p>
                          <Button size="sm" className="bg-gray-800 hover:bg-gray-900 font-lato">
                            <BookOpen className="h-4 w-4 mr-2" />
                            View Book Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Biography */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair">Biography</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 font-lato leading-relaxed text-lg">{author.longBio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Credentials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {author.expertise.map((area, index) => (
                    <Badge key={index} className="bg-gray-100 text-gray-800 border-gray-300">
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">Education</h3>
                <ul className="space-y-2">
                  {author.education.map((edu, index) => (
                    <li key={index} className="text-gray-700 font-lato">
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">Speaking Engagements</h3>
                <ul className="space-y-2">
                  {author.speaking.map((event, index) => (
                    <li key={index} className="text-gray-700 font-lato">
                      {event}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">Media Features</h3>
                <ul className="space-y-2">
                  {author.media.map((outlet, index) => (
                    <li key={index} className="text-gray-700 font-lato">
                      {outlet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white font-playfair">
              Inspired by {author.name.split(" ")[0]}'s Success?
            </h2>
            <p className="text-xl text-gray-300 font-lato">
              Start your own author journey and join our community of published thought leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100 font-lato" asChild>
                <Link href="/get-started">Start Your Book Journey</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-800 font-lato bg-transparent"
                asChild
              >
                <Link href="/our-work/published-authors">View All Authors</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
