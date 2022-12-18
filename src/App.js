import React from "react";
import Timer from "./components/Timer/Timer";

const App = () => {
  const settings = {
    focus: 25 * 60 * 1000,
    shortBreak: 5 * 60 * 1000,
    longBreak: 15 * 60 * 1000,
  };

  return (
    <div className="app">
      <Timer userSettings={settings} />
    </div>
  );
};

export default App;
