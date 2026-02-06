import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TechForGood: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-white">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 py-20 text-center">
        <h1 className="text-4xl font-bold">Tech for Good</h1>
        <p className="mt-3 text-gray-200 max-w-2xl mx-auto">
          At Trovira, we believe technology should empower communities, protect
          the environment, and create opportunities for all. <br /> 
          Our <span className="font-semibold">Tech for Good</span> initiatives
          focus on building sustainable, inclusive, and impactful solutions.
        </p>
      </section>

      {/* ===== Key Focus Areas ===== */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Key Focus Areas
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-[#1a1a1f] rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition">
            <h3 className="text-xl font-semibold text-purple-400">
              🌱 Green Technology
            </h3>
            <p className="mt-2 text-gray-300">
              Driving sustainable development with eco-friendly and
              energy-efficient technology solutions.
            </p>
          </div>

          <div className="bg-[#1a1a1f] rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition">
            <h3 className="text-xl font-semibold text-purple-400">
              🌍 Digital Inclusion
            </h3>
            <p className="mt-2 text-gray-300">
              Bridging the digital divide by ensuring technology access for
              underprivileged communities.
            </p>
          </div>

          <div className="bg-[#1a1a1f] rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition">
            <h3 className="text-xl font-semibold text-purple-400">
              🏥 Healthcare & Education
            </h3>
            <p className="mt-2 text-gray-300">
              Leveraging technology to transform healthcare and education,
              making them more accessible and effective.
            </p>
          </div>

          <div className="bg-[#1a1a1f] rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition">
            <h3 className="text-xl font-semibold text-purple-400">
              🤝 Empowering NGOs
            </h3>
            <p className="mt-2 text-gray-300">
              Supporting non-profits with digital transformation to maximize
              their impact and reach.
            </p>
          </div>
        </div>
      </main>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
};

export default TechForGood;
