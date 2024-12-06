import React, { createContext, useState, useContext } from "react";

// Crée le contexte
const BookingContext = createContext();

// Fournisseur du contexte
export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (newBooking) => {
    setBookings((prevBookings) => [...prevBookings, newBooking]);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useBookingContext = () => {
  return useContext(BookingContext);
};
