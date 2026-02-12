import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import MobileMenu from "./MobileMenu";
import animation from "../../assets/bb88_logo_animation2.gif";
import hotBadge from "../../assets/hot-badge.png";
import inrFlag from "../../assets/INR.svg";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Slot Games", href: "#slot" },
    { label: "Live Casino", href: "#live-casino" },
    { label: "Crash", href: "#crash" },
    { label: "Cricket", href: "#cricket" },
    { label: "Table Games", href: "#table-games" },
    { label: "Fast", href: "#fast", badge: "NEW" },
    { label: "Fishing", href: "#fishing" },
    { label: "Sportsbook", href: "#sportsbook" },
    { label: "Promotion", href: "#promotion" },
    { label: "Betting Pass", href: "#betting-pass", badge: "HOT_IMG" },
    { label: "Referral", href: "#referral", badge: "HOT_IMG" },
    { label: "Agent Affiliate", href: "#agent" },
  ];

  return (
    <>
      <header
        className={[
          "fixed left-0 right-0 top-0 z-50",
          "transition-shadow duration-200",
          isScrolled ? "shadow-md" : "",
        ].join(" ")}
      >
        {/* Top white bar */}
        <div className="bg-white">
          <div className="mx-auto w-full px-4">
            <div className="flex h-18.5 items-center justify-between">
              {/* Left: logo */}
              <div className="flex items-center gap-4">
                <a href="#" className="flex items-center">
                  <img src={animation} alt="BABU88" className="h-12.5 w-auto" />
                </a>
              </div>

              {/* Right: actions */}
              <div className="hidden items-center gap-6 lg:flex">
                <button className="h-11 min-w-35 rounded-xl bg-[#f2b300] px-8 text-[16px] font-bold text-black">
                  Login
                </button>

                <button className="h-11 min-w-35 rounded-xl bg-[#0a7cff] px-8 text-[16px] font-bold text-white">
                  Join Now
                </button>

                <button className="flex h-11 items-center gap-3 rounded-full bg-[#d9d9d9] px-4">
                  <img src={inrFlag} alt="INR" className="h-7 w-7 rounded-full object-cover" />
                  <ChevronDown className="h-5 w-5 text-black/70" />
                </button>
              </div>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden text-black"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-8 w-8" />
                ) : (
                  <Menu className="h-8 w-8" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Dark nav bar */}
        <div className="bg-[#3a3a3a]">
          <div className="mx-auto w-[min(1180px,92%)]">
            <nav className="hidden h-14 items-center gap-6 overflow-x-auto lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative whitespace-nowrap text-[13px] font-semibold text-white hover:text-white/80"
                >
                  {item.label}

                  {/* NEW badge */}
                  {item.badge === "NEW" && (
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-[#16a34a] px-2.5 py-0.5 text-[10px] font-extrabold text-white">
                      NEW
                    </span>
                  )}

                  {/* HOT image badge with pulse (large->small animation) */}
                  {item.badge === "HOT_IMG" && (
                    <img
                      src={hotBadge}
                      alt="HOT"
                      className={[
                        "absolute -top-6 left-1/2 -translate-x-1/2",
                        "h-5.5 w-auto select-none",
                        "animate-[hotPulse_900ms_ease-in-out_infinite]",
                      ].join(" ")}
                      draggable={false}
                    />
                  )}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Custom keyframes for hot badge pulse */}
        <style>{`
          @keyframes hotPulse {
            0%, 100% { transform: translateX(-50%) scale(1); }
            50% { transform: translateX(-50%) scale(1.22); }
          }
        `}</style>
      </header>

      {/* Spacer so content doesn't hide behind fixed header */}
      <div className="h-32.5" />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
