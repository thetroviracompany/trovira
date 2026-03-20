import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const servicesData = [
  {
    title: "Software Services",
    description:
      "We build scalable, high-performance software tailored to your business needs, from web apps to enterprise platforms.",
    link: "/services/software",
  },
  {
    title: "AI Services",
    description:
      "Leverage AI-driven solutions for automation, insights, and innovation that take your business to the next level.",
    link: "/services/ai",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your brand visibility with our data-driven digital marketing strategies and creative campaigns.",
    link: "/services/digital-marketing",
  },
  {
    title: "Data Analytics",
    description:
      "Turn raw data into actionable insights with our advanced analytics and visualization solutions.",
    link: "/services/data-analytics",
  },
  {
    title: "Hire-Ready Talent",
    description:
      "Find and onboard top-tier, industry-ready tech talent for your projects and long-term growth.",
    link: "/services/hire-ready-talent",
  },
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-white">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="bg-gradient-to-r from-purple-800 to-purple-600 py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Services That Transform Your Business
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            At Trovira, we deliver cutting-edge services to help businesses
            innovate, scale, and succeed in the digital era.
          </p>
        </div>
      </section>

      {/* ===== Services Grid ===== */}
      <main className="flex-grow">
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-[#111111] rounded-xl shadow-lg hover:shadow-purple-600 transition-all duration-300 p-8 flex flex-col"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-400">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 flex-grow">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="mt-auto inline-block px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition text-center font-medium"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
};

export default Services;
