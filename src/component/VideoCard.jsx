import React from "react";
import styles from "../style";
import { person } from "../assets";
import { FaArrowDown, FaPlus, FaRegThumbsDown, FaRegThumbsUp, FaSave, FaShare } from "react-icons/fa";
const VideoCard = () => {
  return (
    <div className="min-w-[420px] max-w-[800px] ">
      <div className="bg-slate-700 p-1 shadow-2xl min-w-[420px] max-w-[800px] rounded-[10px] ">
        <video width="" height="" className="w-full border-none bg-transparent" controls>
          <source src="" type="" />
        </video>
      </div>
      <div>
        <div className="w-full p-2">
          <h2 className={`${styles.heading3}`}>Title of the video</h2>
        </div>
        <div className="flex justify-between gap-10">
          <div className="flex gap-5">
            <div>
              <img src={person} alt="chanel owner avtar" className="h-[40px] rounded-full" />
            </div>
            <div className="">
              <h6 className="text-[8px] sm:text-[12px] text-slate-100
              font-serif font-semibold">Chanel Name</h6>
              <p className=" text-[10px] sm:text-[12px]  text-white font-semibold">133K subscriber</p>
            </div>
            <button type="submit"
            className="bg-white text-black rounded-[20px]
             h-[35px] px-4 font-semibold font-serif hover:bg-slate-200"
            >Subscribe</button>
          </div>
          <div className="flex gap-3">
          <div className="flex gap-2 justify-center items-center h-[35px]  bg-slate-900 
          rounded-full px-5 ">
            <div className="h-[35px] flex items-center gap-3" >
              <FaRegThumbsUp className={`${styles.icon2}`}/>
              <span className="text-[13px] text-white">123K</span>
            </div>
            <hr className="w-[2px] bg-sky-200 h-full" />
            <FaRegThumbsDown className={`${styles.icon2} `}/>
          </div>
          <div className="flex gap-2 justify-center items-center h-[35px]  bg-slate-900 
          rounded-full px-5 ">
            <FaShare className={`${styles.icon2}`} />
            <span className="text-[13px] text-white">Share</span>
          </div>
          <div className="flex gap-2 justify-center items-center h-[35px]  bg-slate-900 
          rounded-full px-5 ">
            <FaArrowDown  className={`${styles.icon2}`}/>
            <p className="text-[13px] text-white">Download</p>
          </div>
          <div className="flex gap-2 justify-center items-center h-[35px]  bg-slate-900 
          rounded-full px-5 ">
            <FaPlus className={`${styles.icon2}`} />
            <span className="text-[13px] text-white">Save</span>
          </div>
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default VideoCard;
