import React from "react";
import Download from "../components/Download/Download";

const Invoice = () => {
  return (
    <>
      <div className="mx-10 my-10 gap-10 flex flex-col lg:flex-row md:mx-20">
        <div className="main  bg-white lg:w-4/5">
          <div className="top  border border-red-500 m-4 ">
            <div className="flex justify-between">
              <input
                type="file"
                placeholder="Add Photo"
                className="size-36 border border-red-300 mx-4"
              />
              <h1 className="text-3xl px-4 py-4 font-medium md:text-5xl md:px-8 md:py-8">
                INVOICE
              </h1>
            </div>

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
