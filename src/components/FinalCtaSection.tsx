import { Button } from "@/components/ui/button";

const FinalCtaSection = () => (
  <section className="py-10 md:py-20 bg-cta-gradient">
    <div className="container text-center max-w-3xl mx-auto space-y-6">
      <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground">Ready to Transform Your Locksmith Business?</h2>
      <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed">
        Stop losing revenue to missed calls. Schedule a demo today and discover how VoiceAI can help you capture every opportunity.
      </p>
      <div className="pt-2">
        <Button size="lg" className="bg-background text-primary hover:bg-background/90 font-bold text-base px-8 py-6">
          Schedule Your Demo Now
        </Button>
      </div>
    </div>
  </section>
);

export default FinalCtaSection;
