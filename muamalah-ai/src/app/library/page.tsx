import Link from 'next/link';
import topicsData from '../../data/topics.json';

interface Topic {
  topic: string;
  subtopic: string;
  ruling: string;
  quran: Array<{ verse: string; text: string }>;
  hadith: Array<{ narrator: string; text: string }>;
  scholar_opinion: string;
  modern_application: string;
  keywords: string[];
}

export default function LibraryPage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold mb-4 text-green-700 text-center">
        Knowledge Library
      </h1>

      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Explore our comprehensive collection of Islamic business topics,
        each backed by Quranic verses, Hadith, and scholarly opinions.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topicsData.topics.map((topic: Topic, index: number) => (
          <Link key={index} href={`/${topic.topic.toLowerCase()}`} className="block">
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
              <h3 className="font-bold mb-2 text-lg text-green-700">{topic.topic}</h3>
              <p className="text-sm text-gray-600 mb-3">{topic.subtopic}</p>
              <p className="text-sm text-gray-500 line-clamp-2">{topic.ruling}</p>
              <div className="mt-4 flex flex-wrap gap-1">
                {topic.keywords.slice(0, 3).map((keyword: string, idx: number) => (
                  <span key={idx} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-600">
          More topics coming soon. Each topic includes Quranic evidence, Hadith references,
          scholarly opinions, and modern business applications.
        </p>
      </div>

    </main>
  );
}