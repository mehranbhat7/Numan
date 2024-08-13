import React, { useState } from "react";

const Currency = () => {
  const [selected, setSelected] = useState("Favourites");

  const handleSelect = (item) => {
    setSelected(item);
  };

  return (
    <>
      <div className="text-2xl font-extrabold font-sans ml-2 text-white mt-3 cursor-text">
        Market
      </div>
      <div className="flex text-white text-sm justify-around mt-3 bg-slate-600 p-2 mx-2 rounded-xl  cursor-pointer">
        <div
          className={`${
            selected === "Favourites" ? "bg-green-400" : "bg-slate-300"
          } font-medium rounded-3xl px-2 cursor-pointer`}
          onClick={() => handleSelect("Favourites")}
        >
          Favourites
        </div>
        <div
          className={`${
            selected === "Gainers" ? "bg-green-400" : "bg-slate-300"
          } font-medium rounded-3xl px-2 cursor-pointer`}
          onClick={() => handleSelect("Gainers")}
        >
          Gainers
        </div>
        <div
          className={`${
            selected === "Loosers" ? "bg-green-400" : "bg-slate-300"
          } font-medium rounded-3xl px-2 cursor-pointer`}
          onClick={() => handleSelect("Loosers")}
        >
          Loosers
        </div>
        <div
          className={`${
            selected === "Volume" ? "bg-green-400" : "bg-slate-300"
          } font-medium rounded-3xl px-2 cursor-pointer`}
          onClick={() => handleSelect("Volume")}
        >
          Volume
        </div>
      </div>
      <div className="m-2 flex items-center justify-between  bg-slate-600 rounded-xl p-3 mb-2">
        <div className="flex items-center">
          <img
            className="w-12 mr-2"
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
            alt=""
          />
          <div className="font-medium text-white">BTC/USDT</div>
        </div>
        <div className="font-bold text-green-400">600873.9</div>
        <div>
          <button type="button" class="btn btn-success">
            +123%
          </button>
        </div>
      </div>
      <div className="m-2 flex items-center justify-between  bg-slate-600 rounded-xl p-3 mb-2">
        <div className="flex items-center">
          <img
            className="w-12 mr-2"
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
            alt=""
          />
          <div className="font-medium text-white">BTC/USDT</div>
        </div>
        <div className="font-bold text-green-400">600873.9</div>
        <div>
          <button type="button" class="btn btn-success">
            +123%
          </button>
        </div>
      </div>
      <div className="m-2 flex items-center justify-between  bg-slate-600 rounded-xl p-3 mb-2">
        <div className="flex items-center">
          <img
            className="w-12 mr-2"
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
            alt=""
          />
          <div className="font-medium text-white">BTC/USDT</div>
        </div>
        <div className="font-bold text-green-400">600873.9</div>
        <div>
          <button type="button" class="btn btn-success">
            +123%
          </button>
        </div>
      </div>
      <div className="m-2 flex items-center justify-between  bg-slate-600 rounded-xl p-3 mb-2">
        <div className="flex items-center">
          <img
            className="w-12 mr-2"
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
            alt=""
          />
          <div className="font-medium text-white">BTC/USDT</div>
        </div>
        <div className="font-bold text-green-400">600873.9</div>
        <div>
          <button type="button" class="btn btn-success">
            +123%
          </button>
        </div>
      </div>
      <div className="m-2 flex items-center justify-between  bg-slate-600 rounded-xl p-3 mb-2">
        <div className="flex items-center">
          <img
            className="w-12 mr-2"
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
            alt=""
          />
          <div className="font-medium text-white">BTC/USDT</div>
        </div>
        <div className="font-bold text-green-400">600873.9</div>
        <div>
          <button type="button" class="btn btn-success">
            +123%
          </button>
        </div>
      </div>
      <div className="m-2 flex items-center justify-between  bg-slate-600 rounded-xl p-3 mb-2">
        <div className="flex items-center">
          <img
            className="w-12 mr-2"
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
            alt=""
          />
          <div className="font-medium text-white">BTC/USDT</div>
        </div>
        <div className="font-bold text-green-400">600873.9</div>
        <div>
          <button type="button" class="btn btn-success">
            +123%
          </button>
        </div>
      </div>
      <div className="m-2 flex items-center justify-between  bg-slate-600 rounded-xl p-3 mb-2">
        <div className="flex items-center">
          <img
            className="w-12 mr-2"
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
            alt=""
          />
          <div className="font-medium text-white">BTC/USDT</div>
        </div>
        <div className="font-bold text-green-400">600873.9</div>
        <div>
          <button type="button" class="btn btn-success">
            +123%
          </button>
        </div>
      </div>
      <div className="m-2 flex items-center justify-between  bg-slate-600 rounded-xl p-3 mb-2">
        <div className="flex items-center">
          <img
            className="w-12 mr-2"
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
            alt=""
          />
          <div className="font-medium text-white">BTC/USDT</div>
        </div>
        <div className="font-bold text-green-400">600873.9</div>
        <div>
          <button type="button" class="btn btn-success">
            +123%
          </button>
        </div>
      </div>
      <div className="m-2 flex items-center justify-between  bg-slate-600 rounded-xl p-3 mb-2">
        <div className="flex items-center">
          <img
            className="w-12 mr-2"
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
            alt=""
          />
          <div className="font-medium text-white">BTC/USDT</div>
        </div>
        <div className="font-bold text-green-400">600873.9</div>
        <div>
          <button type="button" class="btn btn-success">
            +123%
          </button>
        </div>
      </div>
    </>
  );
};

export default Currency;
