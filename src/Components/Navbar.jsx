import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import logo from "../assets//D0ne-logos_white.png";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between  bg-gray-900 h-16  text-white items-center sticky top-0 z-40">
        <div className="text-2xl ml-5 cursor-pointer text-gray-300">
          <FaUserAlt />
        </div>
        <div>
          <img className="w-28" src={logo} alt="logo" />
        </div>
        <div className="text-3xl mr-5 cursor-pointer text-gray-300">
          <BiWorld />
        </div>
      </div>
    </>
  );
};

export default Navbar;
