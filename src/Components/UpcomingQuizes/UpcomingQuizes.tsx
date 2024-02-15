import psyology from "../../assets/443de449f9295558ab8120f068b0b58b.png";
import intro from "../../assets/Quiz img (2).png";
import { Link } from "react-router-dom";
import QuizCard from "../QuizCard/QuizCard";

export default function UpcomingQuizes() {
  return (
    <div className="upcoming-quizzes p-3 w-full">
      <div className="border rounded-xl">
        <h5 className="text-lg font-semibold my-2 mx-2">Upcoming quizzes</h5>
        <QuizCard studentsEnrolled={10} time="12:00 PM" id="Introduction-to-computer-programming" imageSrc={intro} date="27 / 03 / 2023" name="Introduction to computer programming"/>
        <QuizCard studentsEnrolled={10} time="12:00 PM" id="Psychology-101" imageSrc={psyology} date="27 / 03 / 2023" name="Psychology 101"/>
      </div>
    </div>
  );
}
