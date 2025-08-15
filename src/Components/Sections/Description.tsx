import React from 'react'
import { Problem } from '@/redux/slices/problemSlice';

interface DescriptionProps {
  problem: Problem;
}

interface Example {
  input: string;
  output: string;
  explanation?: string;
}

interface ParsedProblem {
  description: string;
  examples: Example[];
  constraints: string[];
}

function parseProblem(rawText: string): ParsedProblem {
  // Replace the s flag with [\s\S] to match any character including newlines
  const exampleRegex =
    /Example\s*\d*:\s*Input:\s*([\s\S]*?)\s*Output:\s*([\s\S]*?)\s*(?:Explanation:\s*([\s\S]*?))?(?=Example|\nConstraints|$)/g;
  const constraintRegex = /Constraints:\s*([\s\S]*)/i;

  let constraints: string[] = [];
  const constraintsMatch = rawText.match(constraintRegex);
  if (constraintsMatch) {
    constraints = constraintsMatch[1]
      .split("\n")
      .map((c) => c.trim().replace(/^[-`•*]\s*/, ""))
      .filter(Boolean);
  }

  const examples: Example[] = [];
  let match;
  while ((match = exampleRegex.exec(rawText)) !== null) {
    examples.push({
      input: match[1]?.trim() || "",
      output: match[2]?.trim() || "",
      explanation: match[3]?.trim() || undefined,
    });
  }

  const descriptionPart = rawText.split(/Example\s*\d*:/)[0].trim();

  return {
    description: descriptionPart,
    examples,
    constraints,
  };
}

const Description: React.FC<DescriptionProps> = ({ problem }) => {

  const parsed = parseProblem(problem.description);
  

  return (
    <div className="w-full h-full overflow-y-auto p-4">
      {/* Title */}
      <h1 className="text-xl font-bold">{problem.id}.{problem.title}</h1>
      <div className='flex gap-6 mt-2'>
        <h1 className='bg-neutral-700 rounded-full px-3 py-1'>{problem.difficulty}</h1>
        <h1 className='bg-neutral-700 rounded-full px-3 py-1'>Topics</h1>
        <h1 className='bg-neutral-700 rounded-full px-3 py-1'>Companies</h1>
      </div>

      {/* Main description */}
      <p className="mt-4 text-sm">{parsed.description}</p>

      {/* Examples */}
      {parsed.examples.length > 0 && (
        <div className="mt-6">
          <h2 className="text-md font-semibold mb-2">Examples</h2>
          {parsed.examples.map((ex, i) => (
            <div key={i} className="p-3 mb-3 rounded bg-neutral-700 text-white">
              <p className='text-sm'><strong>Input:</strong> {ex.input}</p>
              <p className='text-sm'><strong>Output:</strong> {ex.output}</p>
              {ex.explanation && (
                <p className='text-sm'><strong>Explanation:</strong> {ex.explanation}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Constraints */}
      {parsed.constraints.length > 0 && (
        <div className="mt-6 bg-neutral-700 p-2 rounded-md">
          <h2 className="text-md font-semibold mb-2">Constraints</h2>
          <ul className="list-disc ml-6">
            {parsed.constraints.map((c, i) => (
              <li className='text-sm' key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}
      
      <hr className="my-4 border-gray-400" />
      <div className=''>
        <h2 className='text-sm'>seen this question in real interview before ?</h2>
        <div className='flex items-center justify-start gap-4 mt-2'>
          <button className='bg-neutral-600 rounded-full px-2 py-1 '>Yes</button>
          <button className='bg-neutral-600 rounded-full px-2 py-1 '>No</button>
        </div>
      </div>
      <hr className="my-4 border-gray-400" />
      <div className='flex gap-4'>
        <h1 className=''>Accepted <span className='font-bold '>{problem.accepted}/{problem.submissions}</span></h1>
        <h1 >Acceptance rate <span className='font-bold '>{problem.acceptance_rate}</span> % </h1>
      </div>
      <hr className="my-4 border-gray-400" />
      <div>
        <h1 className='font-bold'>Topics</h1>
        {problem.related_topics && problem.related_topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {problem.related_topics
              .split(',')
              .map(topic => topic.trim()) 
              .filter(topic => topic.length > 0) 
              .map((topic, index) => (
                <span
                  key={index}
                  className="bg-neutral-600 text-white px-3 py-1 rounded-full text-sm"
                >
                  {topic}
                </span>
              ))}
          </div>
        )}


      </div>
    </div>
  );
};

export default Description;