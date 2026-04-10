import { Phone, TrendingUp, Clock, Users, AlertTriangle } from "lucide-react";

const problems = [
  { icon: Phone, title: "23% of Calls Missed", desc: "Small trade businesses, including locksmiths, miss an average of 23% of incoming calls. That's revenue walking out the door." },
  { icon: TrendingUp, title: "$200-$500 Per Call", desc: "Each missed emergency call costs your business between $200-$500 in immediate lost revenue. That adds up fast." },
  { icon: Clock, title: "60% After Hours", desc: "60% of locksmith calls happen after 5 PM or on weekends—prime time for missed opportunities if you're short-staffed." },
  { icon: Users, title: "85% Never Call Back", desc: "When callers can't reach you, 85% won't leave a voicemail. They simply call the next locksmith on Google." },
];

const ProblemSection = () => (
  <section id="problem" className="py-10 md:py-20 bg-gradient-to-b from-muted to-background">
    <div className="container space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="font-heading text-3xl md:text-5xl text-foreground">Why Locksmiths Are Losing Business</h2>
        <p className="text-muted-foreground text-base md:text-lg">The harsh reality of missed opportunities and lost revenue</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {problems.map((p, i) => (
          <div key={i} className="bg-card rounded-xl border-l-4 border-l-primary p-6 md:p-8 hover-lift shadow-sm">
            <div className="flex items-start gap-4">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                <p.icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-3 bg-highlight border border-highlight-border rounded-xl p-6">
        <AlertTriangle size={24} className="text-secondary shrink-0 mt-0.5" />
        <p className="text-sm md:text-base text-foreground">
          <strong>The Bottom Line:</strong> Your competitors are capturing the calls you're missing. Every unanswered phone is a lost customer and lost revenue.
        </p>
      </div>
    </div>
  </section>
);

export default ProblemSection;
