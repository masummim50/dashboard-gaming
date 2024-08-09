
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import MyBets from "./MyBets";
import LastWinners from "../rightside/LastWinners";


const MainSection = () => {
  return (
    <div className="w-auto bg-gray-900 min-h-[100vh]  rounded-2xl p-6 pt-10">
      <FirstSection/>
      <SecondSection/>
      <MyBets/>
      <div className="block lg:hidden">
        <LastWinners/>
      </div>
    </div>
  );
};

export default MainSection;
