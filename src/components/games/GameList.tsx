import { useState } from 'react';
import { GameCard } from './GameCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Game {
  id: string;
  name: string;
  image: string;
  isHot?: boolean;
}

interface GameListProps {
  title: string;
  games: Game[];
  onGameClick: (gameId: string) => void;
  showViewAll?: boolean;
}

export function GameList({ title, games, onGameClick, showViewAll = true }: GameListProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollAmount = 300;

  const scrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - scrollAmount));
  };

  const scrollRight = () => {
    const maxScroll = games.length * 200 - 1200;
    setScrollPosition(Math.min(maxScroll, scrollPosition + scrollAmount));
  };

  return (
    <div className="py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></span>
          {title}
        </h2>
        {showViewAll && (
          <Button variant="ghost" className="text-yellow-400 hover:text-yellow-300 text-sm">
            Ver Tudo
            <ChevronRight size={16} />
          </Button>
        )}
      </div>

      {/* Games Container */}
      <div className="relative">
        {/* Scroll Buttons */}
        {games.length > 6 && (
          <>
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full -ml-4 transition-opacity"
              style={{ opacity: scrollPosition > 0 ? 1 : 0 }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full -mr-4 transition-opacity"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Games Grid */}
        <div 
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollBehavior: 'smooth', transform: `translateX(-${scrollPosition}px)` }}
        >
          {games.map((game) => (
            <div key={game.id} className="flex-shrink-0 w-[150px] sm:w-[180px]">
              <GameCard
                id={game.id}
                name={game.name}
                image={game.image}
                isHot={game.isHot}
                onClick={() => onGameClick(game.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
