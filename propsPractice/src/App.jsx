
import './App.css'
import Button from './components/Button';
import Skills from './components/Skills';

function App() {
  function show() {
    alert("Button is clicked");
  }
  const   mySkills = ["HTML", "CSS", "JACVASCRIPT", "REACT", "GIT", "GITHUB"]

  return (
    <>
    <h2>props pratice </h2>
   <Button clickMe = {show} />
   <Skills skills = {mySkills} />
    </>
  )
}

export default App

// Passing arrays as props (using destructring)
// create a Skills components.pass an array of skills from App.jsx and display using Map()