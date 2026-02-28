/** @vitest-environment jsdom */
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App/App";

describe("Drink Filtering Logic", () => {
  test("filters drinks by alcohol type", async () => {
    render(<App />);

    const toggle = screen.queryByLabelText(/Toggle Dev Menu/i);
    if (toggle) {
      fireEvent.click(toggle);
      const springBtn = screen.getByRole("button", { name: /Spring/i });
      fireEvent.click(springBtn);
    }

    const initialDrinks = screen.getAllByRole("listitem", {
      className: /card-item/i,
    });
    expect(initialDrinks.length).toBeGreaterThan(0);

    // Using exact match string to avoid matching "Ginger Beer"
    const vodkaCheckbox = screen.getByRole("checkbox", {
      name: "Vodka Vodka",
      exact: true,
    });
    fireEvent.click(vodkaCheckbox);

    expect(screen.getByText(/Lemon Drop/i)).toBeInTheDocument();

    const filteredDrinks = screen.getAllByRole("heading", { level: 4 });
    const drinkNames = filteredDrinks.map((h) => h.textContent);

    expect(drinkNames).toContain("Lemon Drop");
    expect(drinkNames).not.toContain("Bourbon and Peach Smash");
  });

  test("filters drinks by multiple categories (Alcohol + Ingredient)", async () => {
    render(<App />);

    const toggle = screen.queryByLabelText(/Toggle Dev Menu/i);
    if (toggle) {
      fireEvent.click(toggle);
      const springBtn = screen.getByRole("button", { name: /Spring/i });
      fireEvent.click(springBtn);
    }

    // Using exact string to avoid matching "Ginger Beer"
    // Note: The CI logs show the accessible name is "Gin Gin" because of the double label issue
    const ginCheckbox = screen.getByRole("checkbox", {
      name: "Gin Gin",
      exact: true,
    });
    fireEvent.click(ginCheckbox);

    const limeCheckbox = screen.getByRole("checkbox", { name: /Lime/i });
    fireEvent.click(limeCheckbox);

    const filteredDrinks = screen.getAllByRole("heading", { level: 4 });
    const drinkNames = filteredDrinks.map((h) => h.textContent);

    expect(drinkNames).toContain("Gimlet");
    expect(drinkNames).not.toContain("Lemon Drop");
  });
});
