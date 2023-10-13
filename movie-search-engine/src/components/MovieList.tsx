import { Link } from "react-router-dom";
import { extractId } from "../util";
import { MovieListProps, MovieDetail } from "../Type/type";

import "./movieList.css";

export const MovieList: React.FC<MovieListProps> = ({ movieData }) => {
  return (
    <div className="movie-list-container">
      <>
        {movieData?.length > 0 ? (
          movieData.map((movie: MovieDetail) => (
            <div key={movie.id} className="movie-item">
              <img src={movie?.image} alt={movie?.title} />
              <Link to={`/movies/${extractId(movie.id)}`} className="movie-title">
                {movie?.title}
              </Link>
            </div>
          ))
        ) : (
          <p>No records found, try other keyword</p>
        )}
      </>
    </div>
  );
};
