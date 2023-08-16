import React, { useState } from "react";
import TextArea from "../TextArea/TextArea";
import "../styles/codeEditor.css";
import axios from "axios";
const Home = () => {
  //more implementations to be done

  const [code, setCode] = useState("//Helloworld");
  const [selectedLanguage, setSelectedLanguage] = useState("java");
  // const [lang, setLang] = useState("C");

  const handleRun = () => {
    axios
      .post("http://localhost:8080/run", { lang: selectedLanguage, code: code })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
            <div className="codeEditorHeadRight codeEditorButton">Save</div>
          </div>
        </div>
      </div>
      <div className="home-right">
        <div>Output</div>
        <hr />
        <div>Dynamic Output value</div>
      </div>
    </div>
  );
};

export default Home;
