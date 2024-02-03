import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";

export default function MasterLayout() {
  return (
    <>
    <div>
      <div className=' border-b-[1px] border-zinc-300'>
   
      <div className="" >
            <NavBar/> 
        </div> 
      
        </div>
       <div className="flex">
       <div className=' w-1/6 border-r-[1px] '>
            <SideBar/> 
        </div>
            <div className=' w-full '>
                <Outlet/>
            </div>
       </div>
   
       
            </div>
     
    </>
  )
}
