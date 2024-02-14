import psyology from "../../assets/443de449f9295558ab8120f068b0b58b.png";
import intro from "../../assets/Quiz img (2).png";
import { Link } from "react-router-dom";

export default function UpComingQuiz() {
  return (
    <div className="upcoming-quizzes p-3 w-full">
      <div className="border rounded-xl">
        <h5 className="text-lg font-semibold my-2 mx-2">Upcoming quizzes</h5>

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
                <Link
                  to="/dashboard/Introduction-to-computer-programming"
                  className="border-0 font-medium text-sm mx-3"
                >
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
                <Link
                  to="/dashboard/Psychology-101"
                  className="border-0 font-medium text-sm mx-3"
                >
                  Open
                  <i className="fa-solid fa-circle-arrow-right text-secondry"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
