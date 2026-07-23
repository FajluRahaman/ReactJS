
import { Route, Routes} from 'react-router-dom'
import Home from '../home/Home'
import About from "../about/About"
import Services from "../services/Services"
import Contact from "../contact/Contact"

export default function RoutePath() {
  return (
    <div>
        {/* we need to define the path using Route component */}
     <Routes>
        <Route  path = "/" element = {<Home />}/>
        <Route  path = "/about" element = {<About />}/>
        <Route  path = "/contact" element = {<Contact />}/>
        <Route  path = "/services" element = {<Services />}/>
     </Routes>
    </div>
  )
}
