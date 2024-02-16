import React from 'react'

export default function Input({title,handleChange,value}) {
  return (
    <>
        <div className="title mt-2 flex rounded-xl">
              <label
                htmlFor="title"
                className="bg-authImage px-4 py-2 font-semibold rounded-l-xl"
              >
               {title}
              </label>
              <input
                id="title"
                className="w-full border-2 px-1 rounded-r-xl py-2"
                type="text"
                onChange={handleChange}
                value={value}
                
              />
            </div>
    </>
  )
}
