import colomboStrikers from "../../assets/hdft/colombo_strikers.png";
import dambullaAurea from "../../assets/hdft/dambulla_aurea.png";
import grandCaymanJaguars from "../../assets/hdft/grand_cayman_jaguars.png";
import montrealTigers from "../../assets/hdft/montreal_tigers.png";
import northernWarriors from "../../assets/hdft/northern_warriors.png";
import sudurpaschimRoyals from "../../assets/hdft/sudurpaschim_royals.png";
import teluguWarriors from "../../assets/hdft/telugu_warriors.png";
import vegasVikings from "../../assets/hdft/vegas_vikings.png";
import samiraMahiKhan from "../../assets/hdft/samira_mahi_khan.png";
import age18Plus from "../../assets/hdft/btm-18+.svg";
import gamcare from "../../assets/hdft/btm-gamcare.svg";
import youtube from "../../assets/hdft/btm-yt.svg";
import facebook from "../../assets/hdft/hover_btm-fb.svg";
import telegram from "../../assets/hdft/hover_btm-tlg.svg";

export default function Footer() {
  const ambassadors = [
    { name: "Samira Mahi Khan", year: "2024/2025", logo: samiraMahiKhan },
    { name: "Shakib Al Hasan", year: "2023/2024", logo: samiraMahiKhan },
  ];

  const sponsors = [
    { name: "Vegas Vikings", year: "2025/2026", logo: vegasVikings },
    {
      name: "Sudurpaschim Royals",
      year: "2024/2025",
      logo: sudurpaschimRoyals,
    },
    { name: "Telugu Warriors", year: "2024/2025", logo: teluguWarriors },
    { name: "Colombo Strikers", year: "2024/2025", logo: colomboStrikers },
    {
      name: "Grand Cayman Jaguars",
      year: "2024/2025",
      logo: grandCaymanJaguars,
    },
    { name: "Montreal Tigers", year: "2023/2024", logo: montrealTigers },
    { name: "Dambulla Aurea", year: "2023/2024", logo: dambullaAurea },
    { name: "Northern Warriors", year: "2023/2024", logo: northernWarriors },
  ];

  return (
    <footer className="mt-20 bg-[#3b3b3b] text-white font-[inherit]">
      <div className="mx-auto w-[min(1180px,92%)] py-10">
        <div className="h-px w-full bg-white/20" />

        <section className="py-10">
          <h3 className="mb-8 text-[18px] font-bold text-[#f2b300]">
            Brand Ambassadors
          </h3>
          <div className="flex flex-wrap items-center gap-x-24 gap-y-10">
            {ambassadors.map((a) => (
              <div key={a.name} className="flex items-center gap-4">
                <div className="h-10 w-16 overflow-hidden flex items-center justify-center">
                  <img
                    src={a.logo}
                    alt={a.name}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-[16px] font-bold leading-tight">
                    {a.name}
                  </div>
                  <div className="text-[13px] font-bold text-white/90">
                    {a.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px w-full bg-white/20" />

        <section className="py-10">
          <h3 className="mb-8 text-[18px] font-bold text-[#f2b300]">
            Sponsorships
          </h3>
          <div className="flex flex-wrap items-center gap-x-16 gap-y-10">
            {sponsors.map((s) => (
              <div key={s.name} className="flex min-w-67.5 items-center gap-4">
                <div className="h-12 w-12 overflow-hidden flex items-center justify-center">
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-[16px] font-bold leading-tight">
                    {s.name}
                  </div>
                  <div className="text-[13px] font-bold text-white/90">
                    {s.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px w-full bg-white/20" />

        <section className="py-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h3 className="mb-8 text-[18px] font-bold text-[#f2b300]">
                Payment Method
              </h3>
              <div className="flex flex-wrap items-center gap-10 text-white/45">
                <div className="text-[34px] font-extrabold leading-none tracking-tight">
                  tm
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-[12px] font-bold">
                    ₹
                  </span>
                  <span className="text-[14px] font-semibold">PhonePe</span>
                </div>
                <div className="text-[34px] font-extrabold italic leading-none tracking-tight">
                  UPI
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[28px] leading-none">🏦</div>
                  <div className="text-[12px] font-extrabold leading-[1.05]">
                    BANK
                    <br />
                    DEPOSIT
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:text-center">
              <h3 className="mb-8 text-[18px] font-bold uppercase text-[#f2b300]">
                RESPONSIBLE GAMING
              </h3>
              <div className="flex flex-wrap items-center gap-4 lg:justify-center">
                <img
                  src={age18Plus}
                  alt="18+"
                  className="h-15 w-15 object-contain"
                />
                <img
                  src={gamcare}
                  alt="GamCare"
                  className="h-15 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-white/20" />

        <section className="py-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-end gap-3">
                <div className="text-[54px] font-extrabold leading-none tracking-tight italic">
                  <span className="text-white">BABU</span>
                  <span className="text-[#f2b300]">88</span>
                </div>
                <div className="pb-2 text-[24px] font-semibold italic text-white/85">
                  Official
                </div>
              </div>
              <div className="mt-4 text-[#f2b300] text-[18px] font-extrabold">
                Bangladesh&apos;s No.1 - The Biggest and Most Trusted
              </div>
              <div className="mt-2 text-[16px] font-bold text-white">
                Copyright © 2026 Babu88.All rights are reserved.
              </div>
            </div>
            <div className="lg:text-center">
              <h3 className="mb-8 text-[18px] font-bold text-[#f2b300]">
                Follow Us
              </h3>
              <div className="flex gap-2 lg:justify-center">
                <a href="#" aria-label="Facebook" className="h-12 w-12">
                  <img
                    src={facebook}
                    alt="Facebook"
                    className="h-full w-full object-contain"
                  />
                </a>
                <a href="#" aria-label="YouTube" className="h-12 w-12">
                  <img
                    src={youtube}
                    alt="YouTube"
                    className="h-full w-full object-contain"
                  />
                </a>
                <a href="#" aria-label="Telegram" className="h-12 w-12">
                  <img
                    src={telegram}
                    alt="Telegram"
                    className="h-full w-full object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-white/20" />
      </div>

      <div className="bg-black">
        <div className="mx-auto w-[min(1180px,92%)] py-10">
          <h3 className="text-yellow-500 text-xl font-bold mb-4">
            India&apos;s Trusted Online Casino and Cricket Exchange
          </h3>
          <p className="text-white text-sm leading-relaxed">
            Babu88 is the premier online casino in India, offering a variety of
            games for mobile and desktop users. Players can enjoy roulette,
            poker, baccarat, blackjack, and even cricket exchange betting
            options, with a chance to win real money online. Our platform
            provides fast, seamless gameplay, and great bonuses for players. We
            prioritize safety and security, using advanced encryption technology
            to protect your information, and our customer service is available
            24/7. Join Babu88 today for the best online casino gaming and
            cricket exchange betting experience in India.
          </p>
          <a
            href="#"
            className="mt-6 inline-block text-blue-500 hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    </footer>
  );
}
