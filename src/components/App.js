import React, {Component, useState} from "react";
import "./../styles/App.css";


function App() {
  const [Para, setPara] = useState(false);
  const paragraph = () => {
  setPara(true)
}
  return (
    <div id="main">
      // Do not alter the main div
      <button id="click" onClick={paragraph}>Click</button>
      {
        Para && (<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)
      }
    </div>
  );
}


export default App;
