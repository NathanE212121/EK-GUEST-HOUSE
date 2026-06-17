import { MapPin, Navigation, Phone } from "lucide-react";
import exterior from "@/assets/ek-exterior.jpg";

export function Location() {
  const mapsQuery = "EK+Pension+Chelenko+Main+Road+Oromia+Ethiopia";
  const embedSrc = `https://www.google.com/maps?q=${mapsQuery}&z=15&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

  return (
    <section id="location" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-foreground/80 font-semibold">Find Us</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 leading-tight">
            Right on <em className="italic text-gradient-gold not-italic">Chelenko Main Road</em>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Easy to spot in the heart of Chelenko, East Hararghe — next to Cooperative Bank of Oromia. Free parking right at our door.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden shadow-3d border border-border/60 min-h-[420px]">
            <iframe
              title="EK Pension location on Chelenko Main Road"
              src={embedSrc}
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden shadow-3d group h-56">
              <img src={exterior} alt="EK Pension building on Chelenko Main Road" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
              <div className="absolute bottom-4 left-5 text-primary-foreground">
                <div className="text-[10px] uppercase tracking-[0.25em] opacity-80">Our Building</div>
                <div className="font-display text-2xl">EK Pension</div>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-card shadow-soft border border-border/60">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-warm flex items-center justify-center text-primary-foreground shadow-gold shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Address</div>
                  <div className="font-display text-xl text-foreground mt-1">Chelenko Main Road</div>
                  <div className="text-sm text-muted-foreground">East Hararghe, Oromia Region, Ethiopia</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-warm text-primary-foreground font-semibold shadow-gold hover:-translate-y-0.5 transition-all text-sm"
                >
                  <Navigation size={16} /> Get Directions
                </a>
                <a
                  href="tel:+251921414245"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-secondary text-foreground font-semibold hover:bg-secondary/70 transition-all text-sm"
                >
                  <Phone size={16} /> Call Reception
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
