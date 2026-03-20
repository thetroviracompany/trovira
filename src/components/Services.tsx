import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Code, Cpu, BarChart, Users, Database } from "lucide-react";

// ===== Service Data =====
const services = [
  {
    title: "Software Services",
    description:
      "SaaS, CRM, ERP, and custom-built web & mobile apps engineered for scalability.",
    icon: <Code className="w-10 h-10 text-white" />,
    gradient: "from-purple-500 via-indigo-500 to-blue-500",
  },
  {
    title: "AI Services",
    description:
      "Smart automation, chatbots, and predictive models driving business efficiency.",
    icon: <Cpu className="w-10 h-10 text-white" />,
    gradient: "from-pink-500 via-red-500 to-orange-500",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven campaigns, SEO optimization, and brand growth through analytics.",
    icon: <BarChart className="w-10 h-10 text-white" />,
    gradient: "from-green-400 via-emerald-500 to-teal-500",
  },
  {
    title: "Data Analytics",
    description:
      "Transforming data into actionable insights with AI-assisted visualization.",
    icon: <Database className="w-10 h-10 text-white" />,
    gradient: "from-yellow-400 via-orange-500 to-red-500",
  },
  {
    title: "Hire-Ready Talent",
    description:
      "Pre-trained developers ready to scale your team and accelerate delivery.",
    icon: <Users className="w-10 h-10 text-white" />,
    gradient: "from-blue-400 via-cyan-500 to-teal-500",
  },
];

// ===== Animation Variants =====
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Services: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 15 });
  const springY = useSpring(y, { stiffness: 100, damping: 15 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const moveX = ((e.clientX - left) / width - 0.5) * 30;
    const moveY = ((e.clientY - top) / height - 0.5) * -30;
    x.set(moveX);
    y.set(moveY);
  };

  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <section
      id="services"
      className="relative py-24 sm:py-36 bg-gradient-to-br from-[#0a0118] via-[#080012] to-black overflow-hidden"
      aria-label="Our Services"
    >
      {/* ===== Particles Background ===== */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: {
              value: isMobile ? 60 : 120,
              density: { enable: true, area: 800 },
            },
            color: { value: ["#a855f7", "#ec4899", "#facc15", "#06b6d4"] },
            opacity: { value: 0.3, random: true },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.8 },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.15,
              width: 1,
            },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" } },
            modes: { grab: { distance: 150, links: { opacity: 0.4 } } },
          },
          detectRetina: true,
        }}
      />

      {/* ===== Floating Blobs ===== */}
      <div className="absolute top-28 left-12 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-32 right-14 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl mix-blend-screen animate-float"></div>
      <div className="absolute top-1/3 left-1/2 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl mix-blend-screen animate-bounce"></div>

      {/* ===== Section Content ===== */}
      <div
        className="max-w-7xl mx-auto px-6 text-center relative z-10"
        onMouseMove={handleMouseMove}
      >
        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-purple-300 font-semibold tracking-widest uppercase text-sm">
            Our Expertise
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 mt-3 mb-6">
            The Future of Innovation
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            We provide cutting-edge digital, AI, and software solutions — helping businesses
            lead the market through automation, intelligence, and creativity.
          </p>
        </motion.div>

        {/* ===== Cards Grid ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              style={{
                transform: isMobile
                  ? "none"
                  : `perspective(1000px) rotateX(${springY.get()}deg) rotateY(${springX.get()}deg)`,
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
              className="relative group p-6 sm:p-8 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 hover:border-white/20 shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* ===== Glow Border ===== */}
              <div
                className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-tr ${service.gradient} opacity-0 group-hover:opacity-100 blur-md transition-all duration-700`}
              />

              {/* ===== Icon ===== */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 8 }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className={`mx-auto mb-5 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr ${service.gradient} shadow-xl`}
              >
                {service.icon}
              </motion.div>

              {/* ===== Text ===== */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;