import { useEffect, useState } from "react";
import { getData } from "../../ApiUtls/ApiUtls";
import { useSelector } from "react-redux";
import Loading from "../../Shared/Loading/Loading";

interface Group{
  students:[string];
  status:string;
  name:string;
  max_students:string;
  instructor:string;
  _id:string;
}

export default function QuizModal() {
    const durationAndQuestionNumber:number[]=[10,15,20,25,30,35,40,45,50,55,60];
    const score_per_question:number[]=[1,2,3,4,5,6,7,8,9,10];
    const category:string[]=["FE","BE","Mobile application","Flutter","AI"];
    const { headers } = useSelector((state: any) => state.userData);
    const [groups, setGroups] = useState<Group[]>();
    useEffect(() => {
      getData({path:"group",headers,setState:setGroups})
      
      
    }, [])
    

  return (
<>
{groups?    <div className="px-6">
    <h3 className="font-semibold text-lg">Details</h3>
    <div className="title mt-2 flex rounded-xl">
      <label
        htmlFor="title"
        className="bg-authImage px-4 py-1 font-semibold rounded-l-xl"
      >
        Title:
      </label>
      <input
        id="title"
        className="w-full border-2 px-1 rounded-r-xl"
        type="text"
      />
    </div>

    <div className="details grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 justify-between">
      <div className="mt-3 mr-2 flex rounded-xl">
        <label
          htmlFor="durationAndQuestionNumber"
          className="bg-authImage px-4 py-1 font-semibold rounded-l-xl"
        >
          Duration
          <span className="font-normal text-sm">(in minutes)</span>
        </label>
        <select
          className="border-2 font-bold px-3 rounded-r-xl focus:border-gray-300"
          id="durationAndQuestionNumber"
        >
            {durationAndQuestionNumber.map((i,idx)=><option key={idx} value={i}>{i}</option>)}
        </select>
      </div>

      <div className="mt-3 mr-2 flex rounded-xl">
        <label
          htmlFor="durationAndQuestionNumber"
          className="bg-authImage px-4 py-1 font-semibold rounded-l-xl"
        >
          No. of questions
        </label>
        <select
          className="border-2 font-bold px-3 rounded-r-xl focus:border-gray-300"
          id="durationAndQuestionNumber"
        >
            {durationAndQuestionNumber.map((i,idx)=><option key={idx} value={i}>{i}</option>)}
        </select>
      </div>

      <div className="mt-3  flex rounded-xl">
        <label
          htmlFor="score_per_question"
          className="bg-authImage px-4 py-1 font-semibold rounded-l-xl"
        >
          Score per question
        </label>
        <select
          className="border-2 font-bold px-3 rounded-r-xl focus:border-gray-300"
          id="score_per_question"
        >
            {score_per_question.map((i,idx)=><option key={idx} value={i}>{i}</option>)}
        </select>
      </div>
    </div> 

    <div className="description mt-3 flex items-center rounded-xl">
      <label
        htmlFor="description"
        className="bg-authImage px-4 py-3 font-semibold rounded-l-xl"
      >
        Description:
      </label>
      <textarea
        aria-colspan={30}
        aria-rowspan={2}
        className="w-full resize-none border-2 px-1 rounded-r-xl"
        id="description"
      />
    </div>

    <div className="schedule mt-3 flex rounded-xl">
      <label
        htmlFor="schedule"
        className="bg-authImage px-4 py-1 font-semibold rounded-l-xl"
      >
        Schedule:
      </label>
      <input
        id="schedule"
        type="Date"
        placeholder="DD/MM/YY"
        className="border-y-2 px-1 border-gray-300 font-semibold"
      />
      <input
        id="schedule"
        type="time"
        className="border-y-2 border-gray-300 border-r-2 rounded-r-xl px-1 font-semibold"
      />
    </div>

    <div className="selects pb-12 pt-2">
      <div className="details grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 ">
        <div className="mt-3 mr-2 flex rounded-xl">
          <label
            htmlFor="difficulty"
            className="bg-authImage px-4 py-1 font-semibold rounded-l-xl"
          >
            Difficulty level
          </label>
          <select
            className="border-2 font-bold px-3 rounded-r-xl focus:border-gray-300"
            id="difficulty"
          >
            {["Easy","Medium","Hard"].map((i,idx)=><option key={idx} value={i}>{i}</option>)}
          </select>
        </div>

        <div className="mt-3  mr-2 flex rounded-xl">
          <label
            htmlFor="category"
            className="bg-authImage px-4 py-1 font-semibold rounded-l-xl"
          >
            Category type
          </label>
          <select
            className="border-2 font-bold px-3 rounded-r-xl focus:border-gray-300"
            id="category"
          >
            {category.map((i,idx)=><option key={idx} value={i}>{i}</option>)}
          </select>
        </div>

        <div className="mt-3  flex rounded-xl">
          <label
            htmlFor="group"
            className="bg-authImage px-4 py-1 font-semibold rounded-l-xl"
          >
            Group name
          </label>
          <select
            className="border-2 font-bold px-3 rounded-r-xl focus:border-gray-300"
            id="group"
          >
            {groups?groups.map(group=><option value={String(group?._id)}>{group?.name}</option>):""}
          </select>
        </div>
      </div>
    </div>
  </div>:<div className="text-6xl text-gray-500 flex items-center justify-center h-[40vh]">
  <Loading/>
  </div>}
</>
  )
}
