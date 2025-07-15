import "./index.css";
import HeroSection from "./components/Hero/hero-section.tsx";
import FeaturesSection from "./components/Features/features-section.tsx";
import MockupSection from "./components/Mockup/mockup-section.tsx";
import CtaSection from "./components/Cta/cta-section.tsx";

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MockupSection />
      <FeaturesSection />
      <CtaSection />
    </div>
  );
}

export default App;
