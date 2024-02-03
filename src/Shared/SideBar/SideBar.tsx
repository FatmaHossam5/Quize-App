
export default function SideBar() {
  return (
    <>

    <div className="  h-[100vh]">
 
<div >
  <ul className="" >
    <div className="border-b py-5 flex pl-5 ">
      <div className=" bg-[#FFEDDF] w-[30px] h-[30px]">
    <i className="fa-solid fa-house fa-xl mt-2"></i>
    </div>
    <li>DashBoard</li>
    </div>
    <div className=" border-b py-5  flex pl-5 ">
      <div className="  bg-[#FFEDDF] w-[30px] h-[30px]">
      <i className=" fa-solid fa-users-line fa-xl mt-3"></i>
      </div>
    <li>Groups</li>

    </div>
    <div className=" border-b py-5 flex pl-5 " >
    <div className="  bg-[#FFEDDF] w-[30px] h-[30px]">
    <i className="fa-brands fa-readme fa-xl mt-3"></i>
    </div>
    <li>Quizzes</li>
    </div>

    <div className=" border-b py-36 flex pl-5">
  <div className="  bg-[#FFEDDF] w-[30px] h-[30px]">
    <i className="fa-solid fa-dice"></i>
    </div>
    <li>Results</li>
    </div>
    <div className=" border-b py-5 flex pl-5" >
    <div className="  bg-[#FFEDDF] w-[30px] h-[30px]">
      </div>
    <li>Help</li>

    </div>
  </ul>
</div>
     
    </div>
    </>
  )
}
