import React from "react";

const BillDetails = () => {
  return (
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
  );
};

export default BillDetails;
