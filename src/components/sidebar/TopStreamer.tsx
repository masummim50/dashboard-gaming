
import { BsThreeDots } from "react-icons/bs";

const TopStreamer = () => {
  return (
    <div>
      <div className="flex justify-between items-center text-gray-500">
        <p className="text-xs ">Top Streamer</p>
        <BsThreeDots />
      </div>

      <div className="flex justify-between items center gap-1 mt-2">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <img
              className="w-6 lg:w-8 rounded-full"
              src={`/streamer${index}.jpg`}
              alt=""
            />
          ))}
      </div>
      <button className="shadow-[0_1px_2px_0_black] border border-gray-700 rounded-2xl w-full mt-2 text-white bg-gradient-to-b from-gray-800 to-transparent text-sm py-1">
        More
      </button>
    </div>
  );
};

export default TopStreamer;
