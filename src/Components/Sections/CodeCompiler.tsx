import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeCompiler() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// Start typing...");

  return (
    <div className="flex flex-col w-full h-full p-2 rounded-md ">
      {/* Language Selector */}
      <div className="mb-2">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>
      </div>

      {/* Code Editor - fills remaining space */}
      <div className="flex-1 ">
        <Editor
          height="80%"
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
