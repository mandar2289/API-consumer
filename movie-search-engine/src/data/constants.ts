export const constantText = {
  NOT_AVAILABLE: "Not available",
};

export const baseURL = "https://online-movie-database.p.rapidapi.com/title";
export const movieAPIHeaders = {
  "X-RapidAPI-Key": "750fc05705msh3207e8b6a871ca8p12d574jsn9184506d1edf",
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
