import topicsData from '../../data/topics.json';

export default function RibaPage() {
  const ribaTopic = topicsData.topics.find(topic => topic.topic === 'Riba');

  if (!ribaTopic) {
    return <div>Topic not found</div>;
  }

  return (
    <main className="min-h-screen px-6 py-12 max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-4 text-green-700">
        {ribaTopic.topic}
      </h1>

      <p className="text-xl text-gray-600 mb-8">
        {ribaTopic.subtopic}
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Ruling</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          {ribaTopic.ruling}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Quranic Evidence</h2>
        <div className="space-y-4">
          {ribaTopic.quran.map((verse, index) => (
            <div key={index} className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <p className="font-semibold text-green-800 mb-2">Surah {verse.verse}</p>
              <p className="text-gray-700 italic">"{verse.text}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Hadith Evidence</h2>
        <div className="space-y-4">
          {ribaTopic.hadith.map((hadith, index) => (
            <div key={index} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-semibold text-blue-800 mb-2">Narrated by {hadith.narrator}</p>
              <p className="text-gray-700 italic">"{hadith.text}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Scholarly Opinion</h2>
        <p className="text-gray-700 leading-relaxed">
          {ribaTopic.scholar_opinion}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Modern Application</h2>
        <p className="text-gray-700 leading-relaxed">
          {ribaTopic.modern_application}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Key Takeaways</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {ribaTopic.keywords.map((keyword, index) => (
            <li key={index} className="capitalize">{keyword.replace('-', ' ')}</li>
          ))}
        </ul>
      </section>

    </main>
  );
}