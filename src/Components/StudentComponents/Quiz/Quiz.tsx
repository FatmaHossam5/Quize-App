import React, { useState } from 'react'
import UpcomingQuizes from '../../UpcomingQuizes/UpcomingQuizes'
import CompletedQuizzes from '../../CompletedQuizzes/CompletedQuizzes'
import SharedModal from '../../../Shared/AddModal/AddModal';

export default function Quiz() {
    const [modalState, setModalState] = useState("close");

  
  
    const showAddModal = () => {
      setModalState("add1");
    };
    const handleClose = () => {
        setModalState("close");
      };
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
      <SharedModal
        show={modalState === "add1"}
        title="Join Quiz"
        onSave={() => {
          console.log("hello");
        }}
        omitHeader={true}
        onClose={handleClose}
        body={
          <div className="px-8 ">
            <div className="flex items-center justify-center">
              <div className="text-center">
              
                <h2 className="font-bold text-xl mt-2">
                Join Quiz
                </h2>
                <span>Input the code received for the quiz below to join</span>
                <div className="title mt-2 flex rounded-xl">
              <label
                htmlFor="title"
                className="bg-authImage px-4 py-2 font-semibold rounded-l-xl text-center"
             
              >
              Code
              </label>
              <input
                id="title"
               
                className="w-full border-2 px-1 rounded-r-xl py-2"
                type="text"
              

              />
            </div>
              
                <div className='   flex justify-center items-center mt-2' >

                    <div className='border w-[25%] py-2 '>
                        <button>
                    <i className="fa-solid fa-check"></i>

                        </button>

                    </div>
                    <div className='border w-[25%] py-2 '>
                        <button>
                    <i  onClick={handleClose}className="fa-solid fa-x"></i>

                        </button>

                    </div>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </>
  )
}
