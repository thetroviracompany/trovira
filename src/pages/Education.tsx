import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Education: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col text-slate-800 bg-slate-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black via-purple-900 to-black text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <span className="bg-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
            Education at Trovira
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            From Emerging Talent <br /> To Global Professionals
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
            At Trovira, we provide world-class professional education that
            empowers students to become skilled, industry-ready professionals.
            Join us in redefining the future of learning and opportunity.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Mission in Professional Education
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Our mission is to deliver globally relevant professional education
            that nurtures talent, fosters innovation, and builds future leaders
            ready to thrive in a rapidly evolving world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-700">
              Skill Development
            </h3>
            <p className="mt-3 text-gray-600">
              Providing hands-on training in fields such as Software Development,
              Data Analytics, Artificial Intelligence, and Digital Transformation.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-700">
              Career Pathways
            </h3>
            <p className="mt-3 text-gray-600">
              Guiding learners toward global career opportunities through
              mentorship, internships, and placement programs.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-700">
              Lifelong Learning
            </h3>
            <p className="mt-3 text-gray-600">
              Encouraging a culture of continuous growth and innovation through
              access to evolving educational programs and resources.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-700 py-16 text-white text-center">
        <h2 className="text-3xl font-bold">
          Join Us in Shaping Global Professionals
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg">
          Be part of Trovira’s mission to empower learners through professional
          education and create a future driven by innovation and excellence.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="mt-6 bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get Involved
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Education;
