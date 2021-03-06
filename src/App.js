import React, { useState } from "react";
//import logo from './logo.svg';
import "./App.css";
import Parent from "./Parent";
import CounterContext from "./CounterContext";
function App() {
  let count = useState(1); // [count,setCount]=useState(1)
  return (
    <CounterContext.Provider value={count}>
      <div className="App">
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
