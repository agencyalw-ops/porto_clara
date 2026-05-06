import { NAVIGATION, SITE_CONFIG } from "@/lib/content";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full h-13 bg-white z-50 border-b border-[#e8e8e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="text-xl font-black text-[#0d0d0d]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            +1
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {NAVIGATION.items.map((item) => (
            <a
              key={item.label}
              href={item.url}
              className="nav-link text-[#0d0d0d] hover:opacity-60 transition-opacity duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={SITE_CONFIG.redirectUrl}
            className="text-xs font-bold uppercase text-[#0d0d0d] hover:opacity-60 transition-opacity"
            style={{ letterSpacing: '0.15em' }}
          >
            Shop
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:opacity-60 transition-opacity"
          aria-label="Toggle menu"
        >
          <Menu size={24} className="text-[#0d0d0d]" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-13 left-0 right-0 bg-white border-b border-[#e8e8e4] p-4">
          <div className="flex flex-col gap-4">
            {NAVIGATION.items.map((item) => (
              <a
                key={item.label}
                href={item.url}
                className="nav-link text-[#0d0d0d] hover:opacity-60 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={SITE_CONFIG.redirectUrl}
              className="text-xs font-bold uppercase text-white bg-[#ff3300] px-4 py-2 text-center hover:bg-[#cc2200] transition-colors"
              style={{ letterSpacing: '0.15em' }}
            >
              Shop Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
