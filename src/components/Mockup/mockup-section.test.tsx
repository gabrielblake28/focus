import { render, screen } from "@testing-library/react";
import MockupSection from "./mockup-section";

describe("MockupSection", () => {
  it("renders the mockup placeholder", () => {
    render(<MockupSection />);
    expect(
      screen.getByText("Productivity Rings Placeholder")
    ).toBeInTheDocument();
  });
});
