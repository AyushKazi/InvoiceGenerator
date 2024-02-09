import React from "react";
import { useForm } from "react-hook-form";
import Download from "../components/Download/Download";

const Invoice = () => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <>
      <div className="mx-10 my-10 gap-10 flex flex-col lg:flex-row md:mx-20">
        <div className="main  bg-white lg:w-4/5 shadow-md rounded-sm">
          <div className="top   m-4 ">
            {/* top shelf */}
            <div className="flex flex-col-reverse sm:flex-row justify-between  ">
              {/* logo input field */}
              <div className="logo mx-4 mb-4 border drop-shadow-md relative">
                <input
                  type="file"
                  placeholder="Add Photo"
                  className="size-36  border opacity-0 cursor-pointer "
                />
                <p className="absolute top-16 left-12 text-slate-400 sm:text-xl sm:left-9  md:left-8 lg:left-7 ">
                  Add Photo
                </p>
              </div>

              {/* Invoice num field */}
              <div className="mb-4  ">
                <h1 className="text-3xl  px-6 py-4 font-medium sm:text-4xl md:text-5xl md:px-8 md:py-8">
                  INVOICE
                </h1>
                <input
                  type="number"
                  placeholder="Bill no."
                  className="border border-slate-400 w-3/4 mx-6 md:mx-8 px-4 py-1 md:py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400"
                  {...register("billNum", { required: true })}
                />
              </div>
            </div>
            {/* end of top shelf */}

            <div className="details mx-4 my-4 grid grid-cols-1 md:grid-cols-2 md:gap-6   ">
              <div className="detailsline   ">
                <input
                  type="text"
                  placeholder="Bill from"
                  className=" w-full px-4 py-2 rounded-sm placeholder:text-lg focus:shadow-md focus:outline-slate-200 "
                />
                <input
                  type="text"
                  placeholder="Enter name"
                  className="border border-slate-400 w-full px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
                />
              </div>

              {/* to */}
              <div className="detailsline ">
                <input
                  type="text"
                  placeholder="Bill to"
                  className=" w-full px-4 py-2 rounded-sm placeholder:text-lg focus:shadow-md focus:outline-slate-200 "
                />
                <input
                  type="text"
                  placeholder="Enter name"
                  className="border border-slate-400 w-full px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Download />
        </div>
      </div>
    </>
  );
};

export default Invoice;
