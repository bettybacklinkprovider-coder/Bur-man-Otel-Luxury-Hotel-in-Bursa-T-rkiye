import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface NavbarProps {
  onOpenBooking: (roomName?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/rooms', label: 'Rooms & Suites' },
    { path: '/experience', label: 'Hotel Experience' },
    { path: '/contact', label: 'Contact & Booking' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-purple-950/90 backdrop-blur-md border-b border-purple-800/30 shadow-lg shadow-purple-950/40 py-3'
          : 'bg-gradient-to-b from-purple-950/90 via-purple-950/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Title (Single text element as required) */}
          <NavLink
            to="/"
            className="group flex items-center gap-2 text-2xl sm:text-3xl font-serif font-bold tracking-wide text-white transition-all"
          >
            <span className="bg-gradient-to-r from-purple-200 via-amber-200 to-purple-300 bg-clip-text text-transparent group-hover:text-amber-300 transition-colors">
              Burçman Otel
            </span>
            <Sparkles className="w-4 h-4 text-amber-400 opacity-80 group-hover:rotate-12 transition-transform" />
          </NavLink>

          {/* Zone 2: Desktop Navigation Links (4 separate pages/routes) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg whitespace-nowrap ${
                    isActive
                      ? 'text-amber-300 bg-purple-900/50 border border-purple-500/30 shadow-inner'
                      : 'text-purple-100 hover:text-white hover:bg-purple-900/30'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Primary Actions (Call Now & Book Your Stay) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 text-xs lg:text-sm font-medium text-purple-200 hover:text-white bg-purple-900/40 hover:bg-purple-800/60 border border-purple-700/40 rounded-lg transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Now</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 px-4 py-2 text-xs lg:text-sm font-semibold text-purple-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-lg shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="p-2 text-amber-300 bg-purple-900/60 border border-purple-700/50 rounded-lg"
              aria-label="Call Hotel"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-purple-200 hover:text-white bg-purple-900/60 border border-purple-700/50 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-purple-950/95 border-b border-purple-800/50 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-fade-in">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-amber-300 bg-purple-900/80 border border-purple-500/40'
                      : 'text-purple-200 hover:text-white hover:bg-purple-900/40'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="pt-3 border-t border-purple-800/40 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-purple-950 bg-gradient-to-r from-amber-300 to-amber-400 rounded-lg shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>

            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-purple-200 bg-purple-900/50 border border-purple-700/50 rounded-lg"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call +90 532 295 55 39</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
