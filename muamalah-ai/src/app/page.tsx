export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 border-b">
        <h1 className="text-xl font-bold text-green-700">Muamalah AI</h1>
        <div className="space-x-6">
          <a href="#">Library</a>
          <a href="#">Categories</a>
          <a href="#">About</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Learn Islamic Business the Right Way
        </h2>

        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          A structured platform to understand fiqh muamalah,
          Islamic economics, and halal business practices.
        </p>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search: riba, syirkah, dropshipping..."
          className="w-full max-w-md p-3 border rounded-lg"
        />
      </section>

      {/* TOPICS */}
      <section className="px-6 py-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Featured Topics
        </h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <div className="p-6 border rounded-xl shadow-sm">
            <h4 className="font-bold mb-2">Syirkah</h4>
            <p className="text-sm text-gray-600">
              Islamic partnerships and how to structure them properly.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h4 className="font-bold mb-2">Riba</h4>
            <p className="text-sm text-gray-600">
              Understanding interest and its prohibition.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h4 className="font-bold mb-2">Murabahah</h4>
            <p className="text-sm text-gray-600">
              Cost-plus financing in Islamic economics.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}