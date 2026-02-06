import { useState } from "react";
import { motion } from "framer-motion";
import { Tag, ShoppingCart } from "lucide-react";

const productData = [
  {
    id: 1,
    name: "AI Analytics Platform",
    description: "Powerful insights driven by artificial intelligence.",
    price: "$299",
    category: "AI",
    image:
      "https://images.unsplash.com/photo-1664575606085-ec88fc1d1651?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Custom ERP System",
    description: "Tailored enterprise resource planning solution.",
    price: "$499",
    category: "Software",
    image:
      "https://images.unsplash.com/photo-1556741533-411cf82e4e2e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Digital Marketing Suite",
    description: "Complete set of marketing automation tools.",
    price: "$199",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Rural Education Portal",
    description: "Empowering education through technology.",
    price: "Free",
    category: "Initiatives",
    image:
      "https://images.unsplash.com/photo-1584697964197-7f41b2a733bb?q=80&w=1000&auto=format&fit=crop",
  },
];

const categories = ["All", "AI", "Software", "Marketing", "Initiatives"];

const Product = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? productData
      : productData.filter((p) => p.category === activeCategory);

  return (
    <section className="relative bg-[#0A0A0A] text-white py-20 px-6 lg:px-20 overflow-hidden">
      {/* ===== Background Gradient Glow ===== */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="relative container mx-auto">
        {/* ===== Section Header ===== */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-purple-500">Products</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our range of innovative products designed to empower
            businesses and communities with cutting-edge technology.
          </p>
        </motion.div>

        {/* ===== Category Filter ===== */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-purple-600/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* ===== Product Grid ===== */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-purple-500/30 transition-shadow group"
            >
              {/* Product Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-purple-600 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <Tag className="w-3 h-3" /> {product.category}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-semibold">
                    {product.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded-full flex items-center gap-2 text-sm"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Buy Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Product;
