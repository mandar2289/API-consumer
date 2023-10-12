import React, { useState } from "react";
import { useGetQuery } from "./hooks/useFetch";
import { MovieList } from "./components/MovieList";
import { movieAPIHeaders } from "./data/constants";
import { mapMovieData } from "./util";

import "./App.css";

type RequestOptions = {
  method: string;
  headers: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
};

function App() {
  const [keyword, setKeyword] = useState<string>("");
  const { data, loading, error, fetchData } = useGetQuery();

  const options: RequestOptions = {
    method: "GET",
    headers: movieAPIHeaders,
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword((prevKeyword) => e.target.value);
  };

  const handleSubmit = () => {
    const url = `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${keyword}`;
    fetchData(url, options);
  };

  return (
    <div className="container">
      <h1>Search Movie</h1>
      <input
        type="text"
        onChange={handleTextChange}
        value={keyword}
        placeholder="Enter a keyword..."
      ></input>
      <button onClick={handleSubmit} disabled={!keyword}>
        Submit
      </button>
      {loading ? <h2>Loading...</h2> : null}
      {error ? <h2>Error: {error}</h2> : null}
      {data && !loading && !error ? (
        <MovieList movieData={mapMovieData(data)} />
      ) : null}
    </div>
  );
}

export default App;
