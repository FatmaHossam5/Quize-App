import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

export default function MasterLayout() {
  return (
    <>
      <div className='d-flex'>

        <div className='bg-danger'>
            <SideBar/> 
        </div> 

        <div className='w-100'>
            <div className='bg-info'>
                <Outlet/>
            </div>
        </div>

      </div>
    </>
  )
}
