import './App.css';
import { useState } from 'react';

function App() {

  const [number, setNumber] = useState(0)
  const [name, setName] = useState()

  const addNum = () => {
    setNumber((prev) => prev + 1)
  }

  const subNum = () => {
    setNumber((prev) => prev - 1)
  }

  return (
    <div className="App">
      <p>{number}</p>
      <button onClick={addNum}>Add</button>
      <button onClick={subNum}>Sub</button>

      <input type='text' placeholder='Digite seu nome' value={name || ""} onChange={(e) => setName(e.target.value)}></input>
    </div>
  );
}

export default App;
