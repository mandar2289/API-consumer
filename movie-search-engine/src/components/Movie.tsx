import React from "react";
import { MovieDetail } from "../Type/type";
import "./movie.css";

type MovieDetailProps = {
  movieDetail: MovieDetail;
};

export const Movie: React.FC<MovieDetailProps> = ({ movieDetail }) => {
  return (
    <div className="movie-item">
      <h3>{movieDetail?.title}</h3>
      <img src={movieDetail?.image} alt={movieDetail?.title} />
    </div>
  );
};
