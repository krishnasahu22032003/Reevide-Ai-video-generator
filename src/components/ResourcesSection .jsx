import React from "react";
import { FiBookOpen, FiFileText, FiTrendingUp } from "react-icons/fi";

const resources = [
  {
    title: "How AI Video is Transforming Content Creation",
    category: "Blog",
    icon: <FiBookOpen />,
    image: "/images/resource1.png",
    link: "#",
  },
  {
    title: "Reevid for Education: Case Study",
    category: "Case Study",
    icon: <FiFileText />,
    image: "/images/resource2.png",
    link: "#",
  },
  {
    title: "10 Ways to Use AI Videos for Business Growth",
    category: "Guide",
    icon: <FiTrendingUp />,
    image: "/images/resource3.png",
    link: "#",
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="relative w-full py-28 px-6 md:px-20 bg-white dark:bg-[#0b0b0b] text-black dark:text-white overflow-hidden">
      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-44 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 blur-[140px] opacity-25 z-0 pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
          Explore Our Resources
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
          Dive deep into AI video content, case studies, trends, and actionable guides.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {resources.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="group bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-pink-500/30 hover:scale-[1.03] transition-all duration-300 ease-out relative"
          >
            <img src={item.image} alt={item.title} className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105" />

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 text-sm text-pink-500 dark:text-indigo-400 font-medium mb-2">
                <span className="text-xl">{item.icon}</span>
                <span className="uppercase tracking-wider">{item.category}</span>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white group-hover:text-pink-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 group-hover:underline transition-all">Read more →</p>
            </div>

            {/* Gradient Border Glow */}
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-pink-500/40 group-hover:shadow-[0_0_20px_2px_rgba(255,0,128,0.3)] transition-all duration-300 ease-in-out pointer-events-none" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default ResourcesSection;
