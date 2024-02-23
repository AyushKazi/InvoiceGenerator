import { createSlice } from "@reduxjs/toolkit";
import { useInvoice } from "../src/hooks/use-invoice";

const newInvoiceSlice = () => {
  //   const {
  //     fromName,
  //     fromAddress,
  //     fromNumber,
  //     toName,
  //     toAddress,
  //     toNumber,
  //     date,
  //     paymentTerms,
  //     dueDate,
  //     poNum,
  //     discount,
  //     total,
  //     tax,
  //     amount,
  //     products,
  //     notes,
  //     terms,
  //     subTotal,
  //   } = useInvoice();
  //   const initialState = {
  //     fromName,
  //     fromAddress,
  //     fromNumber,
  //     toName,
  //     toAddress,
  //     toNumber,
  //     date,
  //     paymentTerms,
  //     dueDate,
  //     poNum,
  //     discount,
  //     total,
  //     tax,
  //     amount,
  //     products,
  //     notes,
  //     terms,
  //     subTotal,
  //   };
  //   const invoiceSlice = createSlice({
  //     name: "invoice",
  //     initialState,
  //     reducers: {
  //       changeFormData: (state, action) => {
  //         const demo = {
  //           ...state,
  //           [action.payload.e.target.name]: action.payload.e.target.value,
  //         };
  //         console.log(demo);
  //       },
  //     },
  //   });
  //   return invoiceSlice;
};
const defaultProduct = {
  description: "",
  numberOfItems: "",
  rate: "",
  amount: "",
};

const initialState = {
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
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    changeFormData: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    updateProducts: (state, action) => {
      //code to update products
      //  state.products[index] -> this refers to the product of the given index
      const { name, value, index } = action.payload;
      state.products[index][name] = value; //

      // Recalculate amount if numberOfItems or rate changes
      if (name === "numberOfItems" || name === "rate") {
        const numberOfItems =
          parseInt(state.products[index].numberOfItems) || 1;
        const rate = parseFloat(state.products[index].rate) || 0;
        state.products[index].amount = (numberOfItems * rate).toFixed(2); // Assuming you want to keep 2 decimal places
      }
    },
    addItem: (state, action) => {
      state.products = [...state.products, defaultProduct];
    },
    removeItem: (state, action) => {
      const indexToDelete = action.payload;
      state.products = state.products.filter(
        (_, index) => index !== indexToDelete
      );
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
