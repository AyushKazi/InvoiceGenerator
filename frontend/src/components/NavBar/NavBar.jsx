import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="nav flex justify-between items-center px-10 py-4 bg-slate-700 opacity-95  md:px-20 shadow-lg">
        <Link to="/" className="logo text-white text-xl font-medium">
          Invoice Generator
        </Link>
        <div className="navitems">
          <GiHamburgerMenu className="text-white text-2xl md:hidden" />
          <div className="hidden md:block">
            <ul className="flex text-base text-white gap-10 ">
              <li className="cursor-pointer  relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ">
                Help
              </li>
              <li className="cursor-pointer  relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ">
                Guide
              </li>
              <Link
                to="/signin"
                className="cursor-pointer  relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center "
              >
                Sign In
              </Link>
              <Link to="/signup">
                <li className="cursor-pointer  relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ">
                  Sign Up
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
