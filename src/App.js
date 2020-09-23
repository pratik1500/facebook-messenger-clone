import { Button } from "@material-ui/core";
import React, { useState } from "react";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMesseges] = useState(["hello", "hi", "how are you??"]);

  console.log(input, "👾");
  console.log(messages, "👉");
  const sendMessage = (event) => {
    //all the logic to seng a message goes
    event.preventDefault();
    setMesseges([...messages, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Hello this is Pratik 🚀 </h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage}
        >
          Send messeage
        </Button>
      </form>
      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
