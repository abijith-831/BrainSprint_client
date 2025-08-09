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
  const exampleRegex =
    /Example\s*\d*:\s*Input:\s*(.*?)\s*Output:\s*(.*?)\s*(?:Explanation:\s*(.*?))?(?=Example|\nConstraints|$)/gs;
  const constraintRegex = /Constraints:\s*([\s\S]*)/i;

  let constraints: string[] = [];
  const constraintsMatch = rawText.match(constraintRegex);
  if (constraintsMatch) {
    constraints = constraintsMatch[1]
      .split("\n")
      .map((c) => c.trim().replace(/^[-`•*]\s*/, ""))
      .filter(Boolean);
  }

  let examples: Example[] = [];
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
  // parse description text into sections
  const parsed = parseProblem(problem.description);

  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="text-2xl font-bold">{problem.id}.{problem.title}</h1>

      {/* Main description */}
      <p className="mt-4">{parsed.description}</p>

      {/* Examples */}
      {parsed.examples.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Examples</h2>
          {parsed.examples.map((ex, i) => (
            <div key={i} className="p-3 mb-3 rounded bg-gray-700 text-white">
              <p><strong>Input:</strong> {ex.input}</p>
              <p><strong>Output:</strong> {ex.output}</p>
              {ex.explanation && (
                <p><strong>Explanation:</strong> {ex.explanation}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Constraints */}
      {parsed.constraints.length > 0 && (
        <div className="mt-6 bg-gray-700 p-2 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Constraints</h2>
          <ul className="list-disc ml-6">
            {parsed.constraints.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Description;
