import React, { useEffect } from "react";
import { API_OPTIONS } from "../../components/../utills/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../../utills/Slice/moviesSlice";
import useMovieTrailer from "../../hooks/useMovieTrailer";
const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
