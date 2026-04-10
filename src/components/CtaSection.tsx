import { Button } from "@/components/ui/button";

const CtaSection = () => (
  <section id="cta" className="py-10 md:py-20 bg-cta-gradient">
    <div className="container text-center max-w-3xl mx-auto space-y-6">
      <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground">Ready to Stop Losing Business?</h2>
      <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed">
        Schedule a personalized demo to see how our Voice AI agent can transform your locksmith business. Our team will show you exactly how much revenue you're currently losing and how we can help you capture every call.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
        <Button size="lg" className="bg-background text-primary hover:bg-background/90 font-bold text-base px-8 py-6">
          Schedule Your Demo
        </Button>
        <Button size="lg" className="bg-white text-primary border-2 border-white hover:bg-white/90 font-bold text-base px-8 py-6">
          Book a Consultation
        </Button>
      </div>
    </div>
  </section>
);

export default CtaSection;
