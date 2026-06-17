import exterior from "@/assets/ek-exterior.jpg";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";
import roomFamily from "@/assets/room-family-real.jpg";
import bathroom1 from "@/assets/bathroom-1.jpg";
import bathroom2 from "@/assets/bathroom-2.jpg";

const items = [
  { src: exterior, alt: "EK Pension building exterior on Chelenko Main Road", tag: "Our Building", span: "md:col-span-2 md:row-span-2" },
  { src: room1, alt: "Standard double room", tag: "Standard", span: "" },
  { src: bathroom1, alt: "Private en-suite bathroom", tag: "Bathroom", span: "" },
  { src: room2, alt: "Deluxe room with private entry", tag: "Deluxe", span: "" },
  { src: room3, alt: "Cozy bedroom with floral linens", tag: "Cozy Room", span: "" },
  { src: roomFamily, alt: "Connected family room", tag: "Family Suite", span: "" },
  { src: bathroom2, alt: "Bathroom vanity with mirror", tag: "Vanity", span: "" },
];

export function Gallery() {
  return (
    <section className="relative py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-foreground/80 font-semibold">Step Inside</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 leading-tight">
            A glimpse of <em className="italic text-gradient-gold not-italic">your stay</em>.
          </h2>
        </div>
        <div className="grid md:grid-cols-4 md:auto-rows-[18rem] gap-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-3d transition-all duration-500 ${it.span}`}
            >
              <img src={it.src} alt={it.alt} loading="lazy"
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <figcaption className="absolute bottom-5 left-5 text-primary-foreground">
                <div className="text-[10px] uppercase tracking-[0.25em] opacity-80">EK Pension</div>
                <div className="font-display text-2xl">{it.tag}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
