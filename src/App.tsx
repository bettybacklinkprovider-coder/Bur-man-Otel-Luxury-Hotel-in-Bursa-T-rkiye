import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BookingModal from './components/BookingModal';
import RoomDetailModal from './components/RoomDetailModal';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import { Room } from './data/hotelData';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedRoom, setPreselectedRoom] = useState<string | undefined>(undefined);
  const [selectedRoomModal, setSelectedRoomModal] = useState<Room | null>(null);

  const handleOpenBooking = (roomName?: string) => {
    setPreselectedRoom(roomName);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setPreselectedRoom(undefined);
  };

  const handleSelectRoom = (room: Room) => {
    setSelectedRoomModal(room);
  };

  const handleCloseRoomDetail = () => {
    setSelectedRoomModal(null);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#0B0612] text-purple-100 selection:bg-purple-600 selection:text-white">
        {/* Sticky Top Navigation Bar */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Multi-Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenBooking={handleOpenBooking}
                  onSelectRoom={handleSelectRoom}
                />
              }
            />
            <Route
              path="/rooms"
              element={
                <Rooms
                  onOpenBooking={handleOpenBooking}
                  onSelectRoom={handleSelectRoom}
                />
              }
            />
            <Route
              path="/experience"
              element={<Experience onOpenBooking={() => handleOpenBooking()} />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Global Footer on All Pages */}
        <Footer />

        {/* Interactive Modals */}
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={handleCloseBooking}
          preselectedRoom={preselectedRoom}
        />

        <RoomDetailModal
          room={selectedRoomModal}
          onClose={handleCloseRoomDetail}
          onBookRoom={(roomName) => handleOpenBooking(roomName)}
        />
      </div>
    </BrowserRouter>
  );
}
