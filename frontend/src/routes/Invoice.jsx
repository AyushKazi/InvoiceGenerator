import React from "react";
import { useForm } from "react-hook-form";
import Download from "../components/Download/Download";
import Dates from "../components/Invoice/Dates";
import Logo from "../components/Invoice/Logo";
import BillDetails from "../components/Invoice/BillDetails";
import Table from "../components/Invoice/Table";

const Invoice = () => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <>
      <div className="mx-4 sm:mx-10  my-10 gap-10 flex flex-col lg:flex-row md:mx-20">
        <div className="main 1  bg-white lg:w-4/5 shadow-md rounded-sm">
          <div className="top   m-4 ">
            {/* top shelf */}
            <Logo />
            {/* end of top shelf */}

            {/* Bill Details */}
            <div className="details mx-4 my-4 grid grid-cols-1 md:grid-cols-2 md:gap-6   ">
              <BillDetails />
              {/* to */}
              <div className="detailsline ">
                <Dates />
              </div>
            </div>
            <Table />
          </div>
        </div>
        <div className="main 2">
          <Download />
        </div>
      </div>
    </>
  );
};

export default Invoice;
