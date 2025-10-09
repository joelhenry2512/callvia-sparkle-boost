import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useEffect, useRef } from "react";

const plans = [
  {
    name: "Starter",
    price: "$297",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "50 AI calls per month",
      "Basic lead qualification",
      "Calendar integration",
      "Email support",
      "Basic analytics",
    ],
  },
  {
    name: "Professional",
    price: "$597",
    period: "/month",
    description: "Most popular for growing agencies",
    features: [
      "150 AI calls per month",
      "Advanced lead qualification",
      "Calendar integration",
      "Priority support",
      "Advanced analytics",
      "Custom voice training",
      "CRM integration",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For established agencies",
    features: [
      "Unlimited AI calls",
      "Premium lead qualification",
      "Multi-calendar support",
      "24/7 dedicated support",
      "White-label options",
      "Custom integrations",
      "Advanced AI customization",
      "Dedicated account manager",
    ],
  },
];

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-up-element");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="fade-up-element opacity-0 text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="fade-up-element opacity-0 animation-delay-200 text-xl text-muted-foreground">
            Choose the plan that fits your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`fade-up-element opacity-0 animation-delay-${(index + 1) * 200} relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${
                plan.popular
                  ? "border-primary shadow-glow scale-105"
                  : "border-border/50 hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-hero text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-gradient-hero rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-hero hover:opacity-90 text-primary-foreground shadow-lg hover:shadow-glow"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
