import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addMoviesData,
  addNowPlayingMovies,
} from "../utills/Slice/moviesSlice";
import { API_OPTIONS } from "../utills/constants";

const useGetMoviesData = (type) => {
  const dispatch = useDispatch();

  const getMoviesData = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/" + type + "?page=1",
      API_OPTIONS
    );
    const response = await res.json();
    dispatch(addMoviesData({ key: type, data: response?.results }));
  };
  useEffect(() => {
    getMoviesData();
  }, []);
};

export default useGetMoviesData;
