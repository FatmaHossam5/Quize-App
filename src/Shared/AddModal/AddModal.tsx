import React, { useEffect, useState } from 'react'

export default function AddModal({isOpen, onClose, children,onButtonClick ,buttonLabel = "Button",
width = "auto",
height = "auto"}) {
    const [modalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setModalOpen(false);
    onClose();
  };
  return (
//     <>


//     {/* Modal */}
//     {modalOpen && (
//       <div
//         id="authentication-modal"
//         tabIndex="-1"
//         aria-hidden="true"
//         className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-30"
//       >
//         {/* Modal content */}
//         <div className="relative p-4 w-full max-w-md max-h-full">
//           <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
//             {/* Modal header */}
//             <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                 Sign in to our platform
//               </h3>
//               <button
//                 onClick={onClose}
//                 type="button"
//                 className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                 data-modal-hide="authentication-modal"
//               >
//                 <svg
//                   className="w-3 h-3"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 14"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                   />
//                 </svg>
//                 <span className="sr-only">Close modal</span>
//               </button>
//             </div>
//             {/* Modal body */}
//             <div className="p-4 md:p-5">
//                 <form className="space-y-4" action="#">
//                     <div>
//                         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                         <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
//                         <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
//                     </div>
//                     <div className="flex justify-between">
//                         <div className="flex items-start">
//                             <div className="flex items-center h-5">
//                                 <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
//                             </div>
//                             <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
//                         </div>
//                         <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
//                     </div>
//                     <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
//                     <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
//                         Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
//                     </div>
//                 </form>
//             </div>
//             </div>
//           </div>
//         </div>
 
//     )}
//   </>
<>
{modalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
    <div
      className="relative w-full h-full max-w-md  mx-auto my-6 bg-red-300 rounded-md shadow-lg border-b-8 border-black"
      style={{ width, height }}
    >
      {/* Modal content */}
      <div className="flex flex-col bg-red-300  ">
       

        <div className="flex justify-between  p-3 border-b-2  ">
        {buttonLabel}
        <div>
          <button
            className="   "
            onClick={onButtonClick}
          >
            <i className="fa-solid fa-check"></i>
          </button>
          {/* Close button */}
          <button
            className="    "
            onClick={handleClose}
          >
          <i className="fa-solid fa-xmark"></i>
          </button>
          </div>
        </div>
        {children}
       
      </div>
    </div>
  </div>


  )
}
</>)}