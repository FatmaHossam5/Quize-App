import intro from "../../assets/Quiz img (2).png";
import psyology from "../../assets/443de449f9295558ab8120f068b0b58b.png";
import { Link } from "react-router-dom";

export default function Quizzes() {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="newQuiz-Bank p-3 ">
          <div className="flex">
            <button className="new-quiz text-center border rounded-xl py-4 px-5 mx-3">
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
          <div className="upcoming-quizzes p-3 w-full">
            <div className="border rounded-xl">
              <h5 className="text-lg font-semibold my-2 mx-2">
                Upcoming quizzes
              </h5>

              <div className="quizez m-3 my-4">
                <div className="first-quiz border flex rounded-xl">
                  <div className="image w-[25%] bg-authImage">
                    <img className="w-full p-3" src={intro} alt="#" />
                  </div>
                  <div className="info border-l-2 grid grid-rows-1 w-full">
                    <div className="name-date m-2">
                      <h5 className="font-semibold">
                        Introduction to computer programming
                      </h5>
                      <p className="my-1">
                        <span className="border-r-2 border-black">
                          12 / 03 / 2023
                        </span>
                        <span className="mx-1"> 09:00 AM</span>
                      </p>
                    </div>
                    <div className="about m-2 w-full flex justify-between">
                      <h6 className="font-medium text-sm">
                        No. of student’s enrolled: 32
                      </h6>
                      <Link to="/dashboard/Introduction-to-computer-programming" className="border-0 font-medium text-sm mx-3">
                        Open
                        <i className="fa-solid fa-circle-arrow-right text-secondry"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="quizez m-3 my-4">
                <div className="first-quiz border flex rounded-xl">
                  <div className="image w-[25%] bg-authImage">
                    <img className="w-full p-3" src={psyology} alt="#" />
                  </div>
                  <div className="info border-l-2 grid grid-rows-1 w-full">
                    <div className="name-date m-2">
                      <h5 className="font-semibold">Psychology 101</h5>
                      <p className="my-1">
                        <span className="border-r-2 border-black">
                          27 / 03 / 2023
                        </span>
                        <span className="mx-1"> 12:00 PM</span>
                      </p>
                    </div>
                    <div className="about m-2 w-full flex justify-between">
                      <h6 className="font-medium text-sm">
                        No. of student’s enrolled: 17
                      </h6>
                      <Link to="/dashboard/Psychology-101" className="border-0 font-medium text-sm mx-3">
                        Open
                        <i className="fa-solid fa-circle-arrow-right text-secondry"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="completed-quizzes px-3 w-full">
            <div className="border rounded-xl">
              <div className="header flex justify-between">
                <h5 className="text-lg font-semibold my-2 mx-2">
                  Completed Quizzes
                </h5>
                <Link to="/dashboard/results" className="border-0 mx-3">
                  reuslts{" "}
                  <i className="fa-solid fa-arrow-right font-bold text-secondry"></i>
                </Link>
              </div>
              <div className="result">
                <div className="overflow-x-auto p-3">
                  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                      <tr className="bg-black ">
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50">
                          Title
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50">
                          Group name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50">
                          No. of persons in group
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50">
                          Date
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          John Doe
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          24/05/1995
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          Web Developer
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          $120,000
                        </td>
                      </tr>

                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          Jane Doe
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          04/11/1980
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          Web Designer
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          $100,000
                        </td>
                      </tr>

                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          Gary Barlow
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          24/05/1995
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          Singer
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          $20,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
