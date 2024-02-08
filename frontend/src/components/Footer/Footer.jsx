import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer bg-slate-100 grid grid-cols-1 px-10 py-2  md:grid-cols-3 md:px-20  ">
        <div className=" py-6  ">
          <h2 className="font-medium lg:text-xl text-slate-700 ">
            Use Invoice Generator
          </h2>
          <ul className="flex flex-col text-sm gap-3 mt-4 ">
            <li className="text-slate-600 lg:text-base">Invoice Template</li>
            <li className="text-slate-600 lg:text-base">How to Use</li>
            <li className="text-slate-600 lg:text-base">Sign In</li>
            <li className="text-slate-600 lg:text-base">Sign Up</li>
            <li className="text-slate-600 lg:text-base">Release Notes</li>
            <li className="text-slate-600 lg:text-base">Developer API</li>
          </ul>
        </div>
        <div className=" py-6  ">
          <h2 className="font-medium text-slate-700 lg:text-xl">Education</h2>
          <p className="text-sm mt-4 text-slate-600 lg:text-base">
            Invoicing Guide
          </p>
        </div>
        <div className="  py-6   ">
          <p className="text-sm mb-4">2012-2024 Invoice-Generator.com</p>
          <p className="text-sm text-slate-600 lg:text-base">Terms of Use</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
