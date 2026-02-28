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

      // The App div holds the seasonal and midnight classes
      const appElement = document.querySelector(".App");
      expect(appElement).toHaveClass("summer");
    }
  });

  test("toggles Midnight Mode", async () => {
    render(<App />);

    // The App div holds the seasonal and midnight classes
    const appElement = document.querySelector(".App");
    expect(appElement).toHaveClass("midnight");

    const themeBtn = screen.getByRole("button", { name: /Toggle Theme/i });
    fireEvent.click(themeBtn);

    expect(appElement).not.toHaveClass("midnight");
  });
});
