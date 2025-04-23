'use client';
import { ThemeToggle } from './components/ThemeToggle'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const features = [
  {
    title: 'Gmail Composer',
    description: 'Automatically compose professional emails with AI assistance',
    icon: '📧'
  },
  {
    title: 'PDF Summarizer',
    description: 'Extract key insights from your documents instantly',
    icon: '📄'
  },
  {
    title: 'Meeting Summarizer',
    description: 'Get concise summaries of your meetings automatically',
    icon: '🎥'
  },
  {
    title: 'Resume Builder',
    description: 'Create professional resumes with AI-powered suggestions',
    icon: '📝'
  },
  {
    title: 'More Coming Soon',
    description: "We're constantly adding new AI-powered tools",
    icon: '⚡'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 md:px-6 lg:px-8">
     <nav className="flex items-center justify-between mb-16 animate-fadeIn gap-4">
  <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Automa-AI</h1>
  
  <div className="flex items-center gap-4 dark:text-purple-400 text-gray-900">
    <SignedOut>
      <SignInButton />
      <SignUpButton />
    </SignedOut>
    
    <SignedIn>
      <UserButton />
    </SignedIn>

    <ThemeToggle />
  </div>
</nav>
      <section className="max-w-4xl mx-auto text-center mb-16 animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent animate-gradient">
          Automate Your Workflow with AI
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Streamline your daily tasks with our suite of AI-powered tools. From email composition
          to document summarization.
        </p>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Get Started
        </button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="p-6 rounded-lg bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fadeInUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-4xl mb-4 animate-bounce-slow">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="max-w-4xl mx-auto text-center mt-24 animate-fadeInUp">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Boost Your Productivity?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Join thousands of users who are already saving time with Automa-AI
        </p>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Try for Free
        </button>
      </section>
    </main>
  )
}
