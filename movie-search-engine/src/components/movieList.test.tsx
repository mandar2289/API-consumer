import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MovieList } from "./MovieList";

const mockMovieData = [
  {
    id: "123",
    title: "Movie 1",
    image: "movie1.jpg",
    type: "movie"
  },
  {
    id: "456",
    title: "Movie 2",
    image: "movie2.jpg",
    type: "movie"
  },
];

describe("MovieList component", () => {
  it("renders movie items correctly", () => {
    render(
      <MemoryRouter>
        <MovieList movieData={mockMovieData} />
      </MemoryRouter>
    );

    const movieItems = screen.getAllByTestId("movie-item");

    expect(movieItems).toHaveLength(mockMovieData.length);

    movieItems.forEach((item, index) => {
      const movie = mockMovieData[index];
      const movieTitle = screen.getByText(movie.title);
      const movieImage = item.querySelector("img");

      expect(movieTitle).toBeInTheDocument();
      expect(movieImage).toHaveAttribute("src", movie.image);
      expect(movieImage).toHaveAttribute("alt", movie.title);
    });
  });

  it("displays 'No records found' message when movieData is empty", () => {
    render(
      <MemoryRouter>
        <MovieList movieData={[]} />
      </MemoryRouter>
    );

    const noRecordsMessage = screen.getByText("No records found, try other keyword");

    expect(noRecordsMessage).toBeInTheDocument();
  });
});
