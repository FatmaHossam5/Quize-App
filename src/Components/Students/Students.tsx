import React from 'react'
import userImg from '../../assets/user img.png'
export default function Students() {
  const Groups=['Group1','Group2','Group3']
  const students=[
    {id:'1',Name:"Emanual James",Rank:"2nd",Score:"87",img:userImg}
  ,{id:'2',Name:"Alice Jasmine",Rank:"12th",Score:"77",img:userImg}
  ,{id:'3',Name:"Harrison Menlaye",Rank:"3rd",Score:"97",img:userImg},
  {id:'4',Name:"Jones Doherty",Rank:"5th",Score:"88",img:userImg},
  {id:'5',Name:"Harrison Menlaye",Rank:"3rd",Score:"97",img:userImg},
  {id:'6',Name:"Emanual James",Rank:"2nd",Score:"87",img:userImg}
  ,{id:'7',Name:"Alice Jasmine",Rank:"12th",Score:"77",img:userImg}
  ,{id:'8',Name:"Harrison Menlaye",Rank:"3rd",Score:"97",img:userImg},
  {id:'9',Name:"Jones Doherty",Rank:"5th",Score:"88",img:userImg},
  {id:'10',Name:"Harrison Menlaye",Rank:"3rd",Score:"97",img:userImg},
  {id:'10',Name:"Harrison Menlaye",Rank:"3rd",Score:"97",img:userImg},
];
//  const firstArray=students.slice(0,10)
 
  
  return (
    <>
    <div>
      <div className=' flex justify-end' >
        <div className='rounded-3xl border border-black text-center  w-40 mt-2  '>
        <i className="fa-solid fa-circle-plus"></i>
        <button>Add Student</button>
        </div>
   
      </div>
      <div>
        <h3 className='ml-12'>
          Students List
        </h3>
        <div className='ml-12'>
          {Groups.map((group,index)=><>
          
            <button key={index} className={`mr-5 rounded-3xl border ${index===0? 'bg-black text-white':''} border-black w-32 mt-4`}>{group}</button>
          </>)}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4 border mx-5 rounded-2xl pr-4 ">
    {students.map((student, index) => (
      <div key={index} className="flex flex-col ml-4 mt-4">
      
          
        <div key={student.id} className="border rounded-2xl flex justify-between align-items-center">
          <div className='flex'>
            <img src={student.img} alt={student.Name} className="w-16 h-16 mr-4" />
            <div className="mt-2">
              <p className="font-semibold mx-2">{student.Name}</p>
              <span className='border-r mx-1 px-1'>Rank: {student.Rank}</span>
              <span >Score: {student.Score}</span>
            </div>
            </div>
            <div>
              <button>
              <i className="fa-solid fa-circle-arrow-right mt-[5px]  pr-2 mr-3 "></i>
              </button>
            </div>
          </div>
     
      </div>
    ))}
  </div>

  
   
      </div>
    </div>
    </>
  )
}

