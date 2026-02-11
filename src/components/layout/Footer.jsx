import colomboStrikers from '../../assets/colombo_strikers.png';
import dambullaAurea from '../../assets/dambulla_aurea.png';
import grandCaymanJaguars from '../../assets/grand_cayman_jaguars.png';
import montrealTigers from '../../assets/montreal_tigers.png';
import northernWarriors from '../../assets/northern_warriors.png';
import sudurpaschimRoyals from '../../assets/sudurpaschim_royals.png';
import teluguWarriors from '../../assets/telugu_warriors.png';
import vegasVikings from '../../assets/vegas_vikings.png';
import samiraMahiKhan from '../../assets/samira_mahi_khan.png';

export default function Footer() {
  const ambassadors = [
    { name: "Samira Mahi Khan", year: "2024/2025", logo: samiraMahiKhan },
    { name: "Shakib Al Hasan", year: "2023/2024", logo: samiraMahiKhan },
  ];

  const sponsors = [
    { name: "Vegas Vikings", year: "2025/2026", logo: vegasVikings },
    { name: "Sudurpaschim Royals", year: "2024/2025", logo: sudurpaschimRoyals },
    { name: "Telugu Warriors", year: "2024/2025", logo: teluguWarriors },
    { name: "Colombo Strikers", year: "2024/2025", logo: colomboStrikers },
    { name: "Grand Cayman Jaguars", year: "2024/2025", logo: grandCaymanJaguars },
    { name: "Montreal Tigers", year: "2023/2024", logo: montrealTigers },
    { name: "Dambulla Aurea", year: "2023/2024", logo: dambullaAurea },
    { name: "Northern Warriors", year: "2023/2024", logo: northernWarriors },
  ];

  return (
    <footer className="mt-20 bg-[#3b3b3b] text-white font-[inherit]">
      <div className="mx-auto w-[min(1180px,92%)] py-10">
        <div className="h-px w-full bg-white/20" />

        {/* Brand Ambassadors */}
        <section className="py-10">
          <h3 className="mb-8 text-[18px] font-bold text-[#f2b300]">
            Brand Ambassadors
          </h3>

          <div className="flex flex-wrap items-center gap-x-24 gap-y-10">
            {ambassadors.map((a) => (
              <div key={a.name} className="flex items-center gap-4">
                <div className="h-10 w-16 overflow-hidden flex items-center justify-center">
                  <img src={a.logo} alt={a.name} className="h-full w-full object-contain" loading="lazy" />
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

        {/* Sponsorships */}
        <section className="py-10">
          <h3 className="mb-8 text-[18px] font-bold text-[#f2b300]">
            Sponsorships
          </h3>

          <div className="flex flex-wrap items-center gap-x-16 gap-y-10">
            {sponsors.map((s) => (
              <div key={s.name} className="flex min-w-67.5 items-center gap-4">
                <div className="h-12 w-12 overflow-hidden flex items-center justify-center">
                  <img src={s.logo} alt={s.name} className="h-full w-full object-contain" loading="lazy" />
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

        {/* ...keep the rest of your footer exactly same... */}

        <div className="h-px w-full bg-white/20" />
      </div>

      {/* About section (unchanged) */}
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
