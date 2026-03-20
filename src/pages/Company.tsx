import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Images
import aboutImage from "../assets/about.png";
import heroBg from "../assets/hero-bg.jpg";
import GD from "../assets/team/gd.png";
import NS from "../assets/team/ns.png";
import SG from "../assets/team/SG.jpeg";

/* ---------------------
  CountUp Component
  - Animates from 0 -> target when element scrolls into view
  - Uses requestAnimationFrame + easing
--------------------- */
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const CountUp: React.FC<{
  target: number;
  duration?: number; // ms
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

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !startedRef.current) {
        startedRef.current = true;
        const startTime = performance.now();

        const step = (now: number) => {
          const elapsed = now - startTime;
          const t = Math.min(elapsed / duration, 1);
          const eased = easeOutCubic(t);
          const current = Math.floor(eased * target);
          setValue(current);
          if (t < 1) {
            rafRef.current = requestAnimationFrame(step);
          } else {
            // ensure final value
            setValue(target);
            rafRef.current = null;
          }
        };

        rafRef.current = requestAnimationFrame(step);
      }
    };

    const obs = new IntersectionObserver(onIntersect, { threshold: 0.2 });
    obs.observe(node);

    return () => {
      obs.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [target, duration]);

  const display =
    formatThousands && value >= 1000 ? value.toLocaleString() : String(value);

  return (
    <span ref={ref as any}>
      {display}
      {value === target && suffix ? suffix : value !== target && suffix ? "" : suffix}
    </span>
  );
};

/* ---------------------
  Team Card Component
--------------------- */
const TeamCard = ({
  name,
  role,
  avatar,
}: {
  name: string;
  role: string;
  avatar: string;
}) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition duration-300 max-w-xs">
    <img
      src={avatar}
      alt={name}
      className="w-full h-72 mx-auto object-contain rounded-lg border-4 border-purple-200 shadow-md"
    />
    <h4 className="mt-4 text-xl font-bold text-gray-800">{name}</h4>
    <p className="text-purple-600 font-medium">{role}</p>
  </div>
);

/* ---------------------
  Company Page
--------------------- */
const Company = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-20 text-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/60 absolute inset-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold">The Trovira Company</h1>
          <p className="mt-6 text-lg leading-relaxed">
            Building Tech for Global Impact – Delivering scalable and
            cost-effective technology solutions that transform businesses and
            empower communities.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={aboutImage}
          alt="About Trovira"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-purple-700">Who We Are</h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            At Trovira, we specialize in crafting world-class software
            solutions that solve complex problems and create measurable business
            impact. Inspired by innovation and driven by a passion for
            excellence, our mission is to help organizations navigate the
            digital landscape with confidence and speed.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            From enterprise software to AI-powered tools, Trovira has become a
            trusted partner for startups, SMEs, and large corporations seeking
            future-ready solutions.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          <div className="p-6 bg-white rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-semibold text-purple-700">
              Our Mission
            </h3>
            <p className="mt-4 text-gray-600">
              To empower businesses with cutting-edge software solutions that
              accelerate growth, innovation, and global impact.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-semibold text-purple-700">
              Our Vision
            </h3>
            <p className="mt-4 text-gray-600">
              To be a global leader in technology services, transforming
              industries through sustainable, intelligent digital ecosystems.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-semibold text-purple-700">
              Our Values
            </h3>
            <p className="mt-4 text-gray-600">
              Innovation, integrity, and a customer-first approach are at the
              heart of everything we do at Trovira.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Key Metrics (Animated) ===== */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-3xl font-bold text-purple-700">Our Global Reach</h2>
        <div className="mt-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-4xl font-bold text-purple-700">
              <CountUp target={120} duration={1400} suffix="+" />
            </h3>
            <p className="text-gray-600">Clients Worldwide</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-700">
              <CountUp target={350} duration={1500} suffix="+" />
            </h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-700">
              <CountUp target={10000} duration={1700} suffix="+" />
            </h3>
            <p className="text-gray-600">Lives Impacted</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-700">
              <CountUp target={15} duration={1200} suffix="+" />
            </h3>
            <p className="text-gray-600">Countries Served</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-purple-700">What We Offer</h2>
          <p className="mt-4 text-gray-700">
            Our services are designed to support businesses at every stage of
            their digital journey.
          </p>
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-purple-700">
                Custom Software
              </h3>
              <p className="mt-3 text-gray-600">
                Scalable solutions for enterprises and startups, tailored to
                meet unique business needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-purple-700">
                AI & Automation
              </h3>
              <p className="mt-3 text-gray-600">
                Harness the power of artificial intelligence to streamline
                processes and boost efficiency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-purple-700">
                Cloud Solutions
              </h3>
              <p className="mt-3 text-gray-600">
                Secure, flexible, and future-proof cloud platforms to support
                your growing business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-purple-700 mb-12">
            Meet the <span className="text-indigo-600">Team</span>
          </h2>
          <div className="flex justify-center gap-16 flex-wrap">
            <TeamCard
              name="Gorakhnath Dongare"
              role="Founder & CEO"
              avatar={GD}
            />
            <TeamCard
              name="Nilesh Sadgir"
              role="Co-Founder & COO"
              avatar={NS}
            />
            <TeamCard
              name="Sanket Gulave"
              role="CTO"
              avatar={SG}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-purple-700">
          Ready to Collaborate?
        </h2>
        <p className="mt-4 text-gray-700">
          Let's create solutions that transform industries and make a global
          impact.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-purple-800 transition"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Company;
