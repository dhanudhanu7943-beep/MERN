import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Service from "../pages/Service"
import Contact from "../pages/Contact"




const Approuter = () => {
  return (
   <>
   <Routes>

    <Route path="/" element={<Home />}/>
    <Route path="/" element={<About />}/>
    <Route path="/" element={<Service />}/>
    <Route path="/" element={<Contact />}/>
   </Routes>
   </>
  )
}

export default Approuter








