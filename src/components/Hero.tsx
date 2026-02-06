import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [lives, setLives] = useState(0);

  const statsRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    if (!isInView) return;

    const animateValue = (
      setter: React.Dispatch<React.SetStateAction<number>>,
      target: number,
      durationMs: number
    ) => {
      let rafId = 0;
      const start = performance.now();

      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / durationMs, 1);
        const eased = easeOutCubic(progress);
        setter(Math.floor(eased * target));
        if (progress < 1) rafId = requestAnimationFrame(step);
      };

      rafId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafId);
    };

    const cleanups = [
      animateValue(setClients, 120, 1400),
      animateValue(setProjects, 350, 1500),
      animateValue(setLives, 10000, 1700),
    ];

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [isInView]);

  const formatLives = (value: number) =>
    value >= 1000 ? `${(value / 1000).toFixed(0)}k+` : `${value}+`;

  return (
    <section className="relative h-[90vh] sm:h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/hero-bg.jpg"
          alt="Team working in office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Floating glows */}
      <motion.div
        className="absolute top-10 left-5 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-purple-600/30 blur-3xl"
        animate={{ y: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-5 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-orange-500/30 blur-3xl"
        animate={{ y: [0, -15, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-8 flex items-center justify-center sm:justify-start">
        <motion.div
          className="bg-white/10 backdrop-blur-xl p-6 sm:p-10 rounded-3xl w-full max-w-lg sm:max-w-xl shadow-2xl border border-white/20 text-center sm:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Global-Grade Software,
            <br />
            <span className="text-purple-400">Built for Global Impact</span>
          </motion.h1>

          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We craft scalable software solutions that power businesses worldwide.
            Partner with Trovira for efficient and impactful technology.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center sm:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition"
            >
              Start a Project
            </button>
            <a
              href="#services"
              className="px-6 py-3 rounded-lg border border-gray-200 text-gray-100 hover:bg-gray-100/10 transition"
            >
              View Services
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={statsRef}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center sm:justify-start gap-6 sm:gap-10 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div>
              <div className="text-2xl sm:text-3xl font-bold">{clients}+</div>
              <div className="text-sm text-gray-300">Clients</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold">{projects}+</div>
              <div className="text-sm text-gray-300">Projects</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold">
                {formatLives(lives)}
              </div>
              <div className="text-sm text-gray-300">Lives Impacted</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
