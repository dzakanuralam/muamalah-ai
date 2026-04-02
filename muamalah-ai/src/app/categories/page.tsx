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

const categories = [
  {
    name: 'Business Contracts',
    description: 'Islamic contracts for business transactions',
    topics: ['Syirkah', 'Murabaha'],
    color: 'green'
  },
  {
    name: 'Financial Prohibitions',
    description: 'Forbidden financial practices in Islam',
    topics: ['Riba'],
    color: 'red'
  },
  {
    name: 'Ethics & Practices',
    description: 'Islamic business ethics and principles',
    topics: [], // Will be populated as we add more topics
    color: 'blue'
  }
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold mb-4 text-green-700 text-center">
        Categories
      </h1>

      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Explore Islamic business topics organized by category.
        Each category contains related concepts with detailed explanations.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {categories.map((category, index) => (
          <div key={index} className={`p-6 bg-white rounded-xl shadow-sm border-l-4 ${
            category.color === 'green' ? 'border-green-500' :
            category.color === 'red' ? 'border-red-500' : 'border-blue-500'
          }`}>
            <h3 className={`font-bold text-xl mb-3 ${
              category.color === 'green' ? 'text-green-700' :
              category.color === 'red' ? 'text-red-700' : 'text-blue-700'
            }`}>
              {category.name}
            </h3>
            <p className="text-gray-600 mb-4">{category.description}</p>

            <div className="space-y-2">
              {category.topics.length > 0 ? (
                category.topics.map((topicName, topicIndex) => {
                  const topic = topicsData.topics.find((t: Topic) => t.topic === topicName);
                  return topic ? (
                    <Link
                      key={topicIndex}
                      href={`/${topic.topic.toLowerCase()}`}
                      className={`block p-3 rounded-lg border transition-colors ${
                        category.color === 'green' ? 'border-green-200 hover:bg-green-50' :
                        category.color === 'red' ? 'border-red-200 hover:bg-red-50' : 'border-blue-200 hover:bg-blue-50'
                      }`}
                    >
                      <h4 className="font-semibold">{topic.topic}</h4>
                      <p className="text-sm text-gray-600">{topic.subtopic}</p>
                    </Link>
                  ) : null;
                })
              ) : (
                <p className="text-sm text-gray-500 italic">Topics coming soon...</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/library" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold">
          View All Topics →
        </Link>
      </div>

    </main>
  );
}