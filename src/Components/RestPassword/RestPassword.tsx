import { useForm } from "react-hook-form";
import AlertMessage from "../../Shared/AlertMessage/AlertMessage";
import { useRef } from "react";

export default function RestPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  function onSubmit(data: object) {
    console.log(data);
  }

  return (
    <>
      <h3 className="text-2xl  text-secondry">Reset password</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
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

        <div className="OTP mt-2">
          <label htmlFor="OTP" className="w-full ps-1 mb-1">
            OTP
          </label>
          <div
            className={`flex rounded-md border-3 ${
              !errors.otp ? "border-white" : "border-red-500"
            }`}
          >
            <span className="flex select-none items-center me-3 pl-3 text-white ">
              <i className="fa-solid fa-envelope"></i>
            </span>
            <input
              {...register("otp", {
                required: "otp is required",
                minLength: { value: 6, message: "otp should be 6 digits" },
                maxLength: { value: 6, message: "otp should be 6 digits" },
              })}
              type="text"
              id="OTP"
              className="block px-2  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Choose your otp"
            />
            {errors.otp && (
              <AlertMessage message={String(errors.otp.message)} />
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

        <div className="Confirm-Password mt-2">
          <label htmlFor="Confirm-Password" className="w-full ps-1 mb-1">
            Confirm Password
          </label>
          <div
            className={`flex rounded-md border-3 ${
              !errors.cPassword ? "border-white" : "border-red-500"
            }`}
          >
            <span className="flex select-none items-center me-3 pl-3 text-white ">
              <i className="fa-solid fa-key"></i>
            </span>
            <input
              {...register("cPassword", {
                validate: (value) => {
                  return (
                    value !== password.current ||
                    "Confirm Password mismatch password"
                  );
                },
              })}
              type="password"
              id="Confirm-Password"
              className="block px-2  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Type your confirm password"
            />
            {errors.cPassword && (
              <AlertMessage message={String(errors.cPassword.message)} />
            )}
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
  );
}
