'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ThemeToggle } from '../components/ThemeToggle';
import {
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';

// Dummy workflow components for now
const ResumeBuilder = () => <div className="text-xl">📝 Resume Builder Coming Soon</div>;
const PDFSummarizer = () => <div className="text-xl">📄 PDF Summarizer Coming Soon</div>;

export default function DashboardPage() {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const [selectedWorkflow, setSelectedWorkflow] = useState<string | null>(null);

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/');
    }
  }, [isSignedIn, router]);

  const renderWorkflow = () => {
    switch (selectedWorkflow) {
      case 'Resume Builder':
        return <ResumeBuilder />;
      case 'PDF Summarizer':
        return <PDFSummarizer />;
      default:
        return (
          <>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome to Your Dashboard</h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Select a workflow from the sidebar to get started.
            </p>
          </>
        );
    }
  };

  return (
    <main className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <Sidebar setSelectedWorkflow={setSelectedWorkflow} selectedWorkflow={selectedWorkflow} />
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-900">
        <nav className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Automa-AI</h1>
          <div className="flex items-center gap-4 dark:text-purple-400 text-gray-900">
            {!isSignedIn ? (
              <>
                <SignInButton />
                <SignUpButton />
              </>
            ) : (
              <UserButton />
            )}
            <ThemeToggle />
          </div>
        </nav>

        {/* Main Content Area */}
        <div
  className="bg-gray-500 p-6 rounded-lg shadow-lg overflow-auto"
  style={{ height: 'calc(100vh - 8rem)' }}
>
  {renderWorkflow()}
</div>
      </div>
    </main>
  );
}
