export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-xl font-bold text-gray-900">
              Trip Werd
            </a>
            <div className="hidden md:flex gap-8">
              <a href="#shipped" className="text-gray-600 hover:text-gray-900 transition-colors">
                Things I've Shipped
              </a>
              <a href="#story" className="text-gray-600 hover:text-gray-900 transition-colors">
                My Story
              </a>
              <a href="#analogies" className="text-gray-600 hover:text-gray-900 transition-colors">
                Product Analogies
              </a>
              <a href="#outside-work" className="text-gray-600 hover:text-gray-900 transition-colors">
                Outside of Product
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Musician turned Product Manager
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Focused on shipping products that users love and metrics prove.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:tripwerd@gmail.com"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/trip-werd/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Things I've Shipped */}
      <section id="shipped" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Things I've Shipped
          </h2>

          <div className="space-y-8">
            {/* Placeholder for shipped items */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                [Project Title]
              </h3>
              <p className="text-gray-600 mb-4">
                [Brief description of what you shipped and the impact]
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  [Tag]
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                [Another Project]
              </h3>
              <p className="text-gray-600 mb-4">
                [Brief description of what you shipped and the impact]
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  [Tag]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section id="story" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            My Story
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg mb-6">
              [Your journey from musician to product manager - how you got here, what drives you, key moments that shaped your approach to product]
            </p>
            <p className="text-gray-600 text-lg mb-6">
              [More about your background, experiences, and what makes you unique]
            </p>
            <p className="text-gray-600 text-lg">
              [Conclusion or key takeaway about your story]
            </p>
          </div>
        </div>
      </section>

      {/* My Favorite Product Analogies */}
      <section id="analogies" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            My Favorite Product Analogies
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                [Analogy Title]
              </h3>
              <p className="text-gray-600 text-lg">
                [Your favorite product analogy and why it resonates with you]
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                [Another Analogy]
              </h3>
              <p className="text-gray-600 text-lg">
                [Another product analogy]
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                [Third Analogy]
              </h3>
              <p className="text-gray-600 text-lg">
                [Another product analogy]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Enjoy Outside of Product */}
      <section id="outside-work" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            What I Enjoy Outside of Product
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                The Grateful Dead
              </h3>
              <p className="text-gray-600">
                [Share your passion for the Dead - favorite songs, shows, what draws you to their music]
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Chess
              </h3>
              <p className="text-gray-600">
                [Talk about chess - favorite openings, players you admire, what you love about the game]
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                American Football
              </h3>
              <p className="text-gray-600">
                [Michigan football fandom, what makes you passionate about the sport]
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Music
              </h3>
              <p className="text-gray-600">
                [Your background as a musician, jazz saxophone, audio engineering, what music means to you]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Let's build something great together.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:tripwerd@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/trip-werd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tripwerd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
