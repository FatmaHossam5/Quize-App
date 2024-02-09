import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useState } from "react";
export default function SideBar() {
  const [isCollapsed, setisCollapsed] = useState(true);
  function handelToggel() {
    setisCollapsed(!isCollapsed);
  }
  return (
    <>
      <div className="w-full  ">
        <Sidebar className="h-full" collapsed={isCollapsed}>
          <Menu>
            <MenuItem icon={<i onClick={handelToggel} className="fa-solid fa-bars "></i>} className="border-b-2 py-1 ">
              <i className="fa-solid fa-circle-check"></i>
              <i className="fa-solid fa-circle-xmark"></i>
            </MenuItem>
            <MenuItem className=" border-b-2 py-2 hover:border-r-2 hover:border-r-black " icon={<i className="fa-solid fa-house fa-xl   "></i>} component={<Link to='/dashboard'></Link>}>
              Dashboard
            </MenuItem>
            <MenuItem className=" border-b-2 py-2  hover:border-r-2 hover:border-r-black" icon={<i className=" fa-solid fa-users fa-xl  "></i>} component={<Link to='/dashboard/groups'></Link>}>
              Groups
            </MenuItem>
            <MenuItem className=" border-b-2 py-2  hover:border-r-2 hover:border-r-black" icon={<i className="fa-solid fa-graduation-cap fa-xl"></i>} component={<Link to='/dashboard/student'></Link>}>
              Students
            </MenuItem>
            <MenuItem className=" border-b-2 py-2  hover:border-r-2 hover:border-r-black" icon={<i className="fa-solid fa-chalkboard-user fa-xl  "></i>} component={<Link to='/dashboard/quizzes'></Link>}>
              Quizzes
            </MenuItem>
            <MenuItem className=" border-b-2 py-32  hover:border-r-2 hover:border-r-black" icon={<i className="fa-solid fa-file-circle-check fa-xl"></i>} component={<Link to='/dashboard/quizzes'></Link>}>
              Results
            </MenuItem>
            <MenuItem className=" border-b-2 py-2  hover:border-r-2 hover:border-r-black">
     
                <i className="fa-solid fa-circle-question fa-xl pr-2"></i>
                Help
           
            </MenuItem>

          </Menu>
        </Sidebar>
      </div>


    </>
  )
}
