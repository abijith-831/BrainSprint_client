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
    <div className="min-h-screen">
      {/* Toggle buttons above the title */}
      <div className="flex justify-center gap-4 p-4 bg-gray-100">
        <button
          className={`px-4 py-2 rounded ${
            view === 'description' ? 'bg-blue-600 text-white' : 'bg-gray-300'
          }`}
          onClick={() => setView('description')}
        >
          Description
        </button>
        <button
          className={`px-4 py-2 rounded ${
            view === 'solution' ? 'bg-blue-600 text-white' : 'bg-gray-300'
          }`}
          onClick={() => setView('solution')}
        >
          Solution
        </button>
      </div>

      <div className="w-full flex items-stretch justify-between min-h-screen">
        {/* Left Side */}
        <div className="flex items-center w-1/2 justify-center bg-gray-800 m-2 rounded-md p-4">
          {view === 'description' ? (
            <Description problem={currentProblem} />
          ) : (
            <Solution problem={currentProblem} />
          )}
        </div>

        {/* Right Side */}
        <div className="flex w-1/2 flex-col items-center justify-center min-h-screen gap-2">
          <div className="flex items-center justify-center w-full h-1/2 rounded-md bg-green-400 mt-2 border-b border-gray-600">
            <CodeCompiler />
          </div>
          <div className="flex items-center justify-center w-full h-1/2 bg-yellow-300 rounded-md mb-2 ">
            <TestCases />
          </div>
        </div>
      </div>
    </div>
  );
}
