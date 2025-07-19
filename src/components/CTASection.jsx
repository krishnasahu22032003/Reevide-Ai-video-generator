import React from "react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden w-full py-32 px-6 md:px-16 bg-white dark:bg-[#0b0b0b] text-black dark:text-white z-10">

      {/* BACKGROUND ANGLED GRADIENT SHAPES */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 opacity-20 dark:opacity-30 blur-[120px] rotate-12" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-500 via-pink-500 to-purple-600 opacity-20 dark:opacity-30 blur-[140px] -rotate-12" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 via-pink-500/5 to-transparent dark:from-white/5 dark:via-indigo-500/10 blur-[200px] rounded-full" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text mb-6 drop-shadow-lg">
          Ready to Transform Your Content with AI?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Build hyper-real videos in minutes. No studios, no actors — just imagination and AI.
        </p>

        {/* CTA BUTTON */}
        <a
          href="/get-started"
          className="relative inline-flex items-center justify-center px-10 py-4 rounded-full border border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold text-lg shadow-xl hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <span className="relative z-10">🚀 Get Started Now</span>
          {/* Glowing ring effect */}
          <span className="absolute inset-0 rounded-full bg-white opacity-10 blur-xl group-hover:opacity-20 transition duration-300"></span>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
