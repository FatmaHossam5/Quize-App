import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AlertMessage from "../../Shared/AlertMessage/AlertMessage";
import AuthButton from "../../Shared/AuthButton/AuthButton";
export default function Rigester() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data: object) {
    console.log(data);
  }

  return (
    <>
      <h3 className="text-2xl  text-secondry">
        Create your account and start using QuizWiz!
      </h3>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 mt-3">
        <Link to="/" className="signin ">
          <div className="content text-8xl py-3 bg-stone-700 rounded-lg my-1 text-center border-4 border-stone-700">
            <i className="fa-solid fa-user "></i>
            <p className="text-base mt-2">Sign in</p>
          </div>
        </Link>
        <Link to="/rigester" className="signup ">
          <div className="content text-8xl py-3 bg-stone-700 my-1 rounded-lg text-center border-4 border-secondry">
            <i className="fa-solid fa-user-plus text-secondry "></i>
            <p className="text-base mt-2">Sign Up</p>
          </div>
        </Link>
        <div className="signup w-1/2"></div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
          <div className="firstName">
            <label htmlFor="firstName" className="w-full ps-1 mb-1 ">
              Your first name
            </label>

            <div
              className={`flex rounded-md border-3 ${
                !errors.firstName ? "border-white" : "border-red-500"
              }`}
            >
              <div className="flex select-none items-center me-3 pl-3 text-white ">
                <div className="">
                  <i className="fa-solid fa-address-card"></i>
                </div>
              </div>

              <input
                {...register("firstName", {
                  required: "First Name is required",
                  minLength: {
                    value: 2,
                    message: "First name should be greater than two letters",
                  },
                  maxLength: {
                    value: 8,
                    message: "First name should be less than eight letters",
                  },
                })}
                type="text"
                id="firstName"
                className="block px-2  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Type your first name"
              />
              {errors.firstName && (
                <AlertMessage message={String(errors.firstName.message)} />
              )}
            </div>
          </div>

          <div className="lastName">
            <label htmlFor="lastName" className="w-full ps-1 mb-1 ">
              Your last name
            </label>
            <div
              className={`flex rounded-md border-3 ${
                !errors.lastName ? "border-white" : "border-red-500"
              }`}
            >
              <span className="flex select-none items-center me-3 pl-3 text-white ">
                <i className="fa-solid fa-address-card"></i>
              </span>
              <input
                {...register("lastName", {
                  required: "Last Name is required",
                  minLength: {
                    value: 2,
                    message: "Last Name should be greater than two letters",
                  },
                  maxLength: {
                    value: 8,
                    message: "Last Name should be less than eight letters",
                  },
                })}
                type="text"
                id="lastName"
                className="block px-2  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Type your last name"
              />
              {errors.lastName && (
                <AlertMessage message={String(errors.lastName.message)} />
              )}
            </div>
          </div>
        </div>

        <div className="email mt-2">
          <label htmlFor="email" className="w-full ps-1 mb-1">
            Your email address
          </label>
          <div
            className={`flex rounded-md border-3 ${
              !errors.email ? "border-white" : "border-red-500"
            }`}
          >
            <span className="flex select-none items-center me-3 pl-3 text-white ">
              <i className="fa-solid fa-envelope"></i>
            </span>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9.]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              type="text"
              id="email"
              className="block px-2  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Type your email"
            />
            {errors.email && (
              <AlertMessage message={String(errors.email.message)} />
            )}
          </div>
        </div>

        <div className="role mt-2">
          <label htmlFor="role" className="w-full ps-1 mb-1">
            Your role address
          </label>
          <div
            className={`flex rounded-md border-3 ${
              !errors.email ? "border-white" : "border-red-500"
            }`}
          >
            <span className="flex select-none items-center me-3 pl-3">
              <i className="fa-solid fa-user"></i>
            </span>
            <select
              {...register("role", { required: "Role is required" })}
              id="role"
              className="mt-1  border-none p-2 w-full focus:outline-none bg-auth "
            >
              <option value="1">Instructor</option>
              <option value="2">Learner</option>
            </select>
            {errors.role && (
              <AlertMessage message={String(errors.role.message)} />
            )}
          </div>
        </div>

        <div className="password mt-2">
          <label htmlFor="password" className="w-full ps-1 mb-1">
            Password
          </label>
          <div
            className={`flex rounded-md border-3 ${
              !errors.password ? "border-white" : "border-red-500"
            }`}
          >
            <span className="flex select-none items-center me-3 pl-3 text-white ">
              <i className="fa-solid fa-key"></i>
            </span>
            <input
              {...register("password", {
                required: "field is required",
                minLength: {
                  value: 8,
                  message: "Password should be at least 8 characters",
                },
              })}
              type="password"
              id="password"
              className="block px-2  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Type your password"
            />
            {errors.password && (
              <AlertMessage message={String(errors.password.message)} />
            )}
          </div>
        </div>

        <AuthButton text={String("Sign Up")} />
      </form>
    </>
  );
}
