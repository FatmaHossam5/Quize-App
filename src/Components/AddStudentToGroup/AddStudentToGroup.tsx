import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getData } from '../../ApiUtls/ApiUtls';
interface AddStudentInterface{
    selectedStudentId:React.Dispatch<React.SetStateAction<any>>;
}

export default function AddStudentToGroup({selectedStudentId}:AddStudentInterface) {
    
    const [studentswithOutGroup, setStudentswithOutGroup] = useState(new Array());
    const { headers } = useSelector((state: any) => state.userData);

    const getStudentsWithoutGroup=()=>{
        getData({path:"student/without-group",headers,setState:setStudentswithOutGroup});
      }

      useEffect(() => {
        getStudentsWithoutGroup();
      }, []);
      
  return (
    <div className="w-[90%] m-auto">
    {/* Add student form */}
    {/* Name Input*/}
    <div className="my-1">
      <div className="relative mt-2 rounded-md shadow-sm text-center">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 bg-red-300">
          <span className="text-black sm:text-sm p-2">
            Name
          </span>
        </div>
            {studentswithOutGroup?
        <select onClick={(eventInfo)=>{return selectedStudentId((eventInfo.target as HTMLInputElement).value)}}>
            <option>select name</option>
            {studentswithOutGroup.map((student,idx)=><option key={idx} value={student._id}>{`${student.first_name} ${student.last_name}`}</option>)}
        </select>
            :""
            }
      </div>
    </div>
    {/* Phone Input */}
    <div className="my-1">
      <div className="relative mt-2 rounded-md shadow-sm  ">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 bg-red-300">
          <span className="text-black sm:text-sm p-2">
            Phone
          </span>
        </div>
        <input
          type="text"
          name="phone"
          id="phone"
          className="py-2 block w-full rounded-md border-0  text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="absolute inset-y-0 right-0 flex items-center"></div>
      </div>
    </div>
  </div>
  )
}


