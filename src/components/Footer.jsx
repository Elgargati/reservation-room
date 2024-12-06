import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} RoomFinder. Tous droits réservés.
        </p>
        <p className="mt-2 text-xs text-gray-400">
          by Mohammed El Gargati | Contactez-nous : contact@RoomFinder.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
