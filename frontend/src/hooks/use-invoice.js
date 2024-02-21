import { useEffect, useState } from "react";

export const useInvoice = () => {
  const [invoiceDetails, setInvoiceDetails] = useState({
    fromName: "",
    fromAddress: "",
    fromNumber: "",
    toName: "",
    toAddress: "",
    toNumber: "",
    date: "",
    paymentTerms: "",
    dueDate: "",
    poNum: "",
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
    subTotal: 0,
    notes: "",
    terms: "",
  });

  const defaultProduct = {
    description: "",
    numberOfItems: "",
    rate: "",
    amount: "",
  };
  const {
    fromName,
    fromAddress,
    fromNumber,
    toName,
    toAddress,
    toNumber,
    date,
    paymentTerms,
    dueDate,
    poNum,
    discount,
    total,
    tax,
    amount,
    products,
    notes,
    terms,
    subTotal,
  } = invoiceDetails;

  const handleChange = (e, index = -1) => {
    if (index > -1) {
      console.log(e.target.value);
      const { name, value } = e.target;
      const updatedProducts = [...products];
      updatedProducts[index] = { ...updatedProducts[index], [name]: value };
      setInvoiceDetails({ ...invoiceDetails, products: updatedProducts });

      // Recalculate amount if numberOfItems or rate changes
      if (name === "numberOfItems" || name === "rate") {
        const numberOfItems =
          parseInt(updatedProducts[index].numberOfItems) || 1;
        const rate = parseFloat(updatedProducts[index].rate) || 0;
        updatedProducts[index].amount = (numberOfItems * rate).toFixed(2); // Assuming you want to keep 2 decimal places
      }
    } else {
      console.log(e.target.value);
      setInvoiceDetails({ ...invoiceDetails, [e.target.name]: e.target.value });
    }
  };

  const handleNewItem = () => {
    const newProduct = { ...defaultProduct };

    setInvoiceDetails({
      ...invoiceDetails,
      products: [...products, newProduct],
    });
  };

  const handleDelete = (indexToDelete) => {
    setInvoiceDetails({
      ...invoiceDetails,
      products: products.filter((_, index) => index !== indexToDelete),
    });
  };

  useEffect(() => {
    setInvoiceDetails({
      ...invoiceDetails,
      subTotal: products.reduce((total, product) => {
        const amount = product.amount !== "" ? parseInt(product.amount) : 0; // Amount ma value ca vani parse garni natra default ma 0 rakhdini
        return (total += amount);
      }, 0),
    });
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
        setInvoiceDetails({
          ...invoiceDetails,
          discount: discount,
          tax: tax,
          products: products,
          total: `${total}`,
        });
      }
    };
    calculateTotal();
  }, [discount, tax, subTotal]);

  const onSubmit = () => {};

  return {
    fromName,
    fromAddress,
    fromNumber,
    toName,
    toAddress,
    toNumber,
    date,
    paymentTerms,
    dueDate,
    poNum,
    handleChange,
    discount,
    total,
    tax,
    amount,
    products,
    notes,
    terms,
    subTotal,
    handleNewItem,
    handleDelete,
  };
};
