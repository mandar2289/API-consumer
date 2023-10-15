export const constantText = {
  NOT_AVAILABLE: "Not available",
};

export const baseURL = "https://online-movie-database.p.rapidapi.com/title";
export const movieAPIHeaders = {
  "X-RapidAPI-Key": "f355218143mshc83adada07fd7b2p144e23jsnd94e50c6193c",
  "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
};

type RequestOptions = {
  method: string;
  headers: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
};

export const options: RequestOptions = {
  method: "GET",
  headers: movieAPIHeaders,
};
