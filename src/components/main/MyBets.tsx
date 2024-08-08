import React from 'react';
import { BsThreeDots } from 'react-icons/bs';


const bets = [
    {name: 'Madelyn Gibson', time: '10', game: 'Fortnite', profit: 220},
    {name: 'Jona Hendrix', time: '10', game: 'Fortnite', profit: 220},
    {name: 'Alison Marshall', time: '10', game: 'Fortnite', profit: 220},
    {name: 'Peter Smith', time: '10', game: 'Fortnite', profit: 220},
]

const MyBets = () => {
    return (
        <div className='bg-gray-800 rounded-2xl p-4 mt-4'>
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-green-500 size-[5px] rounded-full"></div>
                    <span className='text-white'>My Bets</span>
                </div>
                <BsThreeDots className="text-gray-500" />
            </div>

            <div className="bg-gray-900 rounded-2xl p-4 mt-6">
                <table className='w-full'>
                    <tr className='text-white text-left'>
                        <th className='pb-4'>User</th>
                        <th className='pb-4'>Time</th>
                        <th className='pb-4'>Game</th>
                        <th className='pb-4'>Profit</th>
                    </tr>
                    {
                        bets.map((p, index) => (

                            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'} text-white text-left text-xs  p-2 `}>
                                <td className='rounded-lg p-2 flex gap-2 items-center'><img src={`../../../public/streamer${index}.jpg`} className='w-6 rounded-full' alt="" /> {p.name}</td>
                                <td>{p.time}</td>
                                <td>{p.game}</td>
                                <td>{p.profit}</td>
                            </tr>
                        ))
                    }
                </table>

            </div>
            
        </div>
    );
};

export default MyBets;