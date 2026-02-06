import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo from "../assets/trovira.png";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const isActive = (path: string) =>
    location.pathname === path ? "text-purple-400" : "text-white";

  return (
    <header className="w-full relative z-50">
      {/* ======= TOP BAR ======= */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-500 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61582455406367"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="cursor-pointer hover:text-gray-200 transition" />
            </a>
            <a
              href="https://youtube.com/@troviracompany?si=445sXtykizXVAChK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="cursor-pointer hover:text-gray-200 transition" />
            </a>
            <a
              href="https://www.instagram.com/the_trovira_company?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="cursor-pointer hover:text-gray-200 transition" />
            </a>
            <a
              href="https://www.linkedin.com/company/troviracompany"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="cursor-pointer hover:text-gray-200 transition" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <FiPhone />
              <span className="font-medium">+91 9370665082</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail />
              <span className="font-medium">
                thetroviracompany@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ======= MAIN NAVBAR ======= */}
      <div className="bg-[#0B0B0F] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-xl bg-white shadow-lg hover:scale-105 transition">
              <img
                src={logo}
                alt="Trovira Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <div className="leading-tight">
              <div className="text-[10px] uppercase tracking-widest text-gray-300 font-medium">
                The
              </div>
              <div className="text-lg sm:text-xl font-bold text-white tracking-wide">
                Trovira Company
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-0.5">
                Building Tech for Global Impact
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-10 font-medium">
            <Link to="/" className={`hover:text-purple-400 transition ${isActive("/")}`}>
              Home
            </Link>
            <Link
              to="/company"
              className={`hover:text-purple-400 transition ${isActive("/company")}`}
            >
              Company
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                to="/services"
                className={`flex items-center gap-1 hover:text-purple-400 transition ${
                  location.pathname.startsWith("/services")
                    ? "text-purple-400"
                    : "text-white"
                }`}
              >
                Services <span className="text-xs">▾</span>
              </Link>

              <div className="absolute top-full left-0 mt-2 w-56 hidden group-hover:block bg-[#0B0B0F] text-white rounded-lg shadow-xl z-50 border border-gray-800">
                {[
                  { to: "/services/software", label: "Software Services" },
                  { to: "/services/ai", label: "AI Services" },
                  { to: "/services/digital-marketing", label: "Digital Marketing" },
                  { to: "/services/data-analytics", label: "Data Analytics" },
                  { to: "/services/hire-ready-talent", label: "Hire-Ready Talent" },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-4 py-3 hover:bg-purple-600 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/products"
              className={`hover:text-purple-400 transition ${isActive("/products")}`}
            >
              Products
            </Link>

            <Link
              to="/education"
              className={`hover:text-purple-400 transition ${isActive("/education")}`}
            >
              Education
            </Link>
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-700 to-purple-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white text-3xl"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* ======= MOBILE MENU ======= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-95 z-[60] flex flex-col px-6 py-10 space-y-6 text-white text-lg overflow-y-auto transition-all duration-300">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className={isActive("/")}>
            Home
          </Link>
          <Link
            to="/company"
            onClick={() => setMobileMenuOpen(false)}
            className={isActive("/company")}
          >
            Company
          </Link>

          {/* Mobile Dropdown */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full hover:text-purple-400 transition"
            >
              <span>Services</span>
              <span className="text-xs">{servicesOpen ? "▴" : "▾"}</span>
            </button>
            <div
              className={`ml-4 mt-2 space-y-2 text-gray-300 transition-all duration-300 ${
                servicesOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {[
                { to: "/services/software", label: "Software Services" },
                { to: "/services/ai", label: "AI Services" },
                { to: "/services/digital-marketing", label: "Digital Marketing" },
                { to: "/services/data-analytics", label: "Data Analytics" },
                { to: "/services/hire-ready-talent", label: "Hire-Ready Talent" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-purple-400"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/products"
            onClick={() => setMobileMenuOpen(false)}
            className={isActive("/products")}
          >
            Products
          </Link>

          <Link
            to="/education"
            onClick={() => setMobileMenuOpen(false)}
            className={isActive("/education")}
          >
            Education
          </Link>

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 bg-gradient-to-r from-purple-700 to-purple-500 px-6 py-2 rounded-full font-medium hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
