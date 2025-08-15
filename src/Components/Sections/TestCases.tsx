import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface TestCasesProps {
  problemId: number;
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

  const examples: TestCase[] = [];
  let match;

  while ((match = exampleRegex.exec(rawText)) !== null) {
    examples.push({
      input: match[1]?.trim() || "",
      output: match[2]?.trim() || "",
      explanation: match[3]?.trim() || undefined,
    });
  }

  return examples;
}

const TestCases: React.FC<TestCasesProps> = ({ problemId, problem }) => {
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [selectedCase, setSelectedCase] = useState(0);

  // Redux test results for this problem
  const testCaseResults = useSelector(
    (state: RootState) => state.problems.testCaseResults[problemId] || []
  );

  useEffect(() => {
    if (problem) {
      const parsed = parseExamples(problem);
      setTestCases(parsed);
    }
  }, [problem]);

  // Helper: find result for given parsed test
  const findResultForCase = (input: string) => {
    return testCaseResults.find(
      (res) => res.input.trim() === input.trim()
    );
  };

  return (
    <div className="p-4 w-full h-full overflow-y-auto">
      <h1 className="font-bold mb-2">Test Cases</h1>

      {testCases.length > 0 ? (
        <>
          {/* Case selector buttons */}
          <div className="flex gap-2 mb-4">
            {testCases.map((tc, idx) => {
              const result = findResultForCase(tc.input);
              const status = result
                ? result.passed
                  ? "✅"
                  : "❌"
                : "";

              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCase(idx)}
                  className={`px-3 py-1 rounded ${
                    selectedCase === idx
                      ? "bg-neutral-500 text-white"
                      : "bg-neutral-700 hover:bg-neutral-500"
                  }`}
                >
                  Case {idx + 1} {status}
                </button>
              );
            })}
          </div>

          {/* Selected case details */}
          <div className="bg-neutral-700 text-white p-2 rounded">
            <div>Input: {testCases[selectedCase].input}</div>
            <div>Expected Output: {testCases[selectedCase].output}</div>

            {findResultForCase(testCases[selectedCase].input) && (
              <>
                <div className="mt-2">
                  <strong>Your Output:</strong>{" "}
                  {findResultForCase(testCases[selectedCase].input)?.actual}
                </div>
                <div>
                  <strong>Status:</strong>{" "}
                  {findResultForCase(testCases[selectedCase].input)?.passed
                    ? "✅ Passed" 
                    : "❌ Failed"}
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <p className="text-gray-400">No examples found in problem description.</p>
      )}
    </div>
  );
};

export default TestCases;
