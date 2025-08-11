import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeCompiler() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// Start typing...");
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedCode = localStorage.getItem("savedCode");
    const savedLanguage = localStorage.getItem("savedLanguage");

    if (savedCode) setCode(savedCode);
    if (savedLanguage) setLanguage(savedLanguage);

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) { 
      localStorage.setItem("savedCode", code);
      localStorage.setItem("savedLanguage", language);
    }
  }, [code, language, isLoaded]);

  const handleTest = () => {
    console.log("Testing code:", code);
    alert("Test button clicked!\n(Check console for code output)");
  };

  const handleSubmit = () => {
    console.log("Submitting code:", code);
    alert("Code submitted successfully!");
  };

  if (!isLoaded) return <div className="text-white">Loading...</div>; 

  return (
    <div className="flex flex-col w-full h-full p-2 rounded-md">
      {/* Top Controls */}
      <div className="mb-2 flex justify-between">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-1 border rounded text-black"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>

        <div className="flex gap-2">
          <button
            onClick={handleTest}
            className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Test
          </button>
          <button
            onClick={handleSubmit}
            className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 border-2 mb-2">
        <Editor
          height="100%"
          width="100%"
          language={language}
          value={code}
          onChange={(value) => setCode(value || "")}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
          }}
        />
      </div>
    </div>
  );
}
