import React from "react";
import { useBookingContext } from "../components/BookingContext";
import Footer from "../components/Footer";

function Bookings() {
  const { bookings, removeBooking } = useBookingContext(); // Destructure the removeBooking function

  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen p-8">
        <div className="max-w-4xl mx-auto bg-transparent shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Mes Réservations
          </h1>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-gray-100 rounded-lg p-4 mb-4 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    {booking.hotel}
                  </h2>
                  <p className="text-gray-600">{booking.date}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-800 font-semibold mr-4">
                    {booking.price} €
                  </p>
                  {/* Delete button */}
                  <button
                    onClick={() => removeBooking(booking.id)} // Call removeBooking function
                    className="text-red-500 hover:text-red-700 transition duration-200"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Aucune réservation trouvée.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Bookings;
