import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="py-10 md:py-20">
    <div className="container grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
      <div className="space-y-6 animate-fade-up">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-[64px] leading-tight text-foreground">
          Never Miss Another Emergency Call
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
          Your 24/7 AI Locksmith Assistant is here. Empower your locksmith business with an AI that answers, books, and never sleeps—turning missed calls into booked jobs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#cta">
            <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-8 py-6 animate-pulse-slow">
              Get Your Free Missed Call Audit
            </Button>
          </a>
          <a href="#cta">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5 font-bold text-base px-8 py-6">
              Book a Free Demo
            </Button>
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Phone size={18} className="text-primary" />
          <span>Try our AI agent: Call now to see it in action</span>
        </div>
      </div>

      <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663391846700/9x6qWjPXfvzkdqfAHJGQQV/hero-ai-phone-KwU63BMETYJqvCHypxiekk.webp"
          alt="AI Voice Agent Interface showing booking appointment on smartphone"
          className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto lg:max-w-none"
          loading="eager"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
