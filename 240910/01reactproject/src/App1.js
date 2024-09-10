import "./App.css";
import { useState } from "react";

function App1() {
  const [count, setCount] = useState(0);

  const plus = () => {
    // setCount(count + 1);
    // setCount(count + 2);
    // setCount(count + 3);
    setCount((count)=> count+1);
    setCount((count)=> count+2);
    setCount((count)=> count+3);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default App1;
