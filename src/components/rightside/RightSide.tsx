
import React, { useEffect } from "react";

import TournamentChat from "./TournamentChat";
import LastWinners from "./LastWinners";


const RightSide = () => {


  const [showChat, setShowChat] = React.useState(false);
  useEffect(() => {
    // Function to check window size and update showChat
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setShowChat(true);
      } else {
        setShowChat(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const clickChat = () => {
    setShowChat(!showChat);
  };

  return (
    <>
    <div className="lg:block hidden">

      <LastWinners/>
    </div>

      {/* chat */}
      {/* design for small devices */}

      
      <div
        className={`transition-all duration-500  p-4 bg-gray-900/30 lg:bg-gray-900 backdrop-blur-md lg:backdrop-blur-0 rounded-2xl mt-4 text-white  fixed bottom-[40px] origin-bottom-right right-[10px] ${showChat ? 'scale-100' : 'scale-0'}   lg:static lg:block `}
      >
        <TournamentChat />
      </div>
      <div
        onClick={clickChat}
        className="cursor-pointer hover:bg-teal-700 transition-all block lg:hidden fixed bg-teal-400 text-white font-bold rounded-full bottom-0 right-0 m-2 p-2 border border-black"
      >
        Chat
      </div>
    </>
  );
};

export default RightSide;
