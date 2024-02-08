import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Invoice from "./routes/Invoice";
import RootLayout from "./routes/RootLayout";
import ErrorPage from "./routes/ErrorPage";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Help from "./routes/Help";

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
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
