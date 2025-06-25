import { useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import ParticleBackground from "@/components/ParticleBackground";
import FloatingElements from "@/components/FloatingElements";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import { useAnimations } from "@/hooks/useAnimations";

export default function Home() {
  const { initializeAnimations } = useAnimations();

  useEffect(() => {
    // Initialize GSAP plugins
    if (typeof window !== 'undefined' && window.gsap) {
      window.gsap.registerPlugin(window.ScrollTrigger, window.TextPlugin);
    }

    // Initialize animations after a short delay
    const timer = setTimeout(() => {
      initializeAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, [initializeAnimations]);

  return (
    <div className="min-h-screen">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <ParticleBackground />
      <FloatingElements />
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
