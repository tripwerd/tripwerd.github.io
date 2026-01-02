export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-xl font-bold text-white">
              Trip Werd
            </a>
            <div className="hidden md:flex gap-8">
              <a href="#shipped" className="text-gray-400 hover:text-orange transition-colors">
                Things I've Shipped
              </a>
              <a href="#story" className="text-gray-400 hover:text-orange transition-colors">
                My Story
              </a>
              <a href="#analogies" className="text-gray-400 hover:text-orange transition-colors">
                Product Analogies
              </a>
              <a href="#outside-work" className="text-gray-400 hover:text-orange transition-colors">
                Outside of Product
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Musician turned Product Manager
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl">
            Focused on shipping products that users love and metrics prove.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:tripwerd@gmail.com"
              className="px-8 py-4 bg-orange text-black font-semibold rounded-lg hover:bg-orange-light transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/trip-werd/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-orange text-orange font-semibold rounded-lg hover:bg-orange hover:text-black transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Things I've Shipped */}
      <section id="shipped" className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12">
            Things I've Shipped
          </h2>

          <div className="space-y-6">
            {/* Placeholder for shipped items */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg hover:border-orange transition-colors">
              <h3 className="text-2xl font-semibold text-white mb-3">
                [Project Title]
              </h3>
              <p className="text-gray-400 mb-4 text-lg">
                [Brief description of what you shipped and the impact]
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-zinc-800 text-orange rounded-full text-sm font-medium">
                  [Tag]
                </span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg hover:border-orange transition-colors">
              <h3 className="text-2xl font-semibold text-white mb-3">
                [Another Project]
              </h3>
              <p className="text-gray-400 mb-4 text-lg">
                [Brief description of what you shipped and the impact]
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-2 bg-zinc-800 text-orange rounded-full text-sm font-medium">
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
          <h2 className="text-5xl font-bold text-white mb-12">
            My Story
          </h2>

          <div className="space-y-6">
            <p className="text-gray-300 text-xl leading-relaxed">
              [Your journey from musician to product manager - how you got here, what drives you, key moments that shaped your approach to product]
            </p>
            <p className="text-gray-300 text-xl leading-relaxed">
              [More about your background, experiences, and what makes you unique]
            </p>
            <p className="text-gray-300 text-xl leading-relaxed">
              [Conclusion or key takeaway about your story]
            </p>
          </div>
        </div>
      </section>

      {/* My Favorite Product Analogies */}
      <section id="analogies" className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12">
            My Favorite Product Analogies
          </h2>

          <div className="space-y-6">
            <div className="bg-zinc-900 border-l-4 border-orange p-8 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-orange mb-4">
                [Analogy Title]
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                [Your favorite product analogy and why it resonates with you]
              </p>
            </div>

            <div className="bg-zinc-900 border-l-4 border-orange p-8 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-orange mb-4">
                [Another Analogy]
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                [Another product analogy]
              </p>
            </div>

            <div className="bg-zinc-900 border-l-4 border-orange p-8 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-orange mb-4">
                [Third Analogy]
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                [Another product analogy]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Enjoy Outside of Product */}
      <section id="outside-work" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12">
            What I Enjoy Outside of Product
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg hover:border-orange transition-colors">
              <h3 className="text-2xl font-semibold text-orange mb-4">
                The Grateful Dead
              </h3>
              <p className="text-gray-300 leading-relaxed">
                [Share your passion for the Dead - favorite songs, shows, what draws you to their music]
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg hover:border-orange transition-colors">
              <h3 className="text-2xl font-semibold text-orange mb-4">
                Chess
              </h3>
              <p className="text-gray-300 leading-relaxed">
                [Talk about chess - favorite openings, players you admire, what you love about the game]
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg hover:border-orange transition-colors">
              <h3 className="text-2xl font-semibold text-orange mb-4">
                American Football
              </h3>
              <p className="text-gray-300 leading-relaxed">
                [Michigan football fandom, what makes you passionate about the sport]
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg hover:border-orange transition-colors">
              <h3 className="text-2xl font-semibold text-orange mb-4">
                Music
              </h3>
              <p className="text-gray-300 leading-relaxed">
                [Your background as a musician, jazz saxophone, audio engineering, what music means to you]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-6 text-lg">
            Let's build something great together.
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="mailto:tripwerd@gmail.com"
              className="text-gray-400 hover:text-orange transition-colors font-medium"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/trip-werd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange transition-colors font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tripwerd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange transition-colors font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
