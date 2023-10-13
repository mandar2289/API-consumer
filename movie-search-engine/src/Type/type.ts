export type MovieDetail = {
  id: string;
  type: string;
  title: string;
  image: string;
};

export interface Movie {
  results: MovieDetail;
}

export interface Error {}

export interface MovieListProps {
  movieData: MovieDetail[];
}

export interface ApiResponse<T> {
  results: T[];
}

export interface MovieDetailResponse<T> {
  
}

export interface Detail {
  id: string;
  titleType: string;
  title: string;
  image: {
    url: string;
  };
}
