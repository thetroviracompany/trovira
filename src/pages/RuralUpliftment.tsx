import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RuralUpliftment: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-white">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 py-20 text-center">
        <h1 className="text-4xl font-bold">Rural Upliftment</h1>
        <p className="mt-3 text-gray-200 max-w-3xl mx-auto">
          Empowering rural communities through technology, education, and
          sustainable solutions for a brighter future.
        </p>
      </section>

      {/* ===== Content Section ===== */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-16 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1a1a1f] rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            We aim to reduce the digital divide by providing access to education,
            skill development, and job opportunities for rural youth. Through
            training programs, partnerships, and tech-based initiatives, we
            strive to create sustainable growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1a1a1f] rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Key Initiatives</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Digital literacy programs for rural students</li>
            <li>Training centers for skill development</li>
            <li>Connecting rural talent with global opportunities</li>
            <li>Promoting sustainable farming with technology</li>
          </ul>
        </motion.div>
      </main>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
};

export default RuralUpliftment;
