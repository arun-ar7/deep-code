import React, { useRef } from "react";
import "../styles/textAreaStyles.css";

//highlight js
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/default.css"; // Import the styles

// Import the languages you want to support
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("python", python);

const TextArea = ({ text, setText }) => {
  const codeRef = useRef("");
  // const logKey = (e) => {
  //   if (e.code === "Tab" && !e.shiftKey) {
  //     e.preventDefault();
  //     const value = codeRef.current.value;
  //     const selectionStart = codeRef.current.selectionStart;
  //     const selectionEnd = codeRef.current.selectionEnd;
  //     // console.log("value : ", value, "\n", "selectionStart : ", selectionStart);
  //     codeRef.current.value =
  //       value.substring(0, selectionStart) +
  //       "  " +
  //       value.substring(selectionEnd);
  //     codeRef.current.selectionStart =
  //       selectionEnd + 2 - (selectionEnd - selectionStart);
  //     codeRef.current.selectionEnd =
  //       selectionEnd + 2 - (selectionEnd - selectionStart);
  //   } else if (e.code === "Tab" && e.shiftKey) {
  //     e.preventDefault();
  //     const value = codeRef.current.value;
  //     const selectionStart = codeRef.current.selectionStart;
  //     const selectionEnd = codeRef.current.selectionEnd;

  //     const beforeStart = value
  //       .substring(0, selectionStart)
  //       .split("")
  //       .reverse()
  //       .join("");
  //     const indexOfTab = beforeStart.indexOf("  ");
  //     const indexOfNewline = beforeStart.indexOf("\n");

  //     if (indexOfTab !== -1 && indexOfTab < indexOfNewline) {
  //       codeRef.current.value =
  //         beforeStart
  //           .substring(indexOfTab + 2)
  //           .split("")
  //           .reverse()
  //           .join("") +
  //         beforeStart.substring(0, indexOfTab).split("").reverse().join("") +
  //         value.substring(selectionEnd);

  //       codeRef.current.selectionStart = selectionStart - 2;
  //       codeRef.current.selectionEnd = selectionEnd - 2;
  //     }
  //   }
  // };

  const handleKeyDown = (e) => {
    if (e.key === "Tab" && !e.shiftKey) {
      e.preventDefault();

      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;

      const updatedText = text.substring(0, start) + "\t" + text.substring(end);

      setText(updatedText);
      e.target.setSelectionRange(start + 1, start + 1);
    } else if (e.key === "Tab" && e.shiftKey) {
      e.preventDefault();

      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const selectedText = text.substring(start, end);

      // Remove one tab character from the beginning of each selected line
      const lines = selectedText.split("\n");
      const updatedLines = lines.map((line) =>
        line.startsWith("\t") ? line.substring(1) : line
      );

      const updatedText =
        text.substring(0, start) +
        updatedLines.join("\n") +
        text.substring(end);

      setText(updatedText);
      e.target.setSelectionRange(start, start);
    }
  };
  // return (
  //   <div>
  //     <textarea
  //       onKeyDown={logKey}
  //       ref={codeRef}
  //       onChange={(e) => setText(e.target.value)}
  //       className="textAreaForProgramming"
  //     ></textarea>
  //   </div>
  // );
  //highlight code
  const highlightCode = () => {
    return { __html: hljs.highlightAuto(text).value };
  };
  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textAreaForProgramming"
        onKeyDown={handleKeyDown}
      >
        <pre>
          <code dangerouslySetInnerHTML={highlightCode()} />
        </pre>
      </textarea>
    </div>
  );
};

export default TextArea;
