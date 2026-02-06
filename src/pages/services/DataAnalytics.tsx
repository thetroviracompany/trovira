// src/pages/services/DataAnalytics.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const DataAnalytics: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-white">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Hero Section ===== */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6 text-center">
          Data Analytics
        </h1>
        <p className="max-w-3xl text-center text-gray-300 text-lg leading-relaxed mb-10">
          Unlock the power of data to make informed decisions and drive growth.
          Our data analytics solutions help you transform raw information into
          actionable insights through intelligent visualization, automation,
          and performance monitoring.
        </p>
      </main>

      {/* ===== Analytics Services ===== */}
      <section className="px-6 md:px-20 py-16 bg-[#121218]">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-300 mb-10 text-center">
          Our Analytics Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Business Intelligence (BI)",
            "Data Warehousing",
            "Predictive Analytics",
            "Big Data Management",
            "Dashboard Development",
            "Real-Time Analytics",
            "Data Visualization",
            "KPI & Metrics Tracking",
            "Reporting Automation",
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
          Analytics for Every Industry
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            "Finance",
            "Healthcare",
            "E-commerce",
            "Manufacturing",
            "Education",
            "Telecommunications",
            "Logistics",
            "Retail",
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

      {/* ===== Data Solutions Section ===== */}
      <section className="px-6 md:px-20 py-16 bg-[#121218]">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-300 mb-10 text-center">
          Data-Driven Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Customer Behavior Analysis",
            "Sales Forecasting",
            "Market Trend Identification",
            "Operational Efficiency Tracking",
            "Risk & Compliance Analysis",
            "Performance Benchmarking",
          ].map((solution, index) => (
            <div
              key={index}
              className="bg-[#1A1A24] p-6 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition duration-300 text-center"
            >
              <h3 className="text-xl font-semibold text-purple-400">{solution}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Call to Action ===== */}
      <section className="px-6 md:px-20 py-16 text-center bg-gradient-to-r from-purple-800/30 to-indigo-900/30">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-300 mb-6">
          Make Data Work for You
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Partner with us to design powerful analytics dashboards and systems
          that turn complex data into clear business intelligence.
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

export default DataAnalytics;
