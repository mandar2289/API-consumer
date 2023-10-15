import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { MovieSearchHome } from "./MovieSearchHome";

describe("Home component", () => {
  it("renders without errors", () => {
    render(<MovieSearchHome />);
  });

  it("check if home is rendered correctly!", async () => {
    render(<MovieSearchHome />);

    await waitFor(() => {
      expect(screen.getByText("Explore Movies and Series")).toBeInTheDocument();
    });
  });

  it("Disables submit button without a keyword", async () => {
    render(<MovieSearchHome />);

    const submitButton = screen.getByText("Submit");

    // Initially, the submit button should be disabled
    expect(submitButton).toBeDisabled();
  });
});
