import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/ITTI.png";

import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jspdf from "jspdf";

const generateInvoice = () => {
  html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
    const imgData = canvas.toDataURL("image/png", 1.0);
    //pdf document

    const pdf = new jspdf({
      orientation: "portrait",
      unit: "pt",
    });

    const scaleFactor = window.innerWidth / pdf.internal.pageSize.getWidth();

    pdf.internal.scaleFactor = scaleFactor;

    const imageProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("invoice-001.pdf");
  });
};

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

  // localStorage.setItem("name", JSON.stringify(fromName));

  // const retrievedValue = JSON.parse(localStorage.getItem("name"));

  // console.log(retrievedValue);

  return (
    // <div className="bg-gray-200 border border-blue-400">
    //   <div className="mx-4 sm:mx-10 lg:mx-28 my-20 gap-10  flex flex-col lg:flex-row md:mx-20 400 border border-red-500">
    //     <div
    //       id="invoiceCapture"
    //       className="main 1  bg-white w-full shadow-md rounded-sm "
    //     >
    //       <div className="top   mx-9 my-7 ">
    //         {/* top shelf */}
    //         <div className="logo flex flex-col-reverse sm:flex-row justify-between items-center">
    //           <img src={logo} alt="" className="900" />
    //           <div className="invoice">
    //             <h2 className="text-2xl md:text-4xl lg:text-6xl font-medium mr-8 ">
    //               INVOICE
    //             </h2>
    //             <p className="text-2xl text-right pr-8 mt-2"># 1</p>
    //           </div>
    //         </div>
    //         {/* end of top shelf */}

    //         {/* bill details */}
    //         <div className="details grid grid-cols-3 my-8  ">
    //           <div className="1 pl-10">
    //             <h2 className="text-2xl font-medium my-2">Bill from</h2>
    //             <p className="font-medium text-lg">{fromName}</p>
    //             <p className="font-medium text-lg">{fromNumber}</p>
    //             <p className="font-medium text-lg">{fromAddress}</p>
    //           </div>
    //           <div className="1 grid justify-center"></div>
    //           <div className="1 grid justify-end pr-10">
    //             <h2 className="text-2xl font-medium text-right my-2">
    //               Bill to
    //             </h2>
    //             <p className="font-medium text-lg text-right">{toName}</p>
    //             <p className="font-medium text-lg text-right">{toNumber}</p>
    //             <p className="font-medium text-lg text-right">{toAddress}</p>
    //           </div>
    //         </div>
    //         {/* end of bill details */}

    //         {/* date details */}
    //         <div className="dates w-3/4  ">
    //           <div className="date my-2 grid grid-cols-2">
    //             {/* date issued */}
    //             <input
    //               type="text"
    //               placeholder="Date"
    //               className=" w-full px-4 py-2 rounded-sm  placeholder:text-base placeholder:text-right focus:shadow-md focus:outline-slate-200 "
    //             />
    //             <input
    //               type="date"
    //               placeholder="Enter name"
    //               name="date"
    //               value={date}
    //               disabled
    //               className="border border-slate-400 w-full px-4 py-1 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
    //             />
    //           </div>

    //           {/* payment terms */}
    //           <div className="date my-2 grid grid-cols-2">
    //             <input
    //               type="text"
    //               placeholder="Payment terms"
    //               className=" w-full px-4 py-2 rounded-sm  placeholder:text-base placeholder:text-right focus:shadow-md focus:outline-slate-200 "
    //             />
    //             <input
    //               type="text"
    //               placeholder="Enter payment terms"
    //               name="paymentTerms"
    //               value={paymentTerms}
    //               disabled
    //               className="border border-slate-400 w-full px-4 py-1 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
    //             />
    //           </div>

    //           {/* due date */}
    //           <div className="date my-2 grid grid-cols-2">
    //             <input
    //               type="text"
    //               placeholder="Due Date"
    //               className=" w-full px-4 py-2 rounded-sm  placeholder:text-base placeholder:text-right focus:shadow-md focus:outline-slate-200 "
    //             />
    //             <input
    //               type="date"
    //               placeholder="Enter due date"
    //               name="dueDate"
    //               value={dueDate}
    //               disabled
    //               className="border border-slate-400 w-full px-4 py-1 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
    //             />
    //           </div>

    //           {/* PO Number */}
    //           <div className="date my-2 grid grid-cols-2">
    //             <input
    //               type="text"
    //               placeholder="PO Number"
    //               className=" w-full px-4 py-2 rounded-sm  placeholder:text-base placeholder:text-right focus:shadow-md focus:outline-slate-200 "
    //             />
    //             <input
    //               type="number"
    //               placeholder="Enter Order number"
    //               name="poNum"
    //               value={poNum}
    //               disabled
    //               className="border border-slate-400 w-full px-4 py-1 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
    //             />
    //           </div>
    //         </div>
    //         {/* end of dates */}

    //         {/* start of products / services table */}
    //         <div className="title bg-slate-600  flex  ">
    //           <input
    //             type="text"
    //             placeholder="Description"
    //             className="border px-2 py-2 text-sm w-full bg-slate-600 placeholder:text-white placeholder:font-medium focus:outline-slate-400"
    //           />
    //           <input
    //             type="text"
    //             placeholder="Item"
    //             className="border px-2 py-2 text-sm w-2/6 bg-slate-600 placeholder:text-white placeholder:font-medium focus:outline-slate-400"
    //           />
    //           <input
    //             type="text"
    //             placeholder="Rate"
    //             className="border px-2 py-2 text-sm w-2/4 bg-slate-600 placeholder:text-white placeholder:font-medium focus:outline-slate-400"
    //           />
    //           <input
    //             type="text"
    //             placeholder="Amount"
    //             className="border px-2 py-2 text-sm w-2/4 bg-slate-600 placeholder:text-white placeholder:font-medium focus:outline-slate-400"
    //           />
    //         </div>

    //         {/* dynamic list of services */}
    //         <div className="services">
    //           {products.map((product, index) => {
    //             return (
    //               <div className="items flex" key={index}>
    //                 <textarea
    //                   type="text"
    //                   name="description"
    //                   value={product.description}
    //                   placeholder="Description of the service or product"
    //                   onChange={(e) => {
    //                     handleChange(e, index);
    //                   }}
    //                   disabled
    //                   className="border px-2 py-2 text-sm w-full  placeholder:font-thin  focus:outline-slate-400"
    //                 />
    //                 <input
    //                   type="number"
    //                   name="numberOfItems"
    //                   value={product.numberOfItems}
    //                   onChange={(e) => handleChange(e, index)}
    //                   placeholder="Number of items"
    //                   disabled
    //                   className="border px-2 py-2 text-sm w-2/6  placeholder:font-thin  focus:outline-slate-400"
    //                 />
    //                 <input
    //                   type="number"
    //                   name="rate"
    //                   value={product.rate}
    //                   onChange={(e) => {
    //                     handleChange(e, index);
    //                   }}
    //                   placeholder="Rate"
    //                   disabled
    //                   className="border px-2 py-2 text-sm w-2/4  placeholder:font-thin  focus:outline-slate-400"
    //                 />
    //                 <input
    //                   type="number"
    //                   placeholder="Amount"
    //                   value={product.amount}
    //                   name="amount"
    //                   onChange={(e) => handleChange(e, index)}
    //                   disabled
    //                   className="border px-2 py-2 text-sm w-2/4  placeholder:font-thin  focus:outline-slate-400"
    //                 />
    //               </div>
    //             );
    //           })}
    //         </div>

    //         <div className="calculations">
    //           <div className="date my-2 grid grid-cols-2 ">
    //             <input
    //               type="text"
    //               placeholder="Sub Total"
    //               className=" w-full  px-4 py-2 rounded-sm  placeholder:text-sm placeholder:text-right focus:shadow-md focus:outline-slate-200 "
    //             />
    //             <input
    //               type="text"
    //               value={`${subTotal === 0 ? "" : subTotal}`}
    //               placeholder="Sub Total"
    //               className="border border-slate-400 w-full px-4 py-1 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
    //               disabled
    //             />
    //           </div>

    //           {/* tax */}
    //           <div className="date my-2 grid grid-cols-2">
    //             <input
    //               type="text"
    //               placeholder="Tax (%)"
    //               className=" w-full px-4 py-2 rounded-sm  placeholder:text-sm placeholder:text-right focus:shadow-md focus:outline-slate-200 "
    //             />
    //             <input
    //               type="text"
    //               placeholder="Tax"
    //               value={tax}
    //               name="tax"
    //               className="border border-slate-400 w-full px-4 py-1 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
    //             />
    //           </div>

    //           {/* discount */}
    //           <div className="date my-2 grid grid-cols-2">
    //             <input
    //               type="text"
    //               placeholder="Discount (%)"
    //               className=" w-full px-4 py-2 rounded-sm  placeholder:text-sm placeholder:text-right focus:shadow-md focus:outline-slate-200 "
    //             />
    //             <input
    //               type="number"
    //               value={discount}
    //               name="discount"
    //               placeholder="Discount"
    //               className="border border-slate-400 w-full px-4 py-1 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
    //             />
    //           </div>

    //           {/* total */}
    //           <div className="date my-2 grid grid-cols-2">
    //             <input
    //               type="text"
    //               placeholder="Total"
    //               className=" w-full px-4 py-2 rounded-sm  placeholder:text-sm placeholder:text-right focus:shadow-md focus:outline-slate-200 "
    //             />
    //             <input
    //               type="number"
    //               placeholder="Total amount"
    //               name="total"
    //               value={total}
    //               disabled
    //               className="border border-slate-400 w-full px-4 py-1 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
    //             />
    //           </div>
    //         </div>

    //         <div className="notes">
    //           <h2 className="font-medium text-2xl mt-4 mb-2">Notes</h2>
    //           <p>{notes}</p>
    //           <h2 className="font-medium text-2xl mt-4 mb-2">Terms</h2>
    //           <p>{terms}</p>
    //         </div>
    //       </div>

    //       <div className="table"></div>
    //     </div>
    //   </div>
    //   <div className="border border-red-400 ml-28">
    //     <Link
    //       to="/"
    //       className="bg-black border text-white px-4 py-2 rounded-md hover:bg-transparent hover:border-black hover:text-black transition-all duration-200"
    //     >
    //       Edit form
    //     </Link>
    //     <button
    //       type="submit"
    //       className=" py-2 px-4 border mb-4 bg-black rounded-md text-white hover:bg-transparent hover:text-teal-900 hover:border-teal-900 transition-all duration-300"
    //       onClick={generateInvoice}
    //     >
    //       Print
    //     </button>
    //   </div>
    // </div>
    <div className="outer bg-gray-200 border ">
      <div
        id="invoiceCapture"
        className="inner bg-white mx-40 my-20 py-10 px-12 border border-slate-300 drop-shadow-xl"
      >
        {/* title */}
        <div className="title flex justify-between">
          <div className="image  h-52 w-52 border border-red-700 rounded-xl overflow-hidden">
            <img src={logo} alt="" className="" />
          </div>
          <div className="invoiceNum pr-4">
            <h2 className="text-5xl font-medium my-4">INVOICE</h2>
            <p className="text-right text-xl mb-4">#1</p>

            <p className="text-right text-base">
              Due Balance : <strong className="text-xl">$90</strong>
            </p>
          </div>
        </div>
        {/* end of image and invoice num */}

        {/* bill details */}
        <div className="billDetails my-10 pr-4">
          {/* from */}
          <div className="from and dates flex justify-between">
            <div className="">
              <h2 className="text-4xl text-red-800">{fromName}</h2>
              <p className="font-medium my-3">{fromAddress}</p>
              <p className="font-medium my-3">{fromNumber}</p>
            </div>
            <div>
              <p className="font-light mx-2  my-3">Issued Date : {date}</p>
              <p className="font-light mx-2  my-3">PO Number : {poNum}</p>
              <p className="font-light mx-2  my-3">
                Payement terms : {paymentTerms}
              </p>
            </div>
          </div>

          {/* to */}
          <div className="to my-10">
            <p className=" text-lg font-medium">Bill to</p>
            <h2 className="text-3xl my-2">{toName}</h2>
            <p className="font-medium my-3">{toAddress}</p>
            <p className="font-medium my-3">{toNumber}</p>
          </div>
        </div>

        {/* end of bill details */}

        {/* table */}
        <div className="table text-gray-500 w-full">
          <table className="w-full">
            <thead className="text-base  text-gray-700 uppercase bg-gray-200">
              <tr>
                <th className=" py-2">Description</th>
                <th className="">Items</th>
                <th className="">Rate</th>
                <th className="">Amount</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr className="border border-b-2">
                  <td className="text-sm text-center py-2">
                    {product.description}
                  </td>
                  <td className="text-sm text-center">
                    {product.numberOfItems}
                  </td>
                  <td className="text-sm text-center">{product.rate}</td>
                  <td className="text-sm text-center">{product.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* end of table */}

        {/* calculations */}
        <div className="subtotal my-6 grid grid-cols-3">
          <div></div>
          <div> </div>
          <div className=" grid grid-cols-2">
            {/* subtotal */}
            <div className="border-b-2">
              <h3 className="text-sm uppercase py-2 px-6">Sub Total</h3>
            </div>
            <div className=" text-center py-2 border-b-2">{subTotal}</div>

            {/* tax */}
            <div className="border-b-2">
              <h3 className="text-sm uppercase  py-2 px-6">Tax</h3>
            </div>
            <div className=" text-center py-2 border-b-2">{tax}</div>

            {/* discount */}
            <div className="border-b-2">
              <h3 className="text-sm uppercase  py-2 px-6">Discount</h3>
            </div>
            <div className=" text-center py-2 border-b-2">{discount}</div>

            {/* Total */}
            <div className="border-b-2 bg-gray-200">
              <h3 className="text-lg uppercase  py-2 px-6 font-bold">Total</h3>
            </div>
            <div className=" text-center text-xl py-2 border-b-2 bg-gray-200">
              <strong>{total}</strong>
            </div>
          </div>
        </div>
        {/* end of calculations */}

        {/* notes and terms */}

        <div className="notes">
          <h2 className="font-medium text-2xl mt-4 mb-2">Notes</h2>
          <p>{notes}</p>
          <h2 className="font-medium text-2xl mt-4 mb-2">Terms</h2>
          <p>{terms}</p>
        </div>

        {/* end of notes */}
      </div>

      {/* buttons */}
      <div className=" mx-auto">
        {/* edit form button */}
        <Link
          to="/"
          className="bg-black border text-white px-4 py-2 rounded-md hover:bg-transparent hover:border-black hover:text-black transition-all duration-200"
        >
          Edit form
        </Link>
        <button
          type="submit"
          className=" py-2 px-4 border mb-4 bg-black rounded-md text-white hover:bg-transparent hover:text-teal-900 hover:border-teal-900 transition-all duration-300"
          onClick={generateInvoice}
        >
          Print
        </button>
      </div>
    </div>
  );
};

export { generateInvoice };

export default Pdf;
