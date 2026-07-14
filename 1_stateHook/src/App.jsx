import { useState } from 'react'

import './App.css'

function App() {
const [count, setCount] = useState(0);

  return (
    <>
      <h2 className = "text-center">Introduction to React Hooks</h2>
      <div className = "container">
        <p>Counter : {count}</p>
        <button className = " btn btn-primary" onClick={() => setCount(count + 1)}>Increase</button> 
        <button className = " btn btn-secondary mx-2" onClick={() => setCount(count - 1)}>Decrease</button>
         <button className = " btn btn-danger" onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  )
}

export default App
