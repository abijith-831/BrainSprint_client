import { useEffect, useState } from "react";

interface TestCasesProps {
  problemId:number;
  problem: string; 
}

interface TestCase {
  input: string;
  output: string;
  explanation?: string;
}

function parseExamples(rawText: string) {
  const exampleRegex =
    /Example\s*\d*:\s*Input:\s*(.*?)\s*Output:\s*(.*?)\s*(?:Explanation:\s*(.*?))?(?=Example|\nConstraints|$)/gs;

  const examples = [];
  let match;

  while ((match = exampleRegex.exec(rawText)) !== null) {
    examples.push({
      input: match[1]?.trim() || "",
      output: match[2]?.trim() || "",
      explanation: match[3]?.trim() || undefined
    });
  }

  return examples;
}


const TestCases: React.FC<TestCasesProps> = ({ problemId, problem }) => {
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [selectedCase, setSelectedCase] = useState(0);

  console.log('proble id in test cases',problemId)

  useEffect(() => {
    if (problem) {
      const parsed = parseExamples(problem);
      
      setTestCases(parsed);
    }
  }, [problem]);

  return (
    <div className="p-4 w-full h-full overflow-y-auto">
      <h1 className="font-bold mb-2">Test Cases</h1>

      {testCases.length > 0 ? (
        <>
          {/* Case selector buttons */}
          <div className="flex gap-2 mb-4">
            {testCases.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCase(idx)}
                className={`px-3 py-1 rounded ${
                  selectedCase === idx
                    ? "bg-neutral-500 text-white"
                    : "bg-neutral-700 hover:bg-neutral-500"
                }`}
              >
                Case {idx + 1}
              </button>
            ))}
          </div>

          {/* Selected case details */}
          <div className="bg-neutral-700 text-green-400 p-2 rounded">
            <div>Input: {testCases[selectedCase].input}</div>
            <div>Output: {testCases[selectedCase].output}</div>

          </div>
        </>
      ) : (
        <p className="text-gray-400">No examples found in problem description.</p>
      )}
    </div>
  );
};

export default TestCases;
