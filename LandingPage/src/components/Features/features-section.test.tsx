import { render, screen } from "@testing-library/react";
import FeaturesSection from "./features-section";

describe("FeaturesSection", () => {
  it("renders all feature cards", () => {
    render(<FeaturesSection />);
    expect(screen.getByText("App Time Tracking")).toBeInTheDocument();
    expect(screen.getByText("Focus Sessions")).toBeInTheDocument();
    expect(screen.getByText("Progress Visualization")).toBeInTheDocument();
  });
});
