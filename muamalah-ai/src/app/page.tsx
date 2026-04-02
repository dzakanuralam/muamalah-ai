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
          <h2 className="text-3xl font-bold text-center mb-12">Featured Topics</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Syirkah Card */}
            <a href="/syirkah" className="block">
              <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <h4 className="font-bold mb-2 text-lg">Syirkah</h4>
                <p className="text-sm text-gray-600">
                  Islamic partnerships and how to structure them properly.
                </p>
              </div>
            </a>

            {/* Murabahah Card */}
            <div className="p-6 border rounded-xl shadow-sm">
              <h4 className="font-bold mb-2 text-lg">Murabahah</h4>
              <p className="text-sm text-gray-600">
                Cost-plus financing and markup-based sales contracts.
              </p>
            </div>

            {/* Ijarah Card */}
            <div className="p-6 border rounded-xl shadow-sm">
              <h4 className="font-bold mb-2 text-lg">Ijarah</h4>
              <p className="text-sm text-gray-600">
                Leasing contracts and rental agreements in Islamic finance.
              </p>
            </div>

            {/* Riba Card */}
            <div className="p-6 border rounded-xl shadow-sm">
              <h4 className="font-bold mb-2 text-lg">Riba (Interest)</h4>
              <p className="text-sm text-gray-600">
                Understanding prohibited interest and its modern applications.
              </p>
            </div>

            {/* Gharar Card */}
            <div className="p-6 border rounded-xl shadow-sm">
              <h4 className="font-bold mb-2 text-lg">Gharar</h4>
              <p className="text-sm text-gray-600">
                Excessive uncertainty and risk in business contracts.
              </p>
            </div>

            {/* Business Ethics Card */}
            <div className="p-6 border rounded-xl shadow-sm">
              <h4 className="font-bold mb-2 text-lg">Business Ethics</h4>
              <p className="text-sm text-gray-600">
                Islamic principles for honest and ethical business practices.
              </p>
            </div>
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