import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-cyan-700 text-white p-4 shadow-md rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-wide">Réservation</h1>
        <div className="space-x-6">
          <Link
            to="/"
            className="transition duration-300 ease-in-out hover:text-blue-300 hover:underline"
          >
            Accueil
          </Link>
          <Link
            to="/about"
            className="transition duration-300 ease-in-out hover:text-blue-300 hover:underline"
          >
            À propos
          </Link>
          <Link
            to="/contact"
            className="transition duration-300 ease-in-out hover:text-blue-300 hover:underline"
          >
            Contact
          </Link>
          <Link
            to="/faq"
            className="transition duration-300 ease-in-out hover:text-blue-300 hover:underline"
          >
            FAQ
          </Link>
          <Link
            to="/bookings"
            className="transition duration-300 ease-in-out hover:text-blue-300 hover:underline"
          >
            Mes Réservations
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
