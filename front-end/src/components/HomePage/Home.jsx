import React, { useState } from "react";
import TextArea from "../TextArea/TextArea";
import "../styles/codeEditor.css";
import axios from "axios";
const Home = () => {
  //more implementations to be done

  const [code, setCode] = useState(
    "//Classname should be Main for java if given class name is public"
  );
  const [inputs, setInputs] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("java");
  const [output, setOutput] = useState("");

  // const [lang, setLang] = useState("C");

  const handleRun = () => {
    axios
      .post("http://localhost:8080/execute", {
        code: code,
        inputs: inputs,
        language: selectedLanguage,
      })
      .then((res) => {
        if (res?.data && typeof res.data === "string") {
          res.data.replaceAll("\\n", "<br>");
          setOutput(res.data);
        }
        // console.log(typeof res.data);
        console.log(res);
      })
      .catch((err) => {
        if (selectedLanguage === "java")
          setOutput("Error while executing : " + err.response.data.message.cmd);
        else if (selectedLanguage === "javascript")
          setOutput("Error while executing : " + err.response.data.error);
        else setOutput("error in execution");
        console.log(err);
      });
  };
  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Main.java";
    if (selectedLanguage === "java") a.download = "Main.java";
    else if (selectedLanguage === "c_cpp") a.download = "Hello.c";
    else if (selectedLanguage === "javascript") {
      a.download = "index.js";
    }

    a.click();
    URL.revokeObjectURL(url);
  };
  const handleInputsChange = (event) => {
    setInputs(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <div className="homeContainer">
      <div className="home-left">
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="java">Java</option>
          <option value="c_cpp">C</option>
          <option value="javascript">JavaScript</option>
        </select>

        <TextArea
          code={code}
          setCode={setCode}
          selectedLanguage={selectedLanguage}
        />
        <div>
          <div className="codeEditorHeader">
            <div
              onClick={handleRun}
              className="codeEditorHeadLeft codeEditorButton"
            >
              Run
            </div>
            <div
              className="codeEditorHeadRight codeEditorButton"
              onClick={handleDownload}
            >
              Save
            </div>
          </div>
        </div>
      </div>
      <div className="home-right">
        <div className="home-right-top">
          <label>Runtime Inputs:</label>
          <textarea
            value={inputs}
            onChange={handleInputsChange}
            className="codeEditorInputs"
          />
        </div>
        <div>Output</div>
        <hr />
        {/* <div>{output}</div> */}
        <div
          dangerouslySetInnerHTML={{ __html: output.replace(/\n/g, "<br>") }}
        />
      </div>
    </div>
  );
};

export default Home;
