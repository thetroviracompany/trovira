import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Blog Data (can later be fetched from an API)
  const blogs = [
    {
      id: "1",
      title: "Empowering Rural Talent through Technology",
      date: "September 15, 2025",
      author: "Admin",
      image: "https://source.unsplash.com/1200x600/?technology,rural",
      content: `
        At Trovira, our mission is to bridge the digital divide and empower rural communities
        through innovative technology solutions. We believe in harnessing the potential of rural talent,
        creating opportunities for growth, and fostering sustainable development.

        Our initiatives focus on upskilling individuals, providing access to modern tools,
        and building scalable platforms that solve real-world problems.

        Together, we can drive innovation that benefits everyone, everywhere.
      `,
    },
    {
      id: "2",
      title: "AI in Digital Marketing",
      date: "September 12, 2025",
      author: "Team Trovira",
      image: "https://source.unsplash.com/1200x600/?ai,marketing",
      content: `
        Artificial Intelligence is transforming digital marketing by enabling businesses to make
        data-driven decisions, optimize campaigns, and deliver personalized customer experiences.

        At Trovira, we integrate AI tools into marketing strategies to help our clients achieve
        measurable results and stay ahead of the competition.
      `,
    },
    {
      id: "3",
      title: "Building a Strong Tech Community",
      date: "September 8, 2025",
      author: "Trovira Insights",
      image: "https://source.unsplash.com/1200x600/?community,technology",
      content: `
        A strong tech community is the backbone of innovation. Through collaboration and shared
        knowledge, we can solve complex challenges and drive progress.

        Trovira is committed to fostering a thriving ecosystem where developers, entrepreneurs,
        and creators can connect, learn, and grow together.
      `,
    },
  ];

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-white">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-lg text-gray-400">Blog post not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-white">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Blog Banner ===== */}
      <section className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-72 object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
            {blog.title}
          </h1>
          <p className="mt-3 text-gray-300 text-sm">
            {blog.date} • {blog.author}
          </p>
        </div>
      </section>

      {/* ===== Blog Content ===== */}
      <main className="flex-grow max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          {blog.content.split("\n\n").map((para, idx) => (
            <p key={idx} className="mb-6 text-gray-300 leading-relaxed">
              {para}
            </p>
          ))}
        </motion.div>

        {/* Back to Blog Button */}
        <div className="mt-10">
          <Link
            to="/blog"
            className="inline-block px-6 py-2 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-white font-medium"
          >
            ← Back to Blog
          </Link>
        </div>
      </main>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
};

export default BlogDetails;
