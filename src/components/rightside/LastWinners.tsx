import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { useAutoAnimate } from "@formkit/auto-animate/react";

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
  const more = [
    {
      name: "Alison Marshall",
      time: "10 min ago",
      money: 220,
    },
    {
      name: "John Doe",
      time: "15 min ago",
      money: 490,
    },
    {
      name: "Gael Ford",
      time: "13 min ago",
      money: 20,
    },
  ];

const LastWinners = () => {
    const [winners, setWinners] = React.useState(data);
    const [showCollapseList, setShowCollapseList] = React.useState(false);
    const handleExpandList = () => {
      for (let i = 0; i < 3; i++) {
        const newItem = more[i];
        setWinners((prev) => [...prev, { ...newItem }]);
      }
      setShowCollapseList(true);
    };
    const handleCollapseList = () => {
      setWinners((prev) => prev.slice(0, 3));
      setShowCollapseList(false);
    };
  
    const [parent] = useAutoAnimate();
    return (
        <div className="rounded-2xl mt-4 lg:mt-0 bg-gray-900 p-0 lg:p-5  min-w-[250px] mb-4">
        <div className="p-3 bg-gray-800 rounded-2xl ">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <div className="bg-green-400 size-2 rounded-full"></div>
              <p className="text-sm text-white font-bold">Last Winners</p>
            </div>
            <BsThreeDots className="text-gray-500" />
          </div>
          <div ref={parent}>
            {winners.map((p, index) => (
              <div
                key={index}
                className="flex gap-2 items-center mt-4 border-t border-t-gray-600 pt-3"
              >
                <img
                  src={`/streamer${index}.jpg`}
                  className="w-9 rounded-full"
                  alt=""
                />
                <div className="flex-grow">
                  <h2 className="text-white text-xs font-bold">{p?.name}</h2>
                  <div className="flex justify-between items-center">
                    <div className="text-teal-400 text-xs">+{p?.money}$</div>
                    <span className="text-xs text-gray-500">{p?.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {showCollapseList ? (
          <button
            onClick={handleCollapseList}
            className="mt-3 text-center w-full text-white bg-gradient-to-b from-teal-400 to-teal-700 rounded-2xl py-2  transition-all"
          >
            Collapse List
          </button>
        ) : (
          <button
            onClick={handleExpandList}
            className="mt-3 text-center w-full text-white bg-gradient-to-b from-orange-400 to-orange-700 rounded-2xl py-2  transition-all"
          >
            Expand List
          </button>
        )}
      </div>
    );
};

export default LastWinners;