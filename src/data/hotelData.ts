export interface Room {
  id: string;
  name: string;
  category: 'standard' | 'deluxe' | 'executive' | 'family';
  tagline: string;
  description: string;
  image: string;
  size: string;
  occupancy: string;
  bedType: string;
  pricePerNight: number;
  features: string[];
  popular: boolean;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Attraction {
  id: string;
  title: string;
  distance: string;
  category: string;
  description: string;
  iconName: string;
  image: string;
}

export interface Commitment {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export const HOTEL_INFO = {
  name: "Burçman Otel",
  tagline: "Stay in Comfort, Experience Bursa",
  subTagline: "A comfortable and elegant hotel experience in the heart of Osmangazi, Bursa.",
  phone: "+90 532 295 55 39",
  phoneRaw: "+905322955539",
  email: "info@burcmanotel.com",
  address: "Mahallesi, Hacı İlyas, Kıbrıs Şehitleri Cd. No:16, 16220 Osmangazi/Bursa, Türkiye",
  city: "Bursa, Türkiye",
  district: "Osmangazi",
  checkIn: "14:00 PM",
  checkOut: "12:00 PM",
  rating: "4.9",
  reviewCount: "420+",
  images: {
    hero: "/src/assets/images/hero_burcman_hotel_1790943176462.jpg",
    welcomeLobby: "/src/assets/images/burcman_welcome_lobby_1790943190401.jpg",
    standardKing: "/src/assets/images/room_standard_king_1790943201266.jpg",
    deluxeSuite: "/src/assets/images/room_deluxe_suite_1790943212865.jpg",
    executiveSuite: "/src/assets/images/room_executive_suite_1790943224642.jpg",
    breakfast: "/src/assets/images/hotel_breakfast_bursa_1790943236009.jpg",
    bursaAttractions: "/src/assets/images/bursa_attractions_uludag_1790943247447.jpg"
  }
};

export const ROOMS_DATA: Room[] = [
  {
    id: "standard-king",
    name: "Standard King Room",
    category: "standard",
    tagline: "Unmatched Comfort for Business & Leisure",
    description: "Designed for peaceful sleep and maximum functionality. Features a plush custom mattress, soundproof double-glazed windows, and quiet climate control.",
    image: "/src/assets/images/room_standard_king_1790943201266.jpg",
    size: "28 m²",
    occupancy: "2 Guests",
    bedType: "1 King Bed or 2 Single Beds",
    pricePerNight: 95,
    features: [
      "Ultra-Fast Free Wi-Fi",
      "Central Air Conditioning",
      "43\" Smart HD TV",
      "Complimentary Tea & Coffee",
      "In-room Safe & Mini Bar",
      "Modern En-Suite Shower"
    ],
    popular: true
  },
  {
    id: "deluxe-suite",
    name: "Deluxe Suite",
    category: "deluxe",
    tagline: "Elegance & Space in Osmangazi",
    description: "Generous layout with a dedicated sitting corner, warm ambient lighting, and luxury purple decor accents. Perfect for extended stays in Bursa.",
    image: "/src/assets/images/room_deluxe_suite_1790943212865.jpg",
    size: "40 m²",
    occupancy: "2-3 Guests",
    bedType: "1 Super King Bed + Sofa Bed",
    pricePerNight: 145,
    features: [
      "Separate Living Corner",
      "Bursa City View",
      "Premium Espresso Maker",
      "Luxury Turkish Cotton Bathrobes",
      "50\" Smart TV with Streaming",
      "Soundproof Comfort"
    ],
    popular: true
  },
  {
    id: "executive-suite",
    name: "Executive Panorama Suite",
    category: "executive",
    tagline: "The Pinnacle of Hotel Luxury",
    description: "Offers breathtaking views over Osmangazi, a spacious study desk, glass-partitioned designer bathroom, and VIP welcome amenities.",
    image: "/src/assets/images/room_executive_suite_1790943224642.jpg",
    size: "55 m²",
    occupancy: "2-4 Guests",
    bedType: "1 Emperor King Bed + Lounge Area",
    pricePerNight: 195,
    features: [
      "Panoramic Bursa Cityscape View",
      "VIP Welcome Fruit & Turkish Delights",
      "Dedicated Workstation Desk",
      "Luxury Marble Bathroom & Rain Shower",
      "Free High-Speed Business Wi-Fi",
      "24/7 Priority Room Service"
    ],
    popular: false
  },
  {
    id: "family-suite",
    name: "Superior Family Suite",
    category: "family",
    tagline: "Spacious Sanctuary for Families",
    description: "Interconnecting living space providing privacy and shared comfort. Equipped with multiple entertainment options and ample wardrobe storage.",
    image: "/src/assets/images/room_standard_king_1790943201266.jpg",
    size: "62 m²",
    occupancy: "4-5 Guests",
    bedType: "1 King Bed + 2 Twin Beds",
    pricePerNight: 210,
    features: [
      "2 Separate Bedrooms",
      "Family Entertainment Hub",
      "Dual Smart TVs",
      "Extra Storage & Closet Space",
      "Child-Friendly Amenities",
      "Complimentary Breakfast Included"
    ],
    popular: false
  }
];

export const HOTEL_EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Comfortable Accommodation",
    description: "Rest deeply in soundproof, sanitized rooms with custom ergonomic mattresses, plush Turkish cotton linens, and soothing ambient lighting.",
    icon: "BedDouble",
    image: "/src/assets/images/quiet_luxury_stay_1790943611079.jpg"
  },
  {
    id: "exp-2",
    title: "Convenient Osmangazi Location",
    description: "Situated centrally on Kıbrıs Şehitleri Avenue, offering quick walking access to transport links, shopping centers, and historic landmarks.",
    icon: "MapPin",
    image: "/src/assets/images/prime_bursa_location_1790943591606.jpg"
  },
  {
    id: "exp-3",
    title: "Friendly Hospitality & 24/7 Desk",
    description: "Our dedicated 24/7 staff ensures a warm Turkish welcome, seamless check-in, local recommendations, and round-the-clock service.",
    icon: "HeartHandshake",
    image: "/src/assets/images/hotel_hospitality_staff_1790943628549.jpg"
  },
  {
    id: "exp-4",
    title: "Artisanal Turkish Breakfast",
    description: "Start each morning with a rich open-buffet featuring regional cheeses, fresh pastries, olives, local honey, organic jams, and brewed Turkish tea.",
    icon: "Utensils",
    image: "/src/assets/images/hotel_breakfast_bursa_1790943236009.jpg"
  },
  {
    id: "exp-5",
    title: "High-Speed Fiber Wi-Fi & Tech",
    description: "Stay connected seamlessly with complimentary ultra-fast fiber Wi-Fi, 43\" Smart HD TVs, and individual climate control in every room.",
    icon: "Wifi",
    image: "/src/assets/images/clean_elegant_room_1790943646340.jpg"
  },
  {
    id: "exp-6",
    title: "Easy Access & On-site Parking",
    description: "Hassle-free secure parking on site and effortless access to taxi stands, metro stations, and direct routes to Uludağ Teleferik.",
    icon: "Car",
    image: "/src/assets/images/hotel_parking_access_1790943996760.jpg"
  }
];

