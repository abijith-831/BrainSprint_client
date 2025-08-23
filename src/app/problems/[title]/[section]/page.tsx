'use client';

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import CodeCompiler from '@/Components/Sections/CodeCompiler';
import Description from '@/Components/Sections/Description';
import TestCases from '@/Components/Sections/TestCases';
import Solution from '@/Components/Sections/Solutions';
import ProtectedRoute from '@/utils/ProtectedRoute';
import { Problem } from '@/redux/slices/problemSlice';

interface PageProps {
  params: Promise<{ title: string; section: string }>;
}

function ProblemSectionPage({ params }: PageProps) {
  const { problems } = useSelector((state: RootState) => state.problems);
  const [resolvedParams, setResolvedParams] = useState<{ title: string; section: string } | null>(null);
  const [view, setView] = useState<'description' | 'solution'>('description');

  useEffect(() => {
    const resolveParams = async () => {
      const resolved = await params;
      setResolvedParams(resolved);
    };
    resolveParams();
  }, [params]);

  if (!resolvedParams) {
    return <div className="text-center">Loading...</div>;
  }

  const formattedTitle = resolvedParams.title.replace(/-/g, ' ').toLowerCase();
  const currentProblem: Problem | undefined = problems.find(
    (p) => p.title.toLowerCase() === formattedTitle
  );

  if (!currentProblem) {
    return <div className="text-center text-red-500">Problem not found</div>;
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Buttons */}
      <div className="flex justify-start gap-4 px-4 py-2 dark:bg-neutral-800 flex-shrink-0 sticky top-0 z-10">
        <button
          className={`px-4 py-2 rounded ${
            view === 'description' ? 'bg-neutral-500 text-white' : 'bg-neutral-600'
          }`}
          onClick={() => setView('description')}
        >
          Description
        </button>
        <button
          className={`px-4 py-2 rounded ${
            view === 'solution' ? 'bg-neutral-500 text-white' : 'bg-neutral-600'
          }`}
          onClick={() => setView('solution')}
        >
          Solution
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full flex-1 min-h-0 flex flex-col lg:flex-row lg:justify-between">
        {/* Left Panel (Description / Solution) */}
        <div className="flex lg:w-1/2 bg-neutral-800 m-2 rounded-md overflow-hidden">
          <div className="w-full overflow-y-auto">
            {view === 'description' ? (
              <Description problem={currentProblem} />
            ) : (
              <Solution problem={currentProblem} />
            )}
          </div>
        </div>

        {/* Right Panel (Code + Test Cases) */}
        <div className="flex flex-col gap-2 py-2 pr-2 lg:w-1/2">
          {/* Compiler gets bigger height on mobile */}
          <div className="flex items-center justify-center w-full min-h-[250px] lg:h-3/5 rounded-md bg-neutral-800 border-b border-gray-600 p-2">
            <CodeCompiler
              problemId={currentProblem.id}
              problem_id={currentProblem._id}
              problemTitle={currentProblem.title}
              problemDescription={currentProblem.description}
            />
          </div>

          {/* Test cases smaller on mobile */}
          <div className="flex items-center justify-center w-full min-h-[150px] lg:h-2/5 bg-neutral-800 rounded-md p-2">
            <TestCases
              problemId={currentProblem.id}
              problem={currentProblem.description}
            />
          </div>   
        </div>    
      </div>     
    </div>
  );
}

// ✅ Wrap in ProtectedRoute before export
export default function ProtectedProblemSectionPage(props: PageProps) {
  return (
    <ProtectedRoute>
      <ProblemSectionPage {...props} />
    </ProtectedRoute>
  );
}
