import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Location } from "@/components/site/Location";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact EK Pension — Chelenko, Oromia" },
      { name: "description", content: "Call, email or WhatsApp EK Pension on Chelanko Main Road, Oromia, Ethiopia. We respond fast." },
      { property: "og:title", content: "Contact EK Pension" },
      { property: "og:description", content: "Get in touch with us — phone, email and WhatsApp." },
    ],
  }),
  component: ContactPage,
});

const phones = [
  { number: "+251 921 414 245", raw: "251921414245" },
  { number: "+251 911 043 703", raw: "251911043703" },
  { number: "+251 703 700 999", raw: "251703700999" },
];

function ContactPage() {
  return (
    <Layout>
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-40" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-foreground/80 font-semibold">Get In Touch</span>
            <h1 className="font-display text-6xl md:text-7xl mt-4 leading-[1.05]">
              Let's <em className="italic text-gradient-gold not-italic">talk</em>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Questions about availability, directions or special requests? Reach us by phone, WhatsApp or email — we'd love to host you.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="perspective-1000">
            <div className="card-3d rounded-3xl bg-gradient-deep text-primary-foreground p-10 shadow-3d relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-glow opacity-40" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-warm flex items-center justify-center shadow-gold mb-6">
                  <MapPin size={24} />
                </div>
                <h2 className="font-display text-3xl mb-2">Visit Us</h2>
                <p className="text-primary-foreground/75 leading-relaxed">
                  Chelanko Main Road<br />
                  Oromia Region, Ethiopia
                </p>

                <div className="mt-10 pt-10 border-t border-primary-foreground/15">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-warm flex items-center justify-center shadow-gold mb-6">
                    <Mail size={24} />
                  </div>
                  <h3 className="font-display text-2xl mb-2">Email</h3>
                  <a href="mailto:nathan20202323@gmail.com" className="text-primary-foreground/85 hover:text-gold transition-colors">
                    nathan20202323@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {phones.map((p, i) => (
              <div key={p.raw} className="group p-6 rounded-3xl bg-card shadow-soft hover:shadow-3d transition-all border border-border/50 flex items-center justify-between animate-rise" style={{ animationDelay: `${i*100}ms` }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-foreground">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone {i+1}</div>
                    <a href={`tel:${p.raw}`} className="font-display text-xl text-foreground hover:text-accent-foreground transition-colors">
                      {p.number}
                    </a>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${p.raw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-warm text-primary-foreground text-sm font-semibold shadow-gold hover:-translate-y-0.5 transition-all"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            ))}

            <div className="p-8 rounded-3xl bg-secondary/60 border border-border/50 text-center">
              <p className="text-sm text-muted-foreground">
                We respond fastest on <span className="font-semibold text-foreground">WhatsApp</span> — usually within an hour.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Location />
    </Layout>
  );
}
