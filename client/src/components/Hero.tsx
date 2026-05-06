import { HERO_SECTION } from "@/lib/content";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const heroImageUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663595474301/lLtdJUFbEWkpIzCD.png";

  return (
    <section className="relative w-full min-h-screen pt-13 bg-[#f5f5f3] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 h-full">
        {/* Left Column - Text Content */}
        <div className="lg:col-span-2 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
          <div className={`transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "0.2s" }}>
            <h1 className="hero-text mb-4 animate-slide-up">
              {HERO_SECTION.mainHeading}
            </h1>
            <p className="micro-label mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              {HERO_SECTION.subheading}
            </p>
            <p className="text-sm text-[#666666] mb-8 max-w-sm leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {HERO_SECTION.description}
            </p>
          </div>

          {/* Large Counter - Rotated */}
          <div className="hidden lg:block absolute bottom-8 left-8 text-8xl font-black text-[#0d0d0d] opacity-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            01
          </div>
        </div>

        {/* Right Column - Image with Orange Block */}
        <div className="lg:col-span-3 relative h-96 lg:h-auto lg:min-h-screen">
          {/* Orange Block Background */}
          <div className={`absolute bottom-0 right-0 w-full lg:w-2/3 h-2/3 bg-[#ff3300] z-0 transition-all duration-700 ${isLoaded ? "scale-100" : "scale-x-0"}`} style={{ transformOrigin: "right" }} />

          {/* Hero Image */}
          <div className={`relative z-10 w-full h-full flex items-center justify-center transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "0.4s" }}>
            <img
              src={heroImageUrl}
              alt="Clara Alyra - Premium Fashion"
              className="w-full h-full object-cover animate-float"
              loading="lazy"
            />
          </div>

          {/* Scroll Indicator - Bottom Right */}
          <button
            onClick={() => {
              const collectionSection = document.getElementById("collection");
              collectionSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="absolute bottom-6 right-6 z-20 cta-button animate-bounce-subtle hover:animate-none"
            aria-label="Scroll to collection"
          >
            <ArrowDown size={20} />
          </button>

          {/* Vertical Text - Right Edge */}
          <div className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 text-xs uppercase text-[#0d0d0d] opacity-40" style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)", letterSpacing: '0.2em' }}>
            Clara Alyra / Wonosobo / Indonesia
          </div>
        </div>
      </div>

      {/* Pagination Dots - Bottom Left */}
      <div className="absolute bottom-6 left-6 z-20 flex gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#ff3300] scale-125" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#ccc]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#ccc]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#ccc]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#ccc]" />
      </div>
    </section>
  );
}
