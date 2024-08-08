import React from "react";
import { BsThreeDots } from "react-icons/bs";

const data = [
  {
    name: "Kristopher Gibson",
    time: "10 min ago",
    money: 220,
  },
  {
    name: "Dominic Freeman",
    time: "13 min ago",
    money: 20,
  },
  {
    name: "Jaylon Hendrix",
    time: "15 min ago",
    money: 490,
  },
];
const RightSide = () => {
  return (
    <div className="rounded-2xl bg-gray-900 p-5">
      <div className="p-3 bg-gray-800 rounded-2xl min-w-[200px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <div className="bg-green-400 size-2 rounded-full"></div>
            <p className="text-sm text-white font-bold">Last Winners</p>
          </div>
          <BsThreeDots className="text-gray-500" />
        </div>

        {data.map((p, index) => (
          <div
            key={index}
            className="flex gap-2 items-center mt-4 border-t border-t-gray-600 pt-3"
          >
            <img
              src={`../../../public/streamer${index}.jpg`}
              className="w-9 rounded-full"
              alt=""
            />
            <div className="flex-grow">
              <h2 className="text-white text-xs font-bold">{p.name}</h2>
              <div className="flex justify-between items-center">
                <div className="text-teal-400 text-xs">+{p.money}$</div>
                <span className="text-xs text-gray-500">{p.time}</span>
              </div>
            </div>
          </div>
        ))}

      </div>
        <button className="mt-3 text-center w-full text-white bg-gradient-to-b from-orange-400 to-orange-700 rounded-2xl py-2  transition-all">
          Expand List
        </button>
    </div>
  );
};

export default RightSide;
