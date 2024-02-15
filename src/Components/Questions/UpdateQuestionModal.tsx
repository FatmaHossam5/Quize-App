import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";
import Loading from '../../Shared/Loading/Loading';
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function UpdateQuestionModal({ isOpen, onClose, getAllQuestions, question }) {

  const [isloading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { userData } = useSelector((state: any) => state.userData);
  let reqHeaders=`Bearer ${userData?.accessToken}`

  useEffect(() => {
    setValue("title", question.title);
    setValue("description", question.description);
    setValue("options.A", question.options.A);
    setValue("options.B", question.options.B);
    setValue("options.C", question.options.C);
    setValue("options.D", question.options.D);
    setValue("answer", question.answer);
    setValue("difficulty", question.difficulty);
    setValue("type", question.type);
  }, [])


  const onSubmit = (data:any) => {
    setIsLoading(true);
    axios
    .put(`https://upskilling-egypt.com:3005/api/question/${question._id}`, data, {
      headers: { Authorization: reqHeaders },
    })
    .then((response) => {
      toast.success(response?.data.message || "Successfully added");
      
    })
    .catch((error) => {
      toast.error(error?.response?.data?.message || "Error adding");
    })
    .finally(() => {
      setIsLoading(false);
      onClose()
      getAllQuestions()
      
    });
   
    
  };




  return (
    <>
      <div
        className={`fixed left-0 top-0 z-[1055] flex justify-center items-center  h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-black/40 ${
          isOpen ? "" : "hidden"
        }  focus:outline-none`}
      >
        <div className="relative w-1/2  h-auto  bg-white rounded-lg shadow dark:bg-gray-700">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="divide-x-2 h-20 px-3 flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100   dark:border-opacity-50">
              <h3
                className="text-md font-bold leading-normal text-black dark:text-neutral-200"
                id="exampleModalCenterTitle"
              >
                Set up a new question
              </h3>
              <div className="text-end font-bold text-xl  h-full divide-x-2">
                <button className="h-full border-r-2" type="submit">
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

            <div className="p-4">
              <div className="relative mt-2 rounded-md shadow-sm flex  ">
                <div className="pointer-events-none  inset-y-0 left-0 rounded-tr-none rounded-br-none flex items-center px-3 bg-red-300 rounded-md">
                  <span className="text-black sm:text-sm p-2 ">title</span>
                </div>
                <input
                  {...register("title", {
                    required: "title is required",
                  })}
                  type="text"
                  
                  className=" py-2 block w-full rounded-md  border-0 rounded-tl-none rounded-bl-none  text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.title && errors.title.type === "required" && (
                  <ErrorMessage> {String(errors?.title.message)}</ErrorMessage>
                )}
                <div className="absolute inset-y-0 right-0 flex items-center"></div>
              </div>
              <div className="relative mt-2 rounded-md shadow-sm flex  ">
                <div className="pointer-events-none  inset-y-0 left-0 rounded-tr-none rounded-br-none flex items-center px-3 bg-red-300 rounded-md">
                  <span className="text-black sm:text-sm p-2 ">
                    Description
                  </span>
                </div>
                <input
                  {...register("description", {
                  })}
                  type="text"
               
                  className="py-2 block w-full rounded-md  border-0 rounded-tl-none rounded-bl-none  text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.description && errors.description.type === "required" && (
                  <ErrorMessage>
                    {" "}
                    {String(errors?.description.message)}
                  </ErrorMessage>
                )}
                <div className="absolute inset-y-0 right-0 flex items-center"></div>
              </div>
              <div className="grid grid-cols-2">
                <div className="relative mt-2 rounded-md shadow-sm flex  ">
                  <div className="pointer-events-none  inset-y-0 left-0 rounded-tr-none rounded-br-none flex items-center px-3 bg-red-300 rounded-md">
                    <span className="text-black sm:text-sm p-2 ">A</span>
                  </div>
                  <input
                    {...register("options.A", {
                      required: "option is required",
                    })}
                    type="text"
                    className="py-2 block w-full rounded-md  border-0 rounded-tl-none rounded-bl-none  text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors?.options && errors.options.type === "required" && (
                    <ErrorMessage>
                      {" "}
                      {String(errors?.options.message)}
                    </ErrorMessage>
                  )}
                  <div className="absolute inset-y-0 right-0 flex items-center"></div>
                </div>
                <div className="relative mt-2 rounded-md shadow-sm flex  ">
                  <div className="pointer-events-none  inset-y-0 left-0 rounded-tr-none rounded-br-none flex items-center px-3 bg-red-300 rounded-md">
                    <span className="text-black sm:text-sm p-2 ">B</span>
                  </div>
                  <input
                    {...register("options.B", {
                      required: "option is required",
                    })}
                    type="text"
                    className="py-2 block w-full rounded-md  border-0 rounded-tl-none rounded-bl-none  text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors?.options &&errors.options.type === "required" &&  (
                    <ErrorMessage>
                      {" "}
                      {String(errors?.options.message)}
                    </ErrorMessage>
                  )}
                  <div className="absolute inset-y-0 right-0 flex items-center"></div>
                </div>
                <div className="relative mt-2 rounded-md shadow-sm flex  ">
                  <div className="pointer-events-none  inset-y-0 left-0 rounded-tr-none rounded-br-none flex items-center px-3 bg-red-300 rounded-md">
                    <span className="text-black sm:text-sm p-2 ">C</span>
                  </div>
                  <input
                    {...register("options.C", {
                      required: "option is required",
                    })}
                    type="text"
                    className="py-2 block w-full rounded-md  border-0 rounded-tl-none rounded-bl-none  text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors?.options &&errors.options.type === "required" &&  (
                    <ErrorMessage>
                      {" "}
                      {String(errors?.options.message)}
                    </ErrorMessage>
                  )}
                  <div className="absolute inset-y-0 right-0 flex items-center"></div>
                </div>
                <div className="relative mt-2 rounded-md shadow-sm flex  ">
                  <div className="pointer-events-none  inset-y-0 left-0 rounded-tr-none rounded-br-none flex items-center px-3 bg-red-300 rounded-md">
                    <span className="text-black sm:text-sm p-2 ">D</span>
                  </div>
                  <input
                    {...register("options.D", {
                      required: "option is required",
                    })}
                    type="text"
                    className="py-2 block w-full rounded-md  border-0 rounded-tl-none rounded-bl-none  text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors?.options && errors.options.type === "required" && (
                    <ErrorMessage>
                      {" "}
                      {String(errors?.options.message)}
                    </ErrorMessage>
                  )}
                  <div className="absolute inset-y-0 right-0 flex items-center"></div>
                </div>
                <div className="relative mt-2 rounded-md shadow-sm flex  ">
                  <div className="pointer-events-none  inset-y-0 left-0 rounded-tr-none rounded-br-none flex items-center px-3 bg-red-300 rounded-md">
                    <span className="text-black sm:text-sm p-2 ">
                      Right Answer
                    </span>
                  </div>
                
                  <select
                    {...register("answer", {
                      required: "required",
                    })}
                    
                    className="py-2 block w-full rounded-md  border-0 rounded-tl-none rounded-bl-none  text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>
                  {errors?.answer && errors.options.type === "required" &&  (
                    <ErrorMessage>
                      {" "}
                      {String(errors?.answer.message)}
                    </ErrorMessage>
                  )}
                  <div className="absolute inset-y-0 right-0 flex items-center"></div>
                </div>
                <div className="relative mt-2 rounded-md shadow-sm flex  ">
                  <div className="pointer-events-none  inset-y-0 left-0 rounded-tr-none rounded-br-none flex items-center px-3 bg-red-300 rounded-md">
                    <span className="text-black sm:text-sm p-2 ">
                    difficulty
                    </span>
                  </div>
                
                  <select
                    {...register("difficulty", {
                      required: "required",
                    })}
                    type="text"
                    className="py-2 block w-full rounded-md  border-0 rounded-tl-none rounded-bl-none  text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="easy">easy </option>
                    <option value="medium ">medium </option>
                    <option value="hard">hard</option>
                  </select>
                  {errors?.difficulty && errors.difficulty.type === "required" &&  (
                    <ErrorMessage>
                      {" "}
                      {String(errors?.difficulty.message)}
                    </ErrorMessage>
                  )}
                  <div className="absolute inset-y-0 right-0 flex items-center"></div>
                </div>
                <div className="relative mt-2 rounded-md shadow-sm flex  ">
                  <div className="pointer-events-none  inset-y-0 left-0 rounded-tr-none rounded-br-none flex items-center px-3 bg-red-300 rounded-md">
                    <span className="text-black sm:text-sm p-2 ">
                    type
                    </span>
                  </div>
                
                  <select
                    {...register("type", {
                      required: "required",
                    })}
                    type="text"
                    className="py-2 block w-full rounded-md  border-0 rounded-tl-none rounded-bl-none  text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="FE">FE </option>
                    <option value="BE ">BE </option>
                    <option value="FS">FS</option>
                  </select>
                  {errors?.type && errors.type.type === "required" &&(
                    <ErrorMessage>
                      {" "}
                      {String(errors?.type.message)}
                    </ErrorMessage>
                  )}
                  <div className="absolute inset-y-0 right-0 flex items-center"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
