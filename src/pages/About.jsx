import React from "react";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 to-green-50  min-h-screen flex items-center justify-center px-6 py-8">
        <div className="max-w-4xl bg-transparent shadow-xl rounded-3xl p-10 w-full lg:w-3/4">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
            À propos de nous
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Bienvenue sur notre plateforme ! Nous sommes une équipe passionnée
            par les voyages et l’innovation. Notre mission est de faciliter vos
            réservations d’hôtels, vols et activités en un clic. Nous croyons
            que chaque voyage mérite d’être simple et mémorable.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Grâce à nos technologies avancées et à notre engagement envers la
            qualité, nous nous efforçons de fournir une expérience utilisateur
            exceptionnelle. Merci de nous faire confiance pour vos voyages !
          </p>
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-lg text-xl font-semibold shadow-lg hover:from-blue-600 hover:to-teal-600 transition duration-300 ease-in-out"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
