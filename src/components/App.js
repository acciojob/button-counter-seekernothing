import React from "react";
import { useState } from "react";
import "./../styles/App.css";

const App = () => {
  let [counter, setCounter] = useState(0);

  const add = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div>
      {/* Do not remove the main div */}

      <p>Button clicked {counter} times</p>
      <button onClick={add}>Click me</button>
    </div>
  );
};

export default App;
