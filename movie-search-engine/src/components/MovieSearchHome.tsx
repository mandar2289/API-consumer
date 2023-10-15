import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useFetchAPI } from "../hooks/useFetch";
import { MovieList } from "./MovieList";
import { options } from "../data/constants";
import { mapMovieData } from "../util";

import "./movieSearchHome.css";

export const MovieSearchHome: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [showMovieList, setShowMovieList] = useState<boolean>(false);

  const { data, loading, error, fetchData } = useFetchAPI();

  const storedKeyword: string | null = sessionStorage.getItem("searchKeyword");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword((prevKeyword) => e.target.value);
  };

  const handleSubmit = () => {
    const url = `https://online-movie-database.p.rapidapi.com/title/find?q=${keyword}`;
    fetchData(url, options);
    setShowMovieList(true);
    sessionStorage.setItem("searchKeyword", keyword);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && keyword) {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (storedKeyword && !keyword) {
      setKeyword(storedKeyword);
      const url = `https://online-movie-database.p.rapidapi.com/title/find?q=${storedKeyword}`;
      fetchData(url, options);
      setShowMovieList(true);
    }

    window.addEventListener("beforeunload", () => {
      sessionStorage.removeItem("searchKeyword");
    });

    return () => {
      window.removeEventListener("beforeunload", () => {
        sessionStorage.removeItem("searchKeyword");
      });
    };
  }, [storedKeyword, fetchData, keyword]);

  return (
    <>
      <label className="search-label">Explore Movies and Series</label>
      <input
        className="movie-search-input"
        type="text"
        onChange={handleTextChange}
        value={keyword}
        placeholder="Enter a keyword..."
        onKeyPress={handleKeyPress}
      ></input>
      <button className="submit-button" onClick={handleSubmit} disabled={!keyword}>
        Submit
      </button>
      {loading ? <h2>Loading...</h2> : null}
      {error ? <h2>Error: {error}</h2> : null}
      {data && !loading && !error && showMovieList ? <MovieList movieData={mapMovieData(data)} /> : null}
    </>
  );
};
