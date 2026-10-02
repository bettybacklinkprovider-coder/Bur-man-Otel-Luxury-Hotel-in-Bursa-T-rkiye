import { NavLink } from 'react-router-dom';
import { Phone, MapPin, Mail, Instagram, Facebook, MessageSquare, Compass, Shield, Clock } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-950 via-slate-950 to-black text-purple-200 border-t border-purple-900/40 relative overflow-hidden">
      {/* Subtle Purple Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Hotel Brand & Overview */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white tracking-wide">
              Burçman Otel
            </h3>
            <p className="text-sm text-purple-300/80 leading-relaxed">
              A comfortable and elegant hotel experience in the heart of Osmangazi, Bursa. Exceptional hospitality and modern amenities for unforgettable stays.
            </p>
            
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-purple-300/60 font-medium uppercase tracking-wider">Connect With Us:</span>
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/${HOTEL_INFO.phoneRaw.replace('+', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-purple-900/40 hover:bg-purple-800/80 text-emerald-400 hover:text-emerald-300 rounded-lg border border-purple-700/30 transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-purple-900/40 hover:bg-purple-800/80 text-amber-300 hover:text-amber-200 rounded-lg border border-purple-700/30 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-purple-900/40 hover:bg-purple-800/80 text-sky-400 hover:text-sky-300 rounded-lg border border-purple-700/30 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://tripadvisor.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-purple-900/40 hover:bg-purple-800/80 text-purple-300 hover:text-white rounded-lg border border-purple-700/30 transition-all"
                  aria-label="Tripadvisor"
                >
                  <Compass className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider text-amber-300">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <NavLink to="/" className="text-purple-300 hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="text-xs text-amber-400/60">›</span> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/rooms" className="text-purple-300 hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="text-xs text-amber-400/60">›</span> Rooms & Suites
                </NavLink>
              </li>
              <li>
                <NavLink to="/experience" className="text-purple-300 hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="text-xs text-amber-400/60">›</span> Hotel Experience
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-purple-300 hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="text-xs text-amber-400/60">›</span> Contact & Booking
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Guest Guarantees */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider text-amber-300">
              Why Book Direct
            </h4>
            <ul className="space-y-3 text-xs text-purple-300/80">
              <li className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Best Rate Guarantee with direct booking support.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Flexible check-in options & 24/7 reception desk.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Central location on Kıbrıs Şehitleri Avenue, Osmangazi.</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider text-amber-300">
              Contact Information
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="flex items-start gap-3 text-purple-200 hover:text-amber-300 transition-colors group"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">{HOTEL_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${HOTEL_INFO.email}`}
                className="flex items-start gap-3 text-purple-300/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>{HOTEL_INFO.email}</span>
              </a>

              <div className="flex items-start gap-3 text-xs text-purple-300/80 leading-relaxed">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>{HOTEL_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-400">
          <p>© 2026 Burçman Otel. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <NavLink to="/contact" className="hover:text-purple-200 transition-colors">Privacy Policy</NavLink>
            <NavLink to="/contact" className="hover:text-purple-200 transition-colors">Terms of Service</NavLink>
            <NavLink to="/contact" className="hover:text-purple-200 transition-colors">Location Map</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
