import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="bg-gradient-to-b from-purple-900 to-black text-center text-white py-20">
        <h1 className="text-5xl font-bold">LET'S BUILD SOMETHING GREAT TOGETHER!</h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have questions, feedback, or need
          support, our team is here to help. Contact us using the details below.
        </p>
      </section>

      {/* ===== Contact Info Section ===== */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        {/* Phone */}
        <div className="bg-white shadow-md rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-4 text-purple-600">Call Us</h3>
          <p className="text-gray-700">+91 9370665082</p>
        </div>

        {/* Email */}
        <div className="bg-white shadow-md rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-4 text-purple-600">Email Us</h3>
          <p className="text-gray-700">thetroviracompany@gmail.com</p>
        </div>

        {/* Locations */}
        <div className="bg-white shadow-md rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-4 text-purple-600">Visit Us</h3>
          <p className="text-gray-700 mb-4">
            Pune, Maharashtra <br /> India
          </p>
          <p className="text-gray-700 mb-4">
            Nashik, Maharashtra <br /> India
          </p>
          <p className="text-gray-700 mb-4">
            Latur, Maharashtra <br /> India
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
};

export default Contact;
