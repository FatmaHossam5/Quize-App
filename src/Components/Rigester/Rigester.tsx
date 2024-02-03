import { Link } from "react-router-dom";

export default function Rigester() {
  return (
    <>
          <h3 className="text-2xl  text-secondry">
        Create your account and start using QuizWiz!
      </h3>
      <div className="flex mt-3">
        <Link to='/' className="signin w-1/2">
          <div className="content text-8xl py-3 bg-stone-700 me-3 rounded-lg text-center border-4 border-stone-700">
            <i className="fa-solid fa-user "></i>
            <p className="text-base mt-2">Sign in</p>
          </div>
        </Link>
        <div className="signup w-1/2">
          <div className="content text-8xl py-3 bg-stone-700 ms-3 rounded-lg text-center border-4 border-secondry">
            <i className="fa-solid fa-user-plus text-secondry "></i>
            <p className="text-base mt-2">Sign Up</p>
          </div>
        </div>
        <div className="signup w-1/2"></div>
      </div>

      <form className="mt-3">
        <div className="grid grid-cols-2 gap-2 ">
          <div className="firstName">
            <label htmlFor="firstName" className="w-full ps-1 mb-1 ">
              Your first name
            </label>
            <div className="flex rounded-md border-3 border-white">
              <span className="flex select-none items-center me-3 pl-3 text-white ">
                <i className="fa-solid fa-address-card"></i>
              </span>
              <input
                type="text"
                id="firstName"
                className="block px-2  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Type your first name"
              />
            </div>
          </div>

          <div className="lastName">
            <label htmlFor="lastName" className="w-full ps-1 mb-1 ">
              Your last name
            </label>
            <div className="flex rounded-md border-3 border-white">
              <span className="flex select-none items-center me-3 pl-3 text-white ">
                <i className="fa-solid fa-address-card"></i>
              </span>
              <input
                type="text"
                id="lastName"
                className="block px-2  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Type your last name"
              />
            </div>
          </div>
        </div>

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

        <div className="role mt-2">
          <label htmlFor="role" className="w-full ps-1 mb-1">
            Your role address
          </label>
          <div className="flex rounded-md border-3 border-white">
            <span className="flex select-none items-center me-3 pl-3">
              <i className="fa-solid fa-user"></i>
            </span>
            <select
              id="role"
              className="mt-1 block border-none w-screen p-2 focus:outline-none bg-auth "
            >
              <option value="1">Instructor</option>
              <option value="2">Learner</option>
            </select>
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

        <button
          type="submit"
          className="bg-slate-50 transition duration-100 hover:bg-gray-800  text-slate-950  hover:text-slate-50  rounded-lg px-4 py-2 mt-2 font-medium "
        >
          Sign Up{" "}
          <i className="fa-solid fa-check ms-1 text-white p-1 rounded-full bg-black"></i>
        </button>
      </form>
    </>
  )
}
