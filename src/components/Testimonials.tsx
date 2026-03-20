import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "CEO, TechVision",
    feedback:
      "BaapCompany helped us scale our business with their incredible SaaS solutions. Their team is highly professional and supportive!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    role: "Founder, FitLife",
    feedback:
      "Their AI automation tools streamlined our workflow, saving us countless hours every week. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohit Mehta",
    role: "CMO, Growthify",
    feedback:
      "The web and mobile app development team at BaapCompany is simply top-notch. Our project was delivered ahead of schedule.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Sonia Patel",
    role: "COO, DigiMart",
    feedback:
      "Thanks to BaapCompany, our e-commerce platform is now lightning-fast and user-friendly. Amazing work!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="relative py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white overflow-hidden"
    >
      {/* ===== Floating Background Glows ===== */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-56 h-56 bg-indigo-500 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-purple-400">Clients</span> Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from businesses and leaders who have partnered with us to drive
            digital innovation and growth.
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:border-purple-500 transition-all shadow-lg hover:shadow-purple-500/20"
              >
                {/* Client Image */}
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 mx-auto rounded-full border-4 border-purple-500/30 mb-4 object-cover"
                  whileHover={{ scale: 1.05 }}
                />

                {/* Feedback */}
                <p className="text-gray-300 italic mb-4 text-sm leading-relaxed">
                  "{testimonial.feedback}"
                </p>

                {/* Name & Role */}
                <h3 className="text-lg font-semibold text-white">
                  {testimonial.name}
                </h3>
                <span className="text-sm text-gray-400">
                  {testimonial.role}
                </span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
