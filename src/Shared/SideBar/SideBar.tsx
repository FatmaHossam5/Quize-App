import { useState } from "react";
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
export default function SideBar() {
  
  const [isCollapsed, setIsCollapsed] = useState(true);

  function handleToggle() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <>
      <div className="w-full  ">
        <Sidebar className="vh-100  " collapsed={isCollapsed}>
          <Menu>
            <MenuItem  onClick={handleToggle} icon={<i className="fa-solid fa-bars "></i>} className="border-b-2 py-1 ">
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
            <MenuItem className=" border-b-2 py-16  hover:border-r-2 hover:border-r-black" icon={<i className="fa-solid fa-file-circle-check fa-xl"></i>} component={<Link to='/dashboard/results'></Link>}>
              Results
            </MenuItem>
            <MenuItem className=" border-b-2 py-1  hover:border-r-2 hover:border-r-black">
     
                <i className="fa-solid fa-circle-question fa-xl pr-2"></i>
                Help
           
            </MenuItem>

          </Menu>
        </Sidebar>
      </div>


    </>
  )
}
