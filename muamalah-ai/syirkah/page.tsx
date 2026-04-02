export default function SyirkahPage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-3xl mx-auto">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-4 text-green-700">
        Syirkah
      </h1>

      {/* INTRO */}
      <p className="text-gray-600 mb-8">
        Syirkah is a partnership in Islamic business where two or more parties
        agree to share profits and losses based on mutual agreement.
      </p>

      {/* SECTION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Definition</h2>
        <p className="text-gray-700">
          Syirkah refers to a contract between partners who contribute capital
          and/or effort in a business and share the results.
        </p>
      </section>

      {/* SECTION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Evidence</h2>
        <p className="text-gray-700">
          The concept of partnership is supported in Islamic teachings and
          practiced by early Muslim communities.
        </p>
      </section>

      {/* SECTION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Application</h2>
        <p className="text-gray-700">
          Modern examples include joint ventures, startup co-founders,
          and shared investments.
        </p>
      </section>

    </main>
  );
}
