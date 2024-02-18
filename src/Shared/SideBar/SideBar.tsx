import { useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { userData } = useSelector((state: any) => state.userData);
  const { role } = userData.profile;
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  function handleToggle() {
    setIsCollapsed(!isCollapsed);
  }
  
  return (
    <>
      <div className="w-full  ">
        <Sidebar className="vh-100" collapsed={isCollapsed}>
          <Menu   menuItemStyles={{
          button: ({ level, disabled }) => ({
            color: disabled ? '#f5d9ff' : 'black',
            backgroundColor: activeMenuItem === level ? '#eecef9' : undefined,
            '&:hover': {
              backgroundColor: activeMenuItem === level ? '#eecef9' : 'black',
      
             
            },
          }),
       
       
        }}
        
        >
       
            <MenuItem
              onClick={handleToggle}
              icon={
                <i className="fa-solid fa-circle-check">
                  <i className="fa-solid fa-circle-xmark"></i>
                </i>
              }
              className="border-b-2 py-1 button "
            ></MenuItem>

            {role !== "Student" && (
              <MenuItem
                className=" border-b-2 py-2  "
                icon={<i className="fa-regular fa-envelope-open fa-xl   "></i>}
                component={<Link to={"/dashboard"} ></Link>}
              >
                     <span className="menu-text">Dashboard</span>
                
              </MenuItem>
            )}
            {role !== "Student" && (
              <MenuItem
            
                className=" border-b-2 py-2  hover:border-r-2 hover:border-r-black "
                icon={<i className=" fa-solid fa-users fa-xl  "></i>}
                component={<Link to="/dashboard/groups"></Link>}
              >
         <span className="menu-text">Groups</span>
              </MenuItem>
            )}

            {role !== "Student" && (
              <MenuItem
                className=" border-b-2 py-2  hover:border-r-2 hover:border-r-black"
                icon={<i className="fa-solid fa-graduation-cap fa-xl"></i>}
                component={<Link to="/dashboard/student"></Link>}
              >
                     <span className="menu-text">Students</span>
              </MenuItem>
            )}

            <MenuItem
              className=" border-b-2 py-2  hover:border-r-2 hover:border-r-black"
              icon={<i className="fa-solid fa-chalkboard-user fa-xl  "></i>}
              component={
                <Link
                  to={role == "Student" ? "/student" : "/dashboard/quizzes"}
                ></Link>
              }
            >
           <span className="menu-text">Quizzes</span>
            </MenuItem>
            <MenuItem
              className=" border-b-2 py-10  hover:border-r-2 hover:border-r-black"
              icon={<i className="fa-solid fa-file-circle-check fa-xl"></i>}
              component={
                <Link
                  to={
                    role == "Student"
                      ? "/student/results"
                      : "/dashboard/results"
                  }
                ></Link>
              }
            >
                   <span className="menu-text">Results</span>
            </MenuItem>
            <MenuItem
              className=" border-b-2 py-2  hover:border-r-2 hover:border-r-black"
              icon={<i className="fa-solid fa-lock"></i>}
              component={<Link to="/change-password"></Link>}
            >
                   <span className="menu-text">Change Password</span>
            </MenuItem>
            <MenuItem className=" border-b-2 py-1  hover:border-r-2 hover:border-r-black">
              <i className="fa-solid fa-circle-question fa-xl pr-2"></i>
              <span className="menu-text">Help</span>
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}
