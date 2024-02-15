import React from 'react'

export default function Input({title}) {
  return (
    <>
        <div className="title mt-2 flex rounded-xl">
              <label
                htmlFor="title"
                className="bg-authImage px-4 py-1 font-semibold rounded-l-xl"
              >
               {title}
              </label>
              <input
                id="title"
                className="w-full border-2 px-1 rounded-r-xl"
                type="text"
              />
            </div>
    </>
  )
}
