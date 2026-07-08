import './App.css'
import Home from './home/Home'

function App() {
  // javascript code will be written
  let userName = "Alice";

  return (
    <>

      {/* structure will be created here */}
      <h1>Introduction to React Js</h1>
      {/* whenever you want to access js variable and function, you have to use {} jsx syntax.
      Inline Css: style
      {} - jsx syntax
      {} - you have to write inline css using js object  key:value
      */}
      <p style={{ color: "blue", fontWeight: "bold" }}>User Name: {userName}</p>
      <Home />


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