import axios from "axios";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { baseUrl } from '../../ApiUtls/ApiUtls';

export default function DeleteGroup({getGroups,isOpen,onClose,id}) {
    const { headers } = useSelector((state: any) => state.userData)
  const [isloading, setIsLoading] = useState(false);

const deleteGroup =()=>{

  setIsLoading(true);
  axios
  .delete(`${baseUrl}/group/${id} `, headers)
  .then((response) => {
   
    toast.success(response?.data.message || " deleted Successfully");
  })
  .catch((error)=>{
    toast.error(error?.data.message || " error deleting item");
  })
 
  .finally(() => {
    setIsLoading(false);
      onClose()
      getGroups()
  });
}


  return (
    <>
      <div
        className={`${ isOpen ? "" : "hidden"} fixed left-0 top-0 z-[1055] flex justify-center items-center  h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-black/40  focus:outline-none`}
      >
        <div className="relative w-3/5  h-auto max-w-md bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="divide-x-2 h-20 px-3 flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100   dark:border-opacity-50">
            <h3
              className="text-md font-bold leading-normal text-black dark:text-neutral-200"
              id="exampleModalCenterTitle"
            >
              Delete Group
            </h3>
            <div className="text-end font-bold text-xl  h-full divide-x-2">
              <button className="h-full border-r-2" type="submit" onClick={deleteGroup}>
                <i className="fa-solid fa-check px-4 "></i>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="text-black h-full border-2 font-bold box-content px-4  rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              >
                <i className="fa-solid fa-xmark font-bold"></i>
              </button>
            </div>
          </div>
          {isloading?<div className="text-center text-2xl"><Loading /></div> :''}

          <p className="py-12 px-8 text-lg font-bold">
            Are you sure you want to delete this group?
          </p>
        </div>
      </div>
    </>
  );
}