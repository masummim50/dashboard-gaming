
import BalanceCard from "./BalanceCard";

const TwoSmallCards = () => {
  return (
    <div className="flex h-full justify-between flex-row md:flex-col col-span-3 md:col-span-1 gap-4 min-w-[150px]">
      <div className="bg-gray-800 text-center pb-5 pt-10 px-5 rounded-2xl py-4 relative">
        <p className="text-white font-semibold mb-5">Create Tournament</p>
        <p className="text-gray-500 text-xs">
          Create if you are a{" "}
          <span className="text-orange-500 ">premium account</span>
        </p>

        <div className="cursor-pointer hover:shadow-[0_15px_12px_-5px_#fdba74] shadow-transparent transition-all hover:shadow-orange-600/40 plus absolute bg-gradient-to-b from-orange-400 to-orange-700 size-[70px] flex items-center justify-center font-bold text-white rounded-full text-center border-[10px] border-gray-900 top-[-35px] left-[50%] translate-x-[-50%]">
          +
          <div className="absolute size-[20px] bg-transparent left-[-25px] top-[50%] rounded-tr-full shadow-[5px_-5px_rgb(17,24,39)]"></div>
          <div className="absolute size-[20px] bg-transparent right-[-25px] top-[50%] rounded-tl-full shadow-[-5px_-5px_rgb(17,24,39)]"></div>
        </div>
      </div>

      {/* second card */}
      
      <BalanceCard/>
      
    </div>
  );
};

export default TwoSmallCards;
