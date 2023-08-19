import React, { useRef } from "react";
import "../styles/textAreaStyles.css";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";


// let ace_theme = [

//   //light theme
// 	'chrome' : 'Chrome',
// 	'clouds' : 'Clouds',
// 	'crimson_editor' : 'Crimson Editor',
// 	'dawn' : 'Dawn',
// 	'dreamweaver' : 'Dreamweaver',
// 	'eclipse' : 'Eclipse',
// 	'github' : 'GitHub',
// 	'iplastic' : 'IPlastic',
// 	'katzenmilch' : 'KatzenMilch',
// 	'kuroir' : 'Kuroir',
// 	'solarized_light' : 'Solarized Light',
// 	'sqlserver' : 'SQL Server',
// 	'textmate' : 'TextMate',
// 	'tomorrow' : 'Tomorrow',
// 	'xcode' : 'XCode',


//   // dark theme
// 	'ambiance' : 'Ambiance',
// 	'chaos' : 'Chaos',
// 	'clouds_midnight' : 'Clouds Midnight',
// 	'cobalt' : 'Cobalt',
// 	'dracula' : 'Dracula',
// 	'gob' : 'Greeon on Black',
// 	'gruvbox' : 'Gruvbox',
// 	'idle_fingers' : 'idle Fingers',
// 	'kr_theme' : 'krTheme',
// 	'merbivore' : 'Merbivore',
// 	'merbivore_soft' : 'Merbivore Soft',
// 	'mono_industrial' : 'Mono Industrial',
// 	'monokai' : 'Monokai',
// 	'pastel_on_dark' : 'Pastel on Dark',
// 	'solarized_dark' : 'Solarized Dark',
// 	'terminal' : 'Terminal',
// 	'tomorrow_night' : 'Tomorrow Night',
// 	'tomorrow_night_blue' : 'Tomorrow Night Blue',
// 	'tomorrow_night_bright' : 'Tomorrow Night Bright',
// 	'tomorrow_night_eighties' : 'Tomorrow Night 80s',
// 	'twilight' : 'Twilight',
// 	'vibrant_ink' : 'Vibrant Ink'
// ];


const TextArea = ({ code, setCode, selectedLanguage,selectedTheme }) => {
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
        style={{ height: "85vh", width: "49vw" }}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default TextArea;
