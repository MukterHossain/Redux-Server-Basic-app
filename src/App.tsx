
import { Outlet } from "react-router"
import Navbar from "./components/layout/Navbar"




function App() {
  
  

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>   
    </div>
  )
}

export default App
