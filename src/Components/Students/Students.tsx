import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { baseUrl } from '../../ApiUtls/ApiUtls';
import useFetchData from '../../ApiUtls/useFetchData';
import SharedModal from '../../Shared/AddModal/AddModal';
import Loading from '../../Shared/Loading/Loading';
import trash from '../../assets/Email (1).png';
import userImg from '../../assets/user img.png';

export default function Students() {
  const { headers } = useSelector((state: any) => state.userData)
  const { getData, students } = useFetchData()
  const [modalAction, setModalAction] = useState('close');
  const [studentId, setStudentId] = useState('')
  const [groups, setGroup] = useState(new Array)

  //handle Show Modal
  const handleOpenModal = (action, studentId) => {
    setModalAction(action)
    setStudentId(studentId)

  };
  //handle Close Modal
  const closeModal = () => setModalAction('close');
  //handle Delete Function
  const handleDelete = () => {
    if (!studentId) return;
    axios.delete(`${baseUrl}/student/${studentId}`, headers).then((response) => {
      toast.success(response?.data?.message)
      closeModal();
      getData('student')
    }).catch((error) => {
      toast.error(error?.response?.data?.message)

    })
  }
  // handle Onclick Function of Add/Delete
  const saveChanges = () => {
    if (modalAction === 'add') {
      //handle Add Logic
    } else if (modalAction === 'delete') {
      handleDelete();
    }
    closeModal()
  };
  // handle Group
  const getGroups = () => {
    axios.get(`${baseUrl}/group`, headers).then((response) => {
      const groupSet = new Set(response.data.map(groupName => groupName?.name))
      setGroup([...groupSet])
    }).catch((error) => {
      toast.error(error.response.data.message || 'Invalid Data')
    })
  }
//invoke functions to get data
  useEffect(() => {
    getData('student');
    getGroups();
  }, [])

  return (
    <>
      <div>
        <div className=' flex justify-end ' >
          <div className='rounded-3xl border border-black text-center  w-40 mt-2 mr-4  '>
            <i className="fa-solid fa-circle-plus"></i>
            <button onClick={() => handleOpenModal('add')} >Add Student</button>
          </div>

        </div>
        <div className='p-3'>
          <div className='border rounded-2xl '>
            <h3 className='ml-12 pt-2 font-semibold'>
              Students List
            </h3>
            <div className='ml-12  '>

              {groups.map((group, index) => <>

                <button key={index} className={` text-center px-2 mr-3 rounded-3xl border ${index === 0 ? 'bg-black text-white' : ''} border-black w-32 mt-4`}>{group}</button>
              </>)}
            </div>
            {/*Add Student Modal*/}
            <div>
              <SharedModal
                show={modalAction === 'add'}
                title="Add New Student"
                onSave={saveChanges}
                onClose={closeModal}
                body={(
                  <div className='w-[90%] m-auto'>
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
                          className='py-2 block w-full rounded-md border-0      text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
                          className='py-2 block w-full rounded-md border-0  text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                        <div className='absolute inset-y-0 right-0 flex items-center'></div>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
            {/*Display Students Data*/}
            {students.length > 0 ? <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4  mx-5  pr-4 ">
              {
                students.map((student, index) => (
                  <div key={index} className="flex flex-col ml-4 mt-4">


                    <div key={student?._id} className="border rounded-2xl flex justify-between align-items-center">
                      <div className='flex'>
                        <img src={userImg} alt='userImage' className="w-16 h-16 mr-4" />
                        <div className="mt-2">
                          <p className="font-semibold mx-2">{student?.first_name} {student?.last_name}</p>
                          <p className='border-r mx-1 px-1'>Role: Student</p>

                        </div>
                      </div>
                      <div>
                        <button>
                          <i className="fa-solid fa-circle-arrow-right mt-[5px]  pr-2  "></i>
                        </button>
                        <button onClick={() => handleOpenModal('delete', student?._id)}>
                          <i className="fa-solid fa-trash mr-2 text-red-400"></i>
                        </button>

                      </div>
                    </div>

                  </div>
                ))
              }


            </div> : <div className=' text-6xl h-[50%] w-full  flex items-center justify-center py-5'><Loading /></div>}
            {/*Delete  Student Modal*/}
            <SharedModal
              show={modalAction === 'delete'}
              title="Delete Student"
              onSave={saveChanges}
              onClose={closeModal}
              body={(
                <div className='text-center'>
                  <img src={trash} alt="trash" className='w-1/6 m-auto' />
                  <p className='text-lg'>Are you sure you want to <span className='text-red-500'>delete</span> this student?</p>
                </div>
              )}

            />
          </div>
        </div>

      </div>

    </>
  )
}

