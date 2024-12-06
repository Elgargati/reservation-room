import React, { useState } from "react";
import Footer from "../components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé !");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex items-center justify-center px-6 py-8">
        <div className="w-1/2  shadow-xl rounded-2xl p-8 md:p-12">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Contactez-nous
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="block text-gray-700 mb-2 font-medium"
                htmlFor="name"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                className="w-full bg-transparent p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-gray-800 shadow-sm"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 mb-2 font-medium"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre email"
                className="w-full bg-transparent p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-gray-800 shadow-sm"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 mb-2 font-medium"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message..."
                className="w-full bg-transparent p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-gray-800 shadow-sm"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
