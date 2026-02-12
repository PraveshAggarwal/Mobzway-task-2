import { Play } from "lucide-react";
import Button from "../ui/Button";

import hotBadge from "../../assets/hdft/hot-badge.png";
import game1 from "../../assets/hotgames/124_0.jpg";
import game2 from "../../assets/hotgames/51_0.webp";
import game3 from "../../assets/hotgames/6683b58672ad5.webp";
import game4 from "../../assets/hotgames/67906ccc5bfee.webp";
import game5 from "../../assets/hotgames/682bb349ed45d.webp";
import game6 from "../../assets/hotgames/6879c118d1019.webp";
import game7 from "../../assets/hotgames/6879f5877df62.webp";
import game8 from "../../assets/hotgames/77_0.webp";
import game9 from "../../assets/hotgames/thumb (1).webp";
import game10 from "../../assets/hotgames/thumb (2).webp";
import game11 from "../../assets/hotgames/thumb.png";
import game12 from "../../assets/hotgames/thumb.webp";

export default function HotGames() {
  const games = [
    {
      id: 1,
      title: "BB88 Super Ace",
      provider: "JILI",
      image: game1,
      hot: true,
    },
    {
      id: 2,
      title: "Aviator",
      provider: "AVIATOR STUDIO",
      image: game2,
      hot: true,
    },
    {
      id: 3,
      title: "Fortune Gems 500",
      provider: "JILI",
      image: game3,
      hot: true,
    },
    { id: 4, title: "Aviator", provider: "SPRIBE", image: game4, hot: true },
    { id: 5, title: "Super Ace", provider: "JILI", image: game5, hot: true },
    {
      id: 6,
      title: "BB88 Crash Cricket",
      provider: "JILI",
      image: game6,
      hot: true,
    },
    {
      id: 7,
      title: "Crazy Time",
      provider: "EVOLUTION GAMING",
      image: game7,
      hot: true,
    },
    {
      id: 8,
      title: "Fortune Gems 2",
      provider: "JILI",
      image: game8,
      hot: true,
    },
    { id: 9, title: "7up7down", provider: "JILI", image: game9, hot: true },
    {
      id: 10,
      title: "Evo Funky Time",
      provider: "EVOLUTION GAMING",
      image: game10,
      hot: true,
    },
    {
      id: 11,
      title: "Boxing King",
      provider: "JILI",
      image: game11,
      hot: true,
    },
    {
      id: 12,
      title: "Money Coming",
      provider: "JILI",
      image: game12,
      hot: true,
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="mx-auto w-[min(1180px,92%)]">
        <div className="flex items-center justify-between">
          <h6 className="text-[30px]  text-black">Hot Games</h6>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {games.map((game) => (
            <div key={game.id}>
              {/* Image card */}
              <a href="#" className="group relative block">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />

                  {game.hot && (
                    <img
                      src={hotBadge}
                      alt="Hot"
                      className="absolute right-2 top-2 h-8 w-auto"
                    />
                  )}

                  {/* Hover play overlay */}
                  <div className="absolute inset-0 grid place-items-center bg-black/30 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-white/90 shadow-md">
                      <Play className="h-7 w-7 text-black" fill="black" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Title + provider (below image like screenshot) */}
              <div className="mt-3">
                <div className="text-[16px] font-bold leading-tight text-black">
                  {game.title}
                </div>
                <div className="mt-2 text-[12px] font-extrabold uppercase text-black/80">
                  {game.provider}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
