import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A11y</span>
              </div>
              <h1 className="text-2xl font-bold text-white">Learn Accessibility</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-300">
                <span className="font-medium">Level 1</span>
                <div className="w-32 h-2 bg-gray-700 rounded-full mt-1">
                  <div className="w-0 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Master Digital Accessibility
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Learn the fundamentals of web accessibility and create inclusive digital experiences for everyone.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Beginner Friendly</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>3 Lessons</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>~15 minutes</span>
            </div>
          </div>
        </div>

        {/* Level 1: Fundamentals */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">1</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Fundamentals</h3>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Lessons Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Lesson 1 */}
            <div className="group bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:border-blue-500/50 cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                  5 min
                </div>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                What is Digital Accessibility?
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Understand the core concepts and importance of digital accessibility in modern web development.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                  <span>Foundation</span>
                </div>
                <Link className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors" href="/digital-accessibility">
                  Start →
                </Link>
              </div>
            </div>

            {/* Lesson 2 */}
            {/* <div className="group bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:border-blue-500/50 cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                  6 min
                </div>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                How is Digital Accessibility Measured?
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Learn about WCAG guidelines, accessibility testing tools, and how to evaluate digital products.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                  <span>Standards</span>
                </div>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                  Start →
                </button>
              </div>
            </div> */}

            {/* Lesson 3 */}
            {/* <div className="group bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:border-blue-500/50 cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                  4 min
                </div>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                ARIA and HTML
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Master ARIA attributes and semantic HTML to create accessible user interfaces.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                  <span>Implementation</span>
                </div>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                  Start →
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Your Progress</h3>
            <span className="text-sm text-gray-400">0% Complete</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
            <div className="w-0 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"></div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>0 of 3 lessons completed</span>
            <span>Start your journey!</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Learning Journey
          </button>
          <p className="text-gray-400 text-sm mt-3">
            Join thousands of developers building accessible web experiences
          </p>
        </div>
      </main>
    </div>
  );
}
