import { ABOUT_SECTION } from "@/lib/content";
import { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative w-full py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663595474301/AAykMWneYZdHsZgD.png"
                alt="Clara Alyra Details"
                className="w-full h-auto rounded-none border-2 border-[#e8e8e4]"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#ff3300] z-0" />
            </div>
          </div>

          {/* Right - Content */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`} style={{ transitionDelay: "0.2s" }}>
            <div className="micro-label mb-4 text-[#ff3300]">{ABOUT_SECTION.heading}</div>
            <h2 className="section-title text-3xl lg:text-4xl mb-6 text-[#0d0d0d]">
              {ABOUT_SECTION.title}
            </h2>
            <p className="text-base leading-relaxed text-[#666666] mb-8">
              {ABOUT_SECTION.description}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {ABOUT_SECTION.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#ff3300] mt-2 flex-shrink-0" />
                  <p className="text-sm text-[#0d0d0d] font-medium">{highlight}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={ABOUT_SECTION.cta.url}
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#0d0d0d] text-white font-bold text-sm uppercase hover:bg-[#ff3300] transition-all duration-200 hover:translate-x-1"
              style={{ letterSpacing: '0.15em' }}
            >
              {ABOUT_SECTION.cta.text}
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
