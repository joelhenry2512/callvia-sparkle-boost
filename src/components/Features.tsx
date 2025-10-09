import { Phone, Calendar, Target, Clock, Shield, Award } from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: Phone,
    title: "Human-Like Voice Technology",
    description: "Advanced AI that sounds completely natural and builds trust with your prospects from the first hello.",
  },
  {
    icon: Calendar,
    title: "Automatic Appointment Setting",
    description: "Seamlessly books qualified appointments directly into your calendar without any manual intervention.",
  },
  {
    icon: Target,
    title: "Lead Qualification",
    description: "Intelligently screens prospects and only schedules appointments with qualified, interested leads.",
  },
  {
    icon: Clock,
    title: "24/7 Operation",
    description: "Works around the clock to maximize your lead conversion while you focus on closing deals.",
  },
  {
    icon: Award,
    title: "Insurance Expertise",
    description: "Trained specifically for life insurance conversations with industry-specific knowledge and compliance.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Enterprise-grade security with full compliance to insurance industry regulations and data protection standards.",
  },
];

const Features = () => {
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
    <section id="features" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="fade-up-element opacity-0 text-4xl md:text-5xl font-bold mb-4">
            Why Life Insurance Agents Choose CallVia
          </h2>
          <p className="fade-up-element opacity-0 animation-delay-200 text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI doesn't just automate communication - it builds relationships and converts prospects into appointments with industry-leading technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`fade-up-element opacity-0 animation-delay-${(index % 3 + 1) * 200} group bg-card rounded-2xl p-8 shadow-lg hover:shadow-glow transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-border/50 hover:border-primary/50 relative overflow-hidden`}
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-hero rounded-xl w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md group-hover:shadow-glow">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
