// src/pages/services/HireReadyTalent.tsx
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const HireReadyTalent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-white">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Hero Section ===== */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6 text-center">
          Hire-Ready Talent
        </h1>
        <p className="max-w-3xl text-center text-gray-300 text-lg leading-relaxed mb-10">
          Build your team with top-tier, job-ready talent trained in the latest
          technologies and industry practices. Our hire-ready candidates are
          vetted, skilled, and ready to make an immediate impact on your projects —
          helping you scale faster and smarter.
        </p>
      </main>

      {/* ===== Talent Categories ===== */}
      <section className="px-6 md:px-20 py-16 bg-[#121218]">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-300 mb-10 text-center">
          Hire Talent Across Key Domains
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Software Development",
            "Data Science & Analytics",
            "AI & Machine Learning",
            "UI/UX Design",
            "Digital Marketing",
            "Cybersecurity",
            "Cloud Computing",
            "DevOps Engineering",
            "Product Management",
          ].map((domain, index) => (
            <div
              key={index}
              className="bg-[#1A1A24] p-6 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition duration-300 text-center"
            >
              <h3 className="text-xl font-semibold text-purple-400">{domain}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Industries We Serve ===== */}
      <section className="px-6 md:px-20 py-16 bg-[#0B0B0F]">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-300 mb-10 text-center">
          Talent for Every Industry
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            "Information Technology",
            "Finance & Banking",
            "Healthcare",
            "E-commerce",
            "Telecommunications",
            "Education",
            "Manufacturing",
            "Media & Entertainment",
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

      {/* ===== Talent Solutions ===== */}
      <section className="px-6 md:px-20 py-16 bg-[#121218]">
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-300 mb-10 text-center">
          Our Talent Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Full-Time Hiring",
            "Contract-Based Staffing",
            "Remote Talent Placement",
            "Onsite Resource Deployment",
            "Project-Based Hiring",
            "Tech Internship Programs",
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
          Build Your Dream Team Today
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Partner with us to access pre-trained, industry-ready professionals who
          can accelerate your business growth from day one.
        </p>
        <a
          href="/contact"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Hire Talent Now
        </a>
      </section>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
};

export default HireReadyTalent;
