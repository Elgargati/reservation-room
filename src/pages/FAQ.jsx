import React from "react";
import Footer from "../components/Footer";

function FAQ() {
  const faqs = [
    {
      question: "Comment effectuer une réservation ?",
      answer:
        "Rendez-vous sur notre page d'accueil, saisissez votre destination, et sélectionnez parmi les options disponibles. Suivez les étapes pour confirmer votre réservation.",
    },
    {
      question: "Puis-je annuler ma réservation ?",
      answer:
        "Oui, vous pouvez annuler ou modifier votre réservation en vous rendant dans votre espace personnel. Les politiques d'annulation peuvent varier selon l'établissement.",
    },
    {
      question: "Quels modes de paiement acceptez-vous ?",
      answer:
        "Nous acceptons les cartes de crédit/débit majeures ainsi que certains portefeuilles numériques.",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen px-6 py-8">
        <div className="max-w-4xl mx-auto bg-transparent shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            FAQ
          </h1>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4 mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {faq.question}
              </h2>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FAQ;
