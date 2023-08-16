import React, { useState } from "react";
import TextArea from "../TextArea/TextArea";
import "../styles/codeEditor.css";
import axios from "axios";
import CodeEditor from "../TextArea/NewCodeEditor";
const Home = () => {
  //more implementations to be done

  const [text, setText] = useState("");
  const [lang, setLang] = useState("C");

  const handleRun = () => {
    axios
      .post("http://localhost:8080/run", { lang: lang, code: text })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="homeContainer">
      <div className="home-left">
        <select onChange={(e) => setLang(e.target.value)}>
          <option value="C">C</option>
          <option value="C++">C++</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="Javascript">Javascript</option>
        </select>

        {/* <TextArea text={text} setText={setText} /> */}
        <main className="App-main">
          <CodeEditor />
        </main>
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
