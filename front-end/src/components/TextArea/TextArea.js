import React, { useRef } from "react";
import "../styles/textAreaStyles.css";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";

import "brace/mode/html";
import "brace/theme/xcode";
import "brace/snippets/html";
import "brace/ext/language_tools";

// let ace_theme = [

//   //light theme
//  'chrome' : 'Chrome',
//  'clouds' : 'Clouds',
//  'crimson_editor' : 'Crimson Editor',
//  'dawn' : 'Dawn',
//  'dreamweaver' : 'Dreamweaver',
//  'eclipse' : 'Eclipse',
//  'github' : 'GitHub',
//  'iplastic' : 'IPlastic',
//  'katzenmilch' : 'KatzenMilch',
//  'kuroir' : 'Kuroir',
//  'solarized_light' : 'Solarized Light',
//  'sqlserver' : 'SQL Server',
//  'textmate' : 'TextMate',
//  'tomorrow' : 'Tomorrow',
//  'xcode' : 'XCode',

//   // dark theme
//  'ambiance' : 'Ambiance',
//  'chaos' : 'Chaos',
//  'clouds_midnight' : 'Clouds Midnight',
//  'cobalt' : 'Cobalt',
//  'dracula' : 'Dracula',
//  'gob' : 'Greeon on Black',
//  'gruvbox' : 'Gruvbox',
//  'idle_fingers' : 'idle Fingers',
//  'kr_theme' : 'krTheme',
//  'merbivore' : 'Merbivore',
//  'merbivore_soft' : 'Merbivore Soft',
//  'mono_industrial' : 'Mono Industrial',
//  'monokai' : 'Monokai',
//  'pastel_on_dark' : 'Pastel on Dark',
//  'solarized_dark' : 'Solarized Dark',
//  'terminal' : 'Terminal',
//  'tomorrow_night' : 'Tomorrow Night',
//  'tomorrow_night_blue' : 'Tomorrow Night Blue',
//  'tomorrow_night_bright' : 'Tomorrow Night Bright',
//  'tomorrow_night_eighties' : 'Tomorrow Night 80s',
//  'twilight' : 'Twilight',
//  'vibrant_ink' : 'Vibrant Ink'
// ];

const TextArea = ({ code, setCode, selectedLanguage, selectedTheme }) => {
  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <div>
      <AceEditor
        mode={selectedLanguage}
        theme={selectedTheme}
        onChange={handleCodeChange}
        className="textAreaForProgramming"
        value={code}
        showPrintMargin={true}
        showGutter={true}
        style={{ height: "85vh", width: "49vw" }}
        highlightActiveLine={true}
        editorProps={{ $blockScrolling: Infinity }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default TextArea;