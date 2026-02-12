function PlaceholderArtwork({ variant }) {
  // Decorative “art” area without images (keeps layout consistent)
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 w-[52%]">
      {/* soft glow */}
      <div
        className={[
          "absolute -right-10 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full blur-2xl opacity-60",
          variant === "refer" ? "bg-[#f2b300]/50" : "bg-[#f2b300]/35",
        ].join(" ")}
      />
      {/* floating circles */}
      <div className="absolute right-8 top-10 h-10 w-10 rounded-full bg-white/15" />
      <div className="absolute right-24 top-24 h-6 w-6 rounded-full bg-white/10" />
      <div className="absolute right-12 bottom-10 h-14 w-14 rounded-full bg-white/10" />

      {/* “gift/phone” blocks */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 grid gap-3">
        <div className="h-16 w-16 rounded-2xl bg-white/15 ring-1 ring-white/10" />
        <div className="h-12 w-20 rounded-2xl bg-white/10 ring-1 ring-white/10" />
        <div className="h-14 w-14 rounded-2xl bg-white/10 ring-1 ring-white/10" />
      </div>
    </div>
  );
}

export default function ReferralAndBettingPass() {
  const handleReferNow = () => {
    // Open referral modal or navigate to referral page
    window.location.href = "/referral";
  };

  const handleBettingPass = () => {
    // Navigate to betting pass page
    window.location.href = "/betting-pass";
  };

  return (
    <section className="bg-white py-10">
      <div className="mx-auto w-[min(1180px,92%)]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.8fr_1fr]">
          {/* LEFT: Refer */}
          <div className="relative overflow-hidden rounded-2xl bg-[#2f2f2f] shadow-[0_10px_25px_rgba(0,0,0,0.20)] h-auto lg:h-45 flex items-center">
            {/* subtle texture gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(242,179,0,0.25),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.08),transparent_55%)]" />
            <PlaceholderArtwork variant="refer" />

            <div className="relative p-5 lg:p-6 w-full">
              <h3 className="text-white text-[22px] lg:text-[24px] font-extrabold leading-tight">
                Refer friends and start earning
              </h3>

              <p className="mt-2 max-w-125 text-white/95 text-[13px] lg:text-[14px] font-semibold leading-relaxed">
                The No.1 friend referral program in India is here! Earn free
                ₹300 when you refer a friend and also earn lifetime commission
                of up to 2% for every deposit your friend makes!
              </p>

              <button
                className="mt-3 lg:mt-4 rounded-full bg-[#f2b300] text-black font-extrabold px-6 lg:px-8 py-2 hover:bg-[#daa000] transition-all duration-200"
                onClick={handleReferNow}
              >
                Refer Now
              </button>
            </div>
          </div>

          {/* RIGHT: Betting Pass */}
          <div
            onClick={handleBettingPass}
            className="relative overflow-hidden rounded-2xl bg-[#1f1f1f] shadow-[0_10px_25px_rgba(0,0,0,0.20)] cursor-pointer transition-transform hover:scale-[1.02] h-auto lg:h-45 flex items-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(242,179,0,0.20),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.07),transparent_55%)]" />
            <PlaceholderArtwork variant="bet" />

            <div className="relative p-5 lg:p-6 w-full">
              <div className="text-white text-[20px] lg:text-[24px] font-extrabold italic leading-none">
                <span className="text-white">BABU</span>
                <span className="text-[#f2b300]">88</span>
              </div>

              <div className="mt-2 text-[#f2b300] text-[22px] lg:text-[26px] font-extrabold leading-tight">
                EXCLUSIVE
                <br />
                BETTING PASS
              </div>

              <div className="mt-2 max-w-75 text-white/95 text-[13px] lg:text-[14px] font-semibold leading-relaxed">
                DEPOSIT, LEVEL UP AND UNLOCK REAL PRIZES!
              </div>

              {/* Click indicator */}
              <div className="mt-2 lg:mt-3 text-[#f2b300] text-[12px] lg:text-[13px] font-bold flex items-center gap-2">
                Learn More →
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
