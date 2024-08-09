import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaBolt } from "react-icons/fa6";

const Profits = () => {
  return (
    <div className="col-span-3 md:col-span-2 bg-gray-800 p-4 rounded-2xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className=" bg-green-500 rounded-full size-[5px]"></div>
          <p className="text-white ">Total Profits</p>
        </div>
        <BsThreeDots className="text-gray-500" />
      </div>

      {/* complex part */}

      <div className="grid grid-cols-5 gap-2 mt-8">
        {/* span 3 part */}
        <div className="col-span-3">
          <div className="bg-gray-900 text-center pb-5 pt-10 px-5 rounded-2xl py-4 relative">
            <div className="cursor-pointer hover:shadow-[0_15px_12px_-5px_#fdba74] shadow-transparent transition-all hover:shadow-orange-600/40 plus absolute bg-gradient-to-b from-gray-800 to-gray-950 size-[70px] flex items-center justify-center font-bold text-white rounded-full text-center border-[10px] border-gray-800 top-[-35px] left-[50%] translate-x-[-50%]">
              <FaBolt className="text-orange-500 drop-shadow-[0_0_5px_#f97316]" />
              <div className="absolute size-[20px] bg-transparent left-[-25px] top-[50%] rounded-tr-full shadow-[5px_-5px_#1f2937]"></div>
              <div className="absolute size-[20px] bg-transparent right-[-25px] top-[50%] rounded-tl-full shadow-[-5px_-5px_#1f2937]"></div>
            </div>

            {/* info */}
            <div className="flex  p-2 w-full mt-5 justify-between items-center h-[100%]">
              <div>
                <p className="text-white text-sm">2324</p>
                <p className="text-gray-500 text-xs">Bettings</p>
              </div>
              <div className="bg-white size-[3px] rounded-full "></div>
              <div>
                <p className="text-white text-sm">2324</p>
                <p className="text-gray-500 text-xs">Winnings</p>
              </div>
              <div className="bg-white size-[3px] rounded-full "></div>
              <div>
                <p className="text-white text-sm">2324</p>
                <p className="text-gray-500 text-xs">Losses</p>
              </div>
            </div>
            {/* info end */}
          </div>
          {/* button */}
          <button className="mt-3 text-center w-full text-white bg-gradient-to-b from-orange-400 to-orange-700 rounded-2xl py-2  transition-all">
            Place Bet
          </button>
        </div>
        {/* span 2 part */}
        <div className="col-span-2">
          <div className="flex flex-col items-center h-full justify-between">
            <div className="rotate-45 size-[130px] bg-gray-900 shadow-[0_0_25px_-15px_white] rounded-full border-[10px] border-teal-500 border-l-black  relative flex items-center justify-center">
              <div className="rotate-[-45deg] text-white font-bold">

              75%
              </div>
              {/* <div className="absolute size-[10px] rounded-full bg-white top-0 left-0 m-[6.5px]"></div>
              <div className="absolute size-[10px] rounded-full bg-white bottom-0 left-0 m-[6.5px]"></div> */}
            </div>
            
            <button className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-400 rounded-2xl px-3 py-2 text-xs">Average Profit</button>
          </div>
          {/* button */}
          
        </div>
      </div>
    </div>
  );
};

export default Profits;
