import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  PlayCircle,
} from "lucide-react";

// ===== Gallery Data =====
const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    title: "Community Empowerment",
    category: "Social Impact",
    description: "Rural community members collaborating to create solutions.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1504691342899-8d5f6a74f6cf?auto=format&fit=crop&w=1200&q=80",
    title: "Rural Innovation Hub",
    category: "Technology",
    description: "A hub fostering innovation through rural talent.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1581092919535-7146c7d5c6da?auto=format&fit=crop&w=1200&q=80",
    title: "Digital Training",
    category: "Education",
    description: "Students learning cutting-edge tech skills remotely.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=1200&q=80",
    title: "AI-driven Solutions",
    category: "Technology",
    description: "Implementing AI solutions to improve rural livelihoods.",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    title: "Tech Mentorship",
    category: "Education",
    description: "Mentors guiding rural talent in real-world projects.",
  },
  {
    id: 6,
    src: "https://videos.pexels.com/video-files/3104306/3104306-hd_1280_720_30fps.mp4",
    title: "Global Collaboration",
    category: "Social Impact",
    description: "Collaborative projects making a global difference.",
    type: "video",
  },
];

const categories = ["All", "Social Impact", "Technology", "Education"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  // Auto-play for lightbox
  useEffect(() => {
    if (lightboxIndex === null || !isPlaying) return;
    const interval = setInterval(() => {
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % filteredItems.length : 0
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [lightboxIndex, isPlaying, filteredItems.length]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsPlaying(true);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const showNextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const showPrevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (prev) => (prev! - 1 + filteredItems.length) % filteredItems.length
      );
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === "ArrowRight") showNextImage();
        if (e.key === "ArrowLeft") showPrevImage();
        if (e.key === "Escape") closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, showNextImage, showPrevImage]);

  return (
    <section className="relative py-28 bg-gray-50 overflow-hidden">
      {/* ===== Hero Banner ===== */}
      <div className="relative text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-gray-900"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
            Gallery
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-gray-600 max-w-xl mx-auto text-lg"
        >
          Explore impactful projects, transformative technology, and inspiring
          stories from our community.
        </motion.p>
      </div>

      {/* ===== Category Filter ===== */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            whileHover={{ scale: 1.05 }}
            className={`px-5 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100 border-gray-200"
            }`}
          >
            <Filter className="w-4 h-4" />
            {cat}
          </motion.button>
        ))}
      </div>

      {/* ===== Masonry Grid ===== */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            onClick={() => openLightbox(index)}
          >
            {item.type === "video" ? (
              <div className="relative">
                <video
                  src={item.src}
                  className="w-full h-auto rounded-3xl"
                  muted
                  loop
                  autoPlay
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-14 h-14 text-white" />
                </div>
              </div>
            ) : (
              <motion.img
                src={item.src}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.category}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== Lightbox ===== */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {filteredItems[lightboxIndex].type === "video" ? (
                <video
                  src={filteredItems[lightboxIndex].src}
                  controls
                  autoPlay
                  className="w-full h-[70vh] object-cover rounded-2xl"
                />
              ) : (
                <img
                  src={filteredItems[lightboxIndex].src}
                  alt={filteredItems[lightboxIndex].title}
                  className="w-full h-[70vh] object-cover rounded-2xl"
                />
              )}

              {/* Navigation */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              <button
                onClick={showPrevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={showNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="text-xl font-semibold">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-sm opacity-80">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
