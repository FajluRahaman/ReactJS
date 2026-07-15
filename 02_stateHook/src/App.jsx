import { useState } from 'react'
import './App.css'
import Message from './components/statehook';
import Count from './components/practiceHook';

function Counter() {
  const [count, setCount] = useState(0);

  const increaseByfive = () => {
    setCount((pCount) => pCount + 5);
  };

  const decreaseByfive = () => {
    setCount((pCount) => pCount - 5);
  };
  
  return (
    <>
   
    
     <div className='text-center'>
      <h2 >Count: {count}</h2>
      <button className='btn btn-primary mx-3 ' onClick={increaseByfive}>+5</button>
      <button className='btn btn-secondary' onClick={decreaseByfive}>-5</button>
       <Message />
       <Count />
       
     </div>
    
    </>
     
  )
}

export default Counter
