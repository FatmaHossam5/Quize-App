import { useSelector } from "react-redux";
import Loading from "../../Shared/Loading/Loading";
import userImg from "../../assets/user img.png";
import UpcomingQuizes from "../Quizzes/UpcomingQuizes/UpcomingQuizes";
export default function Home() {
  const { upcomingQuizzes } = useSelector(
    (state: any) => state.upcomingQuizzes
  );

  const students = [
    { id: "1", Name: "Emanual James", Rank: "2nd", Score: "87" },
    { id: "2", Name: "Alice Jasmine", Rank: "12th", Score: "77" },
    { id: "3", Name: "Harrison Menlaye", Rank: "3rd", Score: "97" },
    { id: "4", Name: "Jones Doherty", Rank: "5th", Score: "88" },
    { id: "5", Name: "Harrison Menlaye", Rank: "3rd", Score: "97" },
  ];

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="border exams mt-2 mx-2 rounded-xl">
          {upcomingQuizzes ? (
            <UpcomingQuizes upcomingQuizzes={upcomingQuizzes} />
          ) : (
            <div className="flex items-center justify-center h-[80vh] w-full text-5xl ">
              <Loading />
            </div>
          )}
        </div>

        <div className="border students mt-2 mr-3 rounded-xl">
          <h3 className="pl-3"> Top 5 Students </h3>
          {students.map((student, id) => (
            <div key={id}>
              <div className=" my-4 ml-1 ">
                <div className="border rounded-xl ">
                  <div className="flex ">
                    <img src={userImg} className="w-2/12" alt="" />
                    <div className=" ml-2 mt-2 w-5/6">
                      <div className="flex justify-between">
                        <h3 className="font-bold">{student.Name}</h3>
                        <i className="fa-solid fa-circle-arrow-right mt-[5px]  pr-2 mr-3 "></i>
                      </div>
                      <div className="flex">
                        <h5 className="border-r ">
                          class Rank:<span> {student.Rank} </span>
                        </h5>
                        <h5 className="pl-2">
                          Average score :<span>{student.Score}%</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
