import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Since implementing VoiceAI's Voice AI agent, our after-hours bookings have skyrocketed by 30%. We're capturing leads we never could before, directly impacting our bottom line!",
    author: "John D.",
    title: "Owner, Apex Locksmith Services, Toronto",
  },
  {
    quote: "The AI agent handles all the initial inquiries and basic bookings, freeing up my time to focus on actual jobs. It's like having an extra employee without the payroll headache.",
    author: "Maria S.",
    title: "Mobile Locksmith Pro, Vancouver",
  },
  {
    quote: "My customers consistently comment on the instant, professional response they receive. It makes us look incredibly reliable and modern, even during late-night emergencies.",
    author: "Ahmed K.",
    title: "24/7 Secure Locks, Montreal",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={18} className="fill-secondary text-secondary" />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="py-10 md:py-20">
    <div className="container space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="font-heading text-3xl md:text-5xl text-foreground">What Our Partners Say</h2>
        <p className="text-muted-foreground text-base md:text-lg">Real results from locksmith businesses</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card rounded-xl border-t-4 border-t-primary p-6 md:p-8 hover-lift shadow-sm">
            <Stars />
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 italic">"{t.quote}"</p>
            <div>
              <p className="font-semibold text-foreground text-sm">{t.author}</p>
              <p className="text-muted-foreground text-xs">{t.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
