import { useEffect, useState } from "react";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoDiamondSharp } from "react-icons/io5";
import { AiOutlineStock } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import TopStreamer from "./TopStreamer";
import Activity from "./Activity";
import { FaSearch } from "react-icons/fa";

const links = [
  { title: "Hot", link: "/", icon: <FaFireFlameCurved />, number: 0 },
  { title: "New", link: "/new", icon: <IoDiamondSharp />, number: 1 },
  { title: "Rising", link: "/rising", icon: <AiOutlineStock />, number: 2 },
  { title: "Profile", link: "/profile", icon: <CgProfile />, number: 0 },
  { title: "Favorite", link: "/favorite", icon: <FaHeart />, number: 0 },
];

const Sidebar = () => {
  const location = useLocation();
  const [top, setTop] = useState("top-[0px]");

  useEffect(() => {
    if (location.pathname === "/") {
      setTop("top-[0px]");
    }
    if (location.pathname === "/new") {
      setTop("top-[28px]");
    }
    if (location.pathname === "/rising") {
      setTop("top-[56px]");
    }
    if (location.pathname === "/profile") {
      setTop("top-[84px]");
    }
    if (location.pathname === "/favorite") {
      setTop("top-[112px]");
    }
  }, [location.pathname]);

  return (
    <div className="sidebar w-auto bg-gray-900 min-h-[100vh]   rounded-lg pt-3">
      <div className="px-2">
        <div className="relative">
          <input
            type="text"
            placeholder="search"
            className="rounded-lg border-0 md:border border-gray-400 bg-transparent px-2 py-[4px] mb-5 pl-0 md:pl-[35px]  md:max-w-[200px] w-0 md:w-full text-gray-300 relative "
          />
          <FaSearch className="absolute top-[10px] left-[10px] z-2 text-gray-400" />
        </div>
      </div>
      <ul className="relative">
        {/* map the links here */}
        {links.map((link, i) => {
          return (
            <li
              key={i}
              className={`hover:bg-gradient-to-r cursor-pointer  from-sky-500/10 via-transparent to-transparent px-2 py-1 text-sm ${
                location.pathname === link.link &&
                "bg-gradient-to-r  from-sky-500/10 via-transparent to-transparent "
              }`}
            >
              <Link
                to={link.link}
                className={` pl-2 pr-0 md:pr-6 text-left  w-full inline-block ${
                  location.pathname === link.link
                    ? "text-white"
                    : "text-gray-500"
                }`}
              >
                <span
                  className={`inline-block mr-1 ${
                    location.pathname === link.link
                      ? "text-teal-400"
                      : "text-gray-500"
                  }`}
                >
                  {link.icon}
                </span>
                <span className="hidden md:inline-block">

                {link.title}
                </span>
              </Link>
            </li>
          );
        })}

        {/* the absolute indicator */}
        <div
          className={`absolute bg-teal-400 w-[4px] rounded-tr-md rounded-br-md h-[28px] ${top} left-0 transition-all`}
        ></div>
      </ul>

      <div className="m-3 hidden md:block">
        <div className="bg-gray-700 h-[1px] my-3"></div>

        <TopStreamer />

        <div className="bg-gray-700 h-[1px] my-3"></div>
        <Activity />
        <div className="bg-gray-700 h-[1px] my-3"></div>

        <p className="text-gray-300 text-sm max-w-[200px]">
          New Addition to Hearthstone, 'March of the Lich King'
        </p>

        <button className="bg-gradient-to-b from-teal-200 to-teal-500 rounded-2xl px-2 text-xs py-1 mt-3">
          Games
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
