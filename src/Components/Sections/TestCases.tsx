import { useEffect, useState } from "react";

interface TestCasesProps {
  problem: string;
}

const TestCases: React.FC<TestCasesProps> = ({ problem }) => {
  const [testCases, setTestCases] = useState("");

  useEffect(() => {
    const generateTestCases = async () => {
      const res = await fetch("/api/generateTestCases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: problem }),
      });
      console.log('testtt');
      console.log('data',res);
      
      
      const data = await res.json();
      setTestCases(data.testCases);
    };

    if (problem) {
      generateTestCases();
    }
  }, [problem]);

  return (
    <div className="p-4 w-full h-full overflow-y-auto">
      <h1 className="font-bold mb-2">Test Cases</h1>

      {testCases ? (
        <pre className="bg-gray-800 text-green-400 p-2 mt-4 rounded whitespace-pre-wrap">
          {testCases}
        </pre>
      ) : (
        <p className="text-gray-400">Generating test cases...</p>
      )}
    </div>
  );
};

export default TestCases;
