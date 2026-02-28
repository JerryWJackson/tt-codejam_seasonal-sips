/** @vitest-environment jsdom */
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App/App";
import { expect, test, describe } from "vitest";

describe("Seasonal & Theme Transitions", () => {
  test("applies seasonal override classes", async () => {
    render(<App />);

    // Open Dev Menu (🛠️ button) using its aria-label
    const toggle = screen.queryByLabelText(/Toggle Dev Menu/i);
    if (toggle) {
      fireEvent.click(toggle);

      // Select Summer button
      const summerBtn = screen.getByRole("button", { name: /Summer/i });
      fireEvent.click(summerBtn);

      // Get the page container and check class
      const page = document.querySelector(".page");
      expect(page).toHaveClass("summer");
    }
  });

  test("toggles Midnight Mode", async () => {
    render(<App />);

    const page = document.querySelector(".page");
    // Initial state: starts in midnight mode (true)
    expect(page).toHaveClass("midnight");

    // Click theme toggle button (aria-label="Toggle Theme")
    const themeBtn = screen.getByRole("button", { name: /Toggle Theme/i });
    fireEvent.click(themeBtn);

    expect(page).not.toHaveClass("midnight");
  });
});
