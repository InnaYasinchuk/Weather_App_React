import React from "react";

import Weather from "./Weather";
import './App.css';


function App() {
  return (
    <div className="App">
      <Weather defaultCity="Kyiv" />
    </div>
  );
}

export default App;
