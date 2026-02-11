import Button from '../ui/Button';

export default function ReferralBanner() {
  return (
    <section className="py-16 bg-[var(--color-background-secondary)]">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-[var(--color-card)] to-[var(--color-background-secondary)] rounded-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
            {/* Content */}
            <div>
              <div className="inline-block bg-[var(--color-primary)] text-black text-xs font-bold px-3 py-1 rounded-sm mb-4">
                REFERRALS
              </div>
              <h2 className="text-[var(--color-text)] text-4xl font-bold mb-4">
                Refer and earn with BABU88
              </h2>
              <p className="text-[var(--color-text-secondary)] text-lg mb-6 leading-relaxed">
                The No.1 friend referral program in India is here! Earn free ₹300 when you refer a friend 
                and also earn lifetime commission of up to 2% for every deposit your friend makes!
              </p>
              <Button variant="primary" size="lg">
                Refer Now
              </Button>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-sm overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/32897236/pexels-photo-32897236.jpeg"
                  alt="Refer and Earn"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[var(--color-primary)] text-black px-4 py-2 rounded-sm inline-block font-bold text-lg">
                    Earn Up to 2% Commission
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
