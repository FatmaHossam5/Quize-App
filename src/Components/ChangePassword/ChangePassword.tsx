import { useRef } from "react";
import { useForm } from "react-hook-form";
import AlertMessage from "../../Shared/AlertMessage/AlertMessage";

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const password_new = useRef({});
  password_new.current = watch("password_new", "");
  function onSubmit(data: object) {
    console.log(data);
  }

  return (
    <>
      <h3 className="text-2xl  text-secondry">Change password</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
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
              !errors.password_new ? "border-white" : "border-red-500"
            }`}
          >
            <span className="flex select-none items-center me-3 pl-3 text-white ">
              <i className="fa-solid fa-key"></i>
            </span>
            <input
              {...register("password_new", {
                required: "new password is required",
                minLength: {
                  value: 8,
                  message: "new password should be greater than 8 digits",
                },
                validate: (value) => {
                  return (
                    value !== password.current ||
                    "The new password must not resemble the old one."
                  );
                },
              })}
              type="password"
              id="Confirm-Password"
              className="block px-2  flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Type your confirm password"
            />
            {errors.password_new && (
              <AlertMessage message={String(errors.password_new.message)} />
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
                    value == password_new.current ||
                    "Confirm Password mismatch new password"
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
          Change{" "}
          <i className="fa-solid fa-check ms-1 text-white p-1 rounded-full bg-black"></i>
        </button>
      </form>
    </>
  );
}
