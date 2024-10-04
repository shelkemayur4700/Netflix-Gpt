import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-auto aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black px-12 p-4 text-xl rounded-lg hover:bg-opacity-80 cursor-pointer">
          ▶ Play
        </button>
        <button className=" mx-2 bg-gray-500 text-white px-12 p-4 text-xl rounded-lg bg-opacity-50 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
