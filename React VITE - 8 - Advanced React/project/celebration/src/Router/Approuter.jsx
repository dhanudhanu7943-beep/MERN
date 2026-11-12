import Home from "../../Pages/Home"
import Sweets from "../../Pages/Sweets"
import CelebrationDay from "../../Pages/CelebrationDay"


const Approuter = () => {
  return (
    <>
    <Routes>

    <Route path="/" element={<Home />}/>
    <Route path="/" element={<Sweets/>}/>
    <Route path="/" element={<CelebrationDay/>}/>
    
   </Routes>
    
    </>
  )
}

export default Approuter