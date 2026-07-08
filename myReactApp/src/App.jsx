import './App.css'
import './index.css'

function App() {
 let userName = "Alice";

  return (
    <>
    <h1>Introduction of ReactJS</h1>
    <p style={{color: "green", fontWeight: "bold"}}>User Name: {userName}</p>
    </>
  )
}

export default App
 

//used to write js and html together known as jsx.
//add BS link and script in index.html
//component should be start with capital letter - component will render as a module not a simple js function
//Header.jsx -> <header />

//rfc -react functional component
//folder -> component