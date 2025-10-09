import { useEffect, useRef, useState } from "react";
import { Shield, Lock, Award } from "lucide-react";

const stats = [
  { label: "Active Agents", value: "300+", icon: null },
  { label: "Show Rate", value: "85%", icon: null },
  { label: "Clients Reached", value: "50K+", icon: null },
  { label: "ROI Average", value: "8.5x", icon: null },
];

const badges = [
  { icon: Shield, label: "SOC 2 Compliant" },
  { icon: Lock, label: "HIPAA Secure" },
  { icon: Award, label: "Insurance Certified" },
];

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="fade-up-element opacity-0 text-4xl md:text-5xl font-bold mb-4">
            Trusted by Top Insurance Professionals
          </h2>
          <p className="fade-up-element opacity-0 animation-delay-200 text-xl text-muted-foreground">
            Join hundreds of successful agents who have transformed their lead generation with CallVia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`fade-up-element opacity-0 animation-delay-${(index + 1) * 200} text-center`}
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`fade-up-element opacity-0 animation-delay-${(index + 5) * 200} flex items-center gap-3 bg-card rounded-xl px-6 py-4 shadow-md border border-border/50`}
            >
              <div className="bg-gradient-hero rounded-lg w-10 h-10 flex items-center justify-center">
                <badge.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
