export const useFetchAPIMock = jest.fn();

interface FetchDataResponse {
  data: any;
}

useFetchAPIMock.mockImplementation(() => {
  const fetchData = async (url: string, options: object): Promise<FetchDataResponse> => {

    if (url === "https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt0944947") {
      return Promise.resolve({
        data: {
          id: "/title/tt0944947/",
          image: {
            height: 1500,
            id: "/title/tt0944947/images/rm3885121281",
            url: "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
            width: 1000,
          },
          runningTimeInMinutes: 57,
          nextEpisode: "/title/tt1480055/",
          numberOfEpisodes: 73,
          seriesEndYear: 2019,
          seriesStartYear: 2011,
          title: "Game of Thrones",
          titleType: "tvSeries",
          year: 2011,
        },
      });
    }

    throw new Error("Unexpected URL: " + url);
  };

  return {
    data: null,
    loading: false,
    error: null,
    fetchData, 
  };
});
