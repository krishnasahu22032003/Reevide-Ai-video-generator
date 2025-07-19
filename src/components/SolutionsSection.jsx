import React from "react";
import {
  FaBuilding,
  FaChalkboardTeacher,
  FaRocket,
  FaGlobe,
  FaUserTie,
  FaMicroscope,
} from "react-icons/fa";

const solutions = [
  {
    title: "For Businesses",
    icon: <FaBuilding size={28} />,
    description: "AI videos for training, onboarding, and corporate communication.",
  },
  {
    title: "For Educators",
    icon: <FaChalkboardTeacher size={28} />,
    description: "Create engaging explainer videos for students in minutes.",
  },
  {
    title: "For Creators",
    icon: <FaRocket size={28} />,
    description: "Produce viral content for YouTube, Instagram, and TikTok effortlessly.",
  },
  {
    title: "For Global Teams",
    icon: <FaGlobe size={28} />,
    description: "Generate multi-language videos to reach diverse global audiences.",
  },
  {
    title: "For Sales & Marketing",
    icon: <FaUserTie size={28} />,
    description: "Make personalized video pitches and product demos at scale.",
  },
  {
    title: "For Research & Science",
    icon: <FaMicroscope size={28} />,
    description: "Simplify complex topics using visual storytelling powered by AI.",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="relative w-full py-24 px-6 md:px-20 bg-white dark:bg-[#0b0b0b] text-black dark:text-white overflow-hidden">
      {/* Top Gradient Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-40 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 blur-[120px] opacity-30 z-0 pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
          Solutions for Every Industry
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
          Reevid helps businesses, creators, and educators craft AI-powered videos that inform, inspire, and engage — no production team needed.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {solutions.map((item, index) => (
          <div
            key={index}
            className="group bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-xl hover:scale-[1.025] hover:border-pink-400 transition-all duration-300 ease-out"
          >
            <div className="text-indigo-600 dark:text-pink-400 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
