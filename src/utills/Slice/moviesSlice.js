import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState: {
    nowPlayingMovies: null,
    upcomingMovies: null,
    popularMovies: null,
    top_ratedMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addMoviesData: (state, action) => {
      if (action?.payload?.key === "now_playing") {
        state.nowPlayingMovies = action.payload;
      }
      if (action?.payload?.key === "upcoming") {
        state.upcomingMovies = action.payload;
      }
      if (action?.payload?.key === "popular") {
        state.popularMovies = action.payload;
      }
      if (action?.payload?.key === "top_rated") {
        state.top_ratedMovies = action.payload;
      }
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const { addMoviesData, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
