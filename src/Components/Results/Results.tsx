import { Link } from "react-router-dom";

export default function Results() {
  const DataTable=[{
    title:"Assembly Language",
    GroupNum:'1',
    persons:'23 Persons',
    participants:"20 Participants",
    Data:"05/11/2024"
  },
  {
    title:"Assembly Language",
    GroupNum:'1',
    persons:'23 Persons',
    participants:"20 Participants",
    Data:"05/11/2024"
  },
  {
    title:"Assembly Language",
    GroupNum:'1',
    persons:'23 Persons',
    participants:"20 Participants",
    Data:"05/11/2024"
  },{
    title:"Assembly Language",
    GroupNum:'1',
    persons:'23 Persons',
    participants:"20 Participants",
    Data:"05/11/2024"
  },{
    title:"Assembly Language",
    GroupNum:'1',
    persons:'23 Persons',
    participants:"20 Participants",
    Data:"05/11/2024"
  },{
    title:"Assembly Language",
    GroupNum:'1',
    persons:'23 Persons',
    participants:"20 Participants",
    Data:"05/11/2024"
  }
]
  return (
    <>

      <div className="completed-quizzes px-3 w-full">
        <div className="border rounded-xl mt-5">
          <div className="header flex justify-between">
            <h5 className="text-lg font-semibold my-2 mx-2">
              Completed Quizzes
            </h5>

          </div>
          <div className="result">
            <div className="overflow-x-auto p-3">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                  <tr className="bg-black ">
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50">
                      Title
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50 ">
                      Group name
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50">
                      No. of persons in group
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50">
                      Participants
                    </th>

                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50">
                      Date
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50">

                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {DataTable.map((data,index)=>
                  <tr key={index}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{data.title}</td>
                <td className="whitespace-nowrap px-12 py-2 text-gray-700 ">{data.GroupNum}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{data.persons}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{data.participants}</td>
                <td>
                  <Link to ='/dashboard/results/Assembly Language	'>
                      <button className="border-0 mx-3 bg-secondry rounded-xl px-3">
                        View
                      </button>
                      </Link>
                    </td>


                  </tr>
)}
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
