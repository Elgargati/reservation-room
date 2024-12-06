// components/HotelCard.js
import React from "react";
import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa"; // Importing icons

const HotelCard = ({ hotel, handleReserve }) => {
  // Function to generate the star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`text-lg ${
            i < rating ? "text-yellow-500" : "text-yellow-500"
          }`} // Changed to text-yellow-500 for gold
        />
      );
    }
    return stars;
  };

  return (
    <div
      key={hotel.id}
      className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col hover:scale-105 transform transition-all duration-300"
    >
      {/* Hotel Image */}
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-48 object-cover rounded-t-xl"
      />

      <div className="p-6 flex flex-col justify-between flex-grow">
        <h3 className="text-2xl font-semibold text-gray-800">{hotel.name}</h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 mt-2">
          <FaMapMarkerAlt className="mr-2 text-lg text-blue-500" />
          <p className="text-sm">{hotel.location}</p>
        </div>

        {/* Price */}
        <div className="flex items-center text-blue-600 mt-2">
          <FaDollarSign className="mr-2 text-lg" />
          <p className="text-lg font-semibold">${hotel.price} / nuit</p>
        </div>

        {/* Star Rating */}
        <div className="flex items-center mt-2">
          {renderStars(hotel.rating)}
        </div>

        {/* Button */}
        <button
          onClick={() => handleReserve(hotel)}
          className="mt-6 bg-blue-600 text-white py-3 px-5 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <FaCheckCircle className="text-white text-lg" />
          <span>Réserver</span>
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
