import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementHandler = ( ) => {
    setCounter(counter+1)
  };

  const decrementHandler = () => {
    setCounter(counter-1)
  };

  return (
    <div>
      <h1>Simple Counter</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      {counter}
    </div>
  );
}

export default App;
