

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getData } from '../../ApiUtls/ApiUtls';
import desk from '../../assets/Quiz img (1).png';
import group from '../../assets/img (1).png';
import userImg from '../../assets/user img.png';
import Label from '../../Shared/Label/Label';
import SharedModal from '../../Shared/AddModal/AddModal';
export default function Home() {
 

  const exams=[
    {id:'1',ExamName:"Introduction to computer programming",Date:"12/03/2023",Time:" 09:00 AM",enrolledStudent:"32",img:desk},
    {id:'2',ExamName:"Psychology 101",Date:"12/03/2023",Time:" 09:00 AM",enrolledStudent:"32",img:group},
    {id:'3',ExamName:"React Js",Date:"12/05/2023",Time:" 09:00 AM",enrolledStudent:"20",img:desk},
    {id:'4',ExamName:"Node Js",Date:"12/07/2023",Time:" 10:00 AM",enrolledStudent:"32",img:group},
    {id:'5',ExamName:"Basics",Date:"12/09/2023",Time:" 11:00 AM",enrolledStudent:"25",img:desk},
  ]

  const { headers } = useSelector((state: any) => state.userData);
  const[topStudents,setTopStudents]=useState([]);  
  const [modalAction, setModalAction] = useState("close");
  const [studentId, setStudentId] = useState("");
  const[studentInfo,setStudentInfo]=useState({})
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
      <div className=" grid lg:grid-cols-2 grid-cols-1  m-3 border  rounded-2xl pt-3">
        {/* EXAMS */}
        <div className="border  mt-2 mx-5 rounded-xl ">
          <h3 className="pl-3 mt-2">   Upcoming 5 quizzes </h3>
{exams.map((exam,idx)=><div key={idx}>
  <div className=' m-4' >
            <div className='border rounded-xl '>
              <div className='flex '>
                <img src={exam.img} className='w-1/5' alt="" />
           
                <div className=' ml-2 mt-4 w-5/6'>
                  <h3>{exam.ExamName}</h3>
                  <span className='border-r pr-1'>{exam.Date}</span> <span>{exam.Time}</span>
                  <div className='flex mt-5 mb-2  justify-between'>
                    <h4>
                      No.of students enrolled :<span>{exam.enrolledStudent}</span>
                    </h4>
                    <div className='flex'>
                      <h4 className='pr-2'>open</h4>
                      <i className="fa-solid fa-circle-arrow-right mt-[5px] text-[#c5d86d] pr-2"></i>
                    </div>
                  </div>
                </div>

              </div>



            </div>
          </div>
</div>)}

  

       
  
        </div>
        {/*STUDENTS*/}
        <div className="border  mt-2 mr-3 rounded-xl w-[70%] px-4 h-screen">
          <h3 className="pl-3 mt-2">   Top 5 Students </h3>
          {topStudents.map((student,id)=><div key={id}>
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
    </>
  )
}
