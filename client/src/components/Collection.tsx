import { COLLECTION_SECTION } from "@/lib/content";
import { useEffect, useState } from "react";

export default function Collection() {
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

    const section = document.getElementById("collection");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="collection" className="relative w-full py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#f5f5f3]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="micro-label mb-4 text-[#ff3300]">{COLLECTION_SECTION.heading}</div>
          <h2 className="section-title text-3xl lg:text-4xl mb-4 text-[#0d0d0d]">
            {COLLECTION_SECTION.title}
          </h2>
          <p className="text-base text-[#666666] max-w-2xl mx-auto">
            {COLLECTION_SECTION.description}
          </p>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {COLLECTION_SECTION.items.map((item, idx) => (
            <div
              key={item.id}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Product Card */}
              <div className="relative h-80 bg-white border-2 border-[#e8e8e4] overflow-hidden hover:border-[#ff3300] transition-all duration-300">
                {/* Placeholder with gradient */}
                <div className="w-full h-full bg-gradient-to-br from-[#f5f5f3] to-[#e8e8e4] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-black text-[#0d0d0d] opacity-20" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {String(item.id).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                {/* Orange Accent on Hover */}
                <div className="absolute inset-0 bg-[#ff3300] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-[#0d0d0d] mb-2">{item.name}</h3>
                <p className="text-sm text-[#666666] mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase text-[#888888]" style={{ letterSpacing: '0.15em' }}>{item.price}</span>
                  <a
                    href={COLLECTION_SECTION.cta.url}
                    className="inline-flex items-center justify-center w-10 h-10 bg-[#ff3300] text-white hover:bg-[#cc2200] transition-all duration-200 hover:scale-110"
                  >
                    →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-b border-[#e8e8e4] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="micro-label text-[#888888]">LAB MERCH / LIMITED COLLECTIONS</div>
            <a
              href={COLLECTION_SECTION.cta.url}
              className="px-8 py-3 bg-[#ff3300] text-white font-bold text-sm uppercase hover:bg-[#cc2200] transition-all duration-200 hover:scale-105"
              style={{ letterSpacing: '0.15em' }}
            >
              {COLLECTION_SECTION.cta.text}
            </a>
          <div className="micro-label text-[#888888]">SERIAL / SUMMER / COLLECTION 2024</div>
        </div>
      </div>
    </section>
  );
}
