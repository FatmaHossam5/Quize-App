import React from 'react'

export default function StudentsQuestion() {
  return (
    <>
    <div className='questions pt-3 mt-5 border rounded-xl'>
      <div className='m-3 font-bold'>
        QUIZ Name
      </div>
    <div className='questionCard m-3 w-50  p-2  shadow-md rounded-lg  '>
      <div className='questionHeader w-auto bg-authImage  rounded-md mt-1 py-1 text-center '>
what is Html?
      </div>

<div className='answers mx-3  '>
  <form >
<div className='subAnswer bg-white  rounded-md shadow-md my-2'>

  <input type="radio" className='mr-3' name="radio"/>
  <span>Answer</span>
</div>
<div className='subAnswer bg-white  rounded-md shadow-md my-2'>

  <input type="radio" className='mr-3' name="radio"/>
  <span>Answer</span>
</div>
<div className='subAnswer bg-white  rounded-md shadow-md my-2'>

  <input type="radio" className='mr-3' name="radio"/>
  <span>Answer</span>
</div>

</form>
</div>
    </div>
    <div className='questionCard m-3 w-50  p-2  shadow-md rounded-lg  '>
      <div className='questionHeader w-auto bg-authImage  rounded-md mt-1 py-1 text-center '>
what is Html?
      </div>

<div className='answers mx-3  '>
  <form >
<div className='subAnswer bg-white  rounded-md shadow-md my-2'>

  <input type="radio" className='mr-3' name="radio"/>
  <span>Answer</span>
</div>
<div className='subAnswer bg-white  rounded-md shadow-md my-2'>

  <input type="radio" className='mr-3' name="radio"/>
  <span>Answer</span>
</div>
<div className='subAnswer bg-white  rounded-md shadow-md my-2'>

  <input type="radio" className='mr-3' name="radio"/>
  <span>Answer</span>
</div>

</form>
</div>
    </div>
  
    </div>
    </>
  )
}
