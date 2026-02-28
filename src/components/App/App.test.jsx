import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect, test } from "vitest";

test("renders Seasonal Sips branding", () => {
  render(<App />);
  const linkElement = screen.getByText(/Seasonal Sips/i);
  expect(linkElement).toBeInTheDocument();
});
