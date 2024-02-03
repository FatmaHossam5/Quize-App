
export default function ChangePassword() {
  return (
    <>
    <h3 className="text-2xl  text-secondry">
    Change password
</h3>


<form className="mt-12">

  <div className="oldPassword mt-2">
    <label htmlFor="oldPassword" className="w-full ps-1 mb-1">
    Old Password
    </label>
    <div className="flex rounded-md border-3 border-white">
      <span className="flex select-none items-center me-3 pl-3 text-white ">
        <i className="fa-solid fa-key"></i>
      </span>
      <input
        type="text"
        id="oldPassword"
        className="block px-2  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder="Type your old password"
      />
    </div>
  </div>

  <div className="newPassword mt-2">
    <label htmlFor="newPassword" className="w-full ps-1 mb-1">
    New Password
    </label>
    <div className="flex rounded-md border-3 border-white">
      <span className="flex select-none items-center me-3 pl-3 text-white ">
        <i className="fa-solid fa-key"></i>
      </span>
      <input
        type="text"
        id="newPassword"
        className="block px-2  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder="Type your new password"
      />
    </div>
  </div>

  <div className="Confirm-Password mt-2">
    <label htmlFor="Confirm-Password" className="w-full ps-1 mb-1">
    Confirm New Password
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
    Change{" "}
    <i className="fa-solid fa-check ms-1 text-white p-1 rounded-full bg-black"></i>
  </button>
</form>
</>
  )
}
