import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { baseUrl } from '../../../ApiUtls/ApiUtls';
import { useForm } from 'react-hook-form';
import { log } from 'console';

export default function StudentsQuestion() {
  const {quizId}=useParams();
  const[questions,setQuestions]=useState([])
  const {headers}=useSelector((state:any)=>state.userData);

  
  
  const getQuestions=()=>{
    axios.get(`${baseUrl}/quiz/without-answers/${quizId}`,headers).then((response)=>{
      console.log(response);
      console.log(response.data.data.questions);
      setQuestions(response.data.data.questions)
    }).catch((error)=>{
      console.log(error);
      
    })
  }
  const submitAnswers=()=>{
    axios.post(`${baseUrl}/quiz/submit/${quizId}`,headers)
  }
  const testFunction=(data)=>{
    console.log(data)
  

  }
  useEffect(()=>{
    getQuestions()
  },[])
  return (
    <>
    <div className='questions pt-3 mt-5 border rounded-xl'>
      <div className='m-3 font-bold'>
        QUIZ Name
      </div>
   
    {questions.map((question,index)=>
      <div key={index} className='questionCard m-3 w-50  p-2  shadow-md rounded-lg  '>
        <form onSubmit={handleSubmit(testFunction)} >
      <div className='questionHeader w-auto bg-authImage  rounded-md mt-1 py-1 text-center ' {...register(`question: ${question._id}`)}>
       
{question.title}
      </div>

<div className='answers mx-3  '>
  
<div className='subAnswer bg-white  rounded-md shadow-md my-2'>

  <input type="radio" className='mr-3' name="radio" {...register('answer')} value={question.options.A}/>
  <span>{question.options.A}</span>
</div>
<div className='subAnswer bg-white  rounded-md shadow-md my-2'>

  <input type="radio" className='mr-3' name="radio"  {...register('answer')} value={question.options.B}/>
  <span>{question.options.B}</span>
</div>
<div className='subAnswer bg-white  rounded-md shadow-md my-2'>

  <input type="radio" className='mr-3' name="radio"  {...register('answer')} value={question.options.C}/>
  <span>{question.options.C}</span>
</div>
<div className='subAnswer bg-white  rounded-md shadow-md my-2'>

  <input type="radio" className='mr-3' name="radio" {...register('answer')} value={question.options.D}/>
  <span>{question.options.D}</span>
</div>
<button >good</button>

</div>
</form>
    </div>
    )}
  
  
    </div>
    </>
  )
}
