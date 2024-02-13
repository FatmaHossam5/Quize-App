import { useSelector } from "react-redux";

export default function NavBar() {
  const { userData } = useSelector((state: any) => state.userData)
  const Name=userData.profile.first_name+userData.profile.last_name
  const role=userData.profile.role
  
  
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

  <div className="mr-[35px] mt-2">
  <h3>{Name}</h3>
  <span className="text-[#C5D86D]">{role}</span>
  </div>
 
  </div>
      </div>
      
  
    </div>
    </>
  )
}
