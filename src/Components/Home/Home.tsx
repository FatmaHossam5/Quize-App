import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { getData } from '../../ApiUtls/ApiUtls';
import SharedModal from '../../Shared/AddModal/AddModal';
import Label from '../../Shared/Label/Label';
import Loading from "../../Shared/Loading/Loading";
import userImg from "../../assets/user img.png";
import UpcomingQuizes from "../Quizzes/UpcomingQuizes/UpcomingQuizes";
        
        
        
        
export default function Home() {
const { headers } = useSelector((state: any) => state.userData);
  const[topStudents,setTopStudents]=useState([]);  
  const [modalAction, setModalAction] = useState("close");
  const [studentId, setStudentId] = useState("");
  const[studentInfo,setStudentInfo]=useState({})
  const { upcomingQuizzes } = useSelector(
    (state: any) => state.upcomingQuizzes
  );
      //get Top Five Students
  const getTopFiveStudents=()=>{
    
    getData({path:`student/top-five`,headers,setState:setTopStudents})
  }
  const openModal=(action,studentId)=>{
    setStudentId(studentId)

    setModalAction('view')
      }
  const getStudentById=(studentId)=>{
    openModal('view',studentId)
    getData({path:`student/${studentId}`,headers,setState:setStudentInfo})
  }
 
  const closeModal = () => setModalAction("close");
  useEffect(()=>{
    getTopFiveStudents()
  },[])
  console.log(studentInfo);
    
    

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 m-3 border  rounded-2xl pt-3">
        <div className="border exams mt-2 mx-2 rounded-xl">
          {upcomingQuizzes ? (
            <UpcomingQuizes upcomingQuizzes={upcomingQuizzes} />
          ) : (
            <div className="flex items-center justify-center h-[80vh] w-full text-5xl ">
              <Loading />
              </div>)}
           </div>
        
            {/*STUDENTS*/}
        <div className="border  mt-2 mr-3 rounded-xl w-[70%] px-4 h-screen">
          <h3 className="pl-3 mt-2">   Top 5 Students </h3>
          {topStudents.map((student,id)=>
          <div key={id}>
            <div className=" my-4 ml-1 ">
            <div className='border rounded-xl '>
              <div className='flex '>
                <img src={userImg} className='w-2/12' alt="" />
                <div className=' ml-2 mt-2 w-5/6'>
                  <div className='flex justify-between'>
                    <h3 className='font-bold'>{student.first_name}{student.last_name}</h3>
                   
                   <button onClick={()=>getStudentById(student?._id)} className='hover:bg-zing-950 hover:text-gray-400'>
                   <i className="fa-solid fa-circle-arrow-right mt-[5px]  pr-2 mr-3   "></i>

                   </button>
          
                  </div>
                  <div className='flex'>
                    <h5 className='border-r pr-2 '>Group:<span> {student.group.name} </span></h5>
                    <h5 className='pl-2'>Average score :<span>{student && student.avg_score ? `${student?.avg_score}%` : "90"}%</span></h5>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>)}
                  

          
          </div>

       
                        
      <SharedModal
              show={modalAction === "view"}
              title="Student Info"
              onClose={closeModal}
              onSave={() => console.log(studentData)}
              body={
                <>
                  <Label word='FirstName'
                    class_Name="w-[70%] m-auto"
                    value={studentInfo.first_name}



                  />
                  <Label word='lastName'
                    class_Name="w-[70%] m-auto"
                    value={studentInfo.last_name}



                  />
                  <Label word='Email'
                    class_Name="w-[70%] m-auto"
                    value={studentInfo.email}



                  />
                  <Label word='Group-Name'
                    class_Name="w-[70%] m-auto"
                    value={studentInfo.group?.name}



                  />
                </>
              }
            />
            </div>
    </>
  );
}
