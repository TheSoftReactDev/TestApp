import React from "react";
import "./App.css";
import SelectScreen from "./Portal/SelectScreen";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SelectScreen />
      </div>
    </BrowserRouter>
  );
}

export default App;
