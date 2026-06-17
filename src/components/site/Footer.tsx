import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/ek-logo.jpg.asset.json";

export function Footer() {
  return (
    <footer className="relative bg-gradient-deep text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#0a1028] flex items-center justify-center overflow-hidden shadow-gold ring-1 ring-white/10">
              <img src={logo.url} alt="EK Pension logo" className="w-10 h-10 object-contain" />
            </div>
            <div>
              <div className="font-display text-2xl">EK Pension</div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60">Since 2018</div>
            </div>
          </div>
          <p className="text-primary-foreground/70 max-w-md leading-relaxed">
            Warm Ethiopian hospitality on Chelenko Main Road. Clean, comfortable rooms with the comforts of home.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-primary-foreground/80">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/rooms" className="hover:text-gold transition-colors">Rooms</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            <li><Link to="/book" className="hover:text-gold transition-colors">Book Now</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> Chelanko Main Road, Oromia</li>
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 shrink-0" /> +251 921 414 245</li>
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 shrink-0" /> nathan20202323@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-primary-foreground/50 flex justify-between flex-wrap gap-2">
          <span>© 2026 EK Pension. All rights reserved.</span>
          <span>Crafted with care in Chelenko, Ethiopia.</span>
        </div>
      </div>
    </footer>
  );
}
