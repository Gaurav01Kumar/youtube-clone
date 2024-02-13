import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import VideoCard from "../component/VideoCard";
import { videoList } from "../constants";
import { person } from "../assets";
const VideoRecomendationCard = ({
  id,
  title,
  duration,
  views,
  author,
  thumnailUrl,
  videoUrl,
  uploadTime,
}) => {
  return (
    <div
      key={id}
      className="w-[250px] xs:ml-5  gap-3
    flex p-2  h-[100px] mt-10 relative cursor-pointer "
    >
      <video
        poster={thumnailUrl}
        autoFocus
        className="h-[100px] bg-black w-[140px]
       rounded"
      >
        <source src={videoUrl} />
      </video>
      <p
        className="absolute text-slate-300 
         top-[70%] left-[45%]"
      >
        {duration}
      </p>
      <div className="flex w-[100%] gap-4 p-1">
        {/* <div>
          <img src={person} alt="author" className="h-[30px] rounded-full" />
        </div> */}
        <div className="text-white w-[80%]">
          <h4 className="w-[220px] text-[13px] ">{title}</h4>
          <p className="text-slate-300 hover:font-bold text-[12px]">{author}</p>
          <div className="flex text-[12px]  w-[100%] gap-5 text-slate-200">
            <p>{views} views</p>
            <p>{uploadTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const VideoDetails = () => {
  const { isToggled } = useContext(SidebarContext);
  return (
    <div
      className={
        isToggled
          ? "ml-[15%] mt-[3%] p-10 overscroll-x-none overflow-hidden"
          : "transition-transform ml-[3%] mt-[2%]"
      }
    >
      <div className="flex gap-3 items-start flex-col sm:flex-row">
        <div>
          <VideoCard />
        </div>

        <div className="flex flex-col">
          {videoList &&
            videoList.map((video, id) => (
              <VideoRecomendationCard id={id} {...video} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
