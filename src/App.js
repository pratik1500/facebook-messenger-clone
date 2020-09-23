import React, { useState } from "react";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMesseges] = useState(["hello", "hi", "how are you??"]);

  console.log(input, "👾");
  console.log(messages, "👉");
  const sendMessage = (event) => {
    //all the logic to seng a message goes
    setMesseges([...messages, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Hello this is Pratik 🚀 </h1>
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={sendMessage}>Send messeage</button>
      {/* input field */}
      {/* button  */}
      {/* messeges themselves */}
    </div>
  );
}

export default App;
