import { useState } from 'react'
import Home from './home/Home'
import Navbar from './navbar/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='text-center'> Introduction to Props in React</h2>
          <Navbar appCount = {count} setCount = {setCount} />

      <h4 className='text-center'>App Component</h4>
      <div className="container">
        <p>Counter: {count}</p>
        <hr />
        <button className='btn btn-success' onClick={() => {
          if(count <= 15){
         setCount(count + 1)
          }
        }}>  Increase</button>
      </div>
      <hr />
      <Home appCount = {count} setCount = {setCount}/>
    </>
  )
}

export default App
