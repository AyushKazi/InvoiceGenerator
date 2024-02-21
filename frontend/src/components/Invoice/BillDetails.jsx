import React, { useState } from "react";
import { useInvoice } from "../../hooks/use-invoice";

const BillDetails = () => {
  const {
    fromName,
    fromAddress,
    fromNumber,
    toName,
    toAddress,
    toNumber,
    handleChange,
  } = useInvoice();

  return (
    <div className="detailsline   ">
      <input
        type="text"
        placeholder="Bill from"
        className=" w-full px-4 py-2 rounded-sm placeholder:font-medium placeholder:text-base focus:shadow-md focus:outline-slate-200 "
      />
      <input
        type="text"
        name="fromName"
        value={fromName}
        onChange={handleChange}
        placeholder="Enter name"
        className="border border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
      />
      <input
        type="text"
        name="fromAddress"
        value={fromAddress}
        onChange={handleChange}
        placeholder="Enter Address"
        className="border border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
      />
      <input
        type="text"
        name="fromNumber"
        value={fromNumber}
        onChange={handleChange}
        placeholder="Enter Number"
        className="border border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
      />

      <input
        type="text"
        placeholder="Bill to"
        className=" w-full px-4 py-2 rounded-sm placeholder:text-base placeholder:font-medium focus:shadow-md focus:outline-slate-200 "
      />
      <input
        type="text"
        placeholder="Enter name"
        name="toName"
        value={toName}
        onChange={handleChange}
        className="border border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
      />
      <input
        type="text"
        placeholder="Enter Address"
        name="toAddress"
        value={toAddress}
        onChange={handleChange}
        className="border border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
      />
      <input
        type="text"
        placeholder="Enter Number"
        name="toNumber"
        value={toNumber}
        onChange={handleChange}
        className="border border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
      />
    </div>
  );
};

export default BillDetails;
