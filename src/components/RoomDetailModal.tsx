import { X, Check, Users, Maximize2, BedDouble, Calendar, Sparkles } from 'lucide-react';
import { Room } from '../data/hotelData';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onBookRoom: (roomName: string) => void;
}

export default function RoomDetailModal({ room, onClose, onBookRoom }: RoomDetailModalProps) {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-gradient-to-b from-purple-950 via-slate-900 to-purple-950 border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-950/90 p-6 sm:p-8 text-purple-100 my-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-purple-300 hover:text-white bg-purple-950/70 hover:bg-purple-800/80 rounded-full border border-purple-700/50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Room High-Res Image Header */}
        <div className="relative h-64 sm:h-80 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/30 to-transparent" />
          
          <div className="absolute bottom-4 left-6 sm:left-8 right-6 flex items-end justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-purple-900/80 border border-purple-600/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
                Burçman Otel Suite
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {room.name}
              </h2>
            </div>

            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-bold text-amber-300">${room.pricePerNight}</span>
              <span className="text-xs text-purple-300 block">/ night</span>
            </div>
          </div>
        </div>

        {/* Specs Pill Bar */}
        <div className="grid grid-cols-3 gap-3 p-3 bg-purple-900/30 border border-purple-800/40 rounded-xl text-xs sm:text-sm text-purple-200 mb-6 text-center">
          <div className="flex items-center justify-center gap-1.5">
            <Maximize2 className="w-4 h-4 text-amber-400" />
            <span>{room.size}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 border-x border-purple-800/40">
            <Users className="w-4 h-4 text-amber-400" />
            <span>{room.occupancy}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <BedDouble className="w-4 h-4 text-amber-400" />
            <span>{room.bedType}</span>
          </div>
        </div>

        {/* Tagline & Description */}
        <div className="space-y-3 mb-6">
          <h3 className="text-base font-semibold text-amber-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            {room.tagline}
          </h3>
          <p className="text-sm text-purple-200/90 leading-relaxed">
            {room.description}
          </p>
        </div>

        {/* Key Features List */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-300 mb-3">
            Room Amenities & Highlights:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {room.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-purple-100 p-2 bg-purple-900/20 border border-purple-800/30 rounded-lg">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-purple-800/40">
          <span className="text-xs text-purple-300/80">
            * Direct booking includes daily complimentary Turkish breakfast.
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-purple-200 hover:text-white bg-purple-900/40 hover:bg-purple-800/60 rounded-lg border border-purple-700/40 transition-colors cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onBookRoom(room.name);
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-purple-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-lg shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book This Room</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
