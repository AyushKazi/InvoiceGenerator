import { createSlice } from "@reduxjs/toolkit";
import { useInvoice } from "../src/hooks/use-invoice";

const defaultProduct = {
  description: "",
  numberOfItems: "",
  rate: "",
  amount: "",
};

const initialState = {
  invoiceNum: "",
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
  discount: "",
  total: "",
  tax: "",
  amount: "",
  products: [
    {
      description: "",
      numberOfItems: "",
      rate: "",
      amount: "",
    },
  ],
  notes: "",
  terms: "",
  subTotal: "",
  amountPaid: "",
  dueAmount: "",
};

// calculation of subtotal of all amount
const calculateSubTotal = (products) => {
  return products.reduce((total, product) => {
    const amount = product.amount !== "" ? parseInt(product.amount) : 0;
    return total + amount;
  }, 0);
};

//function to calculate the total value after discount and tax
const calculateTotal = (discount, subTotal, tax) => {
  let currentDiscount = parseInt(discount);
  let currentAmount = subTotal;
  let currentTax = parseInt(tax);
  if (currentAmount > 0) {
    let total = currentAmount;

    currentDiscount > 0 && (total -= (currentDiscount / 100) * currentAmount);
    currentTax > 0 && (total += (tax / 100) * total);

    return total;
  }
  return "";
};

// calculate amount due
const calculateDueAmount = (total, amountPaid) => {
  let currentTotal = parseInt(total);
  let currentAmountPaid = parseInt(amountPaid);

  if (currentTotal > 0) {
    let dueAmount = currentTotal - currentAmountPaid;
    return dueAmount;
  }
  return "";
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    changeFormData: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    // to update the service/products row
    updateProducts: (state, action) => {
      //code to update products
      //  state.products[index] -> this refers to the product of the given index
      const { name, value, index } = action.payload;

      if (index > -1) {
        state.products[index][name] = value; //

        // Recalculate amount if numberOfItems or rate changes
        if (name === "numberOfItems" || name === "rate") {
          const numberOfItems =
            parseInt(state.products[index].numberOfItems) || 1;
          const rate = parseFloat(state.products[index].rate) || 0;
          state.products[index].amount = (numberOfItems * rate).toFixed(2); // Assuming you want to keep 2 decimal places
        }
      } else {
        state[name] = value;
      }
      //updating the subtotal and total value
      state.subTotal = calculateSubTotal(state.products);
      const { discount, tax, amountPaid } = state;
      state.total = calculateTotal(discount, state.subTotal, tax);
      if (state.amountPaid > 0) {
        state.dueAmount = calculateDueAmount(state.total, amountPaid);
      }
    },
    // to add a row of the service/product
    addItem: (state, action) => {
      state.products = [...state.products, defaultProduct];
      state.subTotal = calculateSubTotal(state.products);
    },
    // to delete the row
    removeItem: (state, action) => {
      const indexToDelete = action.payload;
      state.products = state.products.filter(
        (_, index) => index !== indexToDelete
      );
      state.subTotal = calculateSubTotal(state.products);
    },
  },
});

export const { changeFormData, updateProducts, addItem, removeItem } =
  invoiceSlice.actions;

// export const invoiceReducers = invoiceSlice.reducer;

export default invoiceSlice.reducer;
// first make slices -> 1. initial state, 2. create slice with name, initial state and reducers
// second repeat same for another related content

// now configureStore to store all the values of initial states of the slices
// store ma chai reducers  matra hunxa.
// reducers : {invoice : invoiceReduceer} -> example ho yo

// likwise kun page ma data access garnu xa, tesma useSelector use garni
// useSelector (state) => {}, yesko state le global state access garxa ani state.invoice or state.posts
// kun slice ko data access garnu xa yesari access garni (state.)

//in configure store ,, we store reducers, which has initial value and actions
// and in reducers, we have name, initial value and reducers
// useSelector (state.{name of reducer}) to retreve the values of that reducer state values
// useDispatch to dispatch the action ( dispatch(addItem()))
