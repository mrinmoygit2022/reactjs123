import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log("Clicked", Math.random())
    } else {
      console.log("Counter value cannot exceed 20");
    }
  };

  const removeCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log("Removed", Math.random())
    } else {
      console.log("Counter value cannot be less than 0");
    }
  };
  // https://github.com/acdlite/react-fiber-architecture
  return (
    <>
      <h1>React Hooks</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br /><br />
      <button onClick={removeCounter}>Remove Value {counter}</button>
    </>
  );
}

export default App;
