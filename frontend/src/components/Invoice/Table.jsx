import React, { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useInvoice } from "../../hooks/use-invoice";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  updateProducts,
} from "../../../slices/invoiceSlice";

const Table = () => {
  // const { handleDelete } = useInvoice();

  const { discount, total, tax, amount, products, notes, terms, subTotal } =
    useSelector((state) => state.invoice);
  // console.log(products.map((i) => i.description));
  const dispatch = useDispatch();

  //handler to update the producs/ service line
  const handleChange = (e, i) => {
    dispatch(
      updateProducts({ name: e.target.name, value: e.target.value, index: i })
    );
  };

  //handle to add the new item line
  const handleNewItem = () => {
    dispatch(addItem());
  };

  //handler to remove an item  from the array
  const handleDelete = (index) => {
    dispatch(removeItem(index));
  };
  return (
    <>
      <div className="table w-full rounded-md overflow-hidden  ">
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
                placeholder="Description of the service or product"
                className="border px-2 py-2 text-sm w-full  placeholder:font-thin  focus:outline-slate-400"
              />
              <input
                type="number"
                name="numberOfItems"
                value={product.numberOfItems}
                onChange={(e) => handleChange(e, index)}
                placeholder="Number of items"
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
              <button
                className="px-2 text-red-700 font-light hover:text-lg  rounded-full hover:bg-transparent hover:text-red-600 hover:rotate-45 transition-all duration-200"
                onClick={() => handleDelete(index)}
              >
                <RiDeleteBin5Line />
              </button>
            </div>
          );
        })}
        <div className="button my-2">
          <button
            onClick={handleNewItem}
            className="px-4 py-1 font-light text-sm bg-slate-600 rounded-md text-white hover:bg-transparent hover:text-slate-600 border hover:border-slate-600 transition-all duration-200"
          >
            Add data
          </button>
        </div>

        {/* Notes section */}
        <div className=" grid grid-cols-1 md:grid-cols-2 my-2">
          <div className="1 order-last md:order-first">
            <input
              type="text"
              placeholder="Notes"
              className=" w-full mb-2 px-4 py-2 rounded-sm placeholder:font-medium placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
            />
            <textarea
              type="text"
              placeholder="Notes - any relevant information regarding to the invoice"
              name="notes"
              value={notes}
              onChange={handleChange}
              className="border  border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
            />
            <input
              type="text"
              placeholder="Terms"
              className="  w-full mb-2 px-4 py-2 placeholder:font-medium rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
            />
            <textarea
              type="text"
              placeholder="Terms and conditions - late fees, payment methods"
              name="terms"
              value={terms}
              onChange={handleChange}
              className="border overflow-x-scroll border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
            />
          </div>

          {/* Amount calculations */}
          <div className="2  py-5">
            {/* sub total */}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
                value={total}
                disabled
                className="border border-slate-400 w-full px-4 py-1 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
