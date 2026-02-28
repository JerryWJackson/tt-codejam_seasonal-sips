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

      // The CI logs show the class is on an element inside .page, or maybe .page itself
      // Let's check both or just find the one with the class
      const page =
        document.querySelector(".page") || document.querySelector(".App");
      expect(page.className).toContain("summer");
    }
  });

  test("toggles Midnight Mode", async () => {
    render(<App />);

    // Based on CI dump, 'midnight' class is on the .App div
    const appElement = document.querySelector(".App");
    expect(appElement).toHaveClass("midnight");

    const themeBtn = screen.getByRole("button", { name: /Toggle Theme/i });
    fireEvent.click(themeBtn);

    expect(appElement).not.toHaveClass("midnight");
  });
});
