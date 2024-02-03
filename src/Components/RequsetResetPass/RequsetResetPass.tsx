import { Link } from "react-router-dom";

export default function RequsetResetPass() {
  return (
    <>
      <h3 className="text-2xl  text-secondry">Forgot password</h3>

      <form className="my-10">
        <div className="email mt-24">
          <label htmlFor="email" className="w-full ps-1 mb-1">
            Email address
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

        <button
          type="submit"
          className="bg-slate-50 transition duration-100 hover:bg-gray-800  text-slate-950  hover:text-slate-50  rounded-lg px-4 py-2 mt-24 font-medium "
        >
          Send email{" "}
          <i className="fa-solid fa-check ms-1 text-white p-1 rounded-full bg-black"></i>
        </button>

<div className="my-24">
<p className="text-end">
          Login?
          <Link className="text-secondry py-24 " to="/">
            click here
          </Link>
        </p>
</div>
      </form>
    </>
  );
}
