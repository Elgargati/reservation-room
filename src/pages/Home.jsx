import React, { useState, useEffect } from "react";
import { useBookingContext } from "../components/BookingContext"; // Importing the context
import Footer from "../components/Footer"; // Assuming you have a Footer component
import SearchBar from "../components/SearchBar";
import HotelList from "../components/HotelList";
import data from "../Data";

function Home() {
  const [query, setQuery] = useState("");
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const { addBooking } = useBookingContext(); // Access the addBooking function from context
  const [reservationMessage, setReservationMessage] = useState(""); // State for reservation message

  // Fetch hotel data
  useEffect(() => {
    const fetchHotels = async () => {
      setHotels(data);
      setFilteredHotels(data);
    };

    fetchHotels();
  }, []);

  // Search function
  const handleSearch = () => {
    if (query.trim()) {
      const results = hotels.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(query.toLowerCase()) ||
          hotel.location.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredHotels(results);
    } else {
      setFilteredHotels(hotels);
    }
  };

  const handleReserve = (hotel) => {
    const booking = {
      id: new Date().getTime(),
      hotel: hotel.name,
      location: hotel.location,
      price: hotel.price,
      date: new Date().toLocaleDateString("fr-FR"),
    };
    addBooking(booking);

    setReservationMessage(`Vous avez réservé ${hotel.name} avec succès !`);

    setTimeout(() => {
      setReservationMessage("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col">
      {/* Reservation Success Message */}
      {reservationMessage && (
        <div className="fixed top-0 left-0 right-0 bg-green-500 text-white text-center py-3 mb-4 rounded-b-lg shadow-lg z-50">
          <p>{reservationMessage}</p>
        </div>
      )}

      {/* Header Section */}
      <div className="w-full bg-transparent shadow-md py-6 px-8 mb-10">
        <h1 className="text-4xl font-extrabold text-center text-blue-600">
          Réservez votre room idéal
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Trouvez les meilleures offres sur les rooms partout en Maroc.
        </p>
      </div>

      {/* Search Section */}
      <SearchBar
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />

      {/* Hotels Section */}
      <HotelList
        filteredHotels={filteredHotels}
        handleReserve={handleReserve}
      />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Home;
