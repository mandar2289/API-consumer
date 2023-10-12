import { MovieListProps } from "../Type/type";
import { Movie } from "./Movie";

export const MovieList: React.FC<MovieListProps> = ({ movieData }) => {
  return (
    <>
      {movieData.map((movie) => (
        <div key={movie.id}>
          <Movie movieDetail={movie} />
        </div>
      ))}
    </>
  );
};
