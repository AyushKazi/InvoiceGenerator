import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  return (
    <>
      <div className="nav flex justify-between items-center px-10 py-4 bg-slate-600  md:px-20">
        <div className="logo text-white text-xl font-medium">
          Invoice Generator
        </div>
        <div className="navitems">
          <GiHamburgerMenu className="text-white text-2xl md:hidden" />
          <div className="hidden md:block">
            <ul className="flex text-base text-white gap-10 ">
              <li className="cursor-pointer hover:text-slate-950">Help</li>
              <li className="cursor-pointer hover:text-slate-950">Guide</li>
              <li className="cursor-pointer hover:text-slate-950">Sign In</li>
              <li className="cursor-pointer hover:text-slate-950">Sign Up</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
