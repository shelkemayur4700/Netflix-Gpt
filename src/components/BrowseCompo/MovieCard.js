import React from "react";
import { IMAGE_CDN_URL } from "../../utills/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMAGE_CDN_URL + posterPath} alt="poster" />
    </div>
  );
};

export default MovieCard;
