import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll(".fade-up-element");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="fade-up-element opacity-0 text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            More Sets, No Regrets!
          </h1>
          
          <p className="fade-up-element opacity-0 animation-delay-200 text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            CallVia's human-like AI agent follows up with your contacts, builds rapport, and automatically schedules qualified appointments directly into your calendar.
          </p>

          <Button
            size="lg"
            className="fade-up-element opacity-0 animation-delay-400 bg-background text-primary hover:bg-background/90 shadow-xl hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6"
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
