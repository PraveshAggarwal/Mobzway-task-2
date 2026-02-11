import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, FileText, Wallet, Trophy } from 'lucide-react';
import Button from '../ui/Button';

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  
  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );
  
  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('select', onSelect);
    onSelect();
    
    // Auto-play
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    
    return () => {
      clearInterval(autoplay);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);
  
  const slides = [
    {
      title: 'CREATE YOUR ACCOUNT NOW',
      subtitle: 'AND JOIN THE NO.1 PLATFORM',
      ambassador: 'SAMIRA MAHI KHAN',
      image: 'https://images.pexels.com/photos/30004322/pexels-photo-30004322.jpeg',
    },
    {
      title: 'WIN BIG TODAY',
      subtitle: 'START YOUR WINNING JOURNEY',
      ambassador: 'OFFICIAL SPONSOR',
      image: 'https://images.pexels.com/photos/29811345/pexels-photo-29811345.jpeg',
    },
    {
      title: 'PREMIUM CRICKET EXCHANGE',
      subtitle: 'LIVE BETTING & CASINO',
      ambassador: 'TRUSTED PLATFORM',
      image: 'https://images.pexels.com/photos/29995739/pexels-photo-29995739.jpeg',
    },
  ];
  
  const steps = [
    {
      number: 'STEP 1',
      title: 'CREATE AN ACCOUNT',
      icon: FileText,
    },
    {
      number: 'STEP 2',
      title: 'MAKE A DEPOSIT',
      icon: Wallet,
    },
    {
      number: 'STEP 3',
      title: 'START WINNING BIG',
      icon: Trophy,
    },
  ];
  
  return (
    <section className="pt-20">
      {/* Carousel */}
      <div className="relative bg-[var(--color-background-secondary)] overflow-hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="relative h-[500px] lg:h-[600px]">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={slide.image}
                      alt={slide.ambassador}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'top center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="container-custom relative h-full flex items-center">
                    <div className="max-w-2xl">
                      <div className="text-[var(--color-primary)] text-sm font-bold mb-4 tracking-wider">
                        OFFICIAL BRAND AMBASSADOR 2025/2026
                      </div>
                      <h1 className="text-[var(--color-primary)] text-5xl lg:text-7xl font-bold mb-2 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-[var(--color-text)] text-2xl lg:text-3xl font-semibold mb-8">
                        {slide.subtitle}
                      </p>
                      <div className="text-[var(--color-text)] text-xl mb-8 font-light italic">
                        {slide.ambassador}
                      </div>
                      <Button variant="primary" size="lg">
                        Join Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[var(--color-primary)] text-[var(--color-text)] hover:text-black p-3 rounded-sm transition-all duration-200 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft style={{ width: '28px', height: '28px' }} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[var(--color-primary)] text-[var(--color-text)] hover:text-black p-3 rounded-sm transition-all duration-200 z-10"
          aria-label="Next slide"
        >
          <ChevronRight style={{ width: '28px', height: '28px' }} />
        </button>
        
        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === selectedIndex ? 'bg-[var(--color-primary)] w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Steps */}
      <div className="bg-[var(--color-background)]">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-[var(--color-card)] p-6 rounded-sm flex items-center gap-4 hover:bg-[var(--color-primary)] hover:text-black transition-all duration-300 group"
                >
                  <div className="bg-[var(--color-primary)] group-hover:bg-black p-4 rounded-sm">
                    <Icon style={{ width: '32px', height: '32px', color: 'black' }} className="group-hover:text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <div className="text-[var(--color-primary)] group-hover:text-black text-sm font-bold mb-1">
                      {step.number}
                    </div>
                    <div className="text-[var(--color-text)] group-hover:text-black font-semibold">
                      {step.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
