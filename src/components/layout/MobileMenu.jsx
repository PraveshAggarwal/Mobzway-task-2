import { AnimatePresence, motion } from "framer-motion";

import babu88 from "../../assets/babu88_logo_black.svg";
import hotBadge from "../../assets/hot-badge.png";
import iconPromotion from "../../assets/icon_promotion.svg";
import iconReferral from "../../assets/icon_referral.svg";
import iconBettingPass from "../../assets/icon_bettingpass.svg";
import iconAgents from "../../assets/icon_agents.svg";
import iconRng from "../../assets/icon_rng.svg";
import iconLd from "../../assets/icon_ld.svg";
import iconCrash from "../../assets/icon_crash.svg";
import iconCricket from "../../assets/icon_cricket.svg";
import iconTable from "../../assets/icon_table.svg";
import iconFastGames from "../../assets/icon_fastgames.svg";
import iconFishing from "../../assets/icon_fishing.svg";
import iconSb from "../../assets/icon_sb.svg";

export default function MobileMenu({ isOpen, onClose }) {
  const topMenu = [
    { label: "Promotion", href: "#promotion", icon: iconPromotion },
    {
      label: "Refer and Earn",
      href: "#referral",
      icon: iconReferral,
      hot: true,
    },
    {
      label: "Betting Pass",
      href: "#betting-pass",
      icon: iconBettingPass,
      hot: true,
    },
    { label: "Agent Affiliate", href: "#agent", icon: iconAgents },
  ];

  const games = [
    { label: "Slot games", href: "#slot", icon: iconRng },
    { label: "Live casino", href: "#live-casino", icon: iconLd },
    { label: "Crash", href: "#crash", icon: iconCrash },
    { label: "Cricket", href: "#cricket", icon: iconCricket },
    { label: "Table Games", href: "#table-games", icon: iconTable },
    { label: "Fast", href: "#fast", icon: iconFastGames, isNew: true },
    { label: "Fishing", href: "#fishing", icon: iconFishing },
    { label: "Sportsbook", href: "#sportsbook", icon: iconSb },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Tap outside to close (no dark overlay, like screenshot) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="fixed inset-0 z-40 lg:hidden bg-transparent"
            onClick={onClose}
          />

          {/* Left drawer */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.16 }}
            className="fixed left-0 top-0 bottom-0 z-50 w-[272px] bg-white lg:hidden overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Right thin border (panel edge) */}
            <div className="absolute right-0 top-0 h-full w-px bg-black/10" />

            {/* Header row: logo + hamburger */}
            <div className="flex items-center justify-between px-1 pt-4">
              <img src={babu88} alt="BABU88" className="h-9 w-auto" />

              <button
                aria-label="Close menu"
                className="p-2 text-black/50"
                onClick={onClose}
              >
                {/* hamburger icon (exact look) */}
                <div className="space-y-1">
                  <div className="h-[2px] w-5 bg-black/50" />
                  <div className="h-[2px] w-5 bg-black/50" />
                  <div className="h-[2px] w-5 bg-black/50" />
                </div>
              </button>
            </div>

            {/* Divider */}
            <div className="mt-3 h-px w-full bg-black/10" />

            {/* Menu list */}
            <nav className="pl-0 pr-2 py-2">
              {topMenu.map((item) => {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between pl-1 pr-3 py-3"
                  >
                    <span className="flex items-center gap-5">
                      <img src={item.icon} alt="" className="h-7 w-7" />
                      <span className="text-[14px] font-semibold text-black/35">
                        {item.label}
                      </span>
                    </span>

                    {item.hot && (
                      <img
                        src={hotBadge}
                        alt="HOT"
                        className="h-[18px] w-auto animate-[hotPulse_900ms_ease-in-out_infinite]"
                        draggable={false}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Divider */}
            <div className="h-px w-full bg-black/10" />

            {/* Games title */}
            <div className="px-1 pt-4 pb-2 text-[18px] font-bold text-black/30">
              Games
            </div>

            {/* Games list */}
            <nav className="pl-0 pr-2 pb-6">
              {games.map((g) => {
                return (
                  <a
                    key={g.label}
                    href={g.href}
                    onClick={onClose}
                    className="flex items-center justify-between pl-1 pr-3 py-3"
                  >
                    <span className="flex items-center gap-5">
                      <img src={g.icon} alt="" className="h-7 w-7" />
                      <span className="text-[14px] font-semibold text-black/35 capitalize">
                        {g.label}
                      </span>
                    </span>

                    {g.isNew && (
                      <span className="rounded-full bg-[#16a34a] px-2 py-[2px] text-[11px] font-extrabold text-white">
                        new
                      </span>
                    )}
                  </a>
                );
              })}
            </nav>

            <style>{`
              @keyframes hotPulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.18); }
              }
            `}</style>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
