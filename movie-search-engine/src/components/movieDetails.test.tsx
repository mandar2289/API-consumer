import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { useFetchAPIMock } from "../mock/useFetchAPIMock";

jest.mock("../hooks/useFetch", () => ({
  useFetchAPI: useFetchAPIMock,
}));

const mockMovieDetailData = {
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
};

test("renders movie details component", async () => {
  useFetchAPIMock.mockReturnValueOnce({
    data: mockMovieDetailData,
    loading: false,
    error: null,
    fetchData: jest.fn().mockResolvedValue(mockMovieDetailData),
  });

  render(
    <MemoryRouter initialEntries={["/movies/tt0944947"]}>
      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>
    </MemoryRouter>
  );

  // Loading message should not be present
  await waitFor(() => {
    expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
  });

  // Error message should not be present
  expect(screen.queryByText(/Error loading movie details/i)).not.toBeInTheDocument();

  // Movie details should be displayed
  expect(screen.getByText(/Game of Thrones/i)).toBeInTheDocument();
  expect(screen.getByText(/Type: tvSeries/i)).toBeInTheDocument();
  expect(screen.getByText(/Start Year: 2011/i)).toBeInTheDocument();
  expect(screen.getByText(/End Year: 2019/i)).toBeInTheDocument();
  expect(screen.getByText(/Number of Episodes: 73/i)).toBeInTheDocument();
  expect(screen.getByText(/Running Time: 57 minutes/i)).toBeInTheDocument();
  expect(screen.getByAltText(/Game of Thrones/i)).toHaveAttribute(
    "src",
    "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
  );
});
