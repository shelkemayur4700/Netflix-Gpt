import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utills/Slice/moviesSlice";
import { API_OPTIONS } from "../utills/constants";

const useMovieTrailer = (movieId) => {
  //Fetch movie trailer video and set in redux state
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await response.json();
    const filterVideo = data?.results?.filter(
      (video) => video?.type === "Trailer"
    );

    const trailer = filterVideo?.length ? filterVideo?.[0] : data[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
