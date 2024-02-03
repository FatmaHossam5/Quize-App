

export default function RestPassword() {
  return (
    <>
    <h3 className="text-2xl  text-secondry">
    Reset password
</h3>


<form className="mt-12">

  <div className="email mt-2">
    <label htmlFor="email" className="w-full ps-1 mb-1">
    Your email address
    </label>
    <div className="flex rounded-md border-3 border-white">
      <span className="flex select-none items-center me-3 pl-3 text-white ">
        <i className="fa-solid fa-envelope"></i>
      </span>
      <input
        type="text"
        id="email"
        className="block px-2  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder="Type your email"
      />
    </div>
  </div>
  <div className="OTP mt-2">
    <label htmlFor="OTP" className="w-full ps-1 mb-1">
     OTP
    </label>
    <div className="flex rounded-md border-3 border-white">
      <span className="flex select-none items-center me-3 pl-3 text-white ">
        <i className="fa-solid fa-envelope"></i>
      </span>
      <input
        type="text"
        id="OTP"
        className="block px-2  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder="Choose your otp"
      />
    </div>
  </div>


  <div className="password mt-2">
    <label htmlFor="password" className="w-full ps-1 mb-1">
      Password
    </label>
    <div className="flex rounded-md border-3 border-white">
      <span className="flex select-none items-center me-3 pl-3 text-white ">
        <i className="fa-solid fa-key"></i>
      </span>
      <input
        type="text"
        id="password"
        className="block px-2  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder="Type your password"
      />
    </div>
  </div>

  <div className="Confirm-Password mt-2">
    <label htmlFor="Confirm-Password" className="w-full ps-1 mb-1">
      Confirm Password
    </label>
    <div className="flex rounded-md border-3 border-white">
      <span className="flex select-none items-center me-3 pl-3 text-white ">
        <i className="fa-solid fa-key"></i>
      </span>
      <input
        type="text"
        id="Confirm-Password"
        className="block px-2  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder="Type your confirm password"
      />
    </div>
  </div>

  <button
    type="submit"
    className="bg-slate-50 transition duration-100 hover:bg-gray-800  text-slate-950  hover:text-slate-50  rounded-lg px-4 py-2 mt-2 font-medium "
  >
    Reset{" "}
    <i className="fa-solid fa-check ms-1 text-white p-1 rounded-full bg-black"></i>
  </button>
</form>
</>
  )
}
