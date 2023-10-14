import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { options, constantText } from "../data/constants";
import { MovieDetailsResponse } from "../Type/type";
import { useFetchAPI } from "../hooks/useFetch";
import "./movieDetails.css";

const { NOT_AVAILABLE } = constantText;
export const MovieDetails: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const { data: movieDetailData, loading, error, fetchData } = useFetchAPI<MovieDetailsResponse>();

  useEffect(() => {
    if (movieId) {
      const url = `https://online-movie-database.p.rapidapi.com/title/get-details?tconst=${movieId}`;
      fetchData(url, options);
    }
  }, [movieId, fetchData]);

  if (loading) {
    return <div className="loading-message">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Error loading movie details: {error}</div>;
  }

  if (!movieDetailData) {
    return <div className="error-message">No data available.</div>;
  }

  return (
    <div className="movie-details-container">
      <Link to=".." className="back-button">
        Back to explore
      </Link>
      <img className="movie-details-image" src={movieDetailData.image.url} alt={movieDetailData.title} />
      <h2 className="movie-details-title">{movieDetailData.title}</h2>
      <div className="movie-details-info">
        <h3>Type: {movieDetailData.titleType}</h3>
        <h3>Start Year: {movieDetailData.seriesStartYear}</h3>
        <h3>End Year: {movieDetailData.seriesEndYear || NOT_AVAILABLE}</h3>
        <h3>Number of Episodes: {movieDetailData.numberOfEpisodes || NOT_AVAILABLE}</h3>
        <h3>
          Running Time:
          {movieDetailData.runningTimeInMinutes
            ? `${movieDetailData.runningTimeInMinutes} minutes`
            : NOT_AVAILABLE}
        </h3>
      </div>
    </div>
  );
};
