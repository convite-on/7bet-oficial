import { GameList } from '@/components/games';
import type { Game } from '@/types';

interface GamesSectionProps {
  onGameClick: (gameId: string) => void;
}

// Imagens dos jogos (usando placeholders)
const hotGames: Game[] = [
  { id: '1', name: 'Fortune Tiger', image: 'https://i.postimg.cc/ZnmmqzKJ/fortune-tiger.jpg', isHot: true },
  { id: '2', name: 'Fortune Ox', image: 'https://i.postimg.cc/yNR23pGW/fortune-ox.jpg', isHot: true },
  { id: '3', name: 'Fortune Rabbit', image: 'https://i.postimg.cc/8PC3mzY9/fortune-rabbit.jpg', isHot: true },
  { id: '4', name: 'Fortune Dragon', image: 'https://i.postimg.cc/9Q6n2tfr/fortune-dragon.jpg', isHot: true },
  { id: '5', name: 'Big Bass Splash', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=500&fit=crop', isHot: true },
  { id: '6', name: 'Gates Of Olympus', image: 'https://i.postimg.cc/SsDdnWmG/olympus.jpg', isHot: true },
];

const slotsGames: Game[] = [
  { id: '7', name: 'Sweet Bonanza', image: 'https://images.unsplash.com/photo-1582562124811-c8ed1b31bc3b?w=400&h=500&fit=crop', isHot: true },
  { id: '8', name: 'Starlight Princess', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=500&fit=crop' },
  { id: '9', name: 'Wolf Gold', image: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=400&h=500&fit=crop' },
  { id: '10', name: 'Book of Dead', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop' },
  { id: '11', name: 'Money Train 2', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=500&fit=crop' },
  { id: '12', name: 'Deadwood', image: 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=400&h=500&fit=crop' },
];

const fishingGames: Game[] = [
  { id: '13', name: 'Cai Shen Fishing', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=500&fit=crop', isHot: true },
  { id: '14', name: 'Dragon Fishing', image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=400&h=500&fit=crop' },
  { id: '15', name: 'Fish Hunter', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=500&fit=crop' },
  { id: '16', name: 'Ocean King', image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=400&h=500&fit=crop' },
];

const liveGames: Game[] = [
  { id: '17', name: 'Auto Roulette', image: 'https://images.unsplash.com/photo-1596838333262-17c02b222973?w=400&h=500&fit=crop' },
  { id: '18', name: 'Mega Wheel', image: 'https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=400&h=500&fit=crop' },
  { id: '19', name: 'Blackjack', image: 'https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?w=400&h=500&fit=crop' },
  { id: '20', name: 'Baccarat', image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=400&h=500&fit=crop' },
];

const sportsGames: Game[] = [
  { id: '21', name: 'Aviator', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=500&fit=crop', isHot: true },
  { id: '22', name: 'Football', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=500&fit=crop' },
  { id: '23', name: 'Basketball', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=500&fit=crop' },
  { id: '24', name: 'Tennis', image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=500&fit=crop' },
];

export function GamesSection({ onGameClick }: GamesSectionProps) {
  return (
    <section className="bg-[#0a0a12] py-8">
      <div className="container mx-auto px-4">
        {/* Hot Games */}
        <GameList
          title="Hot"
          games={hotGames}
          onGameClick={onGameClick}
        />

        {/* Slots Games */}
        <GameList
          title="Slots"
          games={slotsGames}
          onGameClick={onGameClick}
        />

        {/* Fishing Games */}
        <GameList
          title="Pescaria"
          games={fishingGames}
          onGameClick={onGameClick}
        />

        {/* Live Casino */}
        <GameList
          title="Live Casino"
          games={liveGames}
          onGameClick={onGameClick}
        />

        {/* Sports */}
        <GameList
          title="Esportes"
          games={sportsGames}
          onGameClick={onGameClick}
        />
      </div>
    </section>
  );
}
