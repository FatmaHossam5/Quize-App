
export default function NavBar() {
  return (
    <>
    <div className="flex   ">
    <div className=" pt-3  text-center  w-1/6 border-r-[1px]">
      <i  className="fa-solid fa-bars pr-5"></i> <i className="fa-solid fa-circle-check"></i><i   className="fa-solid fa-circle-xmark"></i>
      </div>
      <div className=" w-full flex justify-between">
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
  <h3>Name</h3>
  <span className="text-[#C5D86D]">Instructor</span>
  </div>
 
  </div>
      </div>
      
  
    </div>
    </>
  )
}