export const WHY_CHOOSE_US: Commitment[] = [
  {
    title: "Prime Bursa Location",
    description: "Located right in Osmangazi, minutes away from Ulu Cami, Kozahan, and major business hubs.",
    icon: "Compass",
    image: "/src/assets/images/prime_bursa_location_1790943591606.jpg"
  },
  {
    title: "Comfortable & Quiet Stay",
    description: "Double-glazed acoustic windows ensure soundproof tranquility in the bustling heart of the city.",
    icon: "ShieldCheck",
    image: "/src/assets/images/quiet_luxury_stay_1790943611079.jpg"
  },
  {
    title: "Professional Hospitality",
    description: "Multilingual staff committed to making every guest feel truly cared for and respected.",
    icon: "Award",
    image: "/src/assets/images/hotel_hospitality_staff_1790943628549.jpg"
  },
  {
    title: "Clean & Elegant Rooms",
    description: "Strict hygiene protocols and daily housekeeping maintain pristine standards across all suites.",
    icon: "Sparkles",
    image: "/src/assets/images/clean_elegant_room_1790943646340.jpg"
  },
  {
    title: "Easy & Fast Direct Booking",
    description: "Direct booking with zero hidden fees, instant confirmation, and flexible cancellation options.",
    icon: "CheckCircle2",
    image: "/src/assets/images/secure_hotel_booking_1790943664460.jpg"
  },
  {
    title: "Guest-Focused Service",
    description: "Tailored concierge services ranging from ski transport to Uludağ to local food recommendations.",
    icon: "UserCheck",
    image: "/src/assets/images/guest_focused_service_1790943684182.jpg"
  }
];

