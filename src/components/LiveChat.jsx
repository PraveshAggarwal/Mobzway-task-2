import { MessageCircle } from "lucide-react";

export default function LiveChat() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        className="bg-(--color-primary) hover:bg-(--color-primary-light) text-black p-4 rounded-full shadow-(--shadow-card-hover) transition-all duration-200 hover:scale-110"
        aria-label="Live chat"
      >
        <MessageCircle style={{ width: "28px", height: "28px" }} />
      </button>
    </div>
  );
}
