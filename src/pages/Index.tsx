import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import CtaSection from "@/components/CtaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background font-body">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <BenefitsSection />
    <CtaSection />
    <TestimonialsSection />
    <FaqSection />
    <FinalCtaSection />
    <Footer />
  </div>
);

export default Index;
