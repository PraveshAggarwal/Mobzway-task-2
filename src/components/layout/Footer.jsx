import { SiFacebook, SiYoutube, SiTelegram } from "react-icons/si";

export default function Footer() {
  const paymentMethods = [
    {
      name: "Paytm",
      icon: "https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg",
    },
    {
      name: "PhonePe",
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/PhonePe_Logo.svg",
    },
    { name: "UPI", text: "UPI" },
    { name: "Bank Deposit", text: "Bank" },
  ];

  return (
    <footer className="bg-(--color-background) border-t border-(--color-border) mt-20">
      <div className="container-custom py-12">
        {/* Payment Methods */}
        <div className="mb-8">
          <h3 className="text-(--color-text-secondary) text-sm font-semibold mb-4">
            Payment Method
          </h3>
          <div className="flex flex-wrap gap-4">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="bg-(--color-card) px-4 py-2 rounded-sm flex items-center justify-center min-w-20"
              >
                {method.icon ? (
                  <img
                    src={method.icon}
                    alt={method.name}
                    className="h-6 w-auto"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                ) : (
                  <span className="text-(--color-text) text-sm font-medium">
                    {method.text}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Responsible Gaming */}
        <div className="mb-8">
          <h3 className="text-(--color-text-secondary) text-sm font-semibold mb-4">
            RESPONSIBLE GAMING
          </h3>
          <div className="flex gap-4">
            <div className="bg-(--color-card) px-6 py-3 rounded-sm flex items-center justify-center">
              <span className="text-(--color-primary) text-2xl font-bold">
                18+
              </span>
            </div>
            <div className="bg-(--color-card) px-6 py-3 rounded-sm flex items-center justify-center">
              <span className="text-(--color-text) text-sm font-medium">
                GamCare
              </span>
            </div>
          </div>
        </div>

        {/* Brand Info */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-3xl font-bold">
              <span className="text-(--color-primary)">BABU</span>
              <span className="text-(--color-text)">88</span>
            </div>
            <span className="text-(--color-text-secondary) text-sm">
              Official
            </span>
          </div>
          <p className="text-(--color-primary) text-lg font-semibold mb-2">
            Bangladesh's No.1 - The Biggest and Most Trusted
          </p>
          <p className="text-(--color-text-secondary) text-sm">
            Copyright © 2026 Babu88. All rights are reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="mb-8">
          <h3 className="text-(--color-text-secondary) text-sm font-semibold mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-(--color-card) p-3 rounded-sm hover:bg-(--color-primary) hover:text-black transition-all duration-200"
              aria-label="Facebook"
            >
              <SiFacebook style={{ width: "24px", height: "24px" }} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-(--color-card) p-3 rounded-sm hover:bg-(--color-primary) hover:text-black transition-all duration-200"
              aria-label="YouTube"
            >
              <SiYoutube style={{ width: "24px", height: "24px" }} />
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-(--color-card) p-3 rounded-sm hover:bg-(--color-primary) hover:text-black transition-all duration-200"
              aria-label="Telegram"
            >
              <SiTelegram style={{ width: "24px", height: "24px" }} />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="border-t border-(--color-border) pt-8">
          <h3 className="text-(--color-text) text-xl font-bold mb-4">
            India's Trusted Online Casino and Cricket Exchange
          </h3>
          <p className="text-(--color-text-secondary) text-sm leading-relaxed">
            Babu88 is the premier online casino in India, offering a variety of
            games for mobile and desktop users. Players can enjoy roulette,
            poker, baccarat, blackjack, and even cricket exchange betting
            options, with a chance to win real money online. Our platform
            provides fast, seamless gameplay, and great bonuses for players. We
            prioritize safety and security, using advanced encryption technology
            to protect your information, and our customer service is available
            24/7. Join Babu88 today for the best online casino gaming and
            cricket exchange betting experience in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
