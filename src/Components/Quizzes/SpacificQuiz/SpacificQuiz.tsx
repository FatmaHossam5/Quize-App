import { Link, useParams } from "react-router-dom";
import Label from "../../../Shared/Label/Label";

export default function SpacificQuiz() {
  const { quizName } = useParams();
  const name = quizName?.replace(/-/g, " ");
  console.log({ name });

  return (
    <>
      <div className="quiz-name">
        <Link to="/dashboard/Quizzes" className="m-2 font-semibold">
          Quizzes <i className="fa-solid fa-angle-right text-secondry"></i>
          <i className="fa-solid fa-angle-right text-secondry"></i> 
        </Link>
        <span>{name}</span>

        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="content my-4 mx-2">
            <div className="header border-2 p-3 rounded-xl">
              <h2 className="text-2xl font-bold">{name}</h2>
              <div className="flex my-3">
                <p>
                  <i className="fa-solid fa-calendar-days mr-1"></i>12 / 03 /
                  2023{" "}
                </p>
                <p>
                  <i className="fa-solid fa-clock mx-1"></i>09 : 00
                </p>
              </div>
              <Label word="Duration" value="10 minutes" />
              <Label word="Number of questions" value="15" />
              <Label word="Score per question" value="1" />
              <Label
                word="Description"
                class_Name="grid-cols-1"
                textClassName="text-sm"
                value="Lorem ipsum aset amet consectedur im nascsa assadqw assacsc aidwqdjv asdewfas qwdass Lorem ipsum aset amet consectedur im nascsa assadqw assacsc aidwqdjv"
              />
              <Label word="Question bank used" value="Bank one" />
              <div className="flex items-center">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  className="w-5 h-5 rounded accent-black "
                />
                <label
                  htmlFor="link-checkbox"
                  className="ms-2 text-sm font-medium text-gray-900"
                >
                  Randomize questions.
                </label>
              </div>
              <div className="text-end">
                <button className="bg-zinc-900 hover:bg-zinc-700 text-white rounded-lg px-3 py-1 text-sm font-bold my-2">
                  <i className="fa-solid fa-pen text-white mx-1"></i>
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
