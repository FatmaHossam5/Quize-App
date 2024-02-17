import React, { useState } from 'react'


import UpcomingQuizes from '../../Quizzes/UpcomingQuizes/UpcomingQuizes';
import CompletedQuizzes from '../../Quizzes/CompletedQuizzes/CompletedQuizzes';
import axios from 'axios';
import { baseUrl } from '../../../ApiUtls/ApiUtls';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../../../Shared/ErrorMessage/ErrorMessage';
import SharedModal from '../../../Shared/Modal/Modal';

export default function Quiz() {
    const [modalState, setModalState] = useState("close");
    const{headers}=useSelector((state:any)=>state.userData);
    const{register,handleSubmit,formState:{errors}}=useForm()

  

    const showAddModal = () => {
      setModalState("add1");
    };
    const showSuccessJoinModal = () => {
      setModalState("success");
    };
    const handleClose = () => {
        setModalState("close");
      };
      const joinQuiz=(data)=>{  
        axios.post(`${baseUrl}/quiz/join`,data,headers).then((response)=>{ 
         console.log(response);
         showSuccessJoinModal()
          
        }).catch((error)=>{
          console.log(error);
          
        })
      }
  return (
    <>
    
    <div className="grid lg:grid-cols-1 grid-cols-1">
        <div className="newQuiz-Bank sm:p-3 ">
          <div className="flex">
            <button
              onClick={showAddModal}
              className="new-quiz text-center border rounded-xl py-4 px-5 mx-3"
            >
                <i className="fa-solid fa-clock text-zinc-600 text-6xl my-2 "></i>
        
              <p className="text-lg font-semibold ">Join Quiz</p>
            </button>
          
          </div>
        </div>

        <div className="upComingQuiz-Completed flex justify-between items-baseline">
          <UpcomingQuizes  />
          <CompletedQuizzes />
        </div>
      </div>
      {/* <SharedModal
        show={modalState === "add1"}
        title="Join Quiz"
        onSave={
   ()=>{}
        }
        
        omitHeader={true}
        onClose={handleClose}
        body={
          <div className="px-8 ">
            <div className="flex items-center justify-center">
              <div className="text-center">
              
                <h2 className="font-bold text-xl my-2">
                Join Quiz
                </h2>
                <span>Input the code received for the quiz below to join</span>
                <form onSubmit={handleSubmit(joinQuiz)}  >
                  <div className="code mt-2 flex rounded-xl">
                  <label
                htmlFor="code"
                className="bg-authImage px-4 py-2 font-semibold rounded-l-xl text-center"
             
              >
              Code
              </label>
              <input
                id="code"
               {...register('code',{required:true})}
                className="w-full border-2 px-1 rounded-r-xl py-2"
                type="text"
              

              />
                  {errors.code ? (
                <ErrorMessage>{String(errors.code?.message)}</ErrorMessage>
              ) : (
                ""
              )}
                  </div>
         
         
              
                <div className='   flex justify-center items-center mt-2' >

                    <div className='border w-[25%] py-2 '>
                        <button type='submit'>
                    <i className="fa-solid fa-check"></i>

                        </button>

                    </div>
                    <div className='border w-[25%] py-2 '>
                        <button>
                    <i  onClick={handleClose}className="fa-solid fa-x"></i>

                        </button>

                    </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        }
      /> */}
      <SharedModal
       show={modalState === "add1"}
       title="Join Quiz"
       onSave={
  ()=>{}
       }
       
       omitHeader={true}
       onClose={handleClose}
       body={
<>
<div className='text-center'>
<i className="fa-solid fa-circle-check fa-3x"></i>
</div>
<div className='text-center'>
  <h3>Quiz joined successfully</h3>
  <p>Python for noobs Quiz one</p>
</div>
<div>
  <button  className="bg-secondry px-8 rounded-2xl mt-8">close</button>
</div>
 </>
       }
      />
    </>
  )
}
