import Link from 'next/link';
import topicsData from '../data/topics.json';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Learn Islamic Business the Right Way
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover structured knowledge about Islamic business laws (fiqh muamalah)
            with clear explanations, evidence-based content, and practical applications.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask a question like 'Is dropshipping halal?'"
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-2 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Topics</h2>
          <p className="text-center text-gray-600 mb-12">
            Click on any topic to explore detailed Islamic rulings, evidence, and modern applications.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topicsData.topics.map((topic, index) => (
              <Link key={index} href={`/${topic.topic.toLowerCase()}`} className="block">
                <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
                  <h4 className="font-bold mb-2 text-lg text-green-700">{topic.topic}</h4>
                  <p className="text-sm text-gray-600 mb-3">{topic.subtopic}</p>
                  <p className="text-sm text-gray-500 line-clamp-2">{topic.ruling.substring(0, 100)}...</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/library" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold">
              View All Topics →
            </Link>
          </div>
        </div>
      </section>
      {/* Categories Preview */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Explore Categories</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Business Contracts</h3>
              <p className="text-gray-600 text-sm">
                Syirkah, Murabahah, Ijarah, and other Islamic contracts
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Financial Prohibitions</h3>
              <p className="text-gray-600 text-sm">
                Riba, Gharar, Maysir, and forbidden financial practices
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Ethics & Practices</h3>
              <p className="text-gray-600 text-sm">
                Business ethics, fair trade, and Islamic business principles
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}