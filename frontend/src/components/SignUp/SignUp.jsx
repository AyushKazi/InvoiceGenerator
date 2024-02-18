import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    reset,
    watch,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <>
      <div className="flex border  justify-center items-center my-10 h-[-100px] ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border bg-white  px-6 py-4 rounded-lg shadow-2xl w-3/4 sm:max-w-screen-sm space-y-5 md:max-w-prose  lg:max-w-prose   "
        >
          <h1 className="text-4xl text-center  my-4 mb-8 font-semibold">
            Sign Up
          </h1>

          {/* input fields */}

          <div className=" space-y-6">
            {/* contact */}
            <div className="flex flex-col space-y-3">
              <input
                type="text"
                name="username"
                className="username border border-slate-400 block rounded-sm w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
                placeholder="Username"
                {...register("username", { required: true })}
              />
              {errors.username?.type === "required" && (
                <p className="text-red-500 text-sm ">Username is required.</p>
              )}
            </div>
            {/* email */}
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                name="email"
                className="email border border-slate-400 block rounded-sm w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500 text-sm ">Email is required.</p>
              )}
            </div>

            {/* password */}
            <div className="flex flex-col space-y-3">
              <input
                type="password"
                name="password"
                className=" border border-slate-400 block rounded-sm w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
                placeholder="Password"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm ">Password is required.</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm ">
                  Password must be at least 6 characters.
                </p>
              )}
            </div>

            {/*confirm password  */}
            <div className="flex flex-col space-y-3">
              <input
                type="password"
                name="c_password"
                className=" border border-slate-400 block rounded-sm w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
                placeholder="Confirm Password"
                {...register("c_password", {
                  required: true,
                })}
              />
              {errors.c_password?.type === "required" && (
                <p className="text-red-500 text-sm ">Password is required.</p>
              )}

              {/* checking the password is equal to confirm password or not */}
              {watch("c_password") !== watch("password") &&
              getValues("c_password") ? (
                <p className="text-red-500 text-sm ">
                  Password does not match.
                </p>
              ) : null}
            </div>
          </div>

          {/* submit button */}
          <button
            type="submit"
            className="signup border bg-slate-700 opacity-90 text-white my-4 rounded-sm text-sm md:text-base py-2 w-full shadow-lg hover:bg-transparent hover:text-teal-900 hover:border-slate-700 transition-all duration-300"
          >
            Sign Up
          </button>
          <div className="text-xs flex justify-center">
            <p className="forgot">
              Already have a account?{" "}
              <Link
                to="/signin"
                className="signup underline underline-offset-1 hover:tracking-wider hover:text-red-400"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
