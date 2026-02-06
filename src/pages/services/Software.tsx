import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Software: React.FC = () => {
  const services = [
    { title: "Custom Software Development" },
    { title: "Web Application Development" },
    { title: "Mobile App Development" },
    { title: "Cloud Solutions" },
    { title: "Software Maintenance & Support" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-white">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Hero Section ===== */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-[#0B0B0F] to-[#12121A]">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6 text-center">
          Software Services
        </h1>
        <p className="max-w-2xl text-center text-gray-300 text-lg leading-relaxed mb-12">
          We design, develop, and deliver world-class software solutions for
          businesses that want to scale, innovate, and thrive in the digital
          era.
        </p>

        {/* ===== Services Section ===== */}
        <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#16161E] p-6 rounded-2xl border border-gray-800 hover:border-purple-400 transition"
            >
              <h3 className="text-xl font-semibold text-purple-300 text-center">
                {service.title}
              </h3>
            </div>
          ))}
        </section>
      </main>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
};

export default Software;
