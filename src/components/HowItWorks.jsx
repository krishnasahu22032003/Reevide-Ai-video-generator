import React from "react";
import { FaUpload, FaUserAstronaut, FaMagic, FaVideo, FaShareAlt } from "react-icons/fa";

const steps = [
  {
    title: "Upload Your Script",
    description: "Start by uploading your script or pasting your message. Our system supports multiple languages.",
    icon: <FaUpload className="text-pink-500 text-3xl" />,
  },
  {
    title: "Choose an AI Avatar",
    description: "Pick from ultra-realistic avatars tailored to fit your brand or personality.",
    icon: <FaUserAstronaut className="text-indigo-500 text-3xl" />,
  },
  {
    title: "Customize & Generate",
    description: "Select voice, style, tone, and background. Then let our AI do its magic.",
    icon: <FaMagic className="text-purple-500 text-3xl" />,
  },
  {
    title: "Get Your Video",
    description: "In seconds, receive a stunning high-quality AI-generated video ready to use.",
    icon: <FaVideo className="text-blue-500 text-3xl" />,
  },
  {
    title: "Download or Share",
    description: "Easily download your video or share it directly across platforms.",
    icon: <FaShareAlt className="text-green-500 text-3xl" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full px-6 md:px-20 py-28 bg-[#f9f9f9] dark:bg-[#0c0c0c] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[120%] h-72 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 dark:from-pink-500 dark:via-purple-600 dark:to-indigo-500 blur-[140px] opacity-20 dark:opacity-30 z-0" />

      <div className="relative z-10 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
          Behind the Scenes: How It Works
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          See how Reevid transforms your script into a stunning AI-generated video in just a few steps.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/10 p-6 rounded-3xl shadow-xl hover:shadow-pink-500/20 transition-all duration-300 group text-center"
          >
            <div className="mb-4 flex justify-center items-center">
              <div className="w-16 h-16 bg-gradient-to-tr from-white/30 dark:from-black/30 to-pink-500/30 rounded-full flex justify-center items-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {step.description}
            </p>
            {/* Connector line for flow */}
            {index < steps.length - 1 && (
              <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 hidden lg:block">
                <div className="w-8 h-1 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
