import { PROFILE_SECTION, SOCIAL_MEDIA } from "@/lib/content";
import { useEffect, useState } from "react";

export default function Profile() {
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

    const section = document.getElementById("profile");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="profile" className="relative w-full py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#f5f5f3]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Profile Image */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative">
              <img
                src={PROFILE_SECTION.image}
                alt={PROFILE_SECTION.name}
                className="w-full h-auto rounded-none border-4 border-[#0d0d0d]"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#ff3300] z-0" />
            </div>
          </div>

          {/* Right - Profile Info */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`} style={{ transitionDelay: "0.2s" }}>
            <div className="micro-label mb-4 text-[#ff3300]">Personal Profile</div>
            <h2 className="section-title text-3xl lg:text-4xl mb-2 text-[#0d0d0d]">
              {PROFILE_SECTION.name}
            </h2>
            <p className="text-sm text-[#ff3300] font-semibold mb-6" style={{ letterSpacing: '0.1em' }}>
              {PROFILE_SECTION.title}
            </p>
            <p className="text-base leading-relaxed text-[#666666] mb-8">
              {PROFILE_SECTION.bio}
            </p>

            {/* Social Media Links */}
            <div className="mb-8">
              <p className="text-xs uppercase text-[#888888] mb-4" style={{ letterSpacing: '0.15em' }}>
                Follow Me On
              </p>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_MEDIA.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-[#0d0d0d] text-white font-bold text-lg hover:bg-[#ff3300] transition-all duration-200 hover:scale-110"
                    title={social.platform}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Stats or Additional Info */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#e8e8e4]">
              <div>
                <p className="text-2xl font-black text-[#0d0d0d]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  5+
                </p>
                <p className="text-xs text-[#888888] uppercase" style={{ letterSpacing: '0.1em' }}>
                  Collections
                </p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#0d0d0d]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  100%
                </p>
                <p className="text-xs text-[#888888] uppercase" style={{ letterSpacing: '0.1em' }}>
                  Handcrafted
                </p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#0d0d0d]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  ∞
                </p>
                <p className="text-xs text-[#888888] uppercase" style={{ letterSpacing: '0.1em' }}>
                  Passion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
