import { Link } from "react-router-dom";

export default function Results() {
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
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50">
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
                      student
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      $120,000
                    </td>
                    <td>
                      <Link to='/dashboard/view-results'>
                      <button className="border-0 mx-3 bg-secondry rounded-xl px-3">
                        View
                      </button>
                      </Link>
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
                      student
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      $100,000
                    </td>
                    <td>
                      <button className="border-0 mx-3 bg-secondry rounded-xl px-3">
                        View
                      </button>
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
                      student
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      $20,000
                    </td>
                    <td>
                      <button className="border-0 mx-3 bg-secondry rounded-xl px-3">
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
