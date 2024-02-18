import React, { useEffect, useState } from "react";
import { baseUrl } from "../../ApiUtls/ApiUtls";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading/Loading";
import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";
import Select from "react-select";

export default function UpdateGroup({ getGroups, isOpen, onClose, group }) {
  const [isloading, setIsLoading] = useState(false);
  const [studentsList, setStudentsList] = useState(null);
  const { headers } = useSelector((state: any) => state.userData);
  const id = group._id;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setIsLoading(true);
    axios
      .put(`${baseUrl}/group/${id}`, data, headers)
      .then((response) => {
        console.log(response);
        toast.success(response?.data.message || "Successfully updated");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.response?.data?.message || "Error updated");
      })
      .finally(() => {
        setIsLoading(false);
        onClose();
        getGroups();
        setValue("name", "");
        setValue("students", []);
      });
  };

  const getStudents = () => {
    axios.get(`${baseUrl}/student`, headers).then((response) => {
      setStudentsList(response.data);
    }).catch((err)=>{
      toast.error(err.response.data?.message)
    })
  };

  useEffect(() => {
    getStudents();
  }, []);

  const options = studentsList?.map((student) => ({
    value: student._id,
    label: `${student.first_name} ${student.last_name}`,
  }));

  useEffect(() => {
    setValue("name", group.name);
    setValue("students", group.students);
  }, [group]);

  return (
    <>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } fixed left-0 top-0 z-[1055] flex justify-center items-center  h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-black/40  focus:outline-none`}
      >
        <div className="bg-white md:w-[50%] w-[90%]  h-auto  rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="header flex justify-between border-b-2 ">
              <div className="headerName mt-3 ml-2 text-xl font-semibold">
                Update Group
              </div>
              <div>
                <button type="submit" className="border-l-2 p-3">
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
            {isloading ? (
              <div className="text-center m-4 p-3 text-5xl">
                <Loading />
              </div>
            ) : (
                <div className="py-2">
                <div className="w-[90%] m-auto mb-4">
                  <div className="my-1">
                    <div className="relative mt-2 rounded-md shadow-sm text-center flex">
                      <div className=" flex items-center pl-3 bg-authImage font-semibold w-[30%] text-center rounded-md">
                        <span className="text-black sm:text-sm px-2">
                          Group Name
                        </span>
                      </div>
                      <input
                        {...register("name", {
                          required: "required",
                        })}
                        type="text"
                        className="ps-2 py-2 block w-full rounded-md border-0 rounded-tl-none rounded-bl-none  text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {errors.name && errors.name.type === "required" && (
                        <ErrorMessage>
                          {" "}
                          {String(errors?.name.message)}
                        </ErrorMessage>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-[90%] m-auto my-1 pb-8">
                  <div className="relative mt-2 rounded-md shadow-sm text-center flex">
                    <div className="flex items-center pl-3 bg-authImage font-semibold w-[30%] text-center rounded-md">
                      <span className="text-black sm:text-sm px-2">
                        List Students
                      </span>
                    </div>
                    <Select
                      isMulti
                      name="colors"
                      classNamePrefix="select"
                      options={options}
                      className="basic-multi-select form-select p-0 block w-full rounded-md border-0 rounded-tl-none rounded-bl-none text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            )}

          </form>
        </div>
      </div>
    </>
  );
}
