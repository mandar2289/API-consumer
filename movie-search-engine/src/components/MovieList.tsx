import { MovieListProps } from "../Type/type";
import { Movie } from "./Movie";
import "./movieList.css";

export const MovieList: React.FC<MovieListProps> = ({ movieData }) => {
  return (
    <div className="movie-list-container">
      {movieData.map((movie) => (
        <div key={movie.id} className="movie-item">
          <Movie movieDetail={movie} />
        </div>
      ))}
    </div>
  );
};
