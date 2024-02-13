// import React from "react";
// import {
//   TEModal,
//   TEModalDialog,
//   TEModalContent,
//   TEModalHeader,
//   TEModalBody,
//   TEModalFooter,
//   TERipple,

// } from "tw-elements-react";

// interface SharedModalProps {
//   show: boolean;
//   setShow: React.Dispatch<React.SetStateAction<boolean>>;
//   title: string;
//   body: string;
//   onClose: () => void;
//   onSave: () => void;
  
// }

// const SharedModal: React.FC<SharedModalProps> = ({
//   show,
//   setShow,
//   title,
//   body,
//   onClose,
//   onSave,
//   buttonLable,

// }) => {
//   return (
//     <div className={`fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50  ${show ? 'flex ' : 'hidden'}`}>
//     <div className=" ">
//  <TEModal  className="w-[50%] flex justify-center items-center m-auto"show={show} setShow={setShow}>
//       <TEModalDialog >
//         <TEModalContent>
//           <TEModalHeader className="py-3  ">
//             <div>
//             <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
//               {title}
//             </h5>
//             </div>
//         <div className="flex  ">
//         <button
//                   type="button"
//                   className="ml-auto  box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
      
//                   aria-label="Check"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="h-6 w-6 border-r-2 "
                   
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
//                   </button>
//         <button
//               type="button"
//               className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
//               onClick={onClose}
//               aria-label="Close"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="h-6 w-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
         
//         </div>
          
//           </TEModalHeader>
//           <TEModalBody>
//             {body}
//    <button className="bg-blue-800" onClick={onSave}>{buttonLable}</button>
//           </TEModalBody>
     
//         </TEModalContent>
//       </TEModalDialog>
//     </TEModal>
//     </div>
//     </div>
//   );
// };

// export default SharedModal;

import React from 'react'
interface SharedModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  body: string;
  onClose: () => void;
  onSave: () => void;
  
}

const SharedModal: React.FC<SharedModalProps> = ({
  show,
  setShow,
  title,
  body,
  onClose,
  onSave,
  buttonLable,

}) => {
  return (
    <div className={`fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50  ${show ? 'flex justify-center items-center' : 'hidden'}`}>
  <div  className='bg-white w-50 h-auto  rounded-lg' show={show} setShow={setShow} >
    <div className='header flex justify-between border-b-2'>
<div className='headerName mt-3 ml-2'>{title}</div>
<div >
                                    <button
                                        className="border-l-2 p-3   "
                                        onClick={onSave}
                                    >
                                        <i className="fa-solid fa-check"></i>
                                    </button>
                              
                                    <button
                                        className="  border-l-2 p-3  "
                                        aria-label="Close"
                                        onClick={onClose}
                                    >
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
    </div>
<div className='py-4'>
  {body}
</div>
  </div>
    </div>
  );
};

export default SharedModal;

