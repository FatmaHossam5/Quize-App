import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h3 className="text-2xl  text-secondry">
        Continue your learning journey with QuizWiz!
      </h3>
      <div className="flex mt-3">
        <Link to='/' className="signin w-1/2">
          <div className="content text-8xl py-3 bg-stone-700 me-3 rounded-lg text-center border-4 border-secondry">
            <i className="fa-solid fa-user text-secondry"></i>
            <p className="text-base mt-2">Sign in</p>
          </div>
        </Link>
        <Link to='/rigester' className="signup w-1/2">
          <div className="content text-8xl py-3 bg-stone-700 ms-3 rounded-lg text-center border-4 border-stone-700">
            <i className="fa-solid fa-user-plus  "></i>
            <p className="text-base mt-2">Sign Up</p>
          </div>
        </Link>
        <div className="signup w-1/2"></div>
      </div>

      <form className="my-12">

        <div className="email mt-2">
          <label htmlFor="email" className="w-full ps-1 mb-1">
          Registered email address
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

        <div className="flex mt-3 mb-16 justify-between items-end">
        <button
          type="submit"
          className="bg-slate-50 transition duration-100 hover:bg-gray-800  text-slate-950  hover:text-slate-50  rounded-lg px-4 py-2 font-medium "
        >
          Sign In{" "}
          <i className="fa-solid fa-check ms-1 text-white p-1 rounded-full bg-black"></i>
        </button>

<p >Forgot password? <Link className="text-secondry" to='/requsetRestPass'>click here</Link></p>
        </div>
      </form>
    </>
  );
}
//