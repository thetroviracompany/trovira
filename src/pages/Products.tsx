import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  BarChart3,
  ShoppingBag,
  GraduationCap,
  Brain,
  UserCog,
  Boxes,
  ClipboardList,
  MessageSquare,
  Settings,
  BarChart4,
  Cloud,
  ShieldCheck,
  Network,
  Rocket,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Products: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0B0B0F] text-white min-h-screen flex flex-col">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="relative text-center py-20 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800">
        <h4 className="text-purple-300 text-lg mb-4 tracking-wide uppercase">
          Our Products
        </h4>
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto">
          Scalable Tech Products Designed for Success
        </h1>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
          We build powerful, intuitive, and scalable software solutions that help
          businesses operate efficiently, make data-driven decisions, and scale
          confidently.
        </p>
      </section>

      {/* ===== Products Grid ===== */}
      <main className="flex-grow">
        <section className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Product Cards */}

          {/* CRM Solution */}
          <div className="bg-[#161616] rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-purple-500/20 transition transform">
            <Users className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-purple-400 mb-3">
              CRM Solution
            </h3>
            <p className="text-gray-400">
              Manage customer relationships seamlessly with our intelligent CRM
              platform. Improve sales, marketing, and customer retention.
            </p>
          </div>

          {/* ERP System */}
          <div className="bg-[#161616] rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-purple-500/20 transition transform">
            <BarChart3 className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-purple-400 mb-3">
              ERP System
            </h3>
            <p className="text-gray-400">
              Optimize business operations with our scalable ERP covering finance,
              HR, supply chain, and more.
            </p>
          </div>

          {/* E-Commerce Suite */}
          <div className="bg-[#161616] rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-purple-500/20 transition transform">
            <ShoppingBag className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-purple-400 mb-3">
              E-Commerce Suite
            </h3>
            <p className="text-gray-400">
              Build and scale online stores with our secure and robust e-commerce
              platform built for global transactions.
            </p>
          </div>

          {/* School ERP */}
          <div className="bg-[#161616] rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-purple-500/20 transition transform">
            <GraduationCap className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-purple-400 mb-3">
              School ERP
            </h3>
            <p className="text-gray-400">
              A complete solution for managing educational institutions with modules
              for attendance, exams, and fees.
            </p>
          </div>

          {/* AI Analytics Dashboard */}
          <div className="bg-[#161616] rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-purple-500/20 transition transform">
            <Brain className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-purple-400 mb-3">
              AI Analytics Dashboard
            </h3>
            <p className="text-gray-400">
              Transform raw data into business insights using AI-driven analytics,
              visual dashboards, and predictive trends.
            </p>
          </div>

          {/* HR & Payroll System */}
          <div className="bg-[#161616] rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-purple-500/20 transition transform">
            <UserCog className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-purple-400 mb-3">
              HR & Payroll System
            </h3>
            <p className="text-gray-400">
              Simplify HR tasks with automated payroll, attendance management, and
              performance tracking.
            </p>
          </div>

          {/* Inventory Management */}
          <div className="bg-[#161616] rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-purple-500/20 transition transform">
            <Boxes className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-purple-400 mb-3">
              Inventory Management
            </h3>
            <p className="text-gray-400">
              Manage stock, suppliers, and purchases in real time with smart
              inventory tracking and reporting tools.
            </p>
          </div>

          {/* Project Management Tool */}
          <div className="bg-[#161616] rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-purple-500/20 transition transform">
            <ClipboardList className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-purple-400 mb-3">
              Project Management Tool
            </h3>
            <p className="text-gray-400">
              Collaborate effectively with task tracking, automated workflows, and
              progress visualization.
            </p>
          </div>

          {/* AI Chatbot */}
          <div className="bg-[#161616] rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-purple-500/20 transition transform">
            <MessageSquare className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-purple-400 mb-3">AI Chatbot</h3>
            <p className="text-gray-400">
              Deliver 24/7 automated customer support with our smart chatbot that
              integrates across web, WhatsApp, and social media.
            </p>
          </div>

          {/* ===== New Next-Gen Products ===== */}

          {/* Workflow Automation Suite */}
          <div className="bg-[#161616] rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-purple-500/20 transition transform">
            <Settings className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-purple-400 mb-3">
              Workflow Automation Suite
            </h3>
            <p className="text-gray-400">
              Automate repetitive business processes using low-code workflows and
              intelligent triggers to improve productivity.
            </p>
          </div>

          {/* Marketing Automation */}
          <div className="bg-[#161616] rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-purple-500/20 transition transform">
            <Rocket className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-purple-400 mb-3">
              Marketing Automation
            </h3>
            <p className="text-gray-400">
              Streamline campaigns, lead scoring, and customer segmentation with
              AI-driven marketing automation tools.
            </p>
          </div>

          {/* BI Dashboard Pro */}
          <div className="bg-[#161616] rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-purple-500/20 transition transform">
            <BarChart4 className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-purple-400 mb-3">
              BI Dashboard Pro
            </h3>
            <p className="text-gray-400">
              Create customizable, interactive business intelligence dashboards
              for real-time data insights and reporting.
            </p>
          </div>

          {/* CloudOps Manager */}
          <div className="bg-[#161616] rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-purple-500/20 transition transform">
            <Cloud className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-purple-400 mb-3">
              CloudOps Manager
            </h3>
            <p className="text-gray-400">
              Centralize cloud monitoring, resource optimization, and automated
              scaling across AWS, Azure, and GCP.
            </p>
          </div>

          {/* DevSecOps Platform */}
          <div className="bg-[#161616] rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-purple-500/20 transition transform">
            <ShieldCheck className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-purple-400 mb-3">
              DevSecOps Platform
            </h3>
            <p className="text-gray-400">
              Integrate security into your CI/CD pipelines with automated
              vulnerability scans, compliance checks, and secure deployments.
            </p>
          </div>

          {/* Edge Cloud Network */}
          <div className="bg-[#161616] rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-purple-500/20 transition transform">
            <Network className="text-purple-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-purple-400 mb-3">
              Edge Cloud Network
            </h3>
            <p className="text-gray-400">
              Experience ultra-fast performance with our distributed edge cloud
              platform optimized for global delivery.
            </p>
          </div>
        </section>

        {/* ===== Coming Soon Section ===== */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          {/*<h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">
            Coming Soon 🚀
          </h2>*/}
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
            We’re constantly innovating!
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 bg-purple-600 rounded-full font-semibold hover:bg-purple-700 transition"
          >
            Get Notified
          </button>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
};

export default Products;
