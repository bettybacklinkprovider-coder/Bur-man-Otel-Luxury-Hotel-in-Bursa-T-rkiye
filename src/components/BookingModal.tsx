import { useState, useEffect, useId } from 'react';
import { X, Calendar, User, Phone, Mail, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoom?: string;
}

export default function BookingModal({ isOpen, onClose, preselectedRoom }: BookingModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomPreference: preselectedRoom || 'Standard King Room',
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

  useEffect(() => {
    if (preselectedRoom) {
      setFormData((prev) => ({ ...prev, roomPreference: preselectedRoom }));
    }
  }, [preselectedRoom]);

  // Set default dates (today and tomorrow)
  useEffect(() => {
    if (isOpen) {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 2);

      setFormData((prev) => ({
        ...prev,
        checkIn: prev.checkIn || today.toISOString().split('T')[0],
        checkOut: prev.checkOut || tomorrow.toISOString().split('T')[0]
      }));
      setSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'BURC-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-purple-950 via-slate-900 to-purple-950 border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-950/80 p-6 sm:p-8 text-purple-100 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-purple-300 hover:text-white bg-purple-900/40 hover:bg-purple-800/60 rounded-full border border-purple-700/40 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/60 border border-purple-600/40 text-amber-300 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Burçman Otel Direct Reservation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Book Your Stay in Bursa
              </h2>
              <p className="text-xs sm:text-sm text-purple-300/80 mt-1">
                Fast & secure booking request with guaranteed best room rates.
              </p>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
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
                      placeholder="e.g. Ahmet Yılmaz"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-purple-950/80 border border-purple-800/60 rounded-lg text-sm text-white placeholder-purple-400/60 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>
                </div>

                {/* Phone Number */}
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
                      className="w-full pl-9 pr-3 py-2 bg-purple-950/80 border border-purple-800/60 rounded-lg text-sm text-white placeholder-purple-400/60 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>
                </div>
              </div>

              {/* Email Address */}
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
                    className="w-full pl-9 pr-3 py-2 bg-purple-950/80 border border-purple-800/60 rounded-lg text-sm text-white placeholder-purple-400/60 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Check-in Date */}
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
                      className="w-full pl-9 pr-3 py-2 bg-purple-950/80 border border-purple-800/60 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>
                </div>

                {/* Check-out Date */}
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
                      className="w-full pl-9 pr-3 py-2 bg-purple-950/80 border border-purple-800/60 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Number of Guests */}
                <div>
                  <label htmlFor={guestsId} className="block text-xs font-medium text-purple-200 mb-1">
                    Number of Guests
                  </label>
                  <select
                    id={guestsId}
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2 bg-purple-950/80 border border-purple-800/60 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests (Family)</option>
                  </select>
                </div>

                {/* Room Preference */}
                <div>
                  <label htmlFor={roomId} className="block text-xs font-medium text-purple-200 mb-1">
                    Room Preference
                  </label>
                  <select
                    id={roomId}
                    value={formData.roomPreference}
                    onChange={(e) => setFormData({ ...formData, roomPreference: e.target.value })}
                    className="w-full px-3 py-2 bg-purple-950/80 border border-purple-800/60 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  >
                    {ROOMS_DATA.map((room) => (
                      <option key={room.id} value={room.name}>
                        {room.name} (${room.pricePerNight}/night)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Request */}
              <div>
                <label htmlFor={requestId} className="block text-xs font-medium text-purple-200 mb-1">
                  Special Requests (Optional)
                </label>
                <textarea
                  id={requestId}
                  rows={2}
                  placeholder="e.g. Quiet room, late check-in, Uludağ ski transport details..."
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  className="w-full px-3 py-2 bg-purple-950/80 border border-purple-800/60 rounded-lg text-sm text-white placeholder-purple-400/60 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full mt-2 py-3 px-6 text-sm font-bold text-purple-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-lg shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                Request Booking Now
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-4 animate-fade-in">
            <div className="w-16 h-16 mx-auto bg-amber-400/20 border border-amber-400/40 rounded-full flex items-center justify-center text-amber-300">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-white">
              Booking Request Received!
            </h3>

            <p className="text-sm text-purple-200/90 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-amber-300">{formData.fullName}</strong>. Your reservation request for <strong className="text-white">{formData.roomPreference}</strong> has been created.
            </p>

            <div className="p-4 bg-purple-900/40 border border-purple-700/40 rounded-xl text-xs space-y-2 max-w-md mx-auto text-left">
              <div className="flex justify-between border-b border-purple-800/40 pb-2">
                <span className="text-purple-300">Reference Number:</span>
                <span className="font-mono font-bold text-amber-300">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300">Check-in:</span>
                <span className="text-white">{formData.checkIn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300">Check-out:</span>
                <span className="text-white">{formData.checkOut}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300">Phone Contact:</span>
                <span className="text-white">{formData.phone}</span>
              </div>
            </div>

            <p className="text-xs text-purple-300/70">
              Our front desk team will contact you shortly to confirm your check-in arrangements.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-purple-800 hover:bg-purple-700 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call Desk: +90 532 295 55 39</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-purple-950 bg-amber-300 hover:bg-amber-200 rounded-lg transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
