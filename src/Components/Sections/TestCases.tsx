import { useEffect, useState } from "react";

interface TestCasesProps {
  problem: string;
}

interface TestCase {
  input: any;
  output: any;
}

const TestCases: React.FC<TestCasesProps> = ({ problem }) => {
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [selectedCase, setSelectedCase] = useState(0);

  useEffect(() => {
    const generateTestCases = async () => {
      const res = await fetch("/api/generateTestCases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: problem }),
      });

      const data = await res.json();

      try {
        // Remove code fences if present
        const jsonStr = data.testCases.replace(/```json|```/g, "").trim();
        const parsed = JSON.parse(jsonStr);
        setTestCases(parsed.testCases || []);
      } catch (e) {
        console.error("Invalid JSON format", e);
      }
    };

    if (problem) generateTestCases();
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
            <div>Input: {JSON.stringify(testCases[selectedCase].input)}</div>
            <div>Output: {JSON.stringify(testCases[selectedCase].output)}</div>
          </div>
        </>
      ) : (
        <p className="text-gray-400">Generating test cases...</p>
      )}
    </div>
  );
};

export default TestCases;
