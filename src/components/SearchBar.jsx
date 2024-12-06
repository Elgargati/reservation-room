// components/SearchBar.js
import React from "react";

const SearchBar = ({ query, setQuery, handleSearch }) => {
  return (
    <div className=" w-full max-w-2xl mx-auto mb-12">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Rechercher une chambre"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200"
        >
          <span className="font-semibold">Rechercher</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
