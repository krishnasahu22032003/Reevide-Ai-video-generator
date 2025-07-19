import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sophia Ray",
    role: "Content Strategist",
    feedback:
      "The AI video output is stunning. We've doubled engagement since using this platform!",
    img: "/images/user1.jpeg",
  },
  {
    name: "Arjun Mehta",
    role: "Educator",
    feedback:
      "Absolutely mind-blowing avatars and voice! Makes education 10x more interactive.",
    img: "/images/user2.jpeg",
  },
  {
    name: "Mila Jensen",
    role: "Marketing Lead",
    feedback:
      "Our campaigns are 5x faster to produce and more effective with AI narration. It's the best in the world!",
    img: "/images/user1.jpeg",
  },
];

const TestimonialSection = () => {
  return (
    <section
      id="company"
      className="relative w-full px-6 md:px-16 py-32 bg-white dark:bg-[#0b0b0b] overflow-hidden"
    >
      {/* Glow Blobs */}
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

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-md transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl hover:border-transparent hover:ring-2 hover:ring-indigo-400/50"
          >
            {/* Gradient aura behind on hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none blur-xl bg-gradient-to-br from-indigo-500/10 via-pink-500/10 to-purple-500/10" />

            <div className="relative z-10">
              <FaQuoteLeft className="text-4xl text-pink-500 dark:text-indigo-400 mb-4 opacity-80" />
              <p className="text-lg text-gray-800 dark:text-gray-300 mb-6 leading-relaxed">
                "{item.feedback}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 min-w-14 min-h-14 rounded-full overflow-hidden border-2 border-pink-400 dark:border-indigo-400 bg-gray-200 dark:bg-gray-700">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    width={56}
                    height={56}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-black dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
