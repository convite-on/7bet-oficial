import { Gamepad2, Fish, Users, Trophy, Flame, Smartphone } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
  isHot?: boolean;
}

const categories: Category[] = [
  { id: 'hot', name: 'Hot', icon: Flame, isHot: true },
  { id: 'slots', name: 'Slots', icon: Gamepad2 },
  { id: 'fishing', name: 'Pescaria', icon: Fish },
  { id: 'live', name: 'Live Casino', icon: Users },
  { id: 'sports', name: 'Esportes', icon: Trophy },
  { id: 'app', name: 'Baixar APP', icon: Smartphone },
];

interface GameCategoriesProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function GameCategories({ activeCategory, onCategoryChange }: GameCategoriesProps) {
  return (
    <section className="bg-[#0f0f1a] py-4 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`flex flex-col items-center gap-1 px-4 sm:px-6 py-3 rounded-xl transition-all min-w-[70px] sm:min-w-[90px] ${
                  isActive
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <Icon 
                  size={24} 
                  className={`${category.isHot ? 'text-red-500' : ''} ${isActive ? '!text-black' : ''}`} 
                />
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
