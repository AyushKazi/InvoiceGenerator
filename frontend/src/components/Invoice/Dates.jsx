import React from "react";

const Dates = () => {
  return (
    <>
      <div className="dates mt-4 md:mt-10  ">
        <div className="date my-2 grid grid-cols-2">
          <input
            type="text"
            placeholder="Date"
            className=" w-full px-4 py-2 rounded-sm  placeholder:text-base placeholder:text-right focus:shadow-md focus:outline-slate-200 "
          />
          <input
            type="date"
            placeholder="Enter name"
            className="border border-slate-400 w-full px-4 py-1 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
          />
        </div>

        {/* payment */}
        <div className="date my-2 grid grid-cols-2">
          <input
            type="text"
            placeholder="Payment terms"
            className=" w-full px-4 py-2 rounded-sm  placeholder:text-base placeholder:text-right focus:shadow-md focus:outline-slate-200 "
          />
          <input
            type="text"
            placeholder="Enter payment terms"
            className="border border-slate-400 w-full px-4 py-1 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
          />
        </div>

        {/* due date */}
        <div className="date my-2 grid grid-cols-2">
          <input
            type="text"
            placeholder="Due Date"
            className=" w-full px-4 py-2 rounded-sm  placeholder:text-base placeholder:text-right focus:shadow-md focus:outline-slate-200 "
          />
          <input
            type="date"
            placeholder="Enter name"
            className="border border-slate-400 w-full px-4 py-1 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
          />
        </div>

        {/* PO Number */}
        <div className="date my-2 grid grid-cols-2">
          <input
            type="text"
            placeholder="PO Number"
            className=" w-full px-4 py-2 rounded-sm  placeholder:text-base placeholder:text-right focus:shadow-md focus:outline-slate-200 "
          />
          <input
            type="number"
            placeholder="Enter Order number"
            className="border border-slate-400 w-full px-4 py-1 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
          />
        </div>
      </div>
    </>
  );
};

export default Dates;
