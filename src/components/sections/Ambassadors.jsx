import Card from '../ui/Card';

export default function Ambassadors() {
  const ambassadors = [
    {
      id: 1,
      name: 'Samira Mahi Khan',
      year: '2025/2026',
      image: 'https://images.pexels.com/photos/30004322/pexels-photo-30004322.jpeg',
    },
    {
      id: 2,
      name: 'Apu Biswas',
      year: '2024/2025',
      image: 'https://images.pexels.com/photos/29811345/pexels-photo-29811345.jpeg',
    },
  ];
  
  return (
    <section className="py-16 bg-(--color-background)">
      <div className="container-custom">
        <h2 className="text-(--color-primary) text-3xl font-bold mb-8">
          Brand Ambassadors
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ambassadors.map((ambassador) => (
            <Card key={ambassador.id} hover>
              <div className="relative overflow-hidden aspect-3/4 group">
                <img
                  src={ambassador.image}
                  alt={ambassador.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-(--color-primary) text-sm font-semibold mb-2">
                    OFFICIAL BRAND AMBASSADOR
                  </div>
                  <h3 className="text-(--color-text) text-2xl font-bold mb-1">
                    {ambassador.name}
                  </h3>
                  <div className="text-(--color-text-secondary) text-sm">
                    {ambassador.year}
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
