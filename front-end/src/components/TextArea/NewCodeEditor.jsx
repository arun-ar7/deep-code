import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/material.css";
import { Controlled as CodeMirror } from "react-codemirror2";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const options = {
    mode: "javascript",
    theme: "material",
    lineNumbers: true,
  };

  const handleCodeChange = (editor, data, newCode) => {
    setCode(newCode);
  };

  return (
    <CodeMirror
      value={code}
      onBeforeChange={handleCodeChange}
      options={options}
      className="code-mirror-wrapper"
    />
  );
};

export default CodeEditor;
