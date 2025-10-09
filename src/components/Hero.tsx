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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-accent animate-gradient"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 animate-grid" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
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
            className="fade-up-element opacity-0 animation-delay-400 bg-background text-primary hover:bg-background/90 shadow-xl hover:shadow-glow transition-all duration-500 transform hover:scale-110 text-lg px-8 py-6 relative group overflow-hidden"
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="relative z-10">Start Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
