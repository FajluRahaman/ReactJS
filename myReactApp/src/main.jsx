import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 

// Whenever you create new project/new app
// remove App.css and index.css
// App.jsx -> remove code inside empty tag,and code before return() - useState()
// .jsx
// used to write javascript and html together
// add BS link and script in index.html
// navbar,form(login,register,),footer - reuse
// Component name must be starts with capital letter - component will render as a module not a simple javascript function.
// Header.jsx - <header />
// header tag
// rfc - react functional component
// folder -> component
// component should be rendered in App.jsx
// whenever you created new file
// you have to render/import using "import" top of the code
// and which file you want to import to another file it should be exported bottom of the code
// and use self-closing tag if the file extension is .jsx
// dont change anything in main.jsx
// App.jsx -> 
// HTML + JavaScript = javascript xml
// Component -> App.jsx
// App.jsx -> Parent Component