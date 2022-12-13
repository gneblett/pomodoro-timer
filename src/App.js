import React, { useState } from "react";
import Timer from "./components/Timer/Timer";

const App = () => {
  const [roundTime, setRoundTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);
  const [breakInterval, setBreakInterval] = useState(4);

  return (
    <div className="app">
      <Timer />
    </div>
  );
};

export default App;
