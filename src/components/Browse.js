import React from "react";
import Header from "./Header";
import MainContainer from "./BrowseCompo/MainContainer";
import SecondaryContainer from "./BrowseCompo/SecondaryContainer";
import useGetMoviesData from "../hooks/useGetMoviesData";

const Browse = () => {
  //calling custom hook to get data in redux state
  useGetMoviesData("now_playing");
  useGetMoviesData("popular");
  useGetMoviesData("top_rated");
  useGetMoviesData("upcoming");

  return (
    <div>
      <Header />
      {/*  */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
