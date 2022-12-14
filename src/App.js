import React from "react";
import Timer from "./components/Timer/Timer";

const App = () => {
  return (
    <div className="app">
      <Timer currentRound={{ name: "Focus", time: 10000 }} />
    </div>
  );
};

export default App;
