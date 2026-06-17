import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ShieldCheck, Sparkles, Wifi, Car, Coffee, Clock, ArrowRight, Star } from "lucide-react";
import hero from "@/assets/ek-exterior.jpg";
import roomStandard from "@/assets/room-1.jpg";
import roomDeluxe from "@/assets/room-2.jpg";
import roomFamily from "@/assets/room-family-real.jpg";
import { Aurora } from "@/components/site/Aurora";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Location } from "@/components/site/Location";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EK Pension — Boutique Guest House in Chelenko, Oromia" },
      { name: "description", content: "Comfortable, clean and secure rooms on Chelanko Main Road. Warm Ethiopian hospitality, free Wi-Fi, 24/7 reception. Book your stay at EK Pension today." },
      { property: "og:title", content: "EK Pension — Stay in Chelenko, Ethiopia" },
      { property: "og:description", content: "Boutique guest house with modern comforts and local hospitality." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="EK Pension at sunset overlooking the Ethiopian highlands" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
        </div>

        <Aurora />
        <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-gradient-warm opacity-20 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-emerald-deep opacity-20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        {/* floating sparkles */}
        {[
          { top: "18%", left: "8%", delay: "0s" },
          { top: "32%", left: "55%", delay: "1.2s" },
          { top: "70%", left: "12%", delay: "2.1s" },
          { top: "22%", left: "78%", delay: "0.6s" },
          { top: "60%", left: "62%", delay: "1.8s" },
        ].map((s, i) => (
          <Sparkles
            key={i}
            size={14}
            className="absolute text-accent animate-sparkle"
            style={{ top: s.top, left: s.left, animationDelay: s.delay }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="max-w-2xl animate-rise">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-border/40 mb-6">
              <Sparkles size={14} className="text-accent" />
              <span className="text-xs uppercase tracking-[0.25em] text-foreground/70">Chelenko · Oromia · Est. 2018</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-light leading-[0.95] text-foreground">
              Where <em className="italic text-gradient-gold not-italic font-normal">hospitality</em>
              <br /> feels like <span className="font-semibold">home.</span>
            </h1>
            <p className="mt-8 text-lg text-foreground/75 max-w-lg leading-relaxed">
              A warm, modern guest house on Chelanko Main Road. Clean private rooms, friendly 24/7 reception, and the quiet comfort you deserve after a day on the road.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/book"
                className="group px-7 py-4 rounded-full bg-gradient-warm text-primary-foreground font-semibold shadow-gold hover:shadow-3d hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                Reserve Your Room
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/rooms"
                className="px-7 py-4 rounded-full glass border border-border text-foreground font-semibold hover:bg-secondary transition-all"
              >
                View Rooms
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm text-foreground/70">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-accent text-accent" />)}
              </div>
              <span>Trusted by guests since 2018</span>
            </div>
          </div>
        </div>

        {/* floating preview cards 3D */}
        <div className="hidden lg:block absolute bottom-20 right-10 perspective-1000">
          <div className="relative w-80 h-96 preserve-3d animate-float">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-3d transform rotate-6">
              <img src={roomDeluxe} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -left-10 w-56 h-72 rounded-3xl overflow-hidden shadow-3d transform -rotate-6 border-4 border-background">
              <img src={roomStandard} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -top-4 -right-6 px-4 py-3 rounded-2xl glass shadow-gold border border-border/40 backdrop-blur-xl">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Available tonight</div>
              <div className="font-display text-lg text-foreground">4 rooms ready</div>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* ABOUT */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent-foreground/80 font-semibold">About EK Pension</span>
            <h2 className="font-display text-5xl md:text-6xl mt-4 leading-tight">
              A quiet retreat in the heart of <em className="italic text-gradient-gold not-italic">Chelenko</em>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              EK Pension blends local Ethiopian warmth with the modern comforts every traveler expects.
              Whether you're passing through or staying the week, our rooms, our staff, and our coffee
              are here to make you feel at ease.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, label: "Secure premises with CCTV" },
                { icon: Coffee, label: "Daily fresh linens & coffee" },
                { icon: Wifi, label: "Free high-speed Wi-Fi" },
                { icon: Car, label: "Free on-site parking" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-start gap-3 p-4 rounded-2xl bg-card shadow-soft hover:shadow-3d transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-gradient-warm flex items-center justify-center text-primary-foreground shrink-0">
                    <Icon size={18} />
                  </div>
                  <span className="text-sm font-medium text-foreground/90 pt-1.5">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="perspective-1000">
            <div className="relative tilt-hover">
              <div className="absolute -inset-4 bg-gradient-warm opacity-20 blur-3xl rounded-full" />
              <img src={roomFamily} alt="Cozy interior at EK Pension" width={1280} height={960} loading="lazy"
                   className="relative rounded-3xl shadow-3d w-full" />
              <div className="absolute -bottom-8 -left-8 p-6 rounded-2xl bg-card shadow-3d border border-border/40 max-w-[200px]">
                <div className="font-display text-4xl text-gradient-gold">8+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Years of trusted hospitality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY STAY */}
      <section className="relative py-32 px-6 bg-secondary/40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-40" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-foreground/80 font-semibold">Why guests return</span>
            <h2 className="font-display text-5xl md:text-6xl mt-4 leading-tight">
              Trusted, clean & <em className="italic text-gradient-gold not-italic">secure</em>.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 perspective-1000">
            {[
              { icon: Clock, title: "24/7 Reception", desc: "Friendly staff available around the clock to help with anything you need.", tag: "Always open" },
              { icon: Sparkles, title: "Daily Housekeeping", desc: "Fresh linens, spotless bathrooms, and a tidy room every single day.", tag: "Certified clean" },
              { icon: ShieldCheck, title: "Safe & Secure", desc: "Well-lit property, CCTV coverage, and a secure perimeter for peace of mind.", tag: "Protected" },
            ].map((f, i) => (
              <div key={f.title} className="card-3d group relative p-8 rounded-3xl bg-card border border-border/60 shadow-soft animate-rise" style={{ animationDelay: `${i*100}ms` }}>
                <div className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-accent/20 text-accent-foreground">
                  {f.tag}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-warm flex items-center justify-center text-primary-foreground shadow-gold mb-6">
                  <f.icon size={24} />
                </div>
                <h3 className="font-display text-2xl mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      <Location />

      <Testimonials />


      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto relative rounded-[2.5rem] overflow-hidden shadow-3d">
          <div className="absolute inset-0 bg-gradient-deep" />
          <div className="absolute inset-0 bg-gradient-glow opacity-60" />
          <div className="relative px-8 md:px-16 py-20 text-center text-primary-foreground">
            <h2 className="font-display text-5xl md:text-7xl leading-tight">
              Ready to <em className="italic text-gradient-gold not-italic">stay</em> with us?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl mx-auto">
              Reserve in under a minute — we'll confirm by phone or WhatsApp the same day.
            </p>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full bg-gradient-warm text-primary-foreground font-semibold shadow-gold hover:-translate-y-1 transition-all"
            >
              Book Your Room <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
