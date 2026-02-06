// src/pages/services/AI.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AI: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-white">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Hero Section ===== */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6 text-center">
          AI Services
        </h1>
        <p className="max-w-3xl text-center text-gray-300 text-lg leading-relaxed mb-10">
          Harness the power of Artificial Intelligence to revolutionize your business.
          Our AI-driven solutions combine cutting-edge machine learning, natural
          language processing, and computer vision technologies to automate workflows,
          extract insights, and deliver exceptional user experiences.
        </p>
      </main>

      {/* ===== AI Features Section ===== */}
      <section className="px-6 md:px-20 py-16 bg-[#121218]">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-300 mb-10 text-center">
          Our AI Capabilities
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Machine Learning",
            "Natural Language Processing",
            "Computer Vision",
            "Generative AI",
            "AI-Powered Automation",
            "Data Intelligence",
          ].map((title, index) => (
            <div
              key={index}
              className="bg-[#1A1A24] p-6 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition duration-300 text-center"
            >
              <h3 className="text-xl font-semibold text-purple-400">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Industries We Serve ===== */}
      <section className="px-6 md:px-20 py-16 bg-[#0B0B0F]">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-300 mb-10 text-center">
          AI Solutions for Every Industry
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            "Healthcare",
            "Finance",
            "Retail & E-commerce",
            "Manufacturing",
            "Education",
            "Transportation",
            "Marketing",
            "Real Estate",
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

      {/* ===== Use Cases Section ===== */}
      <section className="px-6 md:px-20 py-16 bg-[#121218]">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-300 mb-10 text-center">
          Real-World Applications
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Predictive Analytics",
            "AI Chatbots & Virtual Assistants",
            "Fraud Detection",
            "Personalization Engines",
            "Quality Control Automation",
            "Voice & Image Recognition",
          ].map((title, index) => (
            <div
              key={index}
              className="bg-[#1A1A24] p-6 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition duration-300 text-center"
            >
              <h3 className="text-xl font-semibold text-purple-400">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Call to Action ===== */}
      <section className="px-6 md:px-20 py-16 text-center bg-gradient-to-r from-purple-800/30 to-indigo-900/30">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-300 mb-6">
          Ready to Build Intelligent Solutions?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let’s transform your business with customized AI applications designed to
          scale, optimize, and innovate.
        </p>
        <a
          href="/contact"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Get in Touch
        </a>
      </section>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
};

export default AI;
