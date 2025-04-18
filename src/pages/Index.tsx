
import { FileText, Mail, Video, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    title: "Gmail Composer",
    description: "Automatically compose professional emails with AI assistance",
    icon: Mail,
  },
  {
    title: "PDF Summarizer",
    description: "Extract key insights from your documents instantly",
    icon: FileText,
  },
  {
    title: "Meeting Summarizer",
    description: "Get concise summaries of your meetings automatically",
    icon: Video,
  },
  {
    title: "More Coming Soon",
    description: "We're constantly adding new AI-powered tools",
    icon: Zap,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-6">
            Automate Your Workflow with AI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Streamline your daily tasks with our suite of AI-powered tools. From email composition to document summarization.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-transform hover:scale-105">
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Productivity?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of users who are already saving time with Automa-AI
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-transform hover:scale-105">
            Try for Free
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
