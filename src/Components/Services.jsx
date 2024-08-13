import React from "react";
import { GiPayMoney } from "react-icons/gi";
import { BsBank } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
// import { FaMoneyBillAlt } from "react-icons/fa";
// import { BiMoneyWithdraw } from "react-icons/bi";
// import { RiCustomerService2Fill } from "react-icons/ri";

// import { IoMdDownload } from "react-icons/io";
const Services = () => {
  return (
    <>
      <div className=" bg-white">
        {" "}
        <hr />
      </div>
      <div className="flex justify-around items-center text-center mt-1 space-x-3 mx-2 cursor-pointer">
        <div className="bg-gray-600 p-2 shadow-md shadow-white rounded-md flex-1 h-28 flex flex-col items-center text-center ">
          <p className="font-medium text-gray-200 text-4xl mt-2">
            <GiPayMoney />
          </p>
          <p className="font-bold text-xl  text-orange-400">Deposit</p>
        </div>
        <div className="bg-gray-600 p-2 shadow-md shadow-white rounded-md flex-1 h-28 flex flex-col items-center text-center">
          <p className="font-medium text-gray-200 text-4xl mt-2">
            <BsBank />
          </p>
          <p className="font-bold text-xl  text-orange-400">Withdraw</p>
        </div>
        <div className="bg-gray-600 p-3 shadow-md shadow-white rounded-md flex-1 h-28 flex flex-col items-center justify-center text-center">
          <p className="text-gray-200 text-4xl mt-4 mb-1">
            <FaComputer />
          </p>
          <p className="font-bold text-lg text-orange-400">Company profile</p>
        </div>

        {/* <div className="text-5xl  flex flex-col items-center text-green-300 cursor-pointer">
          <FaMoneyBillAlt />
          <div className="text-green-400 text-base  font-bold mt-1">
            Recharge
          </div>
        </div>
        <div className="text-5xl  flex flex-col items-center text-green-300 cursor-pointer">
          <BiMoneyWithdraw />
          <div className="text-green-400 text-base font-bold mt-1">
            Recharge
          </div>
        </div>
        <div className="text-5xl  flex flex-col items-center text-green-300 cursor-pointer">
          <RiCustomerService2Fill />
          <div className="text-green-400 text-base  font-bold mt-1">
            Recharge
          </div>
        </div>
        <div className="text-5xl  flex flex-col items-center text-green-300 cursor-pointer">
          <IoMdDownload />
          <div className="text-green-400 text-base  font-bold mt-1">
            Recharge
          </div>
        </div> */}
      </div>
      <div className="m-2 mt-3">
        <div className="mb-2">
          <img src="https://guccn8.com/assets/invite-DhyNTWDu.png" alt="" />
        </div>
        <div>
          {" "}
          <img
            src="https://guccn8.com/assets/office_channel-D5isxbQZ.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Services;
