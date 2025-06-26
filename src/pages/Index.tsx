
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { JoinSection } from "@/components/JoinSection";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-knight-darker tech-grid">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;
