import { Clock, TrendingUp, Users, Zap, Phone } from "lucide-react";

const benefits = [
  { icon: Clock, title: "24/7/365 Availability", desc: "Never miss a lead again. Our AI works around the clock, even on holidays, ensuring you capture every emergency call." },
  { icon: TrendingUp, title: "Massive Revenue Recovery", desc: "Turn those lost $200-$500 calls into booked jobs. Our AI pays for itself by converting calls you would have otherwise missed." },
  { icon: Users, title: "Enhanced Customer Satisfaction", desc: "Provide instant, professional service every time. Your customers will appreciate the immediate response, boosting your reputation." },
  { icon: Zap, title: "Cost-Efficiency", desc: "Achieve 8:1 cost savings compared to hiring a human receptionist, drastically reducing your overhead." },
  { icon: Phone, title: "Effortless Scalability", desc: "Handle any call volume without increasing your staffing costs or operational complexity." },
  { icon: Zap, title: "Modern & Professional Image", desc: "Position your business as a tech-forward leader, standing out from the competition." },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-10 md:py-20 bg-gradient-to-b from-muted to-background">
    <div className="container space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="font-heading text-3xl md:text-5xl text-foreground">Why Our Voice AI Agent is a Game-Changer</h2>
        <p className="text-muted-foreground text-base md:text-lg">Unbeatable benefits for your locksmith business</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b, i) => (
          <div key={i} className="bg-card rounded-xl border-t-4 border-t-primary p-6 md:p-8 hover-lift shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cta-gradient mb-4">
              <b.icon size={24} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading text-lg md:text-xl text-foreground mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
