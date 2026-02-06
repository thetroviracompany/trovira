import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Careers: React.FC = () => {
  // Empty job list → triggers "No Jobs Message"
  const jobs: any[] = [];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-white">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 py-20 text-center">
        <h1 className="text-4xl font-bold">Join Our Team</h1>
        <p className="mt-3 text-gray-200 max-w-2xl mx-auto">
          At Trovira, we believe in innovation, growth, and creating
          opportunities for everyone. Explore exciting career opportunities and
          become part of our journey.
        </p>
      </section>

      {/* ===== Job Openings ===== */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Current Open Positions
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#1a1a1f] rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition"
            >
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-400 text-sm mt-1">
                {job.location} • {job.type}
              </p>
              <p className="mt-4 text-gray-300 text-sm">{job.description}</p>
              <Link
                to="/careers/apply"
                className="inline-block mt-6 px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition"
              >
                Apply Now →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Jobs Message */}
        {jobs.length === 0 && (
          <p className="text-center text-gray-400">
            Currently, we don’t have any open positions. Please check back later!
          </p>
        )}
      </main>

      {/* ===== Call to Action Section ===== */}
      <section className="bg-purple-800 py-12 text-center">
        <h3 className="text-2xl font-bold">Didn't find the right role?</h3>
        <p className="mt-2 text-gray-200">
          Send us your resume, and we'll reach out when a relevant opportunity
          arises.
        </p>
        <a
          href="mailto:careers@trovira.com"
          className="mt-5 inline-block px-6 py-2 bg-white text-purple-800 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Send Resume
        </a>
      </section>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
};

export default Careers;
