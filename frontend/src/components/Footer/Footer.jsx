import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer bg-slate-200 grid grid-cols-1 px-10 py-10 border border-red-500 md:grid-cols-3">
        <div className="border border-red-500">
          <h2>Use Invoice Generator</h2>
          <ul className="flex flex-col ">
            <li>Invoice Template</li>
            <li>How to Use</li>
            <li>Sign In</li>
            <li>Sign Up</li>
            <li>Release Notes</li>
            <li>Developer API</li>
          </ul>
        </div>
        <div className="border border-red-500">
          <h2>Education</h2>
          <p>Invoicing Guide</p>
        </div>
        <div className="border border-red-500">
          <p>2012-2024 Invoice-Generator.com</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
