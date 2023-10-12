import React from "react";
import { MovieDetail } from "../Type/type";
import "./movieList.css";

type MovieDetailProps = {
  movieDetail: MovieDetail;
};

export const Movie: React.FC<MovieDetailProps> = ({ movieDetail }) => {
  return (
    <>
      <img className="movie-image" src={movieDetail?.image} alt={movieDetail?.title} />
      <div className="movie-title">{movieDetail?.title}</div>
    </>
  );
};
