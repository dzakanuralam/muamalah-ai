import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Muamalah AI - Islamic Business Knowledge Platform',
  description: 'Learn Islamic business laws (fiqh muamalah) with structured, evidence-based content and practical applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">

        {/* NAVBAR */}
        <nav className="flex justify-between items-center p-6 border-b bg-white">
          <h1 className="text-xl font-bold text-green-700">Muamalah AI</h1>
          <div className="space-x-6">
            <a href="/" className="text-gray-700 hover:text-green-700 transition-colors">Home</a>
            <a href="/library" className="text-gray-700 hover:text-green-700 transition-colors">Library</a>
            <a href="/categories" className="text-gray-700 hover:text-green-700 transition-colors">Categories</a>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        {children}

      </body>
    </html>
  );
}