import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import MyBets from "./MyBets";


const MainSection = () => {
  return (
    <div className="w-auto bg-gray-900 min-h-[100vh]  rounded-2xl p-6 pt-10">
      <FirstSection/>
      <SecondSection/>
      <MyBets/>
    </div>
  );
};

export default MainSection;
