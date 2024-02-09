import React from "react";
import { useForm } from "react-hook-form";
import Download from "../components/Download/Download";
import Dates from "../components/Invoice/Dates";
import Logo from "../components/Invoice/Logo";

const Invoice = () => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <>
      <div className="mx-4 sm:mx-10  my-10 gap-10 flex flex-col lg:flex-row md:mx-20">
        <div className="main  bg-white lg:w-4/5 shadow-md rounded-sm">
          <div className="top   m-4 ">
            {/* top shelf */}
            <Logo />
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
                  className="border border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
                />
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="border border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
                />
                <input
                  type="text"
                  placeholder="Enter Number"
                  className="border border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
                />

                <input
                  type="text"
                  placeholder="Bill to"
                  className=" w-full px-4 py-2 rounded-sm placeholder:text-lg focus:shadow-md focus:outline-slate-200 "
                />
                <input
                  type="text"
                  placeholder="Enter name"
                  className="border border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
                />
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="border border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
                />
                <input
                  type="text"
                  placeholder="Enter Number"
                  className="border border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
                />
              </div>

              {/* to */}
              <div className="detailsline ">
                <Dates />
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
