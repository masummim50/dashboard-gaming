import { useAutoAnimate } from "@formkit/auto-animate/react";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

const chats = [
  {
    name: "Kristopher Gibson",
    time: "10 min ago",
    message: "Hey, what's up?",
    sender: true,
    image:'/streamer0.jpg'
},
{
    name: "Dominic Freeman",
    message: "Hey, what's up?",
    time: "13 min ago",
    sender: false,
    image:'/streamer1.jpg'
},
{
    name: "Jaylon Hendrix",
    message: "Hey, what's up?",
    time: "15 min ago",
    sender: true,
    image:'/streamer2.jpg'
  },
];

const TournamentChat = () => {
  const [chatList, setChatList] = React.useState(chats);
  const [message, setMessage] = React.useState("");
  const [parent] = useAutoAnimate();
  const handleSendMessage = () => {
    if (message === "") return;
    const newChat = {
      name: "Dominic Freeman",
      message: message,
      time: "1 min ago",
      sender: false,
      image: '/streamer1.jpg'
    };
    setChatList((prev) => [...prev, newChat]);
    setTimeout(() => {
      const element = document.getElementById("chat-container");
      if (element) {
        element.scrollTop = element.scrollHeight;
      }
    }, 0);
    setMessage("");
  };

  return (
    <>
        {/* head */}
        <div className="flex justify-between items center">
          <div className="flex justify-start items-center gap-2">
            <div className="bg-green-500 size-[5px] rounded-full"></div>
            <p className="text-white font-semibold text-sm">Tournament Chat</p>
          </div>
          <BsThreeDots className="text-gray-500" />
        </div>
        {/* divider */}
        <div className="bg-gray-700 w-full h-[1px] my-3 rounded-2xl"></div>
        {/* chat container */}
        <div
          id="chat-container"
          ref={parent}
          className="bg-gray-800 p-2 rounded-2xl min-h-[300px] max-h-[300px] overflow-y-scroll no-scrollbar"
        >
          {chatList.map((chat, index) => (
            <div
              key={index}
              className={`flex gap-2 my-2  ${
                chat.sender
                  ? "flex-row flex-start"
                  : "flex-row-reverse flex-end"
              }`}
            >
              <img
                src={chat.image}
                className="w-5 h-5 rounded-full"
                alt=""
              />
              <div className="flex flex-col flex-grow">
                <div
                  className={` rounded-2xl bg-gradient-to-b p-2 ${
                    chat.sender
                      ? "text-left rounded-tl-[0px]  p-2 from-gray-700 to-gray-900"
                      : "text-right rounded-tr-[0px] from-teal-300 to-teal-600 "
                  }`}
                >
                  <p className="text-white text-sm">{chat.name}</p>
                  <p
                    className={`text-gray-400 text-xs ${
                      chat.sender ? "text-gray-400" : "text-white"
                    }`}
                  >
                    {chat.message}
                  </p>
                </div>
                {/* under info */}
                <div className="flex justify-between items center">
                  <p className="text-[8px] text-gray-500">{chat.time}</p>
                  <p></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* text input */}
        <div className="relative mt-4">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            type="text"
            placeholder="Message..."
            className="outline-none focus:border focus:border-gray-400 w-full p-2 pr-[40px] rounded-2xl bg-gray-700"
          />
          <div
            onClick={handleSendMessage}
            className="cursor-pointer absolute top-[50%] translate-y-[-50%] right-0 text-white p-2 "
          >
            <IoIosSend className=" text-3xl text-white  " />
          </div>
        </div>
    </>
  );
};

export default TournamentChat;
