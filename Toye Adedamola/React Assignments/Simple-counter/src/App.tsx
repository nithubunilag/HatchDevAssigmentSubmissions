import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increment = () =>{
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default App;
