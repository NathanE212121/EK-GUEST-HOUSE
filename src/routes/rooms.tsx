import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Bed, Bath, Wifi, Sofa, Users, Droplet, ArrowRight } from "lucide-react";
import roomStandard from "@/assets/room-1.jpg";
import roomDeluxe from "@/assets/room-2.jpg";
import roomCozy from "@/assets/room-3.jpg";
import roomFamily from "@/assets/room-family-real.jpg";
import bathroom from "@/assets/bathroom-1.jpg";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — EK Pension Chelenko" },
      { name: "description", content: "Standard, deluxe and connected family rooms at EK Pension. Private bathrooms, Wi-Fi and warm Ethiopian hospitality." },
      { property: "og:title", content: "EK Pension Rooms" },
      { property: "og:description", content: "Comfortable rooms with private bathrooms and modern amenities." },
      { property: "og:image", content: roomDeluxe },
    ],
  }),
  component: RoomsPage,
});

const rooms = [
  {
    title: "Standard Room",
    img: roomStandard,
    tag: "Most popular",
    desc: "Relax in our spacious standard room with a comfortable double bed and all the modern essentials.",
    amenities: [
      { icon: Bed, label: "Double bed" },
      { icon: Bath, label: "Private bathroom" },
      { icon: Wifi, label: "Free Wi-Fi" },
    ],
  },
  {
    title: "Deluxe Room",
    img: roomDeluxe,
    tag: "Premium",
    desc: "Extra space, premium furnishings and a serene private seating area for the perfect unwind.",
    amenities: [
      { icon: Bed, label: "Queen bed" },
      { icon: Bath, label: "Private bathroom" },
      { icon: Sofa, label: "Seating area" },
      { icon: Wifi, label: "Free Wi-Fi" },
    ],
  },
  {
    title: "Cozy Double Room",
    img: roomCozy,
    tag: "Cozy",
    desc: "A warm, intimate room with plush bedding and soft lighting — perfect for a restful night after a long journey.",
    amenities: [
      { icon: Bed, label: "Double bed" },
      { icon: Bath, label: "Private bathroom" },
      { icon: Wifi, label: "Free Wi-Fi" },
    ],
  },
  {
    title: "Connected Family Room",
    img: roomFamily,
    tag: "Family",
    desc: "Two adjacent rooms joined by a private door — perfect for families and small groups traveling together.",
    amenities: [
      { icon: Bed, label: "Two bedrooms" },
      { icon: Bath, label: "Two bathrooms" },
      { icon: Users, label: "Family friendly" },
    ],
  },
  {
    title: "Private Bathroom",
    img: bathroom,
    tag: "Included",
    desc: "Every room comes with a clean, modern private bathroom — hot water, fresh toiletries, daily cleaning.",
    amenities: [
      { icon: Droplet, label: "Hot water" },
      { icon: Bath, label: "Daily cleaning" },
      { icon: Sofa, label: "Fresh toiletries" },
    ],
  },
];

function RoomsPage() {
  return (
    <Layout>
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-40" />
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-foreground/80 font-semibold">Our Rooms</span>
          <h1 className="font-display text-6xl md:text-7xl mt-4 leading-[1.05]">
            Choose your <em className="italic text-gradient-gold not-italic">perfect stay</em>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Each room is thoughtfully designed with modern amenities, soft lighting, and the warm hospitality of EK Pension.
          </p>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 perspective-1000">
          {rooms.map((r, i) => (
            <article
              key={r.title}
              className="card-3d group relative rounded-3xl bg-card overflow-hidden shadow-soft border border-border/50 animate-rise"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img src={r.img} alt={r.title} loading="lazy"
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-warm text-primary-foreground shadow-gold">
                  {r.tag}
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-display text-3xl mb-3">{r.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {r.amenities.map((a) => (
                    <span key={a.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-xs font-medium text-secondary-foreground">
                      <a.icon size={13} /> {a.label}
                    </span>
                  ))}
                </div>
                <Link
                  to="/book"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-foreground group/btn hover:text-accent-foreground transition-colors"
                >
                  Reserve this room
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
