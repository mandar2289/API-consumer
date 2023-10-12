export type MovieDetail = {
  id: string;
  type: string;
  title: string;
  image: string;
};

export interface Movie {
  // Define the properties and their types for the movie object
  results: MovieDetail;
}

export interface Error {
  // Define the properties and their types for the error object
}

export interface MovieListProps {
  movieData: MovieDetail[];
}

export interface ApiResponse<T> {
  results: T[];
}

export interface Detail {
  id: string;
  titleType: {
    text: string;
  };
  titleText: {
    text: string;
  };
  primaryImage: {
    url: string;
  };
  // ... other properties if there are more in the object
}
