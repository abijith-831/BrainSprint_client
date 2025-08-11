'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import CodeCompiler from '@/Components/Sections/CodeCompiler';
import Description from '@/Components/Sections/Description';
import TestCases from '@/Components/Sections/TestCases';
import Solution from '@/Components/Sections/Solutions';

interface ProblemSectionProps {
  params: {
    title: string;
    section: string;
  };
}

export default function ProblemSectionPage({ params }: ProblemSectionProps) {
  const { problems } = useSelector((state: RootState) => state.problems);

  const formattedTitle = params.title.replace(/-/g, ' ').toLowerCase();

  const currentProblem = problems.find(
    (p) => p.title.toLowerCase() === formattedTitle
  );

  const [view, setView] = useState<'description' | 'solution'>('description');

  if (!currentProblem) {
    return <div className="text-center text-red-500">Problem not found</div>;
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Button Section - Fixed Height */}
      <div className="flex justify-start gap-4 px-4 py-2 dark:bg-neutral-800 flex-shrink-0">
        <button  className={`px-4 py-2 rounded ${  view === 'description' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`} onClick={() => setView('description')}>
          Description
        </button>
        <button  className={`px-4 py-2 rounded ${   view === 'solution' ? 'bg-blue-600 text-white' : 'bg-gray-300' }`}  onClick={() => setView('solution')}>
          Solution
        </button>
      </div>

      {/* Main Content Area - Fills Remaining Space */}
      <div className="w-full flex justify-between flex-1 min-h-0">
        {/* Left Side - Scrollable */}
        <div className="flex w-1/2 bg-neutral-800 m-2 rounded-md overflow-hidden">
          <div className="w-full overflow-y-auto">
            {view === 'description' ? (
              <Description problem={currentProblem} />
            ) : (
              <Solution problem={currentProblem} />
            )}
          </div>
        </div>

        {/* Right Side - Fixed Height, No Scroll */}
        <div className="flex w-1/2 flex-col gap-2 py-2 pr-2">
          <div className="flex items-center justify-center w-full h-3/5 rounded-md bg-neutral-800 border-b border-gray-600">
            <CodeCompiler />
          </div>
          <div className="flex items-center justify-center w-full h-2/5 bg-neutral-800 rounded-md">
            <TestCases problem={currentProblem.title}/>
          </div>
        </div>
      </div>
    </div>
  );
}