export const BURSA_ATTRACTIONS: Attraction[] = [
  {
    id: "att-1",
    title: "Grand Mosque (Ulu Cami)",
    distance: "1.2 km (5 min)",
    category: "Historical Site",
    description: "Masterpiece of early Ottoman architecture featuring 20 domes, magnificent calligraphy, and a marble indoor fountain.",
    iconName: "Landmark",
    image: "/src/assets/images/bursa_ulu_cami_1790943702831.jpg"
  },
  {
    id: "att-2",
    title: "Kozahan Silk Bazaar",
    distance: "1.4 km (6 min)",
    category: "Shopping & Culture",
    description: "Historic 15th-century silk market set around a serene courtyard tea garden, famous for pure Turkish silk scarves.",
    iconName: "ShoppingBag",
    image: "/src/assets/images/bursa_silk_market_1790943718716.jpg"
  },
  {
    id: "att-3",
    title: "Uludağ Teleferik (Cable Car)",
    distance: "4.5 km (12 min)",
    category: "Nature & Adventure",
    description: "World's longest cable car line taking visitors up to the snow peaks and pine forests of Mount Uludağ.",
    iconName: "Mountain",
    image: "/src/assets/images/bursa_uludag_cablecar_1790943735910.jpg"
  },
  {
    id: "att-4",
    title: "Bursa Citadel & Tophane Clock Tower",
    distance: "1.8 km (8 min)",
    category: "Panoramic Viewpoint",
    description: "Hilltop citadel housing the tombs of Ottoman Empire founders Osmangazi and Orhangazi with panoramic city views.",
    iconName: "Eye",
    image: "/src/assets/images/bursa_attractions_uludag_1790943247447.jpg"
  },
  {
    id: "att-5",
    title: "Historical Thermal Baths",
    distance: "3.2 km (10 min)",
    category: "Wellness & Thermal",
    description: "Healing natural thermal spring baths operating since Roman and Ottoman times, offering authentic hammam treatments.",
    iconName: "Waves",
    image: "/src/assets/images/bursa_thermal_baths_1790944015313.jpg"
  },
  {
    id: "att-6",
    title: "Grand Bazaar of Bursa",
    distance: "1.3 km (5 min)",
    category: "Bazaar & Spices",
    description: "Vibrant shopping district filled with traditional Turkish delights, spices, ceramics, and hand-woven textiles.",
    iconName: "ShoppingBag",
    image: "/src/assets/images/bursa_silk_market_1790943718716.jpg"
  }
];

export const AMENITIES_LIST = [
  {
    title: "Rich Turkish Breakfast",
    description: "Daily breakfast spread featuring fresh cheeses, olives, pastries, local honey, and brewed Turkish tea.",
    icon: "Utensils"
  },
  {
    title: "24/7 Front Desk",
    description: "Round-the-clock reception and guest assistance for check-in, wake-up calls, and local directions.",
    icon: "Clock"
  },
  {
    title: "High-Speed Wi-Fi",
    description: "Complimentary ultra-fast fiber internet available throughout all guest rooms and public spaces.",
    icon: "Wifi"
  },
  {
    title: "On-site Parking",
    description: "Convenient, secure parking facilities available for hotel guests.",
    icon: "Car"
  },
  {
    title: "Climate Control",
    description: "Individual air conditioning and heating units in every suite for custom climate preferences.",
    icon: "Wind"
  },
  {
    title: "Laundry & Dry Cleaning",
    description: "Same-day laundry, pressing, and dry cleaning services available upon request.",
    icon: "Shirt"
  },
  {
    title: "In-Room Safety",
    description: "Electronic laptop-compatible safe in every room for secure belongings storage.",
    icon: "Lock"
  },
  {
    title: "Concierge & Transfers",
    description: "Assistance with taxi bookings, airport transfers, and Uludağ ski excursion planning.",
    icon: "MapPin"
  }
];

export const REVIEWS = [
  {
    id: "rev-1",
    author: "Mehmet Yılmaz",
    location: "Istanbul, Türkiye",
    rating: 5,
    date: "September 2026",
    text: "Burçman Otel exceeded all my expectations! The location in Osmangazi is ideal, the room was spotless and very modern with comfortable bedding. Staff were extremely helpful with local tips."
  },
  {
    id: "rev-2",
    author: "Sarah Jenkins",
    location: "London, UK",
    rating: 5,
    date: "August 2026",
    text: "Wonderful stay in Bursa! The Turkish breakfast was delicious and authentic. The hotel was very peaceful despite being central. I highly recommend the Deluxe Suite."
  },
  {
    id: "rev-3",
    author: "Ahmet Kaya",
    location: "Ankara, Türkiye",
    rating: 5,
    date: "September 2026",
    text: "Clean, polite staff, fast Wi-Fi, and very convenient for business trips in Bursa. The direct booking process was quick and smooth. Will definitely return."
  }
];
