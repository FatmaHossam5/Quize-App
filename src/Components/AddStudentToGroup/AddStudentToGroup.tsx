import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getData } from '../../ApiUtls/ApiUtls';
import Input from '../../Shared/Input/Input';
interface AddStudentInterface{
    selectedStudentId:React.Dispatch<React.SetStateAction<any>>;
}

export default function AddStudentToGroup({selectedStudentId}:AddStudentInterface) {
    
    const [studentswithOutGroup, setStudentswithOutGroup] = useState(new Array());
    const [filteredNames, setFilteredNames] = useState([]);
    const [nameInput, setNameInput] = useState('');
   
    const { headers } = useSelector((state: any) => state.userData);

    const getStudentsWithoutGroup=()=>{
        getData({path:"student/without-group",headers,setState:setStudentswithOutGroup});
       
      }

      const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setNameInput(inputValue);
      
        const filtered = studentswithOutGroup.filter(student => {
            const fullName = `${student.first_name} ${student.last_name}`;
            return fullName.toLowerCase().includes(inputValue.toLowerCase());
        })[0]?._id
       
        selectedStudentId(filtered);
     
        console.log({filtered,studentswithOutGroup});
       
        
        
    };

      useEffect(() => {
        getStudentsWithoutGroup();
        console.log(filteredNames);
        
        
      }, [filteredNames]);
     
  return (
    <div className="w-[90%] m-auto">
    {/* Add student form */}
    {/* Name Input*/}
    <div className="my-1">
      <div className="relative mt-2 rounded-md shadow-sm text-center">
       
        
         <Input title='name'
         handleChange={handleInputChange}
         
         value={nameInput} />
      </div>
    </div>

  </div>
  )
}


