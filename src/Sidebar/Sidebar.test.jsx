import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("renders the sidebar", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    const sidebar = screen.getByRole("complementary");
    expect(sidebar).toBeInTheDocument();
  });

  it("renders a new job button", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    const newJobButton = screen.getByRole("button", { name: /new job/i });
    expect(newJobButton).toBeInTheDocument();
  });
});
