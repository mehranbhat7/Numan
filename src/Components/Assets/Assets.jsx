import React from "react";
import logo from "../../assets/D0ne-logos_white.png";
import { TfiReload } from "react-icons/tfi";

const Assets = () => {
  return (
    <>
      <div className="flex justify-between   bg-gray-900 h-16  text-white items-center sticky top-0 z-40">
        <div>
          <img className="w-28 ml-7" src={logo} alt="logo" />
        </div>
        <div className="text-3xl  cursor-pointer mr-9 text-gray-300">
          Assets
        </div>
      </div>
      <div className="p-6 bg-gray-600 ">
        <div className="flex justify-between items-center mx-3">
          <div>
            <p className="text-xl font-semibold text-green-500">Total Assets</p>
            <p className="text-lg font-bold text-white">0</p>
          </div>
          <div className="text-2xl text-white">
            <TfiReload />
          </div>
        </div>
        <div className="border-t border-gray-400 my-2 mx-3"></div>
        <div className="flex justify-around items-center text-center">
          <div>
            <p className="text-md font-semibold text-green-500">
              Total Recharge
            </p>
            <p className="text-md font-bold text-white">0</p>
          </div>
          <div>
            <p className="text-md font-semibold text-green-500">
              Total Withdraw
            </p>
            <p className="text-md font-bold text-white">0</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assets;
