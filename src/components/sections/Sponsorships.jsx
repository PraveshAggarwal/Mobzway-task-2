import Card from '../ui/Card';

export default function Sponsorships() {
  const sponsors = [
    { id: 1, name: 'Vegas Vikings', year: '2025/2026', image: 'https://images.pexels.com/photos/32897236/pexels-photo-32897236.jpeg' },
    { id: 2, name: 'Sudurpaschim Royals', year: '2024/2025', image: 'https://images.pexels.com/photos/27594252/pexels-photo-27594252.jpeg' },
    { id: 3, name: 'Telugu Warriors', year: '2024/2025', image: 'https://images.pexels.com/photos/3602833/pexels-photo-3602833.jpeg' },
    { id: 4, name: 'Colombo Strikers', year: '2024/2025', image: 'https://images.pexels.com/photos/30387502/pexels-photo-30387502.jpeg' },
    { id: 5, name: 'Grand Cayman Jaguars', year: '2024/2025', image: 'https://images.pexels.com/photos/28758998/pexels-photo-28758998.jpeg' },
    { id: 6, name: 'Montreal Tigers', year: '2023/2024', image: 'https://images.pexels.com/photos/30387494/pexels-photo-30387494.jpeg' },
  ];
  
  return (
    <section className="py-16 bg-(--color-background-secondary)">
      <div className="container-custom">
        <h2 className="text-(--color-primary) text-3xl font-bold mb-8">
          Sponsorships
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sponsors.map((sponsor) => (
            <Card key={sponsor.id} hover>
              <div className="relative overflow-hidden aspect-square group">
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                  <div className="w-16 h-16 bg-(--color-primary) rounded-full mb-2 flex items-center justify-center">
                    <span className="text-black text-xl font-bold">
                      {sponsor.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-(--color-text) text-sm font-bold mb-1">
                    {sponsor.name}
                  </h3>
                  <div className="text-(--color-text-secondary) text-xs">
                    {sponsor.year}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
