import { useRef, useState } from "react";
import SharedModal from "../../Shared/AddModal/AddModal";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import CompletedQuizzes from "../CompletedQuizzes/CompletedQuizzes";
import UpcomingQuizes from "../UpcomingQuizes/UpcomingQuizes";
import QuizModal from "../QuizModal/QuizModal";
export default function Quizzes() {
  const codeRef = useRef<HTMLInputElement>(null);
  const [modalState, setModalState] = useState("close");

  const handleClose = () => {
    setModalState("close");
  };

  const showAddModal = () => {
    setModalState("add");
  };

  const copyToClipboard = () => {
    let copyText = codeRef.current?.value;
    let isCopy = copy(copyText || "");
    if (isCopy) {
      toast.success("Copied to Clipboard");
    }
  };
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="newQuiz-Bank sm:p-3 ">
          <div className="flex">
            <button
              onClick={showAddModal}
              className="new-quiz text-center border rounded-xl py-4 px-5 mx-3"
            >
              <i className="fa-solid text-zinc-600 text-6xl fa-file-circle-plus my-2"></i>
              <p className="text-lg font-semibold ">Set up a new quiz</p>
            </button>
            <button className="new-quiz text-center border rounded-xl py-4 px-5 mx-3">
              <i className="fa-solid text-zinc-600 text-6xl fa-building-columns my-2"></i>
              <p className="text-lg font-semibold ">Question Bank</p>
            </button>
          </div>
        </div>

        <div className="upComingQuiz-Completed">
          <UpcomingQuizes />
          <CompletedQuizzes />
        </div>
      </div>

      <SharedModal
        show={modalState === "add"}
        title="Set up a new quiz"
        onSave={() => {
          console.log("hello");
        }}
        onClose={handleClose}
        body={
          modalState =="add"?<QuizModal/>:""
        }
      />

      <SharedModal
        show={modalState === "add1"}
        title=""
        onSave={() => {
          console.log("hello");
        }}
        omitHeader={true}
        onClose={handleClose}
        body={
          <div className="px-8">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <i className="fa-solid text-4xl text-white bg-black py-1 px-2 rounded-full text-bold fa-check"></i>
                <h2 className="font-bold text-xl mt-2">
                  Quiz was successfully created
                </h2>
                <div
                  className={`w-full rounded-lg text-center font-semibold border-black grid grid-cols-3 my-1`}
                >
                  <p className="word bg-authImage py-1 ps-1 border-y border-l border-black rounded-l-2xl">
                    CODE:
                  </p>
                  <input
                    className={`value p-1 text-center px-1 border-y border-black`}
                    ref={codeRef}
                    defaultValue="A123DDS"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="border-y border-r border-black rounded-r-2xl"
                  >
                    <i className="fa-solid fa-copy "></i>
                  </button>
                </div>
                <button onClick={handleClose} className="bg-secondry px-8 rounded-2xl mt-8">
                  Close
                </button>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
}
