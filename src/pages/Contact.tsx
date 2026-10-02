import { useState, useId } from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, CheckCircle2, ShieldCheck, Sparkles, MessageSquare, Compass, Send, User } from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    checkIn: new Date().toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    guests: '2',
    roomPreference: 'Standard King Room',
    specialRequest: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const fullNameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const checkInId = useId();
  const checkOutId = useId();
  const guestsId = useId();
  const roomId = useId();
  const requestId = useId();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'BURC-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen text-purple-100 bg-[#0B0612] pt-24">
      {/* SECTION 1 — CONTACT HERO */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-purple-950/80 via-slate-950 to-[#0B0612] border-b border-purple-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/60 border border-purple-600/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Direct Hotel Reservations & Inquiries
          </span>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            Contact & Booking
          </h1>

          <p className="text-base sm:text-xl text-purple-200/90 max-w-2xl mx-auto leading-relaxed">
            Reach out to our Osmangazi front desk team or submit a direct room reservation request below.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* SECTION 2 — BOOKING FORM (Column 1-7) */}
          <div className="lg:col-span-7 bg-gradient-to-b from-purple-950/50 to-slate-900/50 border border-purple-800/40 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Direct Reservation Request
              </h2>
              <p className="text-xs sm:text-sm text-purple-300/80 mt-1">
                Fill in your details below for direct booking with guaranteed best rates.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={fullNameId} className="block text-xs font-medium text-purple-200 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-purple-400 absolute left-3 top-3" />
                      <input
                        id={fullNameId}
                        type="text"
                        required
                        placeholder="e.g. Mehmet Yılmaz"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-purple-950/80 border border-purple-800/60 rounded-lg text-sm text-white placeholder-purple-400/60 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor={phoneId} className="block text-xs font-medium text-purple-200 mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-purple-400 absolute left-3 top-3" />
                      <input
                        id={phoneId}
                        type="tel"
                        required
                        placeholder="+90 532 295 55 39"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-purple-950/80 border border-purple-800/60 rounded-lg text-sm text-white placeholder-purple-400/60 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor={emailId} className="block text-xs font-medium text-purple-200 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-purple-400 absolute left-3 top-3" />
                    <input
                      id={emailId}
                      type="email"
                      required
                      placeholder="guest@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-purple-950/80 border border-purple-800/60 rounded-lg text-sm text-white placeholder-purple-400/60 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={checkInId} className="block text-xs font-medium text-purple-200 mb-1">
                      Check-in Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-purple-400 absolute left-3 top-3" />
                      <input
                        id={checkInId}
                        type="date"
                        required
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-purple-950/80 border border-purple-800/60 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor={checkOutId} className="block text-xs font-medium text-purple-200 mb-1">
                      Check-out Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-purple-400 absolute left-3 top-3" />
                      <input
                        id={checkOutId}
                        type="date"
                        required
                        value={formData.checkOut}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-purple-950/80 border border-purple-800/60 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={guestsId} className="block text-xs font-medium text-purple-200 mb-1">
                      Number of Guests
                    </label>
                    <select
                      id={guestsId}
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3 py-2.5 bg-purple-950/80 border border-purple-800/60 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5+ Guests (Family)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor={roomId} className="block text-xs font-medium text-purple-200 mb-1">
                      Room Preference
                    </label>
                    <select
                      id={roomId}
                      value={formData.roomPreference}
                      onChange={(e) => setFormData({ ...formData, roomPreference: e.target.value })}
                      className="w-full px-3 py-2.5 bg-purple-950/80 border border-purple-800/60 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    >
                      {ROOMS_DATA.map((room) => (
                        <option key={room.id} value={room.name}>
                          {room.name} (${room.pricePerNight}/night)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor={requestId} className="block text-xs font-medium text-purple-200 mb-1">
                    Special Request
                  </label>
                  <textarea
                    id={requestId}
                    rows={3}
                    placeholder="Tell us about quiet room preferences, arrival times, or Uludağ ski trip requests..."
                    value={formData.specialRequest}
                    onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                    className="w-full px-3 py-2.5 bg-purple-950/80 border border-purple-800/60 rounded-lg text-sm text-white placeholder-purple-400/60 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-sm font-bold text-purple-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-lg shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Booking</span>
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 mx-auto bg-amber-400/20 border border-amber-400/40 rounded-full flex items-center justify-center text-amber-300">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Booking Request Submitted!
                </h3>
                <p className="text-sm text-purple-200 max-w-md mx-auto">
                  Thank you <strong className="text-amber-300">{formData.fullName}</strong>. Your request for <strong className="text-white">{formData.roomPreference}</strong> is registered under reference <span className="font-mono font-bold text-amber-300">{bookingRef}</span>.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 text-xs font-semibold text-purple-950 bg-amber-300 hover:bg-amber-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* SECTION 3 — CONTACT INFORMATION (Column 8-12) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 sm:p-8 bg-gradient-to-b from-purple-950/60 to-slate-900/60 border border-purple-800/40 rounded-2xl space-y-6">
              <h2 className="text-2xl font-serif font-bold text-white border-b border-purple-800/40 pb-3">
                Hotel Contact Details
              </h2>

              <div className="space-y-5 text-sm">
                {/* Hotel Name */}
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">Hotel Name</span>
                  <p className="text-xl font-serif font-bold text-white">{HOTEL_INFO.name}</p>
                </div>

                {/* Phone - Clickable Dial Functionality */}
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">Phone Number (Click to Call)</span>
                  <a
                    href={`tel:${HOTEL_INFO.phoneRaw}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-purple-900/40 border border-purple-700/50 text-white hover:text-amber-300 transition-all group"
                  >
                    <div className="p-2 bg-amber-400 text-purple-950 rounded-lg group-hover:scale-110 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-base font-bold block">{HOTEL_INFO.phone}</span>
                      <span className="text-xs text-purple-300">Tap to open phone dialer</span>
                    </div>
                  </a>
                </div>

                {/* WhatsApp Chat */}
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">Instant Chat</span>
                  <a
                    href={`https://wa.me/${HOTEL_INFO.phoneRaw.replace('+', '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-purple-900/40 border border-purple-700/50 text-white hover:text-emerald-300 transition-all group"
                  >
                    <div className="p-2 bg-emerald-400 text-purple-950 rounded-lg group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-bold block">WhatsApp Concierge</span>
                      <span className="text-xs text-purple-300">Chat with front desk</span>
                    </div>
                  </a>
                </div>

                {/* Address */}
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">Hotel Address</span>
                  <div className="flex items-start gap-3 text-purple-200">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm leading-relaxed">{HOTEL_INFO.address}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">Email Inquiries</span>
                  <a
                    href={`mailto:${HOTEL_INFO.email}`}
                    className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-amber-400" />
                    <span>{HOTEL_INFO.email}</span>
                  </a>
                </div>

                {/* Working Hours */}
                <div className="space-y-1 pt-2 border-t border-purple-900/40">
                  <div className="flex items-center gap-2 text-xs text-purple-300">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>Reception & Room Service: 24 Hours / 7 Days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4 — LOCATION & MAP SECTION */}
        <section className="bg-gradient-to-b from-purple-950/40 to-slate-900/40 border border-purple-800/40 rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-purple-900/40 px-3 py-1 rounded-full border border-purple-700/40">
              Osmangazi, Bursa
            </span>
            <h2 className="text-3xl font-serif font-bold text-white">
              Hotel Location & Transport Guide
            </h2>
            <p className="text-xs sm:text-sm text-purple-200/80">
              Conveniently positioned on Kıbrıs Şehitleri Avenue with easy access to major transport hubs.
            </p>
          </div>

          {/* Styled Map Graphic Representation */}
          <div className="relative rounded-2xl overflow-hidden border border-purple-700/40 h-80 bg-purple-950 flex flex-col justify-between p-6">
            <img
              src={HOTEL_INFO.images.bursaAttractions}
              alt="Osmangazi Bursa Location Map Area"
              className="absolute inset-0 w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/70 to-purple-950/40" />
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="p-3 bg-purple-900/90 border border-purple-500/40 rounded-xl backdrop-blur-md">
                <span className="text-xs font-bold text-amber-300 block">BURÇMAN OTEL</span>
                <span className="text-[11px] text-purple-200">Osmangazi District, Bursa</span>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(HOTEL_INFO.address)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-purple-950 text-xs font-bold rounded-lg shadow-md hover:bg-amber-300 transition-colors"
              >
                <Compass className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-purple-950/90 border border-purple-800/60 rounded-xl text-xs backdrop-blur-md">
              <div>
                <strong className="text-amber-300 block">Metro & Bus Station:</strong>
                <span className="text-purple-200">5-minute walk to Osmangazi Metro Station</span>
              </div>
              <div>
                <strong className="text-amber-300 block">Uludağ Teleferik:</strong>
                <span className="text-purple-200">12-minute taxi drive to cable car station</span>
              </div>
              <div>
                <strong className="text-amber-300 block">Bursa Grand Mosque:</strong>
                <span className="text-purple-200">1.2 km walking distance through historic bazaars</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — WHY BOOK WITH US */}
        <section className="py-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-serif font-bold text-white">
              Why Book Directly With Burçman Otel
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-purple-950/30 border border-purple-800/40 text-center space-y-2">
              <ShieldCheck className="w-8 h-8 text-amber-300 mx-auto" />
              <h3 className="text-sm font-bold text-white">Best Rate Guarantee</h3>
              <p className="text-xs text-purple-300/80">No middleman fees or hidden commissions.</p>
            </div>

            <div className="p-5 rounded-xl bg-purple-950/30 border border-purple-800/40 text-center space-y-2">
              <Clock className="w-8 h-8 text-amber-300 mx-auto" />
              <h3 className="text-sm font-bold text-white">Instant Confirmation</h3>
              <p className="text-xs text-purple-300/80">Immediate booking reference and desk priority.</p>
            </div>

            <div className="p-5 rounded-xl bg-purple-950/30 border border-purple-800/40 text-center space-y-2">
              <Phone className="w-8 h-8 text-amber-300 mx-auto" />
              <h3 className="text-sm font-bold text-white">Direct Hotel Assistance</h3>
              <p className="text-xs text-purple-300/80">Personal phone support from Osmangazi staff.</p>
            </div>

            <div className="p-5 rounded-xl bg-purple-950/30 border border-purple-800/40 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-amber-300 mx-auto" />
              <h3 className="text-sm font-bold text-white">Free Daily Breakfast</h3>
              <p className="text-xs text-purple-300/80">Complimentary Turkish breakfast included.</p>
            </div>
          </div>
        </section>

        {/* SECTION 6 — FINAL BOOKING CTA */}
        <section className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-purple-950 via-purple-900 to-slate-950 border border-purple-700/50 text-center space-y-6">
          <h2 className="text-3xl font-serif font-bold text-white">
            Need Immediate Help or Special Booking?
          </h2>
          <p className="text-sm text-purple-200/90 max-w-lg mx-auto">
            Call our reception team directly at <strong className="text-amber-300">+90 532 295 55 39</strong> for group bookings, extended stays, or immediate room availability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-purple-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-xl shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Reception Now</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
