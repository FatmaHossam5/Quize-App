import desk from '../../assets/Quiz img (1).png'
import group from '../../assets/img (1).png'
import userImg from '../../assets/user img.png'
export default function Students() {
  const students=[{id:'1',Name:"Emanual James",Rank:"2nd",Score:"87"}
  ,{id:'2',Name:"Alice Jasmine",Rank:"12th",Score:"77"}
  ,{id:'3',Name:"Harrison Menlaye",Rank:"3rd",Score:"97"},
  {id:'4',Name:"Jones Doherty",Rank:"5th",Score:"88"},
  {id:'5',Name:"Harrison Menlaye",Rank:"3rd",Score:"97"}];
  const exams=[
    {id:'1',ExamName:"Introduction to computer programming",Date:"12/03/2023",Time:" 09:00 AM",enrolledStudent:"32",img:desk},
    {id:'2',ExamName:"Psychology 101",Date:"12/03/2023",Time:" 09:00 AM",enrolledStudent:"32",img:group},
    {id:'3',ExamName:"React Js",Date:"12/05/2023",Time:" 09:00 AM",enrolledStudent:"20",img:desk},
    {id:'4',ExamName:"Node Js",Date:"12/07/2023",Time:" 10:00 AM",enrolledStudent:"32",img:group},
    {id:'5',ExamName:"Basics",Date:"12/09/2023",Time:" 11:00 AM",enrolledStudent:"25",img:desk},
  ]
  return (
    <>
      <div className="flex  ">
        {/* EXAMS */}
        <div className="border w-2/3 mt-2 mx-2 rounded-xl">
          <h3 className="pl-3">   Upcoming 5 quizzes </h3>
{exams.map((exam,id)=><>
  <div key={id} className=' m-4' >
            <div className='border rounded-xl '>
              <div className='flex '>
                <img src={exam.img} className='w-2/12' alt="" />
           
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
</>)}

  

       
  
        </div>
        {/*STUDENTS*/}
        <div className="border w-1/3 mt-2 mr-3 rounded-xl">
          <h3 className="pl-3">   Top 5 Students </h3>
          {students.map((student,id)=><>
            <div key={id} className=" m-4  ">
            <div className='border rounded-xl '>
              <div className='flex '>
                <img src={userImg} className='w-2/12' alt="" />
                <div className=' ml-2 mt-2 w-5/6'>
                  <div className='flex justify-between'>
                    <h3 className='font-bold'>{student.Name}</h3>
                    <i className="fa-solid fa-circle-arrow-right mt-[5px]  pr-2 mr-3 "></i>
                  </div>
                  <div className='flex'>
                    <h5 className='border-r '>class Rank:<span> {student.Rank} </span></h5>
                    <h5 className='pl-2'>Average score :<span>{student.Score}%</span></h5>
                  </div>


                </div>

              </div>



            </div>
          </div>
          </>)}
       
    

        </div>

      </div>
    </>
  )
}
