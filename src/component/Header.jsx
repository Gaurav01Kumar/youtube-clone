import React, { useContext } from "react";
import {
  FaAlignJustify,
  FaBell,
  FaPlayCircle,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { RiVideoUploadFill } from "react-icons/ri";
import { SidebarContext } from "../context/SidebarContext";
import styles from "../style";
import Logo from "./Logo";
const Header = () => {
  const { toggle } = useContext(SidebarContext);
  return (
    <header
      className="fixed -top-3 left-0 z-30 bg-black
  w-full  flex justify-between items-center  px-4"
    >
      <div className="flex gap-2  items-center">
        <FaAlignJustify className={`${styles.icon}`} onClick={toggle} />
        <Logo />
      </div>
      <div
        className="flex gap-2  items-center justify-center
     bg-slate-900 shadow sm:min-w-[480px]
     h-[40px] border-slate-700 border rounded-full  w-[100px] my-2"
      >
        <input
          type="text"
          className="hidden sm:block w-[420px] h-full bg-transparent 
      text-white px-5 text-[18px] rounded-full outline-none "
          placeholder="Search"
        />
        <FaSearch
          className={`${styles.icon} w-[40px] xs:w-[50px]
      p-1 rounded-r-[20px]
      h-full bg-[#222222]`}
        />
      </div>
      <div className="flex items-center gap-4 my-4">
        <div>
          <RiVideoUploadFill className={`${styles.icon} mx-3`} />
        </div>
        <div>
          <FaBell className={`${styles.icon} mx-3`} />
        </div>
        <div>
          <FaUser className={`${styles.icon} mx-3`} />
        </div>
      </div>
    </header>
  );
};

export default Header;
