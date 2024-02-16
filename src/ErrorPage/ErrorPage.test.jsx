import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import ErrorPage from "./ErrorPage";

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useRouteError: vi.fn(() => ({
    statusText: "Not Found",
    message: "This is a mock error message",
  })),
}));

describe("Going to a bad route", () => {
  it("shows an error information", () => {
    render(<ErrorPage />);

    expect(
      screen.getByText(/An unexpected error has occurred/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/Not Found/i)).toBeInTheDocument();

    expect(
      screen.getByText(/This is a mock error message/i)
    ).toBeInTheDocument();
  });
});
