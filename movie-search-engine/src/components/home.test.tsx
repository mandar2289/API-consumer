import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Home component", () => {
  it("renders without errors", () => {
    render(<Home />);
  });

  it("check if home is rendered correctly!", async () => {
    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText("Explore Movies and Series")).toBeInTheDocument();
    });
  });

  it("Disables submit button without a keyword", async () => {
    render(<Home />);

    const submitButton = screen.getByText("Submit");

    // Initially, the submit button should be disabled
    expect(submitButton).toBeDisabled();
  });
});
