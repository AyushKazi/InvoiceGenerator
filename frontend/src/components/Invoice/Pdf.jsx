import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/ITTI.png";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useSelector } from "react-redux";

const Pdf = ({ func }) => {
  const invoiceData = useSelector((state) => state.invoice.fromName);
  console.log(invoiceData);

  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="bg-gray-200 border border-blue-400">
      <div className="mx-4 sm:mx-10 lg:mx-28 my-20 gap-10  flex flex-col lg:flex-row md:mx-20 400 border border-red-500">
        <div
          id="invoiceCapture"
          className="main 1  bg-white w-full shadow-md rounded-sm "
        >
          <div className="top   mx-9 my-7 border border-slate-700 ">
            {/* top shelf */}
            <div className="logo flex 900 justify-between items-center">
              <img src={logo} alt="" className="900" />
              <div className="invoice">
                <h2 className="text-6xl font-medium mr-8 ">INVOICE</h2>
                <p className="text-2xl text-right pr-8 mt-2"># 1</p>
              </div>
            </div>
            {/* end of top shelf */}

            {/* bill details */}
            <div className="details grid grid-cols-3 my-8  900">
              <div className="1 ">
                <h2 className="text-2xl font-medium">Bill from</h2>
                <p>Ayush</p>
                <p>0965567899</p>
                <p>Pokhara, Nepal</p>
              </div>
              <div className="1 grid justify-center">
                <h2 className="text-2xl font-medium">Bill to</h2>
                <p>Ayush</p>
                <p>0965567899</p>
                <p>Pokhara, Nepal</p>
              </div>
              <div className="1 grid justify-center">
                <h2>Bill from</h2>
                <p>Ayush</p>
                <p>0965567899</p>
                <p>Pokhara, Nepal</p>
              </div>
            </div>
            {/* end of bill details */}
            <div className="title bg-slate-600  flex  ">
              <input
                type="text"
                placeholder="Description"
                className="border px-2 py-2 text-sm w-full bg-slate-600 placeholder:text-white placeholder:font-medium focus:outline-slate-400"
              />
              <input
                type="text"
                placeholder="Item"
                className="border px-2 py-2 text-sm w-2/6 bg-slate-600 placeholder:text-white placeholder:font-medium focus:outline-slate-400"
              />
              <input
                type="text"
                placeholder="Rate"
                className="border px-2 py-2 text-sm w-2/4 bg-slate-600 placeholder:text-white placeholder:font-medium focus:outline-slate-400"
              />
              <input
                type="text"
                placeholder="Amount"
                className="border px-2 py-2 text-sm w-2/4 bg-slate-600 placeholder:text-white placeholder:font-medium focus:outline-slate-400"
              />
              <button className="px-2 bg-white text-white cursor-default">
                <RiDeleteBin5Line />
              </button>
            </div>
          </div>

          <div className="table"></div>
        </div>
      </div>
      <div className="border border-red-400">
        This is a Inovice
        <Link
          to="/"
          className="bg-black border text-white px-4 py-2 rounded-sm hover:bg-transparent hover:border-black hover:text-black transition-all duration-200"
        >
          edit form
        </Link>
        <button
          type="submit"
          className=" py-2 border mb-4 bg-slate-700 opacity-85 rounded-sm text-white hover:bg-transparent hover:text-teal-900 hover:border-teal-900 transition-all duration-300"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default Pdf;
