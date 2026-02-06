import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// ===== Import local images =====
import aiAutomation from "../assets/AI Automation.jpg";
import webDevelopment from "../assets/web development.avif";
import mobileApps from "../assets/Mobile Apps.webp";
import digitalStorefront from "../assets/Digital Storefront.jpg";
import cloudSolutions from "../assets/Cloud Solutions.png";
import businessGrowth from "../assets/Business Growth.jpg";

// ===== Gallery Items =====
const galleryItems = [
  {
    id: 1,
    title: "AI Automation",
    image: aiAutomation,
  },
  {
    id: 2,
    title: "Web Development",
    image: webDevelopment,
  },
  {
    id: 3,
    title: "Mobile Apps",
    image: mobileApps,
  },
  {
    id: 4,
    title: "Digital Storefront",
    image: digitalStorefront,
  },
  {
    id: 5,
    title: "Cloud Solutions",
    image: cloudSolutions,
  },
  {
    id: 6,
    title: "Business Growth",
    image: businessGrowth,
  },
];

/* =============================
  AI-Generated Background Canvas
============================= */
const AIParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: { x: number; y: number; dx: number; dy: number }[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        dx: (Math.random() - 0.5) * 1.2,
        dy: (Math.random() - 0.5) * 1.2,
      });
    }

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(109,40,217,0.8)";
        ctx.fill();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${1 - distance / 150})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

/* =============================
  Main Gallery Component
============================= */
const Gallery: React.FC = () => {
  return (
    <section
      id="gallery"
      className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden"
    >
      {/* AI Particle Background */}
      <AIParticleBackground />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-5xl font-extrabold text-center text-white mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Creative Gallery
        </motion.h2>
        <motion.p
          className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Explore our work powered by cutting-edge innovation and technology.
        </motion.p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group overflow-hidden rounded-xl shadow-xl border border-gray-800 bg-gray-900/60 backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
