import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import MissedCallCalculator from "@/components/MissedCallCalculator";
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
    <section id="audit" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            See What You're Losing
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Most locksmiths lose $3,000–$8,000/month in missed emergency calls. Find out your number in 30 seconds.
          </p>
        </div>
        <MissedCallCalculator />
      </div>
    </section>
    <CtaSection />
    <TestimonialsSection />
    <FaqSection />
    <FinalCtaSection />
    <Footer />
  </div>
);

export default Index;
