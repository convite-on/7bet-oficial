import { useState } from 'react';
import { Flame, Play } from 'lucide-react';

interface GameCardProps {
  id: string;
  name: string;
  image: string;
  isHot?: boolean;
  onClick: () => void;
}

export function GameCard({ name, image, isHot, onClick }: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl bg-gray-800 aspect-[4/5]">
        {/* Imagem do jogo */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay no hover */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-6 py-3 rounded-full flex items-center gap-2 transform transition-transform hover:scale-110">
            <Play size={20} fill="currentColor" />
            Jogar
          </button>
        </div>

        {/* Badge Hot */}
        {isHot && (
          <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <Flame size={12} fill="currentColor" />
            HOT
          </div>
        )}

        {/* Nome do jogo */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
          <h3 className="text-white font-semibold text-sm truncate">{name}</h3>
        </div>
      </div>
    </div>
  );
}
