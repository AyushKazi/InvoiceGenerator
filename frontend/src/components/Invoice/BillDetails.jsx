import React, { useState } from "react";

const BillDetails = () => {
  const [billDetails, setBillDetails] = useState({
    fromName: "",
    fromAddress: "",
    fromNumber: "",
    toName: "",
    toAddress: "",
    toNumber: "",
  });
  const { fromName, fromAddress, fromNumber, toName, toAddress, toNumber } =
    billDetails;

  const handleChnage = (e) => {
    console.log(e.target.value);
    setBillDetails({ ...billDetails, [e.target.name]: [e.target.value] });
  };

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
        onChange={handleChnage}
        placeholder="Enter name"
        className="border border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
      />
      <input
        type="text"
        name="fromAddress"
        value={fromAddress}
        onChange={handleChnage}
        placeholder="Enter Address"
        className="border border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
      />
      <input
        type="text"
        name="fromNumber"
        value={fromNumber}
        onChange={handleChnage}
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
        onChange={handleChnage}
        className="border border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
      />
      <input
        type="text"
        placeholder="Enter Address"
        name="toAddress"
        value={toAddress}
        onChange={handleChnage}
        className="border border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
      />
      <input
        type="text"
        placeholder="Enter Number"
        name="toNumber"
        value={toNumber}
        onChange={handleChnage}
        className="border border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
      />
    </div>
  );
};

export default BillDetails;
