import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    id: 1,
    title: 'Bônus de Boas-Vindas',
    subtitle: 'Até R$ 5.555',
    description: 'No seu primeiro depósito + rodadas grátis!',
    gradient: 'from-purple-600 via-pink-500 to-orange-500',
    emoji: '🎁',
  },
  {
    id: 2,
    title: 'Programa VIP',
    subtitle: 'Recompensas Exclusivas',
    description: 'Bônus semanal de R$ 20.000 e mensal de R$ 100.000',
    gradient: 'from-yellow-600 via-amber-500 to-yellow-400',
    emoji: '👑',
  },
  {
    id: 3,
    title: 'Indique e Ganhe',
    subtitle: 'R$ 15 por Amigo',
    description: 'Para cada membro convidado com depósito > R$ 30',
    gradient: 'from-green-600 via-emerald-500 to-teal-400',
    emoji: '💰',
  },
];

export function Hero() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Banner Carousel */}
      <div className="relative h-[200px] sm:h-[280px] lg:h-[320px]">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`h-full bg-gradient-to-r ${banner.gradient} flex items-center`}>
              <div className="container mx-auto px-4 sm:px-8">
                <div className="flex items-center gap-4 sm:gap-8">
                  <div className="text-6xl sm:text-8xl">{banner.emoji}</div>
                  <div>
                    <h2 className="text-white text-lg sm:text-2xl font-bold mb-1">
                      {banner.title}
                    </h2>
                    <p className="text-white text-2xl sm:text-4xl lg:text-5xl font-black mb-2">
                      {banner.subtitle}
                    </p>
                    <p className="text-white/90 text-sm sm:text-lg">
                      {banner.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevBanner}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentBanner
                  ? 'bg-white w-6'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
