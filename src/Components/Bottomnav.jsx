import React from "react";
import { IoHome } from "react-icons/io5";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

const Bottomnav = () => {
  return (
    <>
      <div className="flex justify-around  bg-gray-950 h-14  text-white items-center sticky bottom-0 z-40 p-1 opacity-90">
        <div className="text-2xl  flex flex-col items-center text-green-300 cursor-pointer">
          <IoHome />
          <div className="text-green-400 text-sm  font-light mt-1">home</div>
        </div>
        <div className="text-2xl  flex flex-col items-center text-gray-300 cursor-pointer">
          <AiOutlineBarChart />
          <div className="text-gray-400 text-sm  font-light mt-1">Market</div>
        </div>
        <div className="text-2xl  flex flex-col items-center text-gray-300 cursor-pointer">
          <FaUsers />
          <div className="text-gray-400 text-sm  font-light mt-1">Team</div>
        </div>
        <div className="text-2xl  flex flex-col items-center text-gray-300 cursor-pointer">
          <GiWallet />
          <div className="text-gray-400 text-sm  font-light mt-1">Assets</div>
        </div>
        <div className="text-2xl  flex flex-col items-center text-gray-300 cursor-pointer">
          <FaUser />
          <div className="text-gray-400 text-sm  font-light mt-1">My</div>
        </div>
      </div>
    </>
  );
};

export default Bottomnav;
