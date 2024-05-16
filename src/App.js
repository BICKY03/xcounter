import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  function increment(){
    setCount((prev)=>prev+1)
  }

  function decrement(){
    setCount((prev)=>prev-1)
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>count:{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
     </div>
  );
}

export default App;
