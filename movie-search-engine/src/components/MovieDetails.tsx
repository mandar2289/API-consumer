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
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">Error loading movie details: {error}</div>;
  }

  if (!movieDetailData) {
    return <div className="error-message">No data available.</div>;
  }

  return (
    <div className="movie-details-container">
      <h2 className="movie-details-title">{movieDetailData.title}</h2>
      <div className="movie-details-content">
        <div className="movie-details-info">
          <label>
            Type: <span>{movieDetailData.titleType}</span>
          </label>
          <label>
            Start Year: <span>{movieDetailData.seriesStartYear || NOT_AVAILABLE}</span>
          </label>
          <label>
            End Year: <span>{movieDetailData.seriesEndYear || NOT_AVAILABLE}</span>
          </label>
          {movieDetailData.titleType.toLowerCase().indexOf("series") !== -1 && (
            <label>
              Number of Episodes: <span>{movieDetailData.numberOfEpisodes || NOT_AVAILABLE}</span>
            </label>
          )}
          <label>
            Running Time:
            <span>
              {movieDetailData.runningTimeInMinutes
                ? ` ${movieDetailData.runningTimeInMinutes} minutes`
                : NOT_AVAILABLE}
            </span>
          </label>
        </div>
        <img className="movie-details-image" src={movieDetailData.image.url} alt={movieDetailData.title} />
      </div>
      <Link to=".." relative="path" className="back-button">
        Back to explore
      </Link>
    </div>
  );
};
