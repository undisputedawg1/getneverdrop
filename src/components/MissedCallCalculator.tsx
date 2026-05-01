import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertTriangle, TrendingDown, Calendar, FileDown, Loader2 } from "lucide-react";

// 🔗 Replace with your real Clay webhook URL when ready
const CLAY_WEBHOOK_URL = "YOUR_CLAY_WEBHOOK_URL_HERE";
const CALENDLY_URL = "https://calendly.com/tashm-thekairos/30min";

interface CalculatorData {
  callsPerWeek: number;
  missedPercent: number;
  avgJobValue: number;
  email: string;
}

const formatCurrency = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const MissedCallCalculator = () => {
  const [step, setStep] = useState<"form" | "email" | "results">("form");
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<CalculatorData>({
    callsPerWeek: 20,
    missedPercent: 25,
    avgJobValue: 150,
    email: "",
  });

  const calculateResults = () => {
    const missedCallsPerWeek = (formData.callsPerWeek * formData.missedPercent) / 100;
    const missedCallsPerMonth = missedCallsPerWeek * 4.33;
    const missedCallsPerYear = missedCallsPerWeek * 52;
    // Assume ~75% of missed calls would have converted to a job
    const conversionRate = 0.75;
    const lostMonthly = Math.round(missedCallsPerMonth * formData.avgJobValue * conversionRate);
    const lostYearly = Math.round(missedCallsPerYear * formData.avgJobValue * conversionRate);
    return { lostMonthly, lostYearly, missedCallsPerMonth: Math.round(missedCallsPerMonth) };
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setSubmitting(true);
    const { lostMonthly, lostYearly } = calculateResults();

    const payload = {
      email: formData.email,
      calls_per_week: formData.callsPerWeek,
      missed_percent: formData.missedPercent,
      avg_job_value: formData.avgJobValue,
      calculated_loss_monthly: lostMonthly,
      calculated_loss_yearly: lostYearly,
      timestamp: new Date().toISOString(),
      source: "missed_call_calculator",
    };

    try {
      if (CLAY_WEBHOOK_URL && !CLAY_WEBHOOK_URL.startsWith("YOUR_")) {
        await fetch(CLAY_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
    } catch (err) {
      console.error("Webhook error:", err);
    } finally {
      setSubmitting(false);
      setStep("results");
    }
  };

  const results = calculateResults();

  return (
    <div className="bg-card border border-border rounded-2xl shadow-xl p-6 md:p-10 max-w-2xl mx-auto">
      {step === "form" && (
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              <AlertTriangle className="w-4 h-4" /> Missed Call Audit
            </div>
            <h3 className="font-heading text-2xl md:text-3xl text-foreground">
              Calculate Your Lost Revenue
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Answer 3 quick questions to see exactly how much money you're leaving on the table.
            </p>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="calls">How many calls do you receive per week?</Label>
              <Input
                id="calls"
                type="number"
                min={1}
                value={formData.callsPerWeek}
                onChange={(e) =>
                  setFormData({ ...formData, callsPerWeek: Number(e.target.value) || 0 })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="missed">What % of calls do you miss? (after hours, busy, etc.)</Label>
              <Input
                id="missed"
                type="number"
                min={0}
                max={100}
                value={formData.missedPercent}
                onChange={(e) =>
                  setFormData({ ...formData, missedPercent: Number(e.target.value) || 0 })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="value">What's your average job value? ($)</Label>
              <Input
                id="value"
                type="number"
                min={0}
                value={formData.avgJobValue}
                onChange={(e) =>
                  setFormData({ ...formData, avgJobValue: Number(e.target.value) || 0 })
                }
              />
            </div>
          </div>

          <Button
            size="lg"
            className="w-full bg-cta-gradient text-primary-foreground hover:opacity-90 font-bold text-base py-6"
            onClick={() => setStep("email")}
            disabled={!formData.callsPerWeek || !formData.avgJobValue}
          >
            Calculate My Loss →
          </Button>
        </div>
      )}

      {step === "email" && (
        <form onSubmit={handleEmailSubmit} className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-heading text-2xl md:text-3xl text-foreground">
              Where should we send your full report?
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Get your personalized missed-call audit and revenue-recovery plan.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Business Email</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="you@yourbusiness.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full bg-cta-gradient text-primary-foreground hover:opacity-90 font-bold text-base py-6"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Calculating...
              </>
            ) : (
              "Show Me My Results →"
            )}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            We'll never share your email. Unsubscribe anytime.
          </p>
        </form>
      )}

      {step === "results" && (
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-semibold">
              <TrendingDown className="w-4 h-4" /> Your Results
            </div>
            <h3 className="font-heading text-2xl md:text-3xl text-foreground">
              You're losing serious money.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-cta-gradient text-primary-foreground text-center">
              <p className="text-sm uppercase tracking-wide opacity-90">Lost / Month</p>
              <p className="font-heading text-3xl md:text-4xl mt-2">
                {formatCurrency(results.lostMonthly)}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-foreground text-background text-center">
              <p className="text-sm uppercase tracking-wide opacity-80">Lost / Year</p>
              <p className="font-heading text-3xl md:text-4xl mt-2">
                {formatCurrency(results.lostYearly)}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-muted text-sm text-muted-foreground text-center">
            Based on ~{results.missedCallsPerMonth} missed calls per month at{" "}
            {formatCurrency(formData.avgJobValue)} avg job value.
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button
                size="lg"
                className="w-full bg-cta-gradient text-primary-foreground hover:opacity-90 font-bold py-6"
              >
                <Calendar className="w-5 h-5" /> Book a Free Demo
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 font-bold py-6"
              onClick={() => setStep("form")}
            >
              <FileDown className="w-5 h-5" /> Recalculate
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MissedCallCalculator;
