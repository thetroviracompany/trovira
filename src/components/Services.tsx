import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Code, Cpu, BarChart, Users, Database } from "lucide-react";

// ===== Service Data =====
const services = [
  {
    title: "Software Services",
    description:
      "SaaS, CRM, ERP, and bespoke web & mobile applications tailored for scalability.",
    icon: <Code className="w-10 h-10 text-white" />,
    gradient: "from-purple-500 via-indigo-500 to-blue-500",
  },
  {
    title: "AI Services",
    description:
      "Smart automation, AI-driven bots, and predictive analytics to power business growth.",
    icon: <Cpu className="w-10 h-10 text-white" />,
    gradient: "from-pink-500 via-red-500 to-orange-500",
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, paid campaigns, and brand strategies that deliver measurable results.",
    icon: <BarChart className="w-10 h-10 text-white" />,
    gradient: "from-green-400 via-emerald-500 to-teal-500",
  },
  {
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights through advanced analytics.",
    icon: <Database className="w-10 h-10 text-white" />,
    gradient: "from-yellow-400 via-orange-500 to-red-500",
  },
  {
    title: "Hire-Ready Talent",
    description:
      "Skilled developers trained on real-world projects, ready to scale your team.",
    icon: <Users className="w-10 h-10 text-white" />,
    gradient: "from-blue-400 via-cyan-500 to-teal-500",
  },
];

// ===== Animations =====
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Services: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 25 });
  const springY = useSpring(y, { stiffness: 150, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const moveX = ((e.clientX - left) / width - 0.5) * 30;
    const moveY = ((e.clientY - top) / height - 0.5) * -30;
    x.set(moveX);
    y.set(moveY);
    setMousePosition({ x: moveX, y: moveY });
  };

  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <section
      id="services"
      className="relative py-36 bg-gradient-to-br from-[#0a0118] via-[#080012] to-black overflow-hidden"
    >
      {/* ===== 3D Galaxy Particles Background ===== */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 120, density: { enable: true, area: 1000 } },
            color: { value: ["#a855f7", "#ec4899", "#facc15", "#06b6d4"] },
            opacity: {
              value: 0.4,
              random: true,
              animation: { enable: true, speed: 0.8, minimumValue: 0.15 },
            },
            size: { value: { min: 1, max: 3 }, random: true },
            move: { enable: true, speed: 1, outModes: "out" },
            links: { enable: true, distance: 180, color: "#ffffff", opacity: 0.15, width: 1 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: { distance: 150, links: { opacity: 0.4 } },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* ===== Morphing Nebula Blobs ===== */}
      <div className="absolute top-32 left-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-pulse"></div>
      <div className="absolute bottom-32 right-14 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-1/3 left-1/2 w-48 h-48 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-bounce"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* ===== Section Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-purple-300 font-semibold tracking-widest uppercase text-sm">
            Our Expertise
          </span>
          <h2 className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 mt-3 mb-6 drop-shadow-lg">
            The Future of Innovation
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Cutting-edge services designed to help you lead the market with AI-driven solutions, 
            world-class design, and scalable technology ecosystems.
          </p>
        </motion.div>

        {/* ===== Services Grid ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 relative"
          onMouseMove={handleMouseMove}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              style={{
                transform: `perspective(1200px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
              }}
              whileHover={{
                scale: 1.15,
                rotateZ: 1,
                boxShadow: "0 50px 150px rgba(0,0,0,0.9)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative group p-6 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Animated Outer Glow Border */}
              <div
                className={`absolute -inset-[2px] rounded-3xl bg-gradient-to-tr ${service.gradient} opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700 animate-pulse`}
              ></div>

              {/* Glass Morph Background Distortion */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 backdrop-blur-3xl rounded-3xl group-hover:backdrop-blur-2xl transition-all duration-500"></div>

              {/* Rotating Particle Ring */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className={`absolute w-full h-full border-[2px] border-dashed rounded-full ${service.gradient} opacity-30 blur-sm`}></div>
              </motion.div>

              {/* Floating Icon */}
              <motion.div
                whileHover={{ scale: 1.3, rotate: 10 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className={`mx-auto mb-5 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr ${service.gradient} shadow-2xl relative z-10`}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-purple-200 transition-colors duration-500">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed relative z-10">
                {service.description}
              </p>

              {/* Light Sweep */}
              <motion.div
                className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Spark Particle Burst */}
              <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full blur-3xl bg-white/10 opacity-30 group-hover:opacity-50 transition-all duration-700 -translate-x-1/2 -translate-y-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
      