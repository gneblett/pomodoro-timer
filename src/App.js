import React, { useState } from "react";
import Timer from "./components/Timer/Timer";
import ModeControls from "./components/Modes/ModeControls";

const App = () => {
  const [mode, setMode] = useState("focus");

  const settings = {
    focus: 25 * 60 * 1000,
    shortBreak: 5 * 60 * 1000,
    longBreak: 15 * 60 * 1000,
  };

  const changeModeHandler = (newMode) => {
    setMode(newMode);
  };

  return (
    <div className="app">
      <ModeControls onChangeMode={changeModeHandler} />
      <Timer currentMode={mode} userSettings={settings} />
    </div>
  );
};

export default App;
