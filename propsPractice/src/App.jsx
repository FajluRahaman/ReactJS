
import './App.css'
import Button from './components/Button';
import Skills from './components/Skills';

function App() {
  function show() {
    alert("Button is clicked");
  }

  return (
    <>
    <h2>props pratice </h2>
   <Button clickMe = {show} />
   <Skills array = {myArr} />
    </>
  )
}

export default App

// Passing arrays as props (using destructring)
// create a Skills components.pass an array of skills from App.jsx and display using Map()