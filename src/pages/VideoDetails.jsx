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
      className="w-[300px] xs:ml-5 
    flex p-2 flex-col h-[210px] mt-10 relative cursor-pointer "
    >
      <video
        poster={thumnailUrl}
        autoFocus
        className="h-[170px] bg-black w-[270px]
       rounded"
      >
        <source src={videoUrl} />
      </video>
      <p
        className="absolute text-slate-300 
         top-[60%] left-[78%]"
      >
        {duration}
      </p>
      <div className="flex w-[100%] gap-4 p-1">
        <div>
          <img src={person} alt="author" className="h-[30px] rounded-full" />
        </div>
        <div className="text-white w-[80%]">
          <h4 className="w-[220px] text-[15px] ">{title}</h4>
          <p className="text-slate-600 text-[15px]">{author}</p>
          <div className="flex text-[14px]  w-[100%] gap-5 text-slate-400">
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
      <div>
        <div>
          <VideoCard />
        </div>

        <div
          className="lg:grid-cols-4 grid xs:grid-cols-2 grid-cols-1 
      gap-10  sm:grid-cols-3  ss:grid-col-2"
        >
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
