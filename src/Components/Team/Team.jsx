import React from "react";
import logo from "../../assets/D0ne-logos_white.png";

const Team = () => {
  return (
    <>
      <div className="flex justify-between   bg-gray-900 h-16  text-white items-center sticky top-0 z-40">
        <div>
          <img className="w-28 ml-7" src={logo} alt="logo" />
        </div>
        <div className="text-3xl  cursor-pointer mr-9 text-gray-300">Team</div>
      </div>
      <div className="bg-gray-700 p-2  pb-4">
        <div className="flex justify-around items-center text-center mt-2 space-x-2">
          <div className="bg-gray-600 p-2 shadow-md shadow-black rounded-md flex-1 h-28">
            <p className="font-medium text-gray-200">
              Team <br /> Size
            </p>
            <p className="font-bold text-xl  text-orange-400">0</p>
          </div>
          <div className="bg-gray-600 p-2 shadow-md shadow-black rounded-md flex-1 h-28">
            <p className="font-medium text-gray-200">
              Recharge <br /> Members
            </p>
            <p className="font-bold text-xl  text-orange-400">0</p>
          </div>
          <div className="bg-gray-600 p-2 shadow-md shadow-black rounded-md flex-1 h-28">
            <p className="font-medium text-gray-200">
              Team <br /> Recharge
            </p>
            <p className="font-bold text-xl  text-orange-400">0</p>
          </div>
        </div>
        <div className="flex justify-around items-center text-center mt-1 space-x-2">
          <div className="bg-gray-600 p-2 shadow-md shadow-black rounded-md flex-1 h-28">
            <p className="font-medium text-gray-200">Team Size Today</p>
            <p className="font-bold text-xl  text-orange-400">0</p>
          </div>
          <div className="bg-gray-600 p-2 shadow-md shadow-black rounded-md flex-1 h-28">
            <p className="font-medium text-gray-200">Effective Size Today</p>
            <p className="font-bold text-xl  text-orange-400">0</p>
          </div>
          <div className="bg-gray-600 p-2 shadow-md shadow-black rounded-md flex-1 h-28">
            <p className="font-medium text-gray-200">
              Team <br /> Withdraw
            </p>
            <p className="font-bold text-xl text-orange-400">0</p>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly text-center items-center pt-2 mt-2 bg-gray-700">
        <div>
          <p className="font-bold text-gray-200">Salary Today</p>
          <p className="font-bold text-md text-orange-400">0.00</p>
        </div>
        <div>
          <p className="font-bold text-gray-200">Salary Total</p>
          <p className="font-bold text-md text-orange-400">0.00</p>
        </div>
      </div>
      <div className="flex justify-around items-center mt-2 space-x-6">
        <div className="flex flex-col items-center">
          <p className="font-light text-gray-300 mb-1">Level 1</p>
          <p className="w-full border-b-2 border-green-500"></p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-gray-300 mb-1">Level 2</p>
          <p className="w-full border-b-2"></p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-light text-gray-300 mb-1">Level 3</p>
          <p className="w-full border-b-2"></p>
        </div>
      </div>
      <hr className="text-white" />
      <div className="flex justify-evenly">
        <p className="font-bold text-gray-300">Clients: 0</p>
        <p className="font-bold text-gray-300">Recharged: 0</p>
      </div>
      <div className="min-h-screen bg-gray-700"></div>
    </>
  );
};

export default Team;
