import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { useState } from "react";
import { Calendar, User, Mail, Phone, Users, Check } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Your Stay — EK Pension" },
      { name: "description", content: "Reserve your room at EK Pension in Chelenko. Quick booking request — we confirm by phone or WhatsApp the same day." },
      { property: "og:title", content: "Book EK Pension" },
      { property: "og:description", content: "Reserve your room in under a minute." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", checkin: "", checkout: "", guests: "1",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello EK Pension! I'd like to book a room.\n\n` +
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n` +
      `Check-in: ${form.checkin}\nCheck-out: ${form.checkout}\nGuests: ${form.guests}`
    );
    window.open(`https://wa.me/251921414245?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const field = (key: keyof typeof form, label: string, type: string, icon: any, placeholder = "") => (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold flex items-center gap-2 mb-2">
        {(() => { const Ico = icon; return <Ico size={13} />; })()} {label}
      </span>
      <input
        type={type}
        required
        placeholder={placeholder}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        className="w-full px-5 py-4 rounded-2xl bg-secondary/60 border border-border focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/20 transition-all text-foreground placeholder:text-muted-foreground/60"
      />
    </label>
  );

  return (
    <Layout>
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-glow opacity-40" />
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-foreground/80 font-semibold">Reservations</span>
          <h1 className="font-display text-6xl md:text-7xl mt-4 leading-[1.05]">
            Book your <em className="italic text-gradient-gold not-italic">stay</em>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Share a few details and we'll confirm your reservation by phone or WhatsApp the same day.
          </p>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto perspective-1000">
          <div className="relative rounded-[2rem] bg-card shadow-3d border border-border/40 p-8 md:p-12 animate-rise">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-warm rounded-full blur-3xl opacity-30" />
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-warm flex items-center justify-center shadow-gold mb-6">
                  <Check size={32} className="text-primary-foreground" />
                </div>
                <h2 className="font-display text-4xl mb-3">Request sent!</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Your WhatsApp should have opened with your booking details. We'll confirm shortly — thank you for choosing EK Pension.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:"",email:"",phone:"",checkin:"",checkout:"",guests:"1"}); }}
                  className="mt-8 px-6 py-3 rounded-full bg-secondary text-foreground font-semibold hover:bg-secondary/80 transition-colors"
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="relative space-y-5">
                {field("name", "Full Name", "text", User, "Your full name")}
                <div className="grid md:grid-cols-2 gap-5">
                  {field("email", "Email", "email", Mail, "you@example.com")}
                  {field("phone", "Phone", "tel", Phone, "+251 ...")}
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {field("checkin", "Check-in", "date", Calendar)}
                  {field("checkout", "Check-out", "date", Calendar)}
                </div>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold flex items-center gap-2 mb-2">
                    <Users size={13} /> Guests
                  </span>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-secondary/60 border border-border focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/20 transition-all text-foreground"
                  >
                    {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n===1 ? "guest" : "guests"}</option>)}
                  </select>
                </label>

                <button
                  type="submit"
                  className="w-full mt-4 py-5 rounded-2xl bg-gradient-warm text-primary-foreground font-semibold text-lg shadow-gold hover:shadow-3d hover:-translate-y-0.5 transition-all"
                >
                  Submit Booking Request
                </button>
                <p className="text-xs text-center text-muted-foreground">
                  Submitting will open WhatsApp with your details prefilled.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
