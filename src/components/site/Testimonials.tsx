import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Hanna T.", city: "Addis Ababa", text: "The cleanest, warmest stay I've had outside the capital. Staff treated us like family.", rating: 5 },
  { name: "Mohammed A.", city: "Dire Dawa", text: "Modern rooms, fast Wi-Fi and the best coffee on Chelanko road. Booking again.", rating: 5 },
  { name: "Sara L.", city: "Berlin", text: "A hidden gem. Quiet at night, beautiful sunrise from the balcony. Highly recommend.", rating: 5 },
  { name: "Yonas K.", city: "Harar", text: "I travel for work every week — EK Pension is now my only stop. Secure and spotless.", rating: 5 },
  { name: "Liya G.", city: "Hawassa", text: "The connected family room was perfect for our kids. Genuine Ethiopian hospitality.", rating: 5 },
];

export function Testimonials() {
  const loop = [...reviews, ...reviews];
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14 flex items-end justify-between flex-wrap gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-accent-foreground/80 font-semibold">Guest Stories</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 leading-tight max-w-2xl">
            Loved by travelers from <em className="italic text-gradient-gold not-italic">across Ethiopia</em>.
          </h2>
        </div>
        <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-card shadow-soft border border-border/50">
          {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-accent text-accent" />)}
          <span className="ml-2 text-sm font-semibold">4.9 · 800+ reviews</span>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((r, i) => (
            <article key={i} className="shrink-0 w-[360px] p-7 rounded-3xl bg-card border border-border/60 shadow-soft hover:shadow-3d hover:-translate-y-1 transition-all">
              <Quote size={28} className="text-accent mb-4" />
              <p className="text-foreground/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.city}</div>
                </div>
                <div className="flex">
                  {Array.from({ length: r.rating }).map((_, i) => <Star key={i} size={12} className="fill-accent text-accent" />)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
