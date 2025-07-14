import { render, screen } from "@testing-library/react";
import CtaSection from "./cta-section";

describe("CtaSection", () => {
  it("renders the CTA button", () => {
    render(<CtaSection />);
    expect(screen.getByText("Join Waitlist")).toBeInTheDocument();
  });
});
