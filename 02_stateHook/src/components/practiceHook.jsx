import {useState} from 'react'

function Count() {
    const [count, setCount] = useState(0);

    const multiply = () => {
        setCount((pValue) => pValue * 3);

    }
        const add = () => {
        setCount((pValue) => pValue + 3);
        
    }

  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={multiply}>*</button>
        <button onClick={add}>+</button>
    </div>
  )
}

export default Count;