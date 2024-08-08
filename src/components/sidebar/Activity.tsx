import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

const Activity = () => {
    return (
        <div>
            <div className="flex justify-between items-center text-gray-500">
                <p className="text-xs ">Activity</p>
                <BsThreeDots />
            </div>
            <p className='text-gray-400 my-2 text-xs'>Top 3 Tactics</p>

            <div className="flex gap-[3px] my-4">
                <button className='bg-gradient-to-b from-teal-200 to-teal-500 rounded-2xl px-2 text-xs py-1'>Games</button>
                <button className='bg-gradient-to-b from-teal-200 to-teal-500 rounded-2xl px-2 text-xs py-1'>English</button>
            </div>
            
        </div>
    );
};

export default Activity;