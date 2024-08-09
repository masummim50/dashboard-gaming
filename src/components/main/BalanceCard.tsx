import React from "react";

const BalanceCard = () => {
  const [balance, setBalance] = React.useState(10);
  const [value, setValue] = React.useState<string | number>("");
  const handleDeposit = () => {
    if (value === "") return;
    if (Number(value) < 0) return;
    setBalance(balance + Number(value));
    setValue("");
  };

  const handlePlusClick = () => {
    if (value === "") {
      setValue(1);
    } else {
      setValue(Number(value) + 1);
    }
  };
  return (
    <div className="bg-gray-800 text-center p-5 px-5 rounded-2xl py-4">
      <div className="flex justify-between items-center">
        <p className="text-white text-xs text-left">Balance</p>
        <p className="text-green-500 text-xs">${balance}</p>
      </div>

      <div className="relative mt-3">
        <input
          placeholder="0"
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full p-2 rounded-2xl bg-gray-900 text-white pr-4 focus:border-gray-700 border border-transparent outline-none"
        />
        <button
          onClick={handlePlusClick}
          className="absolute top-[50%] translate-y-[-50%] right-2 size-[30px] bg-gray-800 rounded-full flex items-center justify-center text-white"
        >
          +
        </button>
      </div>
      <button
        onClick={handleDeposit}
        className={`hover:shadow-[0_1px_5px_black] w-full mt-3 bg-gradient-to-b from-gray-600 to-gray-700 rounded-2xl px-2  text-xs py-3 ${
          value === "" && "text-white"
        } ${Number(value) < 1 && value !== "" && "text-red-500"} ${
          Number(value) > 0 && "text-green-500"
        } font-semibold`}
      >
        Deposit
      </button>
    </div>
  );
};

export default BalanceCard;
