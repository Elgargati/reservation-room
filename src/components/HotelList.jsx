// components/HotelList.js
import React from "react";
import HotelCard from "./HotelCard";

const HotelList = ({ filteredHotels, handleReserve }) => {
  return (
    <div className="grid grid-cols-1 min-h-screen  sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 w-full max-w-6xl mx-auto my-2">
      {filteredHotels.length > 0 ? (
        filteredHotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            handleReserve={handleReserve}
          />
        ))
      ) : (
        <p className="text-red-500 text-lg text-center col-span-full">
          Aucun room trouvé.
        </p>
      )}
    </div>
  );
};

export default HotelList;
