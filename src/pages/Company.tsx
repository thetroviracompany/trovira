import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Added for navigation
import Header from "../components/Header";
import Footer from "../components/Footer";

// ===== Images =====
import aboutImage from "../assets/about.png";
import heroBg from "../assets/hero-bg.jpg";
import GD from "../assets/team/gd.png";
import NS from "../assets/team/ns.png";
import AP from "../assets/team/AP.png";
import SM from "../assets/team/SM.png";
import Anurag from "../assets/team/AnuragP.png";

/* ========================================================
   CountUp Component – Animated Counter
======================================================== */
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const CountUp: React.FC<{
  target: number;
  duration?: number;
  suffix?: string;
  formatThousands?: boolean;
}> = ({ target, duration = 1500, suffix = "+", formatThousands = true }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !startedRef.current) {
        startedRef.current = true;
        const startTime = performance.now();

        const step = (now: number) => {
          const elapsed = now - startTime;
          const t = Math.min(elapsed / duration, 1);
          const eased = easeOutCubic(t);
          const current = Math.floor(eased * target);
          setValue(current);
          if (t < 1) rafRef.current = requestAnimationFrame(step);
          else setValue(target);
        };

        rafRef.current = requestAnimationFrame(step);
      }
    });

    observer.observe(node!);
    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  const display =
    formatThousands && value >= 1000 ? value.toLocaleString() : String(value);

  return (
    <span ref={ref as any}>
      {display}
      {suffix}
    </span>
  );
};

/* ========================================================
   TeamCard Component
======================================================== */
const TeamCard = ({
  name,
  role,
  avatar,
}: {
  name: string;
  role: string;
  avatar: string;
}) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300 w-full sm:w-72">
    <img
      src={avatar}
      alt={name}
      className="w-full h-64 object-contain rounded-lg border-4 border-purple-200 mx-auto"
    />
    <h4 className="mt-4 text-lg sm:text-xl font-bold text-gray-800">{name}</h4>
    <p className="text-purple-600 font-medium text-sm sm:text-base">{role}</p>
  </div>
);

/* ========================================================
   Company Page
======================================================== */
const Company = () => {
  const navigate = useNavigate(); // ✅ navigation hook

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Hero Section ===== */}
      <section
        className="relative text-white text-center py-20 sm:py-28"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-5xl font-bold">
            The Trovira Company
          </h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed text-gray-200">
            Building Tech for Global Impact – Delivering scalable and
            cost-effective technology solutions that transform businesses and
            empower communities.
          </p>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section className="max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img
          src={aboutImage}
          alt="About Trovira"
          className="rounded-2xl shadow-lg w-full h-auto"
        />
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-700">
            Who We Are
          </h2>
          <p className="mt-6 text-gray-700 text-sm sm:text-base leading-relaxed">
            At Trovira, we specialize in crafting world-class software
            solutions that solve complex problems and create measurable business
            impact. Inspired by innovation and driven by a passion for
            excellence, our mission is to help organizations navigate the
            digital landscape with confidence and speed.
          </p>
          <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            From enterprise software to AI-powered tools, Trovira has become a
            trusted partner for startups, SMEs, and large corporations seeking
            future-ready solutions.
          </p>
        </div>
      </section>

      {/* ===== Mission, Vision, Values ===== */}
      <section className="bg-purple-50 py-14 sm:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-6">
          {[
            {
              title: "Our Mission",
              text: "To empower businesses with cutting-edge software solutions that accelerate growth, innovation, and global impact.",
            },
            {
              title: "Our Vision",
              text: "To be a global leader in technology services, transforming industries through sustainable, intelligent digital ecosystems.",
            },
            {
              title: "Our Values",
              text: "Innovation, integrity, and a customer-first approach are at the heart of everything we do at Trovira.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md text-center hover:shadow-lg transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-purple-700">
                {card.title}
              </h3>
              <p className="mt-4 text-gray-600 text-sm sm:text-base">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Key Metrics ===== */}
      <section className="py-14 sm:py-16 text-center bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-700">
          Our Global Reach
        </h2>
        <div className="mt-10 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 px-4">
          {[
            { value: 120, label: "Clients Worldwide" },
            { value: 350, label: "Projects Completed" },
            { value: 10000, label: "Lives Impacted" },
            { value: 15, label: "Countries Served" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl sm:text-4xl font-bold text-purple-700">
                <CountUp target={stat.value} />
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="bg-gray-100 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-700">
            What We Offer
          </h2>
          <p className="mt-4 text-gray-700 text-sm sm:text-base">
            Our services are designed to support businesses at every stage of
            their digital journey.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {[
              {
                title: "Custom Software",
                text: "Scalable solutions for enterprises and startups, tailored to meet unique business needs.",
              },
              {
                title: "AI & Automation",
                text: "Harness the power of artificial intelligence to streamline processes and boost efficiency.",
              },
              {
                title: "Cloud Solutions",
                text: "Secure, flexible, and future-proof cloud platforms to support your growing business.",
              },
            ].map((srv, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-purple-700">
                  {srv.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm sm:text-base">
                  {srv.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Team Section ===== */}
      <section className="py-16 sm:py-20 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-10 sm:mb-12">
            Meet the <span className="text-indigo-600">Team</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
            <TeamCard
              name="Gorakhnath Dongare"
              role="Founder & CEO"
              avatar={GD}
            />
            <TeamCard
              name="Nilesh Sadgir"
              role="MD"
              avatar={NS}
            />
            <TeamCard
            name = "Abhishek Patil"
            role = "CTO"
            avatar={AP}
             />
             <TeamCard
             name = "Samiksha More"
             role="IT Head & Software Engineer"
             avatar={SM}
             />
             <TeamCard
             name = "Anurag Phand"
             role = "Accountant"
             avatar={Anurag}
             />
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="py-16 sm:py-20 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-700">
          Ready to Collaborate?
        </h2>
        <p className="mt-4 text-gray-700 text-sm sm:text-base">
          Let's create solutions that transform industries and make a global
          impact.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="mt-6 inline-block bg-purple-700 text-white px-8 py-3 rounded-xl shadow-md hover:bg-purple-800 transition text-sm sm:text-base"
        >
          Contact Us
        </button>
      </section>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
};

export default Company;
