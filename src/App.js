import React from "react";

import Weather from "./Weather";
import './App.css';


function App() {
  return (
    <div className="App">
      <Weather defaultCity="Sydney" />
    </div>
  );
}

export default App;
