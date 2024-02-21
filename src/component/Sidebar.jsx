import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaAngleDown,
  FaAngleUp,
  FaHome,
  FaPlay,
  FaTasks,
} from "react-icons/fa";
import { playList, subscrbciption } from "../constants";
import { SidebarContext } from "../context/SidebarContext";

const Sidebar = () => {
  const [sliceNumber, setSlicNumber] = useState(true);
  const { isToggled } = useContext(SidebarContext);
  return (
    <div
      className={
        isToggled
          ? " fixed top-16 left-0  xs:max-w-[240px] w-[240px] hover:overflow-y-scroll bg-black  py-3 h-full   z-30 transition-all"
          : "xs:max-w-[0px] transition-all hidden  fixed left-0"
      }
    >
      <div>
        <div>
          <ul className="flex flex-col gap-4">
            <li className="hover:bg-slate-900 transition-shadow">
              <Link
                to="/"
                className="xs:w-full w-[100px] flex 
                items-center gap-[30px] px-3
                 text-white font-semibold text-[17px] cursor-pointer"
              >
                <FaHome className={``} />
                Home
              </Link>
            </li>
            <li className="hover:bg-slate-900 transition-shadow">
              <Link
                to="/"
                className="xs:w-full w-[100px] flex 
                items-center gap-[30px] px-3
                 text-white font-semibold text-[17px] cursor-pointer"
              >
                <FaPlay className={``} />
                Shorts
              </Link>
            </li>
            <p className="text-white mx-3 text-[20px] font-serif">PlayList</p>
            {playList.map((sub) => (
              <li
                className="hover:bg-slate-900 p-1 transition-shadow"
                key={sub.id}
              >
                <Link
                  to="/"
                  className="xs:w-full w-[100px] flex 
                items-center gap-[30px] px-3
                 text-white font-semibold text-[17px] 
                 cursor-pointer"
                >
                  <FaTasks />
                  {sub.chanelName}
                </Link>
              </li>
            ))}
          </ul>
          <hr className="mt-10 h-0.6 bg-s" />
          <nav className="my-3 h-full p-3">
            <p className="text-white mx-3 text-[20px] font-serif">
              Subscription
            </p>
            <ul className="flex flex-col h-full pb-20 gap-4 mt-4 transition-transform ">
              {subscrbciption
                .slice(0, sliceNumber ? 5 : subscrbciption.length)
                .map((sub) => (
                  <li
                    className="hover:bg-slate-900 p-1 transition-shadow"
                    key={sub.id}
                  >
                    <Link
                      to="/"
                      className="xs:w-full w-[100px] flex 
                items-center gap-[30px] px-3
                 text-white font-semibold text-[17px] 
                 cursor-pointer"
                    >
                      <img
                        src={`${sub.image}`}
                        className="h-[20px] rounded-full"
                        alt={sub.chanelName}
                      />
                      {sub.chanelName}
                    </Link>
                  </li>
                ))}
              <li
                className="hover:bg-slate-900 transition-shadow xs:w-full w-[100px] flex 
                items-center gap-[30px] px-3
                 text-white font-semibold text-[17px] cursor-pointer"
                onClick={() => setSlicNumber(!sliceNumber)}
              >
                {sliceNumber ? (
                  <FaAngleDown className={``} />
                ) : (
                  <FaAngleUp className={``} />
                )}
                {sliceNumber ? "See more" : "See less"}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
