/** @vitest-environment jsdom */
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App/App";
import { expect, test, describe } from "vitest";

describe("Map Search Interactions", () => {
  test("toggles search context between Home and Away", async () => {
    render(<App />);

    const awayBtn = screen.getByRole("button", { name: /Places that Serve/i });
    const homeBtn = screen.getByRole("button", { name: /Make at Home/i });

    expect(awayBtn).toHaveClass("active");

    fireEvent.click(homeBtn);
    expect(homeBtn).toHaveClass("active");
    expect(awayBtn).not.toHaveClass("active");
  });
});
