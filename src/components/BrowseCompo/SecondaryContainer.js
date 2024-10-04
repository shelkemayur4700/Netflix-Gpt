import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black ">
      <div className=" -mt-[23rem] relative pl-12">
        <MovieList
          title={"Now Playing"}
          movies={movies?.nowPlayingMovies?.data}
        />
        <MovieList title={"Popular"} movies={movies?.popularMovies?.data} />
        <MovieList title={"Top Rated"} movies={movies?.top_ratedMovies?.data} />
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies?.data} />
        <MovieList
          title={"Now Playing"}
          movies={movies?.nowPlayingMovies?.data}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
