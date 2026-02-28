import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App/App";
import { expect, test, describe } from "vitest";

describe("Map Search Interactions", () => {
  test("toggles search context between Home and Away", async () => {
    render(<App />);
    
    // Default is 'away' (Places that Serve) based on App.jsx state
    const awayBtn = screen.getByRole("button", { name: /Places that Serve/i });
    const homeBtn = screen.getByRole("button", { name: /Make at Home/i });

    expect(awayBtn).toHaveClass("active");
    expect(homeBtn).not.toHaveClass("active");

    // Switch to Home
    fireEvent.click(homeBtn);

    expect(homeBtn).toHaveClass("active");
    expect(awayBtn).not.toHaveClass("active");
  });
});
