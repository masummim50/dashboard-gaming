import React from "react";
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import TwoSmallCards from "./TwoSmallCards";
const FirstSection = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div
        className={`relative bg-[url('../../../public/cover.jpg')]  col-span-2 w-full rounded-2xl bg-cover bg-center`}
      >
        <div className="absolute top-[8px] left-[8px] ">
          <div className="flex gap-1">
            <button className="backdrop-blur-sm bg-white/10 text-black rounded-xl px-3 py-1">
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
      </div>

      <TwoSmallCards />
    </div>
  );
};

export default FirstSection;
