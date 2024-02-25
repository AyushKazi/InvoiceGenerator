import React from "react";
import { useState } from "react";
import { useInvoice } from "../../hooks/use-invoice";
import { useDispatch, useSelector } from "react-redux";
import { changeFormData } from "../../../slices/invoiceSlice";

const Dates = () => {
  const { date, paymentTerms, dueDate, poNum } = useSelector(
    (state) => state.invoice
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFormData({ name: e.target.name, value: e.target.value }));
  };
  // const { date, paymentTerms, dueDate, poNum, handleChange } = useInvoice();
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
            name="date"
            value={date}
            onChange={handleChange}
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
            name="paymentTerms"
            value={paymentTerms}
            onChange={handleChange}
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
            placeholder="Enter due date"
            name="dueDate"
            value={dueDate}
            onChange={handleChange}
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
            name="poNum"
            value={poNum}
            onChange={handleChange}
            className="border border-slate-400 w-full px-4 py-1 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
          />
        </div>
      </div>
    </>
  );
};

export default Dates;
