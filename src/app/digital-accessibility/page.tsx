"use client";

import Link from "next/link";
import { useState } from "react";

export default function DigitalAccessibility() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState(false);

  const steps = [
    {
      type: "knowledge",
      title: "Welcome to Digital Accessibility!",
      content: "Let's start with the basics. Digital accessibility ensures that websites and apps can be used by everyone, including people with disabilities.",
      subtitle: "What is Digital Accessibility?",
      knowledgePoints: [
        "Ensures digital products work for people with disabilities",
        "Benefits everyone, not just people with disabilities", 
        "Includes visual, motor, cognitive, and auditory considerations",
        "Follows established guidelines like WCAG"
      ],
      hasQuestion: false
    },
    {
      type: "image-quiz",
      title: "Visual Accessibility Barriers",
      content: "Look at these examples of common accessibility issues. Click on the image that shows a good accessibility practice.",
      question: "Which image shows better accessibility?",
      images: [
        {
          src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZjNmNGY2Ii8+Cjx0ZXh0IHg9IjEwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMzc0MTUxIj5JbWFnZSB3aXRob3V0IGFsdCB0ZXh0PC90ZXh0Pgo8L3N2Zz4K",
          alt: "Image without alt text - accessibility issue",
          isCorrect: false,
          description: "Image without alt text - screen readers can't describe this"
        },
        {
          src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZjNmNGY2Ii8+Cjx0ZXh0IHg9IjEwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMzc0MTUxIj5JbWFnZSB3aXRoIGFsdD0iQ2F0IHNpdHRpbmcgaW4gYSBnYXJkZW4iPC90ZXh0Pgo8L3N2Zz4K",
          alt: "Image with proper alt text - good accessibility",
          isCorrect: true,
          description: "Image with descriptive alt text - screen readers can describe this"
        }
      ],
      correct: 1,
      explanation: "The second image shows proper accessibility with descriptive alt text that screen readers can announce to users who are blind or have low vision."
    },
    {
      type: "knowledge",
      title: "Why Accessibility Matters",
      content: "Accessibility isn't just about people with disabilities. It benefits everyone!",
      subtitle: "Universal Benefits",
      knowledgePoints: [
        "Captions help in noisy environments",
        "Keyboard navigation improves efficiency",
        "Better SEO and search rankings",
        "Legal compliance and reduced risk",
        "Improved user experience for all"
      ],
      hasQuestion: false
    },
    {
      type: "multiple-choice",
      title: "Understanding Barriers",
      content: "Let's test your understanding of different types of accessibility barriers.",
      question: "What type of barrier would 'images without alt text' represent?",
      options: [
        "Motor barrier",
        "Visual barrier", 
        "Cognitive barrier",
        "Auditory barrier"
      ],
      correct: 1,
      explanation: "Images without alt text are a visual barrier because people who are blind or have low vision can't understand what the image shows without alternative text."
    },
    {
      type: "image-quiz",
      title: "Color Contrast",
      content: "Good color contrast is essential for accessibility. Click on the example that shows better contrast.",
      question: "Which text has better accessibility contrast?",
      images: [
        {
          src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZmZmZmZmIi8+Cjx0ZXh0IHg9IjEwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjZmZmZmZmIj5Qb29yIGNvbnRyYXN0PC90ZXh0Pgo8L3N2Zz4K",
          alt: "Poor contrast example",
          isCorrect: false,
          description: "Poor contrast - white text on white background"
        },
        {
          src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZmZmZmZmIi8+Cjx0ZXh0IHg9IjEwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMDAwMDAwIj5Hb29kIGNvbnRyYXN0PC90ZXh0Pgo8L3N2Zz4K",
          alt: "Good contrast example",
          isCorrect: true,
          description: "Good contrast - black text on white background"
        }
      ],
      correct: 1,
      explanation: "The second example shows good contrast with dark text on a light background, making it much easier to read for everyone."
    },
    {
      type: "multiple-choice",
      title: "Practical Application",
      content: "Let's test your understanding with a real-world scenario.",
      question: "A website has a form that can only be submitted by clicking a button. What accessibility issue does this create?",
      options: [
        "Visual barrier - the button is too small",
        "Motor barrier - no keyboard alternative",
        "Cognitive barrier - unclear instructions",
        "No accessibility issue"
      ],
      correct: 1,
      explanation: "Forms should be accessible via keyboard navigation. Users who can't use a mouse need to be able to submit forms using the keyboard (Tab + Enter)."
    },
    {
      type: "completion",
      title: "Great Job! 🎉",
      content: "You've completed the first lesson on digital accessibility! You now understand the basics of what accessibility means and why it matters.",
      question: "Ready to continue your learning journey?",
      options: [
        "Yes, let's learn more!",
        "I need to review this lesson",
        "Take me back to the main page"
      ],
      correct: 0,
      explanation: "Excellent! You're ready to move on to the next lesson about how accessibility is measured."
    }
  ];

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers({ ...selectedAnswers, [currentStep]: answerIndex.toString() });
  };

  const handleImageSelect = (imageIndex: number) => {
    setSelectedAnswers({ ...selectedAnswers, [currentStep]: imageIndex.toString() });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setShowResult(false);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setShowResult(false);
    }
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const isCorrect = selectedAnswers[currentStep] === currentStepData.correct?.toString();
  const hasAnswered = selectedAnswers[currentStep] !== undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A11y</span>
                </div>
                <h1 className="text-2xl font-bold text-white">Learn Accessibility</h1>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-300">
                <span className="font-medium">Level 1 • Lesson 1</span>
                <div className="w-32 h-2 bg-gray-700 rounded-full mt-1">
                  <div 
                    className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">{currentStep + 1}</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{currentStepData.title}</h1>
                <p className="text-gray-400">Step {currentStep + 1} of {steps.length}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400 mb-1">Progress</div>
              <div className="w-48 h-2 bg-gray-700 rounded-full">
                <div 
                  className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-8">
          {/* Content */}
          <div className="mb-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {currentStepData.content}
            </p>
            
            {/* Knowledge Points */}
            {currentStepData.type === "knowledge" && currentStepData.knowledgePoints && (
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-4">{currentStepData.subtitle}</h3>
                <ul className="space-y-3">
                  {currentStepData.knowledgePoints.map((point, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-blue-400 mt-1">✓</span>
                      <span className="text-blue-100">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Question for non-knowledge steps */}
            {currentStepData?.type !== "knowledge" && currentStepData?.type !== "completion" && (
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">💡 Question</h3>
                <p className="text-blue-100 font-medium">
                  {currentStepData?.question}
                </p>
              </div>
            )}
          </div>

          {/* Image Quiz */}
          {currentStepData?.type === "image-quiz" && (
            <div className="space-y-4 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                {currentStepData.images?.map((image, index) => (
                  <div 
                    key={index}
                    className={`cursor-pointer rounded-lg border-2 transition-all duration-200 ${
                      selectedAnswers[currentStep] === index.toString()
                        ? 'border-blue-500 bg-blue-900/20'
                        : 'border-gray-600 hover:border-gray-500 hover:bg-gray-700/30'
                    }`}
                    onClick={() => handleImageSelect(index)}
                  >
                    <div className="p-4">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <p className="text-gray-300 text-sm text-center">
                        {image.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Multiple Choice Options */}
          {currentStepData.type === "multiple-choice" && (
            <div className="space-y-3 mb-8">
              {currentStepData.options?.map((option, index) => (
                <label 
                  key={index}
                  className={`flex items-center space-x-3 cursor-pointer rounded-lg p-4 transition-all duration-200 ${
                    selectedAnswers[currentStep] === index.toString()
                      ? 'bg-blue-900/30 border border-blue-500/50'
                      : 'bg-gray-700/50 border border-gray-600 hover:bg-gray-700/70 hover:border-gray-500'
                  }`}
                >
                  <input 
                    type="radio" 
                    name={`step-${currentStep}`}
                    value={index}
                    checked={selectedAnswers[currentStep] === index.toString()}
                    onChange={() => handleAnswerSelect(index)}
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className="text-gray-300 flex-1">{option}</span>
                </label>
              ))}
            </div>
          )}

          {/* Result Display */}
          {showResult && (
            <div className={`rounded-lg p-6 mb-6 ${
              isCorrect 
                ? 'bg-green-900/20 border border-green-500/30' 
                : 'bg-red-900/20 border border-red-500/30'
            }`}>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-2xl">{isCorrect ? '✅' : '❌'}</span>
                <h3 className={`text-lg font-semibold ${
                  isCorrect ? 'text-green-300' : 'text-red-300'
                }`}>
                  {isCorrect ? 'Correct!' : 'Not quite right'}
                </h3>
              </div>
              <p className={`${
                isCorrect ? 'text-green-100' : 'text-red-100'
              }`}>
                {currentStepData?.explanation}
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentStep === 0
                  ? 'text-gray-500 cursor-not-allowed'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              <span>←</span>
              <span>Previous</span>
            </button>

            <div className="flex items-center space-x-4">
              {currentStepData?.type === "completion" && (
                <Link 
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Back to Lessons
                </Link>
              )}
              
              {/* Show Continue for knowledge sections */}
              {currentStepData?.type === "knowledge" ? (
                <button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Continue →
                </button>
              ) : !showResult && hasAnswered && currentStepData.type !== "completion" ? (
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Check Answer
                </button>
              ) : showResult && currentStep < steps.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Continue →
                </button>
              ) : currentStepData.type === "completion" ? (
                <Link
                  href="/"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block"
                >
                  Complete Lesson →
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}