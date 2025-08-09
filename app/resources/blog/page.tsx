import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, User, Search, BookOpen } from "lucide-react"
import { WireframeNavigation } from "@/components/wireframe-navigation"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <WireframeNavigation />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-playfair mb-6">
              The Red Thread Publishing Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-lato mb-8">
              Expert insights, practical tips, and success stories to help you navigate your publishing journey from
              manuscript to thought leadership.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <div className="h-12 bg-white border-2 border-gray-300 rounded-lg flex items-center px-4">
                <Search className="h-5 w-5 text-gray-400 mr-3" />
                <div className="text-gray-500 font-lato">Search articles...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded border mb-6">
              Featured Article
            </div>

            <Card className="border-2 border-gray-300 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto bg-gray-300 border-r-2 border-gray-300 flex items-center justify-center">
                  <div className="text-gray-600 font-lato">Featured Article Image</div>
                </div>

                <CardContent className="p-8 lg:p-12">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="font-lato">March 10, 2024</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="font-lato">8 min read</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span className="font-lato">Sierra Melcher</span>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 font-playfair">
                      The Complete Guide to Self-Publishing vs Traditional Publishing in 2024
                    </h2>

                    <p className="text-gray-600 font-lato">
                      Making the right publishing choice can make or break your book's success. In this comprehensive
                      guide, we break down the pros and cons of each approach, helping you make an informed decision
                      based on your goals, timeline, and resources.
                    </p>

                    <Button className="bg-gray-800 hover:bg-gray-900 text-white font-lato">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "All Articles",
              "Writing Tips",
              "Publishing Process",
              "Marketing & Promotion",
              "Success Stories",
              "Industry News",
              "Author Interviews",
            ].map((category, i) => (
              <Button
                key={i}
                variant={i === 0 ? "default" : "outline"}
                className={`${i === 0 ? "bg-gray-800 text-white" : "border-gray-400 text-gray-700 bg-white"} font-lato`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Recent Articles</h2>
            <p className="text-xl text-gray-600 font-lato">Latest insights from our publishing experts</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                category: "Writing Tips",
                date: "March 8, 2024",
                readTime: "5 min read",
                author: "Sierra Melcher",
                title: "5 Ways to Overcome Writer's Block and Stay Productive",
                excerpt: "Practical strategies to keep your writing momentum going when inspiration runs dry.",
              },
              {
                category: "Success Stories",
                date: "March 5, 2024",
                readTime: "7 min read",
                author: "Red Thread Team",
                title: "From Startup Founder to Bestselling Author: Sarah's Journey",
                excerpt: "How one entrepreneur turned her business expertise into a #1 Amazon bestseller.",
              },
              {
                category: "Publishing Process",
                date: "March 3, 2024",
                readTime: "6 min read",
                author: "Sierra Melcher",
                title: "The Real Cost of Publishing: Budget Breakdown for 2024",
                excerpt: "Everything you need to know about publishing costs, from editing to marketing.",
              },
              {
                category: "Marketing & Promotion",
                date: "February 28, 2024",
                readTime: "9 min read",
                author: "Marketing Team",
                title: "Book Launch Strategies That Actually Work",
                excerpt: "Proven tactics to maximize your book's visibility and sales in the first 30 days.",
              },
              {
                category: "Industry News",
                date: "February 25, 2024",
                readTime: "4 min read",
                author: "Red Thread Team",
                title: "Publishing Industry Trends to Watch in 2024",
                excerpt: "Key developments shaping the future of book publishing and author opportunities.",
              },
              {
                category: "Author Interviews",
                date: "February 22, 2024",
                readTime: "12 min read",
                author: "Sierra Melcher",
                title: "Interview: How John Built a 7-Figure Business Through His Book",
                excerpt: "An in-depth conversation about leveraging published authority for business growth.",
              },
            ].map((article, i) => (
              <Card key={i} className="border-2 border-gray-300 group cursor-pointer hover:border-gray-400">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-300 border-b-2 border-gray-300 flex items-center justify-center">
                    <div className="text-gray-600 font-lato">Article Image</div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 font-lato">{article.category}</span>
                      <span className="text-sm text-gray-600 font-lato">{article.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 font-playfair group-hover:text-gray-700">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 font-lato text-sm">{article.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center text-sm text-gray-600">
                        <User className="h-4 w-4 mr-1" />
                        <span className="font-lato">{article.author}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="font-lato">{article.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-gray-400 text-gray-700 px-8 py-3 font-lato bg-transparent">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Never Miss an Article</h2>
            <p className="text-xl text-gray-600 mb-8 font-lato">
              Get our latest publishing insights delivered to your inbox weekly.
            </p>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="h-12 bg-gray-100 border-2 border-gray-300 rounded"></div>
                    <div className="h-12 bg-gray-100 border-2 border-gray-300 rounded"></div>
                  </div>

                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 font-lato">
                    Subscribe to Newsletter
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
            <h2 className="text-4xl font-bold text-white font-playfair">Ready to Put These Insights Into Practice?</h2>
            <p className="text-xl text-gray-300 font-lato">
              You've read the strategies - now let's create your personalized action plan. Book a strategy call to
              discuss your book idea and get expert guidance tailored to your goals.
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
                <Link href="/our-work/book-catalog">
                  See Our Published Books
                  <BookOpen className="ml-2 h-5 w-5" />
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
