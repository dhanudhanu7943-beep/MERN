import {Link} from "react-router-dom"

 


const Navbar = () => {
  return (
    <>
  <div className="flex shadow justify-between   p-5  item center bg-white w-screen h-15 text-center">
    <div className="mx-15" >
      Logo
    </div>
    <div className="mx-15 flex gap-14">
      <Link to="./">Home</Link>
      <Link to="./Sweets">Sweets</Link>
      <Link to="./ Clebration Day">ClebrationDay</Link>
     
    </div>
  </div>
    </>
  )
}

export default Navbar
