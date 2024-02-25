import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/ITTI.png";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useSelector } from "react-redux";

const Pdf = ({ func }) => {
  const {
    fromName,
    fromAddress,
    fromNumber,
    toName,
    toAddress,
    toNumber,
    notes,
    terms,
    subTotal,
    discount,
    tax,
    date,
    paymentTerms,
    poNum,
    dueDate,
    total,
    products,
  } = useSelector((state) => state.invoice);
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
          <div className="top   mx-9 my-7 ">
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
            <div className="details grid grid-cols-3 my-8  ">
              <div className="1 pl-10">
                <h2 className="text-2xl font-medium my-2">Bill from</h2>
                <p className="font-medium text-lg">{fromName}</p>
                <p className="font-medium text-lg">{fromNumber}</p>
                <p className="font-medium text-lg">{fromAddress}</p>
              </div>
              <div className="1 grid justify-center"></div>
              <div className="1 grid justify-end pr-10">
                <h2 className="text-2xl font-medium text-right my-2">
                  Bill to
                </h2>
                <p className="font-medium text-lg text-right">{toName}</p>
                <p className="font-medium text-lg text-right">{toNumber}</p>
                <p className="font-medium text-lg text-right">{toAddress}</p>
              </div>
            </div>

            {/* end of bill details */}
            {/* date details */}
            <div className="dates w-3/4  ">
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
                  disabled
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
                  disabled
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
                  disabled
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
                  disabled
                  className="border border-slate-400 w-full px-4 py-1 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
                />
              </div>
            </div>
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
            </div>
            <div className="services">
              {products.map((product, index) => {
                return (
                  <div className="items flex" key={index}>
                    <textarea
                      type="text"
                      name="description"
                      value={product.description}
                      onChange={(e) => {
                        handleChange(e, index);
                      }}
                      disabled
                      className="border px-2 py-2 text-sm w-full  placeholder:font-thin  focus:outline-slate-400"
                    />
                    <input
                      type="number"
                      name="numberOfItems"
                      value={product.numberOfItems}
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Number of items"
                      disabled
                      className="border px-2 py-2 text-sm w-2/6  placeholder:font-thin  focus:outline-slate-400"
                    />
                    <input
                      type="number"
                      name="rate"
                      value={product.rate}
                      onChange={(e) => {
                        handleChange(e, index);
                      }}
                      placeholder="Rate"
                      disabled
                      className="border px-2 py-2 text-sm w-2/4  placeholder:font-thin  focus:outline-slate-400"
                    />
                    <input
                      type="number"
                      placeholder="Amount"
                      value={product.amount}
                      name="amount"
                      onChange={(e) => handleChange(e, index)}
                      disabled
                      className="border px-2 py-2 text-sm w-2/4  placeholder:font-thin  focus:outline-slate-400"
                    />
                  </div>
                );
              })}
            </div>

            <div className="calculations">
              <div className="date my-2 grid grid-cols-2 ">
                <input
                  type="text"
                  placeholder="Sub Total"
                  className=" w-full  px-4 py-2 rounded-sm  placeholder:text-sm placeholder:text-right focus:shadow-md focus:outline-slate-200 "
                />
                <input
                  type="text"
                  value={`${subTotal === 0 ? "" : subTotal}`}
                  placeholder="Sub Total"
                  className="border border-slate-400 w-full px-4 py-1 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
                  disabled
                />
              </div>

              {/* tax */}
              <div className="date my-2 grid grid-cols-2">
                <input
                  type="text"
                  placeholder="Tax (%)"
                  className=" w-full px-4 py-2 rounded-sm  placeholder:text-sm placeholder:text-right focus:shadow-md focus:outline-slate-200 "
                />
                <input
                  type="text"
                  placeholder="Tax"
                  value={tax}
                  name="tax"
                  className="border border-slate-400 w-full px-4 py-1 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
                />
              </div>

              {/* discount */}
              <div className="date my-2 grid grid-cols-2">
                <input
                  type="text"
                  placeholder="Discount (%)"
                  className=" w-full px-4 py-2 rounded-sm  placeholder:text-sm placeholder:text-right focus:shadow-md focus:outline-slate-200 "
                />
                <input
                  type="number"
                  value={discount}
                  name="discount"
                  placeholder="Discount"
                  className="border border-slate-400 w-full px-4 py-1 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
                />
              </div>

              {/* total */}
              <div className="date my-2 grid grid-cols-2">
                <input
                  type="text"
                  placeholder="Total"
                  className=" w-full px-4 py-2 rounded-sm  placeholder:text-sm placeholder:text-right focus:shadow-md focus:outline-slate-200 "
                />
                <input
                  type="number"
                  placeholder="Total amount"
                  name="total"
                  value={total}
                  disabled
                  className="border border-slate-400 w-full px-4 py-1 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
                />
              </div>
            </div>

            <div className="notes">
              <h2 className="font-medium text-2xl mt-4 mb-2">Notes</h2>
              <p>{notes}</p>
              <h2 className="font-medium text-2xl mt-4 mb-2">Terms</h2>
              <p>{terms}</p>
            </div>
          </div>

          <div className="table"></div>
        </div>
      </div>
      <div className="border border-red-400 ml-28">
        <Link
          to="/"
          className="bg-black border text-white px-4 py-2 rounded-md hover:bg-transparent hover:border-black hover:text-black transition-all duration-200"
        >
          Edit form
        </Link>
        <button
          type="submit"
          className=" py-2 px-4 border mb-4 bg-black rounded-md text-white hover:bg-transparent hover:text-teal-900 hover:border-teal-900 transition-all duration-300"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default Pdf;
