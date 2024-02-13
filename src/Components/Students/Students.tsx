import React, { useEffect, useState } from 'react'
import userImg from '../../assets/user img.png'

import axios from 'axios';
import { useSelector } from 'react-redux';

import Loading from '../../Shared/Loading/Loading';

import useAllStudents from '../../ApiUtls/useAllStudents';
import SharedModal from '../../Shared/AddModal/AddModal';
import { toast } from 'react-toastify';
export default function Students() {
  const { headers } = useSelector((state: any) => state.userData)
  const { getAllStudents, loading, students } = useAllStudents()
  const Groups = ['Group1', 'Group2', 'Group3']
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);



  const [modalAction, setModalAction] = useState('add');
  const [studentId, setStudentId] = useState(0)

  const handleOpenModal = (action, studentId) => {
    setModalAction(action)
    setShowModal(true);
    setStudentId(studentId)

  };

  const handleDelete = () => {
    if (!studentId) return;
    axios.delete(`https://upskilling-egypt.com:3005/api/student/${studentId}`, headers).then((response) => {
      toast.success(response?.data?.message)
      closeModal();
      getAllStudents()
    }).catch((error) => {
      console.log(error);

    })
  }
  const saveChanges = () => {
    if (modalAction === 'add') {
      alert('hhhhhhh')
    } else if (modalAction === 'delete') {

      handleDelete();


    }
    setShowModal(false);
  };

  useEffect(() => {
    getAllStudents();
  }, [])
  return (
    <>
      <div>
        <div className=' flex justify-end' >
          <div className='rounded-3xl border border-black text-center  w-40 mt-2  '>
            <i className="fa-solid fa-circle-plus"></i>
            <button onClick={() => handleOpenModal('add')} >Add Student</button>
          </div>

        </div>
        <div>
          <h3 className='ml-12'>
            Students List
          </h3>
          <div className='ml-12'>
            {Groups.map((group, index) => <>

              <button key={index} className={`mr-5 rounded-3xl border ${index === 0 ? 'bg-black text-white' : ''} border-black w-32 mt-4`}>{group}</button>
            </>)}
          </div>

          <div>
            <SharedModal
              show={showModal && modalAction === 'add'}
              setShow={setShowModal}
              title="Add New Student"
              onSave={saveChanges}
              onClose={closeModal}
              body={(
                <div className='px-32'>
                  {/* Add student form */}
                  {/* Name Input*/}
                  <div className='my-1'>
                    <div className='relative mt-2 rounded-md shadow-sm text-center'>
                      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 bg-red-300'>
                        <span className='text-black sm:text-sm p-2'>Name</span>
                      </div>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        className='py-2 block w-full rounded-md border-0  px-28    text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  {/* Phone Input */}
                  <div className='my-1'>
                    <div className='relative mt-2 rounded-md shadow-sm  '>
                      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 bg-red-300'>
                        <span className='text-black sm:text-sm p-2'>Phone</span>
                      </div>
                      <input
                        type='text'
                        name='phone'
                        id='phone'
                        className='py-2 block w-full rounded-md border-0 px-28 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                      <div className='absolute inset-y-0 right-0 flex items-center'></div>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
          {students.length > 0 ? <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4 border mx-5 rounded-2xl pr-4 ">
            {
              students.map((student, index) => (
                <div key={index} className="flex flex-col ml-4 mt-4">


                  <div key={student.id} className="border rounded-2xl flex justify-between align-items-center">
                    <div className='flex'>
                      <img src={userImg} alt='userImage' className="w-16 h-16 mr-4" />
                      <div className="mt-2">
                        <p className="font-semibold mx-2">{student?.first_name} {student?.last_name}</p>
                        <span className='border-r mx-1 px-1'>Role: {student.role}</span>
                        <span >Status: {student.status}</span>
                      </div>
                    </div>
                    <div>
                      <button>
                        <i className="fa-solid fa-circle-arrow-right mt-[5px]  pr-2  "></i>
                      </button>
                      <button onClick={() => handleOpenModal('delete', student._id)}>
                        <i className="fa-solid fa-trash mr-2 text-red-400"></i>
                      </button>

                    </div>
                  </div>

                </div>
              ))
            }


          </div> : <div className=' text-6xl h-[50%] w-full  flex items-center justify-center py-5'><Loading /></div>}



          <SharedModal
            show={showModal && modalAction === 'delete'}
            setShow={setShowModal}
            title="Delete Student"
            onSave={saveChanges}
            onClose={closeModal}
            body={(
              <div className='text-center'>
                <p>Are you sure you want to delete this student?</p>
                {/* <button onClick={saveChanges}  className='bg-red-300 w-40 py-2 mt-4 rounded-lg text-white'>Delete</button> */}
              </div>
            )}
            buttonLable='Delete'
          />
        </div>
      </div>

    </>
  )
}

