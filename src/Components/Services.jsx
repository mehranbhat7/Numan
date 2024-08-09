import React from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";

import { IoMdDownload } from "react-icons/io";
const Services = () => {
  return (
    <>
      <div className=" bg-white">
        {" "}
        <hr />
      </div>
      <div className="flex items-center justify-around bg-gray-900 text-white h-28 mt-1 text-center">
        <div className="text-5xl  flex flex-col items-center text-green-300 cursor-pointer">
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
        </div>
      </div>
      <div className="m-2">
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
