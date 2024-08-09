
import { BsThreeDots } from 'react-icons/bs';
import { FaStar } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";

const Profile = () => {
    return (
        <div className='rounded-2xl bg-gray-800 p-4 col-span-3 md:col-span-1'>
            <div className="flex">
                <div className="size-[40px] flex items-center justify-center border-gray-900 rounded-md border-2 bg-gradient-to-br from-transparent to-gray-900 rotate-45">
                    <FaStar className='text-orange-500 text-base bg-transparent drop-shadow-[0_0_10px_#f97316]'/>
                </div>
                <div className='flex-grow pl-4 text-white'>
                    <div className="flex justify-between items-center w-full">
                        <p>John Doe</p>
                        <BsThreeDots className='text-gray-500'/>
                    </div>
                    <button className='text-[8px] text-white bg-gray-900 px-2 py-1 rounded-2xl'>Buy Coins</button>
                </div>
            </div>
            
            {/* bar */}

            <div className="flex justify-between text-xs text-white pt-14">
                <span>1500</span>
                <span className='text-gray-600'>1500</span>
            </div>
            <div className="rounded-2xl bg-gray-900 relative h-[15px]  mt-1">
                <div className="absolute top-0 left-0 w-[50%] bg-gradient-to-b from-teal-400 to-teal-700 h-full rounded-2xl"></div>
                <div className="absolute left-[50%] translate-x-[-50%] top-[-50px] border border-teal-400 size-[40px] rounded-full flex items-center justify-center shadow-[0_0_10px_#2dd4bf]">
                    <FaTrophy className='text-orange-500 drop-shadow-[0_0_10px_#f97316]'/>
                </div>
            </div>
            <div className="flex justify-between mt-2 px-1">
                {
                    Array(10).fill("").map((_,index)=> (
                        <span key={index} className={`size-[2px] ${index < 5 ? "bg-white" : "bg-gray-500"}`}></span>
                    ))
                }
            </div>

            <div className="my-4 flex w-full justify-between items-center text-[10px] text-gray-400">
                <p>Current: <span className='text-white'>Bronze</span></p>
                <span className=' text-white'>|</span>
                <p>Current: <span className='text-white'>Bronze</span></p>
            </div>

        </div>
    );
};

export default Profile;