import React from "react";

import { FaBars } from "react-icons/fa";
import logo from "../assets/b2c.logo.jpg";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between  bg-black h-16  text-white items-center sticky top-0 z-40">
        <div className="text-2xl ml-5 cursor-pointer text-gray-300">
          <FaBars />
        </div>
        <div>
          <img className="w-16" src={logo} alt="logo" />
        </div>
        <div className="text-2xl mr-5 cursor-pointer text-gray-300">NAME</div>
      </div>
    </>
  );
};

export default Navbar;
