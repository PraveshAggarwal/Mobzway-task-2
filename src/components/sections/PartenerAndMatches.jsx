import { Play } from "lucide-react";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import banner1 from "../../assets/PartenerAndMatches/bb88_banner-NW.webp";
import banner2 from "../../assets/PartenerAndMatches/bb88_banner-CS.webp";
import banner3 from "../../assets/PartenerAndMatches/bb88_banner-SKM.webp";

export default function PartnerAndMatches() {
  const [playVideo, setPlayVideo] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const banners = [
    {
      image: banner1,
      alt: "Banner 1",
      videoThumb: banner1,
      videoUrl: "https://www.youtube.com/embed/lUoDJ-Rt_5M?autoplay=1",
      title: "BABU88 X Northern Warriors Angelo Mat...",
    },
    {
      image: banner2,
      alt: "Banner 2",
      videoThumb: banner2,
      videoUrl: "https://www.youtube.com/embed/_kUu6LRg32U?autoplay=1",
      title: "BABU88 X Colombo Strikers Highlights...",
    },
    {
      image: banner3,
      alt: "Banner 3",
      videoThumb: banner3,
      videoUrl: "https://www.youtube.com/embed/KiOHvlb8wS0?autoplay=1",
      title: "BABU88 X Samira Mahi Khan Interview...",
    },
  ];

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setPlayVideo(false);
    };
    emblaApi.on("select", onSelect);
    onSelect();

    const autoplay = setInterval(() => emblaApi.scrollNext(), 8000);
    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const matches = [
    {
      id: 1,
      status: "Upcoming",
      title: "ICC Men's T20 World Cup",
      date: "Feb 13, 2026 11:00:00",
      teams: [
        { name: "Australia", flagCode: "au" },
        { name: "Zimbabwe", flagCode: "zw" },
      ],
    },
    {
      id: 2,
      status: "Upcoming",
      title: "ICC Men's T20 World Cup",
      date: "Feb 13, 2026 15:00:00",
      teams: [
        { name: "Canada", flagCode: "ca" },
        { name: "United Arab Emirates", flagCode: "ae" },
      ],
    },
    {
      id: 3,
      status: "Upcoming",
      title: "ICC Men's T20 World Cup",
      date: "Feb 13, 2026 19:00:00",
      teams: [
        { name: "Netherlands", flagCode: "nl" },
        { name: "United States of America", flagCode: "us" },
      ],
    },
    {
      id: 4,
      status: "Upcoming",
      title: "Twenty20 International Women",
      date: "Feb 13, 2026 21:30:00",
      teams: [
        { name: "South Africa W", flagCode: "za" },
        { name: "Pakistan W", flagCode: "pk" },
      ],
    },
    {
      id: 5,
      status: "Upcoming",
      title: "Twenty20 International ",
      date: "Feb 14, 2026 11:00:00",
      teams: [
        { name: "Ireland", flagCode: "ie" },
        { name: "Oman", flagCode: "om" },
      ],
    },
    {
      id: 6,
      status: "Upcoming",
      title: "Twenty20 International ",
      date: "Feb 13, 2026 15:00:00",
      teams: [
        { name: "Scotland", flagCode: "gb-sct" },
        { name: "England", flagCode: "gb-eng" },
      ],
    },
    {
      id: 7,
      status: "Upcoming",
      title: "Twenty20 International ",
      date: "Feb 13, 2026 19:00:00",
      teams: [
        { name: "New Zealand", flagCode: "nz" },
        { name: "South Africa", flagCode: "za" },
      ],
    },
  ];

  return (
    <section className="bg-white pb-14">
      <div className="mx-auto w-[min(1180px,92%)]">
        {/* Top: Banner with a SMALL video section on the right (like your screenshot) */}
        <div className="mt-6">
          <div className="relative overflow-hidden rounded-3xl bg-[#caa300] shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
            {/* Banner carousel full width */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {banners.map((banner, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0">
                    <img
                      src={banner.image}
                      alt={banner.alt}
                      className="h-75 w-full object-cover"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* bottom-left dots */}
            <div className="absolute bottom-5 left-6 flex gap-2">
              {banners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi && emblaApi.scrollTo(i)}
                  className={[
                    "h-3.5 w-3.5 rounded-full transition-colors",
                    i === selectedIndex ? "bg-[#f2b300]" : "bg-white/90",
                  ].join(" ")}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* SMALL video preview section (overlayed, not full image) */}
            <div className="absolute right-5 top-5 bottom-5 w-[46%] max-w-140">
              <div className="relative h-full overflow-hidden rounded-2xl bg-black/20">
                {!playVideo ? (
                  <>
                    <img
                      src={banners[selectedIndex].videoThumb}
                      alt="Video thumbnail"
                      className="h-full w-full object-cover"
                      draggable={false}
                    />

                    {/* top title row like youtube preview */}
                    <div className="absolute left-4 top-4 right-4 flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-full bg-[#f2b300] text-black font-extrabold">
                        B
                      </div>
                      <div className="min-w-0 text-white drop-shadow">
                        <div className="truncate text-[18px] font-semibold">
                          {banners[selectedIndex].title}
                        </div>
                      </div>
                      <div className="ml-auto text-white/90 text-[22px] leading-none">
                        ⋮
                      </div>
                    </div>

                    {/* play button */}
                    <button
                      type="button"
                      onClick={() => setPlayVideo(true)}
                      className="absolute inset-0 grid place-items-center"
                      aria-label="Play video"
                    >
                      <span className="grid h-16 w-24 place-items-center rounded-2xl bg-[#ff0000] shadow-lg">
                        <Play className="h-10 w-10 text-white" fill="white" />
                      </span>
                    </button>
                  </>
                ) : (
                  <iframe
                    className="h-full w-full"
                    src={banners[selectedIndex].videoUrl}
                    title="BABU88 video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Matches row */}
        <div className="mt-8">
          <div
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#f2b300] scrollbar-track-transparent"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#f2b300 transparent",
            }}
          >
            {matches.map((m) => (
              <div
                key={m.id}
                className="shrink-0 w-70 overflow-hidden rounded-2xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
              >
                {/* top yellow strip */}
                <div className="flex items-center gap-3 bg-[#f2b300] px-4 py-3">
                  <span className="rounded bg-black px-2 py-1 text-[12px] font-extrabold text-white">
                    {m.status}
                  </span>
                  <span className="text-[13px] font-extrabold text-black">
                    {m.title}
                  </span>
                </div>

                <div className="px-4 py-4">
                  <div className="text-[18px] font-extrabold text-black/45">
                    {m.date}
                  </div>

                  <div className="mt-4 space-y-4">
                    {m.teams.map((t) => (
                      <div key={t.name} className="flex items-center gap-3">
                        <img
                          src={`https://flagcdn.com/w40/${t.flagCode}.png`}
                          srcSet={`https://flagcdn.com/w80/${t.flagCode}.png 2x`}
                          width="10"
                          alt={`${t.name} flag`}
                          className="h-4 w-auto rounded"
                        />
                        <div className="text-[16px] font-extrabold text-black">
                          {t.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom yellow scrollbar styling */}
        <style jsx>{`
          div::-webkit-scrollbar {
            height: 8px;
          }
          div::-webkit-scrollbar-track {
            background: transparent;
          }
          div::-webkit-scrollbar-thumb {
            background: #f2b300;
            border-radius: 10px;
          }
          div::-webkit-scrollbar-thumb:hover {
            background: #daa000;
          }
        `}</style>
      </div>
    </section>
  );
}
