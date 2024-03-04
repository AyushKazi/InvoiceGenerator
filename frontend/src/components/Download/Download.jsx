import React from "react";
import { Link } from "react-router-dom";
import { generateInvoice } from "../Pdf/Pdf";

const Download = ({ func }) => {
  return (
    <>
      <div className="grid grid-cols-3  lg:grid-cols-1 justify-center gap-10 lg:gap-0   ">
        <Link
          to="/pdf"
          type="submit"
          onClick={func}
          className="sm:px-16 py-2 border  mb-4 bg-slate-700 opacity-85 rounded-sm text-white  hover:bg-transparent hover:text-teal-900 hover:border-teal-900 transition-all duration-300"
        >
          Preview
        </Link>
      </div>

      <div className="flex justify-center"></div>

      {/* type */}
      <div className="flex flex-col items-center my-5 gap-4">
        <label htmlFor="" className="text-sm font-semibold ">
          Currency
        </label>
        <select
          name="currency"
          id=""
          className="w-full rounded-sm  text-sm  py-2 text-center "
        >
          <option value="cur">NPR</option>
          <option value="cur">USD</option>
          <option value="cur">INR</option>
        </select>
      </div>

      <div className="flex flex-col items-center my-5 gap-4">
        <label htmlFor="" className="text-sm font-semibold ">
          Type
        </label>
        <select
          name="type"
          id=""
          className="w-full rounded-sm  text-sm  py-2 text-center "
        >
          <option value="cur">Invoice</option>
          <option value="cur">Reciept</option>
          <option value="cur">Quotes</option>
        </select>
      </div>
    </>
  );
};

export default Download;
