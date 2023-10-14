import { Link } from "react-router-dom";
import { extractId } from "../util";
import { MovieListProps, MovieListRes } from "../Type/type";

import "./movieList.css";

export const MovieList: React.FC<MovieListProps> = ({ movieData }) => {
  return (
    <div className="movie-list-container">
      <>
        {movieData?.length > 0 ? (
          movieData.map((movie: MovieListRes) => (
            <div key={movie.id} className="movie-item" data-testid="movie-item">
              <img src={movie?.image} alt={movie?.title} />
              <Link
                to={`/movies/${extractId(movie.id)}`}
                className="movie-title"
                data-testid={`movie-link-${movie.id}`}
              >
                {movie?.title}
              </Link>
            </div>
          ))
        ) : (
          <p data-testid="no-records-message">No records found, try other keyword</p>
        )}
      </>
    </div>
  );
};
