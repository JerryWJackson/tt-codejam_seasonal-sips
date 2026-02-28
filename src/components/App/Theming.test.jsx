import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App/App";
import { expect, test, describe } from "vitest";

describe("Seasonal & Theme Transitions", () => {
  test("applies seasonal override classes", async () => {
    render(<App />);
    
    // Open Dev Menu
    const toggle = screen.getByLabelText(/Toggle Dev Menu/i);
    fireEvent.click(toggle);

    // Select Summer
    const summerBtn = screen.getByRole("button", { name: /Summer/i });
    fireEvent.click(summerBtn);

    // Get the page element
    const page = document.querySelector(".page");
    expect(page).toHaveClass("summer");
    expect(page).not.toHaveClass("winter");
  });

  test("toggles Midnight Mode", async () => {
    render(<App />);
    
    const page = document.querySelector(".page");
    // Default is midnight = true based on App.jsx state
    expect(page).toHaveClass("midnight");

    // Click theme toggle button
    const themeBtn = screen.getByRole("button", { name: /toggle theme/i });
    fireEvent.click(themeBtn);

    expect(page).not.toHaveClass("midnight");
  });
});
