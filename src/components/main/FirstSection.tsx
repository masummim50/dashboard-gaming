import React from "react";
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import TwoSmallCards from "./TwoSmallCards";
const FirstSection = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div
        className={`relative bg-[url('/cover.jpg')] col-span-3 h-[200px] md:h-auto md:col-span-2 w-full rounded-2xl bg-cover animate-move`}
      >
        <div className="absolute top-[8px] left-[8px] ">
          <div className="flex gap-1">
            <button className="backdrop-blur-sm bg-white/10 text-white rounded-xl px-3 py-1">
              Popular
            </button>
            <span className="bg-black flex items-center rounded-full p-3">
              <FaApple className="text-white" />
            </span>
            <span className="bg-black flex items-center rounded-full p-3">
              <FaWindows className="text-white" />
            </span>
          </div>
        </div>
        <button className=" absolute backdrop-blur-sm bg-white/10  rounded-xl px-3 py-1 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border border-white/20 text-white font-semibold">
          Play Now
        </button>
      </div>

      <TwoSmallCards />
    </div>
  );
};

export default FirstSection;
