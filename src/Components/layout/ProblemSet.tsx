'use client';
import React, { useEffect } from 'react';
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProblems } from '@/redux/slices/problemSlice';
import { RootState, AppDispatch } from '@/redux/store';

const ProblemSet: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { problems, loading, error } = useSelector(
    (state: RootState) => state.problems
  );

  useEffect(() => {
    dispatch(fetchProblems());
  }, [dispatch]);

  if (loading) return <div className="flex justify-center items-center h-[50vh]">
    <div className="w-12 text-black flex justify-center text-center"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="7.33" height="7.33"><animate id="spinner_oJFS" begin="0;spinner_5T1J.end+0.2s" attributeName="x" dur="0.6s" values="1;4;1"></animate><animate begin="0;spinner_5T1J.end+0.2s" attributeName="y" dur="0.6s" values="1;4;1"></animate><animate begin="0;spinner_5T1J.end+0.2s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="0;spinner_5T1J.end+0.2s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="8.33" y="1" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.1s" attributeName="x" dur="0.6s" values="8.33;11.33;8.33"></animate><animate begin="spinner_oJFS.begin+0.1s" attributeName="y" dur="0.6s" values="1;4;1"></animate><animate begin="spinner_oJFS.begin+0.1s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.1s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="1" y="8.33" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.1s" attributeName="x" dur="0.6s" values="1;4;1"></animate><animate begin="spinner_oJFS.begin+0.1s" attributeName="y" dur="0.6s" values="8.33;11.33;8.33"></animate><animate begin="spinner_oJFS.begin+0.1s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.1s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="15.66" y="1" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.2s" attributeName="x" dur="0.6s" values="15.66;18.66;15.66"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="y" dur="0.6s" values="1;4;1"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="8.33" y="8.33" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.2s" attributeName="x" dur="0.6s" values="8.33;11.33;8.33"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="y" dur="0.6s" values="8.33;11.33;8.33"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="1" y="15.66" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.2s" attributeName="x" dur="0.6s" values="1;4;1"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="y" dur="0.6s" values="15.66;18.66;15.66"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.2s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="15.66" y="8.33" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.3s" attributeName="x" dur="0.6s" values="15.66;18.66;15.66"></animate><animate begin="spinner_oJFS.begin+0.3s" attributeName="y" dur="0.6s" values="8.33;11.33;8.33"></animate><animate begin="spinner_oJFS.begin+0.3s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.3s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="8.33" y="15.66" width="7.33" height="7.33"><animate begin="spinner_oJFS.begin+0.3s" attributeName="x" dur="0.6s" values="8.33;11.33;8.33"></animate><animate begin="spinner_oJFS.begin+0.3s" attributeName="y" dur="0.6s" values="15.66;18.66;15.66"></animate><animate begin="spinner_oJFS.begin+0.3s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.3s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect><rect x="15.66" y="15.66" width="7.33" height="7.33"><animate id="spinner_5T1J" begin="spinner_oJFS.begin+0.4s" attributeName="x" dur="0.6s" values="15.66;18.66;15.66"></animate><animate begin="spinner_oJFS.begin+0.4s" attributeName="y" dur="0.6s" values="15.66;18.66;15.66"></animate><animate begin="spinner_oJFS.begin+0.4s" attributeName="width" dur="0.6s" values="7.33;1.33;7.33"></animate><animate begin="spinner_oJFS.begin+0.4s" attributeName="height" dur="0.6s" values="7.33;1.33;7.33"></animate></rect></svg></div>
    </div>
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <ul className="p-2 rounded-md mt-2 space-y-2">
      {Array.isArray(problems) && problems.length > 0 && (

        problems.map((problem, index) => {
          const slug = problem.title.toLowerCase().replace(/\s+/g, '-');

          return (
            <li key={problem.id}>
              <Link href={`/problems/${slug}/description`}>
                <div className="flex items-center justify-between bg-gray-200 hover:bg-gray-400 dark:bg-neutral-700  px-4 py-2 rounded-md gap-2 dark:hover:bg-neutral-600 cursor-pointer">
                  <div className="flex justify-start text-sm">
                    {index + 1}. {problem.title}
                  </div>
                  <div className="flex items-center justify-end gap-6">
                    <div
                      className={`flex items-center justify-end text-sm ${
                        problem.difficulty === 'Easy'
                          ? 'text-green-400'
                          : problem.difficulty === 'Medium'
                          ? 'text-yellow-400'
                          : 'text-red-400'
                      }`}
                    >
                      {problem.difficulty}
                    </div>
                    <div className='text-sm '>{problem.acceptance_rate}%</div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })
      )}

      </ul>
    </div>
  );
};

export default ProblemSet;
