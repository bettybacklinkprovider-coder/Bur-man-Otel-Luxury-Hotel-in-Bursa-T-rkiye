import { useState } from 'react';
import { Phone, Calendar, Sparkles, Check, Users, Maximize2, BedDouble, ShieldCheck, Moon, Wifi, Coffee, Sun } from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA, Room } from '../data/hotelData';

interface RoomsProps {
  onOpenBooking: (roomName?: string) => void;
  onSelectRoom: (room: Room) => void;
}

export default function Rooms({ onOpenBooking, onSelectRoom }: RoomsProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'standard' | 'deluxe' | 'executive' | 'family'>('all');

  const filteredRooms = activeCategory === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((room) => room.category === activeCategory);

  return (
    <div className="min-h-screen text-purple-100 bg-[#0B0612] pt-24">
      {/* SECTION 1 — ROOMS HERO */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-purple-950/80 via-slate-950 to-[#0B0612] border-b border-purple-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/60 border border-purple-600/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Burçman Otel Accommodation
          </span>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            Rooms & Suites
          </h1>

          <p className="text-base sm:text-xl text-purple-200/90 max-w-2xl mx-auto leading-relaxed">
            Designed for soothing comfort, productivity, and restful sleep in the heart of Osmangazi, Bursa.
          </p>
        </div>
      </section>

      {/* SECTION 2 — ROOM CATEGORIES FILTER */}
      <section className="py-8 bg-[#0B0612] sticky top-[72px] z-30 backdrop-blur-md border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'all', label: 'All Rooms & Suites' },
              { id: 'standard', label: 'Standard King' },
              { id: 'deluxe', label: 'Deluxe Suites' },
              { id: 'executive', label: 'Executive Suites' },
              { id: 'family', label: 'Family Suites' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-gradient-to-r from-amber-300 to-amber-400 text-purple-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-purple-900/30 text-purple-200 hover:text-white hover:bg-purple-900/60 border border-purple-800/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — ROOM CARDS GRID */}
      <section className="py-16 bg-[#0B0612]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="group rounded-2xl bg-gradient-to-b from-purple-950/40 to-slate-900/50 border border-purple-800/40 overflow-hidden purple-card-hover flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4">
                      {room.popular && (
                        <span className="bg-amber-400 text-purple-950 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          Most Popular
                        </span>
                      )}
                    </div>

                    <div className="absolute top-4 right-4 bg-purple-950/90 backdrop-blur-md border border-purple-600/40 text-amber-300 px-3 py-1 rounded-full text-xs font-bold">
                      ${room.pricePerNight} <span className="text-[10px] text-purple-200 font-normal">/ night</span>
                    </div>
                  </div>

                  {/* Room Details */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                          {room.name}
                        </h2>
                        <p className="text-xs text-amber-300 font-medium mt-0.5">
                          {room.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Specs Pills */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-purple-900/30 rounded-xl border border-purple-800/40 text-xs text-purple-200 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                        <span>{room.size}</span>
                      </div>
                      <div className="flex items-center justify-center gap-1 border-x border-purple-800/40">
                        <Users className="w-3.5 h-3.5 text-amber-400" />
                        <span>{room.occupancy}</span>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <BedDouble className="w-3.5 h-3.5 text-amber-400" />
                        <span className="truncate">{room.bedType}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider block">
                        Included Features:
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs text-purple-200">
                        {room.features.slice(0, 4).map((f, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span className="truncate">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 sm:p-8 pt-0 flex items-center justify-between gap-4 border-t border-purple-900/40 mt-4">
                  <button
                    onClick={() => onSelectRoom(room)}
                    className="text-xs sm:text-sm font-semibold text-purple-200 hover:text-white underline underline-offset-4 cursor-pointer"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => onOpenBooking(room.name)}
                    className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-purple-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-lg shadow-md transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — COMFORT & AMENITIES DEEP-DIVE */}
      <section className="py-16 bg-gradient-to-b from-[#0B0612] via-purple-950/30 to-[#0B0612] border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-purple-900/40 px-3 py-1 rounded-full border border-purple-700/40">
              Standard Across All Rooms
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Comfort & In-Room Amenities
            </h2>
            <p className="text-purple-200/80 text-sm sm:text-base">
              Every single booking at Burçman Otel includes these elevated hospitality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-purple-950/40 border border-purple-800/40 space-y-3">
              <Moon className="w-8 h-8 text-amber-300" />
              <h3 className="text-lg font-serif font-bold text-white">Soundproof Sleep</h3>
              <p className="text-xs text-purple-300/80 leading-relaxed">
                Double-glazed windows and acoustic insulation guarantee undisturbed rest after busy days in Bursa.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-purple-950/40 border border-purple-800/40 space-y-3">
              <Wifi className="w-8 h-8 text-amber-300" />
              <h3 className="text-lg font-serif font-bold text-white">Ultra-Fast Fiber Wi-Fi</h3>
              <p className="text-xs text-purple-300/80 leading-relaxed">
                Seamless high-speed internet in every room for video conferencing, streaming, and instant browsing.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-purple-950/40 border border-purple-800/40 space-y-3">
              <Coffee className="w-8 h-8 text-amber-300" />
              <h3 className="text-lg font-serif font-bold text-white">Rich Breakfast Buffet</h3>
              <p className="text-xs text-purple-300/80 leading-relaxed">
                Included with your direct booking — traditional Turkish cheeses, fresh pastries, fruits, and brewed tea.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-purple-950/40 border border-purple-800/40 space-y-3">
              <Sun className="w-8 h-8 text-amber-300" />
              <h3 className="text-lg font-serif font-bold text-white">Custom Climate Control</h3>
              <p className="text-xs text-purple-300/80 leading-relaxed">
                Individual air conditioning and heating units for personal temperature preference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — GUEST COMFORT SECTION */}
      <section className="py-16 bg-[#0B0612]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-purple-950/60 via-purple-900/40 to-slate-950 border border-purple-500/30 space-y-6">
            <ShieldCheck className="w-12 h-12 text-amber-300 mx-auto" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Our Promise of Guest Comfort
            </h2>
            <p className="text-purple-200/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              At Burçman Otel, we understand that clean, comfortable, and peaceful rooms are the foundation of a memorable hotel stay. Our dedicated housekeeping team adheres to meticulous daily sanitation standards.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-2 text-xs font-semibold text-amber-300">
              <span>✓ Daily Housekeeping</span>
              <span>✓ Fresh Linens & Towels</span>
              <span>✓ 24/7 Room Service Support</span>
              <span>✓ Non-Smoking Rooms Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — BOOKING CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-950 via-purple-900 to-slate-950 border-t border-purple-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Ready to Reserve Your Room in Bursa?
          </h2>
          <p className="text-sm sm:text-base text-purple-200/90">
            Select your preferred dates and lock in the best rate at Burçman Otel.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 text-sm font-bold text-purple-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-xl shadow-lg cursor-pointer"
            >
              Book Your Stay Now
            </button>
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-purple-900/60 border border-purple-600/50 rounded-xl"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Call Reception: +90 532 295 55 39</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
