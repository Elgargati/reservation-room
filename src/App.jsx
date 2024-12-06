import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Bookings from "./pages/Bookings";

// Importer le BookingProvider
import { BookingProvider } from "./components/BookingContext";

function App() {
  return (
    // Envelopper l'ensemble de l'application avec BookingProvider
    <BookingProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </Router>
    </BookingProvider>
  );
}

export default App;
