import { useEffect, useState } from 'react';
import { Trophy, TrendingUp } from 'lucide-react';

interface Winner {
  id: string;
  username: string;
  game: string;
  amount: number;
  date: string;
}

const mockWinners: Winner[] = [
  { id: '1', username: 'silv****', game: 'Aviator', amount: 294.60, date: '2026-02-18 17:30:30' },
  { id: '2', username: 'adri****', game: 'Shaolin Soccer', amount: 54.30, date: '2026-02-18 16:20:15' },
  { id: '3', username: 'alin****', game: 'Fortune Ox', amount: 89.40, date: '2026-02-18 14:32:10' },
  { id: '4', username: 'Amor****', game: 'Fortune Tiger', amount: 52.00, date: '2026-02-18 13:18:13' },
  { id: '5', username: 'romi****', game: 'Aviator', amount: 268.38, date: '2026-02-18 10:48:30' },
  { id: '6', username: 'Usua****', game: 'Auto Roulette', amount: 88.00, date: '2026-02-18 10:27:15' },
  { id: '7', username: 'Kada****', game: 'The Great Icescape', amount: 82.00, date: '2026-02-18 05:08:10' },
  { id: '8', username: 'Rodr****', game: 'Fortune Rabbit', amount: 111.00, date: '2026-02-18 00:20:17' },
  { id: '9', username: 'Alan****', game: 'Aviator', amount: 69.80, date: '2026-02-17 23:48:30' },
  { id: '10', username: 'Gil1****', game: 'Mega Wheel', amount: 95.50, date: '2026-02-17 23:36:15' },
];

export function WinnersSection() {
  const [animatedWinners, setAnimatedWinners] = useState<Winner[]>(mockWinners.slice(0, 5));

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedWinners((prev) => {
        const nextIndex = (mockWinners.findIndex(w => w.id === prev[prev.length - 1].id) + 1) % mockWinners.length;
        const newWinners = [...prev.slice(1), mockWinners[nextIndex]];
        return newWinners;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0f0f1a] py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <Trophy className="text-yellow-400" size={24} />
          <h2 className="text-xl font-bold text-white">Últimos Vencedores</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {animatedWinners.map((winner, index) => (
            <div
              key={`${winner.id}-${index}`}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 hover:border-yellow-500/50 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">{winner.username}</span>
                <TrendingUp className="text-green-400" size={16} />
              </div>
              <p className="text-white font-medium text-sm mb-1">{winner.game}</p>
              <p className="text-green-400 font-bold text-lg">
                R$ {winner.amount.toFixed(2)}
              </p>
              <p className="text-gray-500 text-xs mt-1">{winner.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
