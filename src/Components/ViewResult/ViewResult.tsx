import React from 'react'

export default function ViewResult() {
  return (
    <>

<div className="completed-quizzes px-3 w-full">
            <div className="border rounded-xl">
              <div className="header flex justify-between">
                <h5 className="text-lg font-semibold my-2 mx-2">
                  Completed Quizzes
                </h5>
                <button className="border-0 mx-3">
                  reuslts{" "}
                  <i className="fa-solid fa-arrow-right font-bold text-secondry"></i>
                </button>
              </div>
              <div className="result">
                <div className="overflow-x-auto p-3">
                  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                      <tr className="bg-black ">
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50">
                      StudentName
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50">
                        Score
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50">
                         Average
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-50">
                        Time submitted
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          John Doe
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        16
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                         20
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                         09:00
                        </td>
                      </tr>

                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          John Doe
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        16
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                         20
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                         09:00
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          John Doe
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        16
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                         20
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                         09:00
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

