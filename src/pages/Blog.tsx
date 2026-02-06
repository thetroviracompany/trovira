import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog: React.FC = () => {
  const blogs = [
    {
      id: 1,
      title: "Empowering Rural Talent through Technology",
      date: "September 15, 2025",
      author: "Admin",
      excerpt:
        "Discover how Trovira is building scalable tech solutions to uplift rural communities and create opportunities for growth.",
      image: "https://source.unsplash.com/600x400/?technology,rural",
    },
    {
      id: 2,
      title: "AI in Digital Marketing",
      date: "September 12, 2025",
      author: "Team Trovira",
      excerpt:
        "Learn how AI is revolutionizing digital marketing and helping businesses make data-driven decisions for success.",
      image: "https://source.unsplash.com/600x400/?ai,marketing",
    },
    {
      id: 3,
      title: "Building a Strong Tech Community",
      date: "September 8, 2025",
      author: "Trovira Insights",
      excerpt:
        "Community building plays a vital role in fostering innovation and collaboration among tech enthusiasts worldwide.",
      image: "https://source.unsplash.com/600x400/?community,technology",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-white">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Page Header ===== */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 py-20 text-center">
        <h1 className="text-4xl font-bold">Our Blog</h1>
        <p className="mt-3 text-gray-200">
          Insights, updates, and stories from the Trovira team
        </p>
      </section>

      {/* ===== Blog Posts ===== */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#1a1a1f] rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/40 transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-gray-400">
                  {blog.date} • {blog.author}
                </p>
                <h2 className="mt-2 text-xl font-semibold">{blog.title}</h2>
                <p className="mt-3 text-gray-300 text-sm">{blog.excerpt}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="mt-4 inline-block text-purple-400 hover:text-purple-300 transition font-medium"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
};

export default Blog;
