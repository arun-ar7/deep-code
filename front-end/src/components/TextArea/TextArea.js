import React, { useRef } from "react";
import "../styles/textAreaStyles.css";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";

const TextArea = ({ code, setCode, selectedLanguage }) => {
  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <div>
      <AceEditor
        mode={selectedLanguage}
        theme="monokai"
        onChange={handleCodeChange}
        className="textAreaForProgramming"
        value={code}
        style={{ height: "90vh", width: "50vw" }}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default TextArea;
