/** @vitest-environment jsdom */
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App/App";

describe("Seasonal & Theme Transitions", () => {
  test("applies seasonal override classes", async () => {
    render(<App />);

    // Open Dev Menu (🛠️ button)
    const toggle = screen.queryByLabelText(/Toggle Dev Menu/i);
    if (toggle) {
      fireEvent.click(toggle);

      // Select Summer button
      const summerBtn = screen.getByRole("button", { name: /Summer/i });
      fireEvent.click(summerBtn);

      const page = document.querySelector(".page");
      expect(page).toHaveClass("summer");
    }
  });

  test("toggles Midnight Mode", async () => {
    render(<App />);

    const page = document.querySelector(".page");
    expect(page).toHaveClass("midnight");

    const themeBtn = screen.getByRole("button", { name: /Toggle Theme/i });
    fireEvent.click(themeBtn);

    expect(page).not.toHaveClass("midnight");
  });
});
