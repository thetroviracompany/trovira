import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// ===== Components =====
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

// ===== Main Pages =====
import Company from "./pages/Company";
import ServicesPage from "./pages/Services";
import ProductsPage from "./pages/Products";
import EducationPage from "./pages/Education";
import ContactPage from "./pages/Contact";

// ===== Individual Service Pages =====
import Software from "./pages/services/Software";
import AI from "./pages/services/AI";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import DataAnalytics from "./pages/services/DataAnalytics";
import HireReadyTalent from "./pages/services/HireReadyTalent";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Careers from "./pages/Careers";
import RuralUpliftment from "./pages/RuralUpliftment";
import TechForGood from "./pages/TechForGood";

// =======================
// Home Page Layout
// =======================
const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-slate-800 bg-slate-50">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />

        {/* Services Section (Preview on Home) */}
        <div className="container mx-auto px-4 py-16 space-y-20">
          <Services />
        </div>

        {/* About Section */}
        <About />

        {/* Gallery Section */}
        <div className="container mx-auto px-4 py-16 space-y-20">
          <Gallery />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// =======================
// Main App with Routes
// =======================
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* ===== Home Page ===== */}
        <Route path="/" element={<Home />} />

        {/* ===== Company Page ===== */}
        <Route path="/company" element={<Company />} />

        {/* ===== Services Pages ===== */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/software" element={<Software />} />
        <Route path="/services/ai" element={<AI />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/data-analytics" element={<DataAnalytics />} />
        <Route path="/services/hire-ready-talent" element={<HireReadyTalent />} />

        {/* ===== Products Page ===== */}
        <Route path="/products" element={<ProductsPage />} />

        {/* ===== Education Page ===== */}
        <Route path="/education" element={<EducationPage />} />

        {/* ===== Contact Page ===== */}
        <Route path="/contact" element={<ContactPage />} />

        {/* ===== Blog Pages ===== */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />

        {/* ===== Careers Page ===== */}
        <Route path="/careers" element={<Careers />} />

        {/* ===== Rural Upliftment Page ===== */}
        <Route path="/rural-upliftment" element={<RuralUpliftment />} />

        {/* ===== Tech For Good Page ===== */}
        <Route path="/tech-for-good" element={<TechForGood />} />

        {/* ===== 404 - Not Found ===== */}
        <Route
          path="*"
          element={
            <div className="flex flex-col items-center justify-center min-h-screen text-center">
              <h1 className="text-5xl font-bold text-purple-600">404</h1>
              <p className="text-lg text-gray-600 mt-4">
                Oops! The page you are looking for doesn't exist.
              </p>
              <a
                href="#/"
                className="mt-6 inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                Go Back Home
              </a>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
