import { PORTFOLIO_SECTION } from "@/lib/content";
import { useEffect, useState } from "react";

export default function Portfolio() {
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

    const section = document.getElementById("portfolio");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="relative w-full py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="micro-label mb-4 text-[#ff3300]">{PORTFOLIO_SECTION.heading}</div>
          <h2 className="section-title text-3xl lg:text-4xl mb-4 text-[#0d0d0d]">
            {PORTFOLIO_SECTION.title}
          </h2>
          <p className="text-base text-[#666666] max-w-2xl mx-auto">
            {PORTFOLIO_SECTION.description}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_SECTION.projects.map((project, idx) => (
            <div
              key={project.id}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Portfolio Card */}
              <div className="relative overflow-hidden bg-white border-2 border-[#e8e8e4] hover:border-[#ff3300] transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-[#f5f5f3]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Orange Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#ff3300] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0d0d0d] mb-2">{project.name}</h3>
                  <p className="text-sm text-[#666666] mb-4">{project.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#e8e8e4]">
                    <span className="text-xs uppercase text-[#888888]" style={{ letterSpacing: '0.1em' }}>
                      Design
                    </span>
                    <div className="w-8 h-8 bg-[#ff3300] flex items-center justify-center text-white font-bold hover:scale-110 transition-transform">
                      →
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#666666] mb-6">
            Interested in collaborating or commissioning a custom design?
          </p>
          <a
            href="https://alwgen.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0d0d0d] text-white font-bold text-sm uppercase hover:bg-[#ff3300] transition-all duration-200 hover:translate-x-1"
            style={{ letterSpacing: '0.15em' }}
          >
            Get In Touch
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
