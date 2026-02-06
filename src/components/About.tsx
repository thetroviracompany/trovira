import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import aboutImgImport from "../assets/about.png";
import GD from "../assets/GD.png";
import NS from "../assets/NS.png";
import AP from "../assets/AP.png";
import SM from "../assets/SM.png";
import Anurag from "../assets/AnuragP.png";

/* -----------------------
   Utility Helpers
----------------------- */
const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/* -----------------------
   Particle Background
----------------------- */
const ParticleBackground: React.FC<{ containerRef?: React.RefObject<HTMLElement> }> = ({ containerRef }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number; r: number }[]>([]);
  const prefersReduced = useReducedMotion();
  const [active, setActive] = useState(!prefersReduced);

  useEffect(() => {
    if (prefersReduced) {
      setActive(false);
      return;
    }
    const el = containerRef?.current ?? canvasRef.current?.parentElement;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => setActive(entries[0].isIntersecting),
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [containerRef, prefersReduced]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let width = 0,
      height = 0;

    const resize = () => {
      width = canvas.clientWidth || window.innerWidth;
      height = canvas.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    let count = Math.round((width * height) / 60000 * 60);
    count = clamp(count, 20, 160);
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: 1 + Math.random() * 2.5,
    }));

    let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min(32, now - last);
      last = now;
      if (active) {
        ctx.clearRect(0, 0, width, height);
        ctx.globalCompositeOperation = "lighter";
        for (const p of particlesRef.current) {
          p.x += p.vx * (dt / 16);
          p.y += p.vy * (dt / 16);
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;

          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
          g.addColorStop(0, "rgba(245,158,11,0.9)");
          g.addColorStop(0.18, "rgba(147,51,234,0.6)");
          g.addColorStop(1, "rgba(109,40,217,0.02)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    window.addEventListener("resize", resize);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [active]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none -z-10" />;
};

/* -----------------------
   Animated Counter
----------------------- */
const AnimatedCounter: React.FC<{ value: number; label: string; start?: boolean; duration?: number }> = ({
  value,
  label,
  start = true,
  duration = 1500,
}) => {
  const prefersReduced = useReducedMotion();
  const [display, setDisplay] = useState(prefersReduced ? value : 0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReduced) {
      setDisplay(value);
      return;
    }
    if (!start) {
      setDisplay(0);
      return;
    }

    const startTime = performance.now();
    const step = (now: number) => {
      const t = clamp((now - startTime) / duration, 0, 1);
      const eased = easeOutCubic(t);
      setDisplay(Math.round(eased * value));
      if (t < 1) rafRef.current = requestAnimationFrame(step);
      else if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [value, start, duration, prefersReduced]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-accent">
        {display}
        {display === value && value > 0 ? "+" : ""}
      </div>
      <div className="mt-1 text-sm text-gray-300">{label}</div>
    </div>
  );
};

/* -----------------------
   Team Card
----------------------- */
const TeamCard: React.FC<{ name: string; role: string; avatar?: string }> = ({ name, role, avatar }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center gap-3 text-center"
  >
    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-accent">
      <img
        src={avatar ?? "/Trovira.png"}
        alt={name}
        className="w-full h-full object-contain"
        loading="lazy"
        onError={(e) => {
          const t = e.currentTarget as HTMLImageElement;
          t.onerror = null;
          t.src = "/Trovira.png";
        }}
      />
    </div>
    <div className="font-semibold text-white">{name}</div>
    <div className="text-sm text-gray-300">{role}</div>
  </motion.article>
);

/* -----------------------
   Timeline Step
----------------------- */
const TimelineStep: React.FC<{ title: string; description: string; year: string; index: number }> = ({
  title,
  description,
  year,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="relative pl-8 border-l-4 border-accent py-4"
  >
    <span className="absolute -left-4 top-4 w-6 h-6 rounded-full bg-accent border-4 border-black/30" />
    <div className="font-semibold text-lg text-white">{title}</div>
    <div className="text-sm text-gray-300 mt-1">{description}</div>
    <div className="mt-2 text-xs text-gray-500">{year}</div>
  </motion.div>
);

/* -----------------------
   About Section
----------------------- */
const About: React.FC = () => {
  const aboutImg = (aboutImgImport as string) || "/about.jpg";
  const containerRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver((entries) => setInView(entries[0].isIntersecting), { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-dark via-gray-900 to-black text-white"
    >
      <ParticleBackground containerRef={containerRef} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-16 sm:space-y-20">
        {/* ---------------- Hero ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              About <span className="text-accent">Trovira</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              At <span className="text-accent font-semibold">Trovira</span>, we combine craft, design, and engineering to
              build delightful, reliable products.
            </p>
            <p className="text-sm text-gray-400">
              Our teams are distributed, cross-functional, and obsessed with delivering high-impact features quickly and
              safely.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-3 rounded-xl bg-accent text-black font-semibold shadow hover:scale-105 transition-transform"
              >
                Get In Touch
              </button>
              <a
                href="#services"
                className="px-6 py-3 rounded-xl border border-white/10 text-white/90 hover:bg-white/10 transition text-center"
              >
                Our Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10"
          >
            <img src={aboutImg} alt="About Trovira" className="w-full h-64 sm:h-80 md:h-[420px] object-cover" />
          </motion.div>
        </div>

        {/* ---------------- Stats ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl">
              <div className="text-sm text-gray-300">Why choose us</div>
              <div className="text-xs text-gray-400 mt-1">Fast, secure, and designed for scale</div>
            </div>
            <div className="bg-white/6 p-6 rounded-2xl">
              <AnimatedCounter value={1320} label="Happy Clients" start={inView} />
            </div>
          </div>

          <div className="bg-gradient-to-b from-black/30 to-black/10 p-6 rounded-2xl">
            <div className="text-sm text-gray-300">Our impact</div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { val: "99%", label: "Satisfaction" },
                { val: "24/7", label: "Support" },
                { val: "+120", label: "Integrations" },
                { val: "4.9", label: "Avg Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-accent">{stat.val}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------- Team ---------------- */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Meet the <span className="text-accent">Team</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamCard name="Gorakhnath Dongare" role="Founder & CEO" avatar={GD} />
            <TeamCard name="Nilesh Sadgir" role="MD" avatar={NS} />
            <TeamCard name="Abhishek Patil" role="CTO" avatar={AP}/>
            <TeamCard name="Samiksha More" role = "IT Head & Software Engineer" avatar={SM} />
            <TeamCard name="Anurag Phand" role = "Accountant" avatar={Anurag} />
          </div>
        </div>

        {/* ---------------- Timeline ---------------- */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Our <span className="text-accent">Journey</span>
          </h3>
          <div className="grid grid-cols-1 gap-4 max-w-3xl">
            {[
              { title: "Founded", desc: "Trovira was founded with a mission to innovate and deliver excellence.", year: "2025" },
              { title: "First Product Launch", desc: "Our first product gained traction with early adopters.", year: "2025" },
              { title: "Scale & Growth", desc: "Scaled teams, processes, and launched enterprise integrations.", year: "2025" },
              { title: "Future", desc: "Continuing to expand the platform and partnerships.", year: "2025" },
            ].map((step, i) => (
              <TimelineStep key={i} index={i} title={step.title} description={step.desc} year={step.year} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
