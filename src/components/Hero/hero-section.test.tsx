import { render, screen } from "@testing-library/react";
import HeroSection from "./hero-section";

describe("HeroSection", () => {
  it("renders the headline", () => {
    render(<HeroSection />);
    expect(
      screen.getByText("Unlock Your Productivity Potential with Focus")
    ).toBeInTheDocument();
  });
});
