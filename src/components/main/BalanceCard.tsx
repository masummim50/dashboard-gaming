import React from "react";

const BalanceCard = () => {
  return (
    <div className="bg-gray-800 text-center p-5 px-5 rounded-2xl py-4">
      <p className="text-white text-xs text-left">Balance</p>

      <div className="relative mt-3">
        <input
          type="number"
          value={0}
          className="w-full p-2 rounded-2xl bg-gray-900 text-white pr-4 focus:border-gray-700 border border-transparent outline-none"
          
        />
        <button className="absolute top-[50%] translate-y-[-50%] right-2 size-[30px] bg-gray-800 rounded-full flex items-center justify-center text-white">
          +
        </button>
      </div>
      <button className="w-full mt-3 bg-gradient-to-b from-gray-600 to-gray-700 rounded-2xl px-2  text-xs py-3 text-white font-semibold">Deposit</button>
    </div>
  );
};

export default BalanceCard;
