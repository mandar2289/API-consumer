import React, { useState } from "react";
import { useFetchAPI } from "../hooks/useFetch";
import { MovieList } from "../components/MovieList";
import { options } from "../data/constants";
import { mapMovieData } from "../util";

import "./home.css";

export const Home: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [showMovieList, setShowMovieList] = useState<boolean>(false);

  const { data, loading, error, fetchData } = useFetchAPI();

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword((prevKeyword) => e.target.value);
  };

  const handleSubmit = () => {
    const url = `https://online-movie-database.p.rapidapi.com/title/find?q=${keyword}`;
    fetchData(url, options);
    setShowMovieList(true);
  };

  return (
    <>
      <input type="text" onChange={handleTextChange} value={keyword} placeholder="Enter a keyword..."></input>
      <button onClick={handleSubmit} disabled={!keyword}>
        Submit
      </button>
      {loading ? <h2>Loading...</h2> : null}
      {error ? <h2>Error: {error}</h2> : null}
      {data && !loading && !error && showMovieList ? <MovieList movieData={mapMovieData(data)} /> : null}
    </>
  );
};
