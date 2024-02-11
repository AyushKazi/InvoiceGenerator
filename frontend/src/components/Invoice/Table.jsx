import React from "react";

const Table = () => {
  return (
    <>
      <table className="table-auto w-full  text-center rounded-lg shadow-lg overflow-hidden ">
        <thead className="bg-slate-700 opacity-90 text-white border  ">
          <tr className=" border">
            <td className="py-3">Description</td>
            <td>Item</td>
            <td>Rate</td>
            <td>Amount</td>
          </tr>
        </thead>

        <tbody>
          <tr className="border">
            <td className="py-2">Apple M1</td>
            <td>1</td>
            <td>200000</td>
            <td>200000</td>
          </tr>

          <tr className="border">
            <td className="py-2">Apple M1</td>
            <td>1</td>
            <td>200000</td>
            <td>200000</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
