import React, { useState, useEffect } from "react";
import AddQuestionModal from "./AddQuestionModal";
import UpdateQuestionModal from "./UpdateQuestionModal";
import DeleteQuestionModal from "./DeleteQuestionModal";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";
import { useForm } from "react-hook-form";

export default function Questions(props) {
  const [questionsList, setQuestionsList] = useState([]);
  const [isloading, setIsLoading] = useState(false);
 
  //******** const modals add,update,delete*******//
  const [modalState, setModalState] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  const [question, setQuestion] = useState(null);


  const handleAddModal = () => {
    setModalState("add");
    setIsOpen(true);
  };
  const handleUpdateModal = (question) => {
    setModalState("update");
    setQuestion(question)
    setIsOpen(true);
   
  };
  const handleDeleteModal = (id) => {
    setModalState("delete");
    setId(id)
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const { userData } = useSelector((state: any) => state.userData);
  let reqHeaders=`Bearer ${userData?.accessToken}`


  const getAllQuestions = () => {
    axios
      .get(`https://upskilling-egypt.com:3005/api/question`, {
        headers: { Authorization: reqHeaders },
      })
      .then((response) => {
        setIsLoading(true);
        setQuestionsList(response?.data);
      })
     
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getAllQuestions();
  }, []);

  return (
    <>
      <div className="m-3 p-2 border rounded-md">
        {/* //****************content above table************** */}

        <div className=" w-full flex justify-between">
          <h3 className="font-bold mt-3 ">Bank Of Questions</h3>
          <button
            onClick={handleAddModal}
            className="border rounded-2xl border-black mt-3 mr-3 px-4 "
          >
            <i className="fa-solid fa-clock  "></i>
            <span>Add Question</span>
          </button>
        </div>

        {/* //****************table of questions list************** */}

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                {isloading ? (
                  <div className="text-center text-5xl">
                    <Loading />
                  </div>
                ) : (
                  <table className="min-w-full text-left text-sm font-bold">
                    <thead className="border rounded-2xl font-medium bg-black text-gray-50 dark:border-neutral-500">
                      <tr className="divide-x">
                        <th scope="col" className="px-6 py-2">
                          Question Title
                        </th>
                        <th scope="col" className="px-6 py-2">
                          Difficulty
                        </th>
                        <th scope="col" className="px-6 py-2">
                          Category
                        </th>
                        <th scope="col" className="px-6 py-2">
                          Right Answer
                        </th>
                        <th scope="col" className="px-6 py-2">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {questionsList.map((question, id) => (
                        <tr
                          key={question?._id}
                          className=" border rounded-2xl divide-x my-4 dark:border-neutral-500"
                        >
                          <td className=" whitespace-nowrap px-3 py-3 font-medium">
                            {question?.title.substring(0, 35) +
                              (question?.title.length > 35 ? "..." : "")}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3">
                            {question?.difficulty}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3">
                            {question?.type}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3">
                            {question?.answer}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3">
                            <div className="flex justify-evenly text-orange-600">
                              <i className="fa-solid fa-eye"></i>
                              <i
                                onClick={()=>{handleUpdateModal(question)}}
                                className="fa-solid fa-pen-to-square"
                              ></i>
                              <i
                                onClick={()=>{handleDeleteModal(question?._id)}}
                                className="fa-solid fa-trash-can"
                              ></i>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalState === "add" ? (
        <AddQuestionModal
          getAllQuestions={getAllQuestions}
          isOpen={isOpen}
          onClose={handleCloseModal}
        />
      ) : (
        ""
      )}

      
      {modalState === "update" ? (
        <UpdateQuestionModal
          getAllQuestions={getAllQuestions}
          isOpen={isOpen}
          onClose={handleCloseModal}
          question={question}
        />
      ) : (
        ""
      )}
     

      {modalState === "delete" ? (
        <DeleteQuestionModal
          getAllQuestions={getAllQuestions}
          isOpen={isOpen}
          onClose={handleCloseModal}
          id={id}
        />
      ) : (
        ""
      )}
    </>
  );
}
