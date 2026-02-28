/** @vitest-environment jsdom */
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Seasonal Sips branding", () => {
  render(<App />);
  const brandingElements = screen.getAllByText(/Seasonal Sips/i);
  expect(brandingElements.length).toBeGreaterThan(0);
});
