export type MovieListRes = {
  id: string;
  type: string;
  title: string;
  image: string;
};

// export interface Movie {
//   results: MovieListRes;
// }

export interface Error {}

export interface MovieListProps {
  movieData: MovieListRes[];
}

export interface ApiResponse<T> {
  results: T[];
}

export interface Detail {
  id: string;
  titleType: string;
  title: string;
  image: Image | null;
}

interface Image {
  url: string;
}

export interface MovieDetailsResponse {
  id: string;
  image: {
    url: string;
  };
  runningTimeInMinutes: number;
  numberOfEpisodes: number;
  seriesEndYear: number;
  seriesStartYear: number;
  title: string;
  titleType: string;
  year: number;
}
