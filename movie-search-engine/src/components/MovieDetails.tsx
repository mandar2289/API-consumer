import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../data/constants";
import "./movieDetails.css";

interface MovieDetail {
  title: string;
  image: {
    url: string;
  };
  numberOfEpisodes: number;
  seriesStartYear: number;
  titleType: string;
}

export const MovieDetails: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();

  const [movieDetailData, setMovieDetailData] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const url = `https://online-movie-database.p.rapidapi.com/title/get-details?tconst=${movieId}`;

  useEffect(() => {
    const getMovieDetails = async (url: string, options: object) => {
      try {
        const response = await fetch(url, options);
        if (response.ok) {
          const json: MovieDetail = await response.json();
          setMovieDetailData(json);
        } else {
          throw new Error("Failed to fetch movie details");
        }
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    getMovieDetails(url, options);
  }, [movieId, url]);

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
      <img className="movie-details-image" src={movieDetailData.image.url} alt={movieDetailData.title} />
      <h2 className="movie-details-title">{movieDetailData.title}</h2>
      <div className="movie-details-info">
        <h3>Type: {movieDetailData.titleType}</h3>
        <h3>Start Year: {movieDetailData.seriesStartYear}</h3>
        <h3>Number of Episodes: {movieDetailData.numberOfEpisodes}</h3>
      </div>
    </div>
  );
};
