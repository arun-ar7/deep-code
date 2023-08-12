import React from "react";
import TextArea from "../TextArea/TextArea";
import "../styles/codeEditor.css";
const Home = () => {
  //more implementations to be done
  return (
    <div className="homeContainer">
      <div>
        <div>
          <div className="codeEditorHeader">
            <div className="codeEditorHeadLeft codeEditorButton">Run</div>
            <div className="codeEditorHeadRight codeEditorButton">Save</div>
          </div>
        </div>
        <TextArea />
      </div>
      <div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
};

export default Home;
