import { NavLink } from 'react-router-dom';
import { Phone, Calendar, ArrowRight, Star, ShieldCheck, MapPin, Sparkles, HeartHandshake, BedDouble, Wifi, Car, Clock, Compass, Award, CheckCircle2, UserCheck, Utensils } from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA, HOTEL_EXPERIENCES, WHY_CHOOSE_US } from '../data/hotelData';
import { Room } from '../data/hotelData';

interface HomeProps {
  onOpenBooking: (roomName?: string) => void;
  onSelectRoom: (room: Room) => void;
}

export default function Home({ onOpenBooking, onSelectRoom }: HomeProps) {
  // Mapping icons for experiences
  const getExperienceIcon = (iconName: string) => {
    switch (iconName) {
      case 'BedDouble': return <BedDouble className="w-6 h-6 text-amber-300" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-amber-300" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-amber-300" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-300" />;
      case 'Wifi': return <Wifi className="w-6 h-6 text-amber-300" />;
      case 'Car': return <Car className="w-6 h-6 text-amber-300" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-amber-300" />;
      default: return <Sparkles className="w-6 h-6 text-amber-300" />;
    }
  };

  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5 text-amber-300" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-300" />;
      case 'Award': return <Award className="w-5 h-5 text-amber-300" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-300" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-amber-300" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-amber-300" />;
      default: return <ShieldCheck className="w-5 h-5 text-amber-300" />;
    }
  };

  return (
    <div className="min-h-screen text-purple-100 bg-[#0B0612]">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Image with Dark Purple Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_INFO.images.hero}
            alt="Burçman Otel Facade"
            className="w-full h-full object-cover scale-105 animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-950/95 via-purple-950/80 to-slate-950/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0612] via-transparent to-purple-950/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 animate-fade-in">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/60 border border-purple-500/40 text-amber-300 text-xs sm:text-sm font-medium backdrop-blur-md">
            <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
            <span>Osmangazi, Bursa’s Premier Boutique Hotel</span>
          </div>

          {/* Hotel Name */}
          <p className="text-xl sm:text-2xl font-serif text-amber-200 tracking-wider uppercase font-semibold">
            {HOTEL_INFO.name}
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-tight max-w-4xl mx-auto text-balance">
            {HOTEL_INFO.tagline}
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-purple-200/90 max-w-2xl mx-auto leading-relaxed">
            {HOTEL_INFO.subTagline}
          </p>

          {/* Phone Badge */}
          <div className="pt-2">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 text-amber-300 hover:text-white font-medium text-sm sm:text-base bg-purple-900/40 hover:bg-purple-800/60 px-4 py-2 rounded-full border border-purple-700/50 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400 animate-bounce" />
              <span>Direct Reservations: {HOTEL_INFO.phone}</span>
            </a>
          </div>

          {/* Hero Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-purple-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Stay</span>
            </button>

            <NavLink
              to="/rooms"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-purple-100 hover:text-white bg-purple-900/50 hover:bg-purple-800/80 border border-purple-500/40 rounded-xl backdrop-blur-md transition-all hover:scale-105"
            >
              <span>Explore Rooms</span>
              <ArrowRight className="w-5 h-5 text-amber-300" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WELCOME TO BURÇMAN OTEL */}
      <section className="py-20 relative bg-gradient-to-b from-[#0B0612] via-purple-950/40 to-[#0B0612] border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 bg-purple-900/40 px-3 py-1 rounded-full border border-purple-700/40">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Modern Elegance in Bursa</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
                Welcome to Burçman Otel
              </h2>

              <p className="text-purple-200/90 text-base sm:text-lg leading-relaxed">
                Situated in the bustling heart of Osmangazi on Kıbrıs Şehitleri Avenue, Burçman Otel offers guests a refined blend of modern luxury, quiet serenity, and traditional Turkish hospitality.
              </p>

              <p className="text-purple-300/80 text-sm sm:text-base leading-relaxed">
                Whether visiting Bursa for business, leisure, or exploring Mount Uludağ and historical Ottoman landmarks, our hotel provides impeccably designed rooms, high-speed connectivity, and personalized service tailored to your absolute comfort.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-purple-900/60">
                <div className="p-4 rounded-xl bg-purple-900/20 border border-purple-800/30">
                  <span className="text-2xl font-serif font-bold text-amber-300 block">24/7 Desk</span>
                  <span className="text-xs text-purple-300">Dedicated Front Desk & Concierge</span>
                </div>
                <div className="p-4 rounded-xl bg-purple-900/20 border border-purple-800/30">
                  <span className="text-2xl font-serif font-bold text-amber-300 block">Prime Location</span>
                  <span className="text-xs text-purple-300">Osmangazi District, Bursa</span>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-amber-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl">
                <img
                  src={HOTEL_INFO.images.welcomeLobby}
                  alt="Burçman Otel Welcome Lobby Lounge"
                  className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl purple-glass border border-purple-500/30">
                  <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Lobby & Lounge</p>
                  <p className="text-sm font-medium text-white">Unwind in our sophisticated, quiet reception lounge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ROOMS & COMFORT */}
      <section className="py-20 bg-[#0B0612] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-purple-900/40 px-3 py-1 rounded-full border border-purple-700/40">
              Sanctuary of Rest
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Rooms & Comfort
            </h2>
            <p className="text-purple-200/80 text-base sm:text-lg">
              Each room at Burçman Otel is engineered for maximum comfort, featuring soundproofing, plush bedding, and high-speed amenities.
            </p>
          </div>

          {/* Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS_DATA.slice(0, 3).map((room) => (
              <div
                key={room.id}
                className="group relative rounded-2xl bg-purple-950/40 border border-purple-800/40 overflow-hidden purple-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/20 to-transparent" />
                    <span className="absolute top-4 right-4 bg-purple-950/80 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-purple-600/40">
                      ${room.pricePerNight} / night
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-2xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-amber-300/90 font-medium">
                      {room.tagline}
                    </p>
                    <p className="text-xs text-purple-300/80 line-clamp-2 leading-relaxed">
                      {room.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2 text-xs text-purple-200">
                      <span className="px-2.5 py-1 rounded-md bg-purple-900/50 border border-purple-800/40">
                        {room.size}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-purple-900/50 border border-purple-800/40">
                        {room.occupancy}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-purple-900/50 border border-purple-800/40">
                        Free Breakfast
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-purple-900/40 mt-4">
                  <button
                    onClick={() => onSelectRoom(room)}
                    className="text-xs font-semibold text-purple-200 hover:text-white underline underline-offset-4 cursor-pointer"
                  >
                    View Room
                  </button>

                  <button
                    onClick={() => onOpenBooking(room.name)}
                    className="px-4 py-2 text-xs font-bold text-purple-950 bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-lg shadow transition-all cursor-pointer"
                  >
                    Book Room
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Rooms Action */}
          <div className="text-center mt-12">
            <NavLink
              to="/rooms"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-purple-900/60 hover:bg-purple-800/80 border border-purple-600/40 rounded-xl transition-all hover:scale-105"
            >
              <span>View All Rooms & Suites</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOTEL EXPERIENCE */}
      <section className="py-20 bg-gradient-to-b from-[#0B0612] via-purple-950/30 to-[#0B0612] border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-purple-900/40 px-3 py-1 rounded-full border border-purple-700/40">
              Unmatched Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              The Hotel Experience
            </h2>
            <p className="text-purple-200/80 text-base sm:text-lg">
              At Burçman Otel, we pair comfortable accommodation with thoughtful amenities to ensure your Bursa trip is seamless and memorable.
            </p>
          </div>

          {/* Experience Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOTEL_EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="group relative overflow-hidden rounded-2xl bg-purple-950/40 border border-purple-800/40 hover:border-amber-400/50 hover:bg-purple-900/30 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/30 to-transparent" />
                  <div className="absolute top-3 left-3 p-2.5 bg-purple-950/80 backdrop-blur-md border border-purple-500/40 rounded-xl group-hover:scale-110 transition-transform">
                    {getExperienceIcon(exp.icon)}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-300/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY CHOOSE BURÇMAN OTEL */}
      <section className="py-20 bg-[#0B0612]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-purple-900/40 px-3 py-1 rounded-full border border-purple-700/40">
              Guest Commitments
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Why Choose Burçman Otel
            </h2>
            <p className="text-purple-200/80 text-base sm:text-lg">
              6 core commitments that make our hotel the preferred stay in Osmangazi, Bursa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-950/60 to-slate-900/60 border border-purple-800/40 hover:border-amber-400/60 transition-all duration-500 shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between"
              >
                {/* Image Header with Gradient Overlay */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-purple-950/80 backdrop-blur-md border border-purple-500/40 text-amber-300 shadow-md group-hover:scale-110 transition-transform">
                    {getBenefitIcon(item.icon)}
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors flex items-center gap-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-200/85 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5.5 — HOTEL GALLERY SHOWCASE */}
      <section className="py-20 bg-gradient-to-b from-[#0B0612] via-purple-950/40 to-[#0B0612] border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-purple-900/40 px-3 py-1 rounded-full border border-purple-700/40">
              Visual Tour
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Explore Burçman Otel
            </h2>
            <p className="text-purple-200/80 text-base sm:text-lg">
              Take a look inside our suites, lobby, dining space, and central Osmangazi surroundings.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: "Grand Lobby & Reception", img: HOTEL_INFO.images.welcomeLobby, tag: "Lobby" },
              { title: "Deluxe Executive Suite", img: HOTEL_INFO.images.deluxeSuite, tag: "Suites" },
              { title: "Standard King Bedroom", img: HOTEL_INFO.images.standardKing, tag: "Rooms" },
              { title: "Turkish Breakfast Spread", img: HOTEL_INFO.images.breakfast, tag: "Dining" },
              { title: "Executive Panorama View", img: HOTEL_INFO.images.executiveSuite, tag: "Suites" },
              { title: "Osmangazi City & Uludağ", img: HOTEL_INFO.images.bursaAttractions, tag: "Bursa" },
              { title: "Quiet & Soundproof Rooms", img: "/src/assets/images/quiet_luxury_stay_1790943611079.jpg", tag: "Comfort" },
              { title: "Traditional Tea Service", img: "/src/assets/images/guest_focused_service_1790943684182.jpg", tag: "Service" }
            ].map((photo, i) => (
              <div
                key={i}
                className="group relative h-48 sm:h-64 rounded-xl overflow-hidden border border-purple-800/40 hover:border-amber-400/60 shadow-lg cursor-pointer transition duration-500"
              >
                <img
                  src={photo.img}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute top-3 left-3 bg-purple-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-purple-700/40 text-[10px] text-amber-300 font-bold uppercase tracking-wider">
                  {photo.tag}
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {photo.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — BOOKING CTA */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-purple-950 via-purple-900 to-slate-950 border-t border-purple-800/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-800/60 border border-purple-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Direct Reservations
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Plan Your Stay in Bursa
          </h2>

          <p className="text-base sm:text-lg text-purple-200/90 max-w-xl mx-auto leading-relaxed">
            Make your next stay comfortable and memorable at Burçman Otel. Experience premier hospitality in Osmangazi.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-purple-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-xl shadow-xl shadow-amber-500/20 transition-all hover:scale-105 cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Stay</span>
            </button>

            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-purple-900/60 hover:bg-purple-800/80 border border-purple-600/50 rounded-xl transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span>Call Now: +90 532 295 55 39</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
