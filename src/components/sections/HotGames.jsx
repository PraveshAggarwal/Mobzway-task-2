import Card from '../ui/Card';
import Button from '../ui/Button';

export default function HotGames() {
  const games = [
    {
      id: 1,
      title: 'Lightning Slots',
      image: 'https://images.pexels.com/photos/29790832/pexels-photo-29790832.jpeg',
      category: 'Slots',
    },
    {
      id: 2,
      title: 'Royal Poker',
      image: 'https://images.pexels.com/photos/3678384/pexels-photo-3678384.jpeg',
      category: 'Poker',
    },
    {
      id: 3,
      title: 'European Roulette',
      image: 'https://images.pexels.com/photos/7594177/pexels-photo-7594177.jpeg',
      category: 'Roulette',
    },
    {
      id: 4,
      title: 'Mega Jackpot',
      image: 'https://images.pexels.com/photos/24643920/pexels-photo-24643920.jpeg',
      category: 'Slots',
    },
    {
      id: 5,
      title: 'VIP Poker',
      image: 'https://images.pexels.com/photos/5412324/pexels-photo-5412324.jpeg',
      category: 'Poker',
    },
    {
      id: 6,
      title: 'Premium Roulette',
      image: 'https://images.pexels.com/photos/6664249/pexels-photo-6664249.jpeg',
      category: 'Roulette',
    },
  ];
  
  return (
    <section className="py-16 bg-[var(--color-background)]">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[var(--color-text)] text-4xl font-bold">
            Hot Games
          </h2>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Card key={game.id} hover className="group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <Button variant="primary" size="sm">
                    Play Now
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <div className="text-[var(--color-primary)] text-xs font-semibold mb-1">
                  {game.category}
                </div>
                <h3 className="text-[var(--color-text)] text-lg font-bold">
                  {game.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
