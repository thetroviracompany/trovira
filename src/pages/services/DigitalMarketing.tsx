// src/pages/services/DigitalMarketing.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const DigitalMarketing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-white">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Hero Section ===== */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6 text-center">
          Digital Marketing
        </h1>
        <p className="max-w-3xl text-center text-gray-300 text-lg leading-relaxed mb-10">
          Empower your brand with our comprehensive digital marketing services.
          We combine creativity, strategy, and technology to grow your audience,
          increase conversions, and build lasting online authority.
        </p>
      </main>

      {/* ===== Digital Marketing Services ===== */}
      <section className="px-6 md:px-20 py-16 bg-[#121218]">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-300 mb-10 text-center">
          Our Marketing Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Search Engine Optimization (SEO)",
            "Social Media Marketing",
            "Content Marketing",
            "Pay-Per-Click Advertising (PPC)",
            "Email Marketing",
            "Influencer Marketing",
            "Online Reputation Management",
            "Conversion Rate Optimization",
            "Video Marketing",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-[#1A1A24] p-6 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition duration-300 text-center"
            >
              <h3 className="text-xl font-semibold text-purple-400">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Industries We Serve ===== */}
      <section className="px-6 md:px-20 py-16 bg-[#0B0B0F]">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-300 mb-10 text-center">
          Industries We Elevate
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            "E-commerce",
            "Technology",
            "Healthcare",
            "Real Estate",
            "Education",
            "Finance",
            "Hospitality",
            "Fashion & Lifestyle",
          ].map((industry, i) => (
            <div
              key={i}
              className="bg-[#1A1A24] p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <p className="text-gray-200 font-medium">{industry}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Marketing Strategies ===== */}
      <section className="px-6 md:px-20 py-16 bg-[#121218]">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-300 mb-10 text-center">
          Our Strategic Approach
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Brand Awareness Campaigns",
            "Lead Generation Funnels",
            "Customer Retargeting",
            "Social Engagement Boosting",
            "Data-Driven Ad Optimization",
            "Performance Analytics & Reporting",
          ].map((strategy, index) => (
            <div
              key={index}
              className="bg-[#1A1A24] p-6 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition duration-300 text-center"
            >
              <h3 className="text-xl font-semibold text-purple-400">{strategy}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Call to Action ===== */}
      <section className="px-6 md:px-20 py-16 text-center bg-gradient-to-r from-purple-800/30 to-indigo-900/30">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-300 mb-6">
          Let’s Grow Your Digital Presence
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Partner with us to build a powerful online marketing strategy that drives
          results, strengthens your brand, and engages your audience.
        </p>
        <a
          href="/contact"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Get Started
        </a>
      </section>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
