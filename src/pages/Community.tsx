import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CommunityPage: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen flex flex-col">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">Join Our Community</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Be a part of a thriving ecosystem of learners, innovators, and
          change-makers. Together, we build technology and talent for global
          impact.
        </p>
      </section>

      {/* ===== Main Content ===== */}
      <main className="flex-grow">
        {/* Community Info Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Community"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div>
              <h2 className="text-3xl font-bold text-purple-700 mb-4">
                A Network That Grows With You
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Our community provides a space for developers, entrepreneurs, and
                professionals to collaborate, learn, and grow together. Whether
                you're just starting out or are a seasoned expert, there’s a place
                for you here.
              </p>
              <ul className="space-y-3 text-gray-800">
                <li>✅ Access to workshops and exclusive events</li>
                <li>✅ Networking opportunities with global leaders</li>
                <li>✅ Mentorship and career guidance</li>
                <li>✅ Resources to upskill and reskill</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-purple-700 text-white text-center py-16">
          <h3 className="text-3xl font-semibold">
            Ready to make a difference?
          </h3>
          <p className="mt-2 text-lg">
            Join our community today and start your journey towards global impact.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block px-6 py-3 bg-white text-purple-700 rounded-full font-medium hover:bg-gray-100 transition"
          >
            Join Now
          </a>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
};

export default CommunityPage;
