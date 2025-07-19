import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sophia Ray",
    role: "Content Strategist",
    feedback:
      "The AI video output is stunning. We've doubled engagement since using this platform!",
    img: "/images/user1.jpg",
  },
  {
    name: "Arjun Mehta",
    role: "Educator",
    feedback:
      "Absolutely mind-blowing avatars and voice! Makes education 10x more interactive.",
    img: "/images/user2.jpg",
  },
  {
    name: "Mila Jensen",
    role: "Marketing Lead",
    feedback:
      "Our campaigns are 5x faster to produce and more effective with AI narration.",
    img: "/images/user3.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="relative w-full px-6 md:px-16 py-32 bg-white dark:bg-[#0b0b0b] overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-pink-400 opacity-20 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-indigo-400 opacity-20 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
          What People Are Saying
        </h2>
        <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
          Hear directly from creators and brands using our AI video platform.
        </p>
      </div>

      {/* Testimonial Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
          >
            {/* Quote icon */}
            <FaQuoteLeft className="text-4xl text-pink-500 dark:text-indigo-400 mb-4 opacity-80" />

            {/* Feedback */}
            <p className="text-lg text-gray-800 dark:text-gray-300 mb-6 leading-relaxed">
              "{item.feedback}"
            </p>

            {/* User Info */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-pink-400 bg-gray-200 dark:bg-gray-700">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div>
                <h4 className="font-semibold text-black dark:text-white">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
