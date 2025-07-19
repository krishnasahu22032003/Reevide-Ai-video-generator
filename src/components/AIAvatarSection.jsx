import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const avatars = [
  { name: "Luna", role: "AI Host", img: "/images/avatar1.jpg" },
  { name: "Kai", role: "AI Influencer", img: "/images/avatar2.jpg" },
  { name: "Nova", role: "AI Teacher", img: "/images/avatar3.jpg" },
  { name: "Eli", role: "Virtual Assistant", img: "/images/avatar4.jpg" },
  { name: "Riven", role: "AI Narrator", img: "/images/avatar5.jpg" },
  { name: "Zara", role: "Healthcare AI", img: "/images/avatar6.jpg" },
  { name: "Orion", role: "Finance Advisor", img: "/images/avatar7.jpg" },
  { name: "Mira", role: "AI Coach", img: "/images/avatar8.jpg" },
];

const AIAvatarSection = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const scrollAmount = 360;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full px-6 md:px-16 py-28 bg-white dark:bg-[#0b0b0b] relative overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[140%] h-[280px] bg-gradient-to-r from-indigo-300 via-pink-300 to-purple-300 dark:from-indigo-600 dark:via-pink-600 dark:to-purple-600 blur-[120px] opacity-20 dark:opacity-30 z-0" />

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
          Meet Our AI Avatars
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
          Discover hyper-realistic avatars ready to represent your brand in any language or role.
        </p>
      </div>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute top-[50%] left-4 -translate-y-1/2 z-20 p-4 bg-white dark:bg-[#1b1b1b] rounded-full shadow-lg hover:scale-110 transition-all cursor-pointer hover:bg-pink-100 dark:hover:bg-pink-400/20"
      >
        <FaChevronLeft className="text-gray-700 dark:text-white text-xl" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute top-[50%] right-4 -translate-y-1/2 z-20 p-4 bg-white dark:bg-[#1b1b1b] rounded-full shadow-lg hover:scale-110 transition-all cursor-pointer hover:bg-pink-100 dark:hover:bg-pink-400/20"
      >
        <FaChevronRight className="text-gray-700 dark:text-white text-xl" />
      </button>

      {/* Avatar Cards */}
      <div
        ref={scrollRef}
        className="relative z-10 flex gap-8 overflow-x-auto px-2 py-6 scroll-smooth no-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="min-w-[320px] bg-white dark:bg-[#111111] rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl hover:shadow-pink-500/20 hover:scale-[1.05] transition-all duration-300 flex flex-col items-center text-center p-6 group"
          >
            <div className="relative w-full h-[320px] overflow-hidden rounded-2xl">
              <img
                src={avatar.img}
                alt={avatar.name}
                className="w-full h-full object-cover rounded-2xl border-4 border-transparent group-hover:border-pink-500 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-pink-600 dark:text-indigo-400">
              {avatar.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{avatar.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AIAvatarSection;
