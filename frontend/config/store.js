import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "../slices/invoiceSlice";

// const invoiceReducer = newInvoiceSlice();

export default configureStore({
  reducer: {
    invoice: invoiceReducer,
  },
});
