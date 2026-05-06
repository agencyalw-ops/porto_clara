import { FOOTER_SECTION } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0d0d0d] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              clara_alyra
            </h3>
            <p className="text-sm text-[#ccb89a] leading-relaxed">
              Premium fashion brand celebrating Indonesian heritage and contemporary minimalism.
            </p>
            <p className="text-xs uppercase text-[#888888] mt-4" style={{ letterSpacing: '0.2em' }}>
              {FOOTER_SECTION.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase mb-6 text-white" style={{ letterSpacing: '0.15em' }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {FOOTER_SECTION.links.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    className="text-sm text-[#ccb89a] hover:text-[#ff3300] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-bold uppercase mb-6 text-white" style={{ letterSpacing: '0.15em' }}>
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={FOOTER_SECTION.links[3].url}
                  className="text-sm text-[#ccb89a] hover:text-[#ff3300] transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={FOOTER_SECTION.links[2].url}
                  className="text-sm text-[#ccb89a] hover:text-[#ff3300] transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href={FOOTER_SECTION.links[0].url}
                  className="text-sm text-[#ccb89a] hover:text-[#ff3300] transition-colors duration-200"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#333333] py-8">
          {/* Bottom Info */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#888888] uppercase" style={{ letterSpacing: '0.2em' }}>
            {FOOTER_SECTION.copyright}
          </p>
            <div className="flex gap-6">
              <a
                href="#"
              className="text-xs text-[#888888] hover:text-[#ff3300] transition-colors uppercase"
              style={{ letterSpacing: '0.15em' }}
            >
              Privacy
              </a>
              <a
                href="#"
              className="text-xs text-[#888888] hover:text-[#ff3300] transition-colors uppercase"
              style={{ letterSpacing: '0.15em' }}
            >
              Terms
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-[#ff3300] text-white flex items-center justify-center hover:bg-[#cc2200] transition-all duration-200 hover:scale-110 hidden lg:flex"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </footer>
  );
}
