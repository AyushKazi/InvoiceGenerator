import React, { useEffect, useState } from "react";

const Table = () => {
  const defaultProduct = {
    description: "",
    numberOfItems: "",
    rate: "",
    amount: "",
  };
  const [subTotal, setSubTotal] = useState(0);
  const [tableData, setTableData] = useState({
    total: "",
    discount: "",
    tax: "",
    products: [
      {
        description: "",
        numberOfItems: "",
        rate: "",
        amount: "",
      },
    ],
  });
  const { discount, total, tax, amount, products } = tableData;
  const handleChange = (e, index = -1) => {
    if (index > -1) {
      console.log(e.target.value);
      const { name, value } = e.target;
      const updatedProducts = [...products];
      updatedProducts[index] = { ...updatedProducts[index], [name]: value };
      setTableData({ ...tableData, products: updatedProducts });
    } else {
      setTableData({ ...tableData, [e.target.name]: e.target.value });
    }
  };

  const handleNewItem = () => {
    const newProduct = { ...defaultProduct };

    setTableData({ ...tableData, products: [...products, newProduct] });
  };

  const handleDelete = (indexToDelete) => {
    setTableData({
      ...tableData,
      products: products.filter((_, index) => index !== indexToDelete),
    });
  };

  useEffect(() => {
    setSubTotal(
      products.reduce((total, product) => {
        const amount = product.amount !== "" ? parseInt(product.amount) : 0; // Amount ma value ca vani parse garni natra default ma 0 rakhdini
        return (total += amount);
      }, 0)
    );
  }, [products]);

  useEffect(() => {
    const calculateTotal = () => {
      let currentDiscount = parseInt(discount);
      let currentAmount = subTotal;
      let currentTax = parseInt(tax);
      if (currentAmount > 0) {
        let total = currentAmount;

        currentDiscount > 0 &&
          (total -= (currentDiscount / 100) * currentAmount);
        currentTax > 0 && (total += (tax / 100) * total);

        setTableData({
          discount: discount,
          tax: tax,
          products: products,
          total: `${total}`,
        });
      }
    };
    calculateTotal();
  }, [discount, tax, subTotal]);

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
            className="border px-2 py-2 text-sm w-full bg-slate-600 placeholder:text-white placeholder:font-medium focus:outline-slate-400"
          />
          <input
            type="text"
            placeholder="Rate"
            className="border px-2 py-2 text-sm w-full bg-slate-600 placeholder:text-white placeholder:font-medium focus:outline-slate-400"
          />
          <input
            type="text"
            placeholder="Amount"
            className="border px-2 py-2 text-sm w-full bg-slate-600 placeholder:text-white placeholder:font-medium focus:outline-slate-400"
          />
        </div>
        {products.map((product, index) => {
          return (
            <div className="items flex" key={index}>
              <input
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
                type="text"
                name="numberOfItems"
                value={product.numberOfItems}
                onChange={(e) => handleChange(e, index)}
                placeholder="Number of items"
                className="border px-2 py-2 text-sm w-full  placeholder:font-thin  focus:outline-slate-400"
              />
              <input
                type="text"
                name="rate"
                value={product.rate}
                onChange={(e) => {
                  handleChange(e, index);
                }}
                placeholder="Rate"
                className="border px-2 py-2 text-sm w-full  placeholder:font-thin  focus:outline-slate-400"
              />
              <input
                type="text"
                placeholder="Amount"
                value={product.amount}
                name="amount"
                onChange={(e) => handleChange(e, index)}
                className="border px-2 py-2 text-sm w-full  placeholder:font-thin  focus:outline-slate-400"
              />
              <button
                className="px-4 py-1 font-light text-sm bg-slate-600 rounded-md text-white hover:bg-transparent hover:text-slate-600 border hover:border-slate-600 transition-all duration-200"
                onClick={() => handleDelete(index)}
              >
                Delete
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
            <input
              type="text"
              placeholder="Notes - any relevant information regarding to the invoice"
              className="border border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
            />
            <input
              type="text"
              placeholder="Terms"
              className="  w-full mb-2 px-4 py-2 placeholder:font-medium rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
            />
            <input
              type="text"
              placeholder="Terms and conditions - late fees, payment methods"
              className="border border-slate-400 w-full mb-2 px-4 py-2 rounded-sm placeholder:text-sm focus:shadow-md focus:outline-slate-400 "
            />
          </div>

          {/* Amount calculations */}
          <div className="2">
            <div className="date my-2 grid grid-cols-2">
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

            {/* payment */}
            <div className="date my-2 grid grid-cols-2">
              <input
                type="text"
                placeholder="Tax"
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

            {/* due date */}
            <div className="date my-2 grid grid-cols-2">
              <input
                type="text"
                placeholder="Discount"
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

            {/* PO Number */}
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
