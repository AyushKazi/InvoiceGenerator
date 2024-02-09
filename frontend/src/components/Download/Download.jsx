import React from "react";

const Download = () => {
  return (
    <>
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-24 py-2 bg-green-600 rounded-sm text-white "
        >
          Download
        </button>
      </div>

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
