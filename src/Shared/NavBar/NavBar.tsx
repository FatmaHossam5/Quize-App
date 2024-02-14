import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../Redux/Slices/AuthSlice/AuthSlice";
import { useState } from "react";

export default function NavBar() {
  const dispatch =useDispatch();
  const [dropDownMenuState, setdropDownMenuState] = useState(false);
  const { userData } = useSelector((state: any) => state.userData)
  const Name=userData.profile.first_name+userData.profile.last_name
  const role=userData.profile.role
  const handleDropDownState =()=>{
    setdropDownMenuState(!dropDownMenuState);
  }
  
  return (
    <>
    <div className="flex   ">
   
      <div className=" w-full flex justify-between border-b-2">
      <div><h3 className="font-bold mt-3 ">Dashboard</h3></div>
  
  <div className=" flex gap-x-[45px]   ">
    <div className="border-r-[1px]  ">
      <div className="mb-3">
        
    
    <button className= "border rounded-2xl border-black mt-3 mr-3 px-4 ">
  <i className="fa-solid fa-clock  "></i><span>New Quiz</span>
  </button>
  </div>
    </div>

  <div className="mr-[35px] mt-2 flex">
    <div className="data">
    <h3>{Name}</h3>
  <span className="text-[#C5D86D]">{role}</span>
    </div>
  <div className="relative inline-block text-left">
  <div className="mx-2">
    <button type="button" onClick={handleDropDownState} className=" bg-white px-3 py-1 text-sm font-bold text-gray-900 " id="menu-button">
    <i className="fa-solid fa-caret-down"></i>
    </button>
  </div>

  <div className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${dropDownMenuState?"block":"hidden"}`} >
    <div className="py-1">
      <Link to="/dashboard/profile" className="text-gray-700 block px-4 py-2 text-sm font-semibold" >profile</Link>
        <button onClick={()=>{dispatch(logOut())}} className="text-gray-700 block w-full px-4 py-2 text-left text-sm font-semibold">Log Out</button>
    </div>
  </div>
</div>

  </div>
 
  </div>
      </div>
      
  
    </div>
    </>
  )
}
