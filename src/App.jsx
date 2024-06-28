import Details from "./components/Details";
import Nav from "./components/Nav"
import '@fontsource/montserrat-alternates';
import Services from "./components/Services";
import Rooms from "./components/Rooms";
import CustomersSay from "./components/CustomersSay";
import SideBar from "./components/SideBar";
import { useState } from "react";



function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='p-1 lg:p-14 '>
      <Nav onClickSideBar={()=>setIsOpen(true)}/>
      <Details />
      <Services />
      <Rooms />
      <CustomersSay />
      <SideBar isOpen={isOpen} falseSideBar={()=>setIsOpen(false)}/>
    </div>
  )
}

export default App
