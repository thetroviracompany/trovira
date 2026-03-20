import { motion } from "framer-motion";
import {
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/trovira.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0A0A] text-white pt-20 pb-10 overflow-hidden">
      {/* ===== Floating Glow Backgrounds ===== */}
      <motion.div
        className="absolute top-10 left-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-56 h-56 bg-indigo-500 rounded-full blur-3xl opacity-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="relative container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* ===== Logo & Company Info ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center space-x-3">
              <div className="flex items-center justify-center bg-white rounded-xl shadow-xl w-16 h-16">
                <img
                  src={logo}
                  alt="Trovira Logo"
                  className="h-12 w-auto max-w-[120px] object-contain"
                />
              </div>
              <div className="leading-tight">
                <div className="text-[10px] uppercase tracking-widest text-gray-300 font-medium">
                  The
                </div>
                <div className="text-xl font-bold text-white tracking-wide">
                  Trovira Company
                </div>
                <div className="text-sm text-gray-400 mt-0.5">
                  Building Tech for Global Impact
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Driving innovation to empower emerging professionals and build scalable technology solutions for a better future.
            </p>

            {/* ✅ Updated Social Media Icons */}
            <div className="flex space-x-4">
              {[
                {
                  Icon: Facebook,
                  href: "https://www.facebook.com/profile.php?id=61582455406367",
                },
                {
                  Icon: Youtube,
                  href: "https://youtube.com/@thetroviracompany?si=8CWvBMGBEy9KHU_a",
                },
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/the_trovira_company?utm_source=qr",
                },
                {
                  Icon: Linkedin,
                  href: "https://linkedin.com",
                },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-purple-600 transition-all rounded-full text-gray-200 shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ===== Services ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-5">Services</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { name: "Software Services", link: "/services/software" },
                { name: "AI Solutions", link: "/services/ai" },
                { name: "Digital Marketing", link: "/services/digital-marketing" },
                { name: "Data Analytics", link: "/services/data-analytics" },
              ].map(({ name, link }, i) => (
                <li key={i}>
                  <Link to={link} className="hover:text-purple-400 transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ===== Company ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-5">Company</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { name: "About Us", link: "/company" },
                { name: "Products", link: "/products" },
              /*  { name: "Blog", link: "/blog" },*/
                { name: "Careers", link: "/careers" },
              ].map(({ name, link }, i) => (
                <li key={i}>
                  <Link to={link} className="hover:text-purple-400 transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ===== Initiatives ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-5">Initiatives</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { name: "Education", link: "/education" },
             /*   { name: "Community", link: "/community" },
                { name: "Tech for Good", link: "/tech-for-good" }, */
              ].map(({ name, link }, i) => (
                <li key={i}>
                  <Link to={link} className="hover:text-purple-400 transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 mb-6"
        ></motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between text-gray-500 text-sm">
          <p>© {year} Trovira Company. All rights reserved.</p>
          {/* <div className="flex space-x-6 mt-4 lg:mt-0">
            {[
              { name: "Terms of Service", link: "/terms" },
              { name: "Privacy Policy", link: "/privacy" },
              { name: "Cookie Policy", link: "/cookies" },
            ].map(({ name, link }, i) => (
              <Link key={i} to={link} className="hover:text-purple-400 transition-colors">
                {name}
              </Link>
            ))}
          </div>
          */}
        </div>
      </div>

      {/* Floating Help Buttons*/}
      <motion.div
        className="fixed bottom-24 right-6 bg-white text-black text-sm font-medium px-4 py-2 rounded-full shadow-lg cursor-pointer border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
      >
        Need Help?
      </motion.div>

      <motion.a
        href="https://wa.me/919370665082"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center bg-green-500 hover:bg-green-600 rounded-full shadow-xl"
        whileHover={{ scale: 1.1 }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>
    </footer>
  );
};

export default Footer;
