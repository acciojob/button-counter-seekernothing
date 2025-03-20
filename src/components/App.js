import React from "react";
import { useState } from "react";
import "./../styles/App.css";

const App = () => {
  let [counter, setCounter] = useState(0);

  const add = () => {
    counter = counter + 1;
    setCounter(counter);
  };

  return (
    <div>
      {/* Do not remove the main div */}

      <p>Button Clicked {counter} times</p>
      <button onClick={add}>Click me</button>
    </div>
  );
};

export default App;
