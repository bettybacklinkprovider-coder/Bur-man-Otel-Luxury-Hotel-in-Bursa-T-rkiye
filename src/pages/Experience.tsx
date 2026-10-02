import { NavLink } from 'react-router-dom';
import { Phone, Calendar, Sparkles, MapPin, Coffee, Wifi, Car, Utensils, Clock, Wind, Lock, Shirt, Star, Landmark, Mountain, ShoppingBag, Eye, Waves, Heart } from 'lucide-react';
import { HOTEL_INFO, AMENITIES_LIST, BURSA_ATTRACTIONS, REVIEWS } from '../data/hotelData';

interface ExperienceProps {
  onOpenBooking: () => void;
}

export default function Experience({ onOpenBooking }: ExperienceProps) {
  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils': return <Utensils className="w-6 h-6 text-amber-300" />;
      case 'Clock': return <Clock className="w-6 h-6 text-amber-300" />;
      case 'Wifi': return <Wifi className="w-6 h-6 text-amber-300" />;
      case 'Car': return <Car className="w-6 h-6 text-amber-300" />;
      case 'Wind': return <Wind className="w-6 h-6 text-amber-300" />;
      case 'Shirt': return <Shirt className="w-6 h-6 text-amber-300" />;
      case 'Lock': return <Lock className="w-6 h-6 text-amber-300" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-amber-300" />;
      default: return <Sparkles className="w-6 h-6 text-amber-300" />;
    }
  };

  const getAttractionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark': return <Landmark className="w-5 h-5 text-amber-300" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-amber-300" />;
      case 'Mountain': return <Mountain className="w-5 h-5 text-amber-300" />;
      case 'Eye': return <Eye className="w-5 h-5 text-amber-300" />;
      case 'Waves': return <Waves className="w-5 h-5 text-amber-300" />;
      default: return <MapPin className="w-5 h-5 text-amber-300" />;
    }
  };

  return (
    <div className="min-h-screen text-purple-100 bg-[#0B0612] pt-24">
      {/* SECTION 1 — EXPERIENCE HERO */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-purple-950/90 via-slate-950 to-[#0B0612] border-b border-purple-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/60 border border-purple-600/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Hospitality & Comfort
          </span>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            Hotel Experience
          </h1>

          <p className="text-base sm:text-xl text-purple-200/90 max-w-2xl mx-auto leading-relaxed">
            Discover a peaceful sanctuary in Osmangazi, Bursa. Exceptional hospitality, daily Turkish breakfast, and seamless local access.
          </p>
        </div>
      </section>

      {/* SECTION 2 — ABOUT BURÇMAN OTEL */}
      <section className="py-16 sm:py-20 bg-[#0B0612]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual Showcase */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl">
                <img
                  src={HOTEL_INFO.images.breakfast}
                  alt="Burçman Otel Breakfast Experience"
                  className="w-full h-[380px] sm:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl purple-glass border border-purple-500/30">
                  <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase mb-1">
                    <Coffee className="w-4 h-4" /> Fresh Turkish Breakfast
                  </div>
                  <p className="text-xs text-white">Served daily in our cozy hotel dining room</p>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-purple-900/40 px-3 py-1 rounded-full border border-purple-700/40">
                Hospitality Ethos
              </span>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
                Warm Turkish Hospitality in the Heart of Bursa
              </h2>

              <p className="text-purple-200/90 text-sm sm:text-base leading-relaxed">
                Burçman Otel was crafted to provide travelers with an authentic, relaxing base in Bursa. Located on Kıbrıs Şehitleri Avenue in Osmangazi, our hotel connects you effortlessly with the rich Ottoman heritage, vibrant silk markets, thermal hammams, and Mount Uludağ ski resorts.
              </p>

              <p className="text-purple-300/80 text-xs sm:text-sm leading-relaxed">
                From your initial welcome at reception to your daily morning tea, every detail is handled with warmth, cleanliness, and attention to your specific needs.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-purple-900/60 text-center">
                <div>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-amber-300">4.9★</span>
                  <span className="text-[11px] text-purple-300 block">Guest Rating</span>
                </div>
                <div className="border-x border-purple-900/60">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-amber-300">24/7</span>
                  <span className="text-[11px] text-purple-300 block">Desk Support</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-amber-300">100%</span>
                  <span className="text-[11px] text-purple-300 block">Cleanliness</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOTEL AMENITIES */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0B0612] via-purple-950/30 to-[#0B0612] border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-purple-900/40 px-3 py-1 rounded-full border border-purple-700/40">
              Thoughtful Conveniences
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Hotel Amenities & Services
            </h2>
            <p className="text-purple-200/80 text-sm sm:text-base">
              Everything you need for a comfortable stay in Osmangazi, Bursa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AMENITIES_LIST.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-purple-950/40 border border-purple-800/40 hover:border-purple-500/50 hover:bg-purple-900/30 transition-all duration-300 space-y-3"
              >
                <div className="p-3 bg-purple-900/60 border border-purple-700/40 rounded-xl w-fit">
                  {getAmenityIcon(item.icon)}
                </div>
                <h3 className="text-lg font-serif font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-purple-300/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — GUEST EXPERIENCE & TESTIMONIALS */}
      <section className="py-16 sm:py-20 bg-[#0B0612]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-purple-900/40 px-3 py-1 rounded-full border border-purple-700/40">
              Verified Feedback
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              What Guests Say About Us
            </h2>
            <p className="text-purple-200/80 text-sm sm:text-base">
              Real reviews from business travelers, tourists, and families visiting Burçman Otel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-purple-950/50 to-slate-900/50 border border-purple-800/40 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-300">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-300" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-purple-200/90 italic leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-900/40 flex items-center justify-between text-xs">
                  <div>
                    <strong className="text-white block font-medium">{rev.author}</strong>
                    <span className="text-purple-400">{rev.location}</span>
                  </div>
                  <span className="text-purple-400">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — BURSA LOCATION & NEARBY ATTRACTIONS */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0B0612] via-purple-950/30 to-[#0B0612] border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center mb-12">
            <div className="lg:col-span-2 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-purple-900/40 px-3 py-1 rounded-full border border-purple-700/40">
                Explore Osmangazi & Bursa
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
                Nearby Attractions in Bursa
              </h2>
              <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed">
                Burçman Otel is centrally positioned in Osmangazi, putting Bursa’s most celebrated historical, cultural, and natural destinations within minutes of your doorstep.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-xl h-48 lg:h-56">
              <img
                src={HOTEL_INFO.images.bursaAttractions}
                alt="Bursa City View"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/20 to-transparent" />
              <div className="absolute bottom-3 left-4 text-xs font-medium text-amber-300">
                Uludağ & Osmangazi City Panorama
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BURSA_ATTRACTIONS.map((att) => (
              <div
                key={att.id}
                className="group relative overflow-hidden rounded-2xl bg-purple-950/40 border border-purple-800/40 hover:border-amber-400/50 hover:bg-purple-900/30 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={att.image}
                    alt={att.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3 p-2 bg-purple-950/80 backdrop-blur-md border border-purple-500/40 rounded-xl">
                    {getAttractionIcon(att.iconName)}
                  </div>
                  
                  <span className="absolute top-3 right-3 text-xs font-semibold text-amber-300 bg-purple-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-purple-700/40">
                    {att.distance}
                  </span>
                </div>

                <div className="p-6 space-y-3 flex-1">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                    {att.title}
                  </h3>
                  <p className="text-xs text-purple-300/80 leading-relaxed">
                    {att.description}
                  </p>
                  <span className="text-[11px] text-amber-400 font-medium block pt-1">
                    Category: {att.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — BOOKING CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-950 via-purple-900 to-slate-950 border-t border-purple-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Experience Comfort in Bursa Today
          </h2>
          <p className="text-sm sm:text-base text-purple-200/90">
            Book your room at Burçman Otel directly for guaranteed best rates and daily breakfast.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 text-sm font-bold text-purple-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-xl shadow-lg cursor-pointer"
            >
              Book Your Stay Now
            </button>
            <NavLink
              to="/contact"
              className="flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-purple-900/60 border border-purple-600/50 rounded-xl"
            >
              <span>Contact Desk</span>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
