import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How quickly can the Voice AI agent be set up?", a: "Typically within 24-48 hours. We handle all the technical setup so you can start capturing calls immediately." },
  { q: "Is it customizable to my business?", a: "Absolutely. Greetings, responses, and booking rules are fully tailored to your locksmith business and brand voice." },
  { q: "What if a call needs human intervention?", a: "The AI is designed to seamlessly transfer complex calls to a human agent if needed, ensuring no customer is left hanging." },
  { q: "How does pricing work after the trial?", a: "Transparent, performance-based pricing options available. We design pricing to ensure you see a clear ROI from day one." },
];

const FaqSection = () => (
  <section className="py-10 md:py-20 bg-muted">
    <div className="container max-w-3xl space-y-10">
      <div className="text-center space-y-3">
        <h2 className="font-heading text-3xl md:text-5xl text-foreground">Frequently Asked Questions</h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
            <AccordionTrigger className="text-left font-semibold text-foreground text-sm md:text-base hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;
