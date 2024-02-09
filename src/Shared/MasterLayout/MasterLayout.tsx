import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";

export default function MasterLayout() {
  return (
    <>


<div className=" flex">
  <div className="w-auto"> 
    <SideBar/> </div>
  <div className="w-[100%]">
  <NavBar/> 
  <Outlet/>
  </div>
</div>
     
    </>
  )
}
