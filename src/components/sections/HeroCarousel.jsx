import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import hero1 from "../../assets/herocoursal/en-desktop-67c43fc5de2ad.webp";
import hero2 from "../../assets/herocoursal/en-desktop-689c46450bd91.webp";
import hero3 from "../../assets/herocoursal/en-desktop-698aca4f9307f.webp";

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    const autoplay = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // ONLY local assets images
  const slides = [
    { image: hero1, alt: "Hero 1" },
    { image: hero2, alt: "Hero 2" },
    { image: hero3, alt: "Hero 3" },
  ];

  return (
    <section>
      <div className="relative w-full overflow-hidden rounded-none bg-black">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((s, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                {/* Banner (image only) */}
                <div className="relative h-80 sm:h-96 lg:h-120">
                  <img
                    src={s.image}
                    alt={s.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* Left arrow (white circle) */}
                  <button
                    onClick={scrollPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white text-black shadow-md hover:bg-white/90"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  {/* Right arrow (white circle) */}
                  <button
                    onClick={scrollNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white text-black shadow-md hover:bg-white/90"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => scrollTo(i)}
                        className={[
                          "h-2.5 rounded-full transition-all",
                          i === selectedIndex
                            ? "w-8 bg-white/70"
                            : "w-2.5 bg-white/40",
                        ].join(" ")}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
