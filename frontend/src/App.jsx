import React, { createContext, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Invoice from "./routes/Invoice";
import RootLayout from "./routes/RootLayout";
import ErrorPage from "./routes/ErrorPage";

import Help from "./routes/Help";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignUp/SignIn";
import Pdf from "./components/Invoice/Pdf";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Invoice /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/help", element: <Help /> },
    ],
  },
  { path: "/pdf", element: <Pdf /> },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
};

export default App;
