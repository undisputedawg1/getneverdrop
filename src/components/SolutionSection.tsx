import { Check } from "lucide-react";

const steps = [
  { title: "Caller Dials", desc: "A customer calls your business, day or night." },
  { title: "AI Answers Instantly", desc: "Your professional Voice AI agent picks up immediately, providing a seamless experience." },
  { title: "Information Captured", desc: "The AI gathers location, lock type, and urgency details through natural conversation." },
  { title: "Appointment Booked", desc: "The AI books directly into your calendar or dispatches to your available technician." },
];

const features = [
  { title: "Intelligent Call Handling", desc: "Understands complex requests and responds naturally." },
  { title: "Automated Booking", desc: "Integrates with your calendar for seamless appointments." },
  { title: "Complete Information", desc: "Captures all necessary details for efficient service." },
  { title: "Dispatch Integration", desc: "Notifies technicians with all job specifics instantly." },
  { title: "Customizable Greetings", desc: "Reflects your brand's professionalism and personality." },
  { title: "24/7 Availability", desc: "Never miss a call, even on holidays or weekends." },
];

const SolutionSection = () => (
  <section id="solution" className="py-10 md:py-20">
    <div className="container space-y-16">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663391846700/9x6qWjPXfvzkdqfAHJGQQV/hero-before-after-YcdTWB8RHdtzRtWGpXRAZu.webp"
          alt="Before and after comparison showing stressed locksmith vs. relaxed locksmith with booked appointments"
          className="rounded-3xl shadow-xl w-full"
          loading="lazy"
        />
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="font-heading text-3xl md:text-5xl text-foreground">Your Dedicated Voice AI Agent</h2>
            <p className="text-muted-foreground text-base md:text-lg">A cutting-edge AI designed specifically for locksmiths</p>
          </div>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-heading text-lg md:text-xl text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-muted rounded-2xl p-8 md:p-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="flex gap-3 items-start">
              <Check size={20} className="text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground text-sm md:text-base">{f.title}</h4>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
