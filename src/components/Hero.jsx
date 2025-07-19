import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiFramer,
  SiOpenai,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

const techItems = [
  { icon: SiReact, name: "React", color: "text-blue-500" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-white dark:text-white" },
  { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
  { icon: SiFramer, name: "Framer", color: "text-pink-500" },
  { icon: SiOpenai, name: "OpenAI", color: "text-green-500" },
  { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
  { icon: SiVite, name: "Vite", color: "text-purple-500" },
];

const Hero = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () =>
      document.documentElement.classList.contains("dark");
    setIsDark(checkDark());
    const observer = new MutationObserver(() => setIsDark(checkDark()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section  id="home" className="w-full min-h-screen flex items-center justify-center relative overflow-hidden px-6 bg-white dark:bg-gradient-to-b dark:from-[#0e0e0e] dark:to-[#151515] transition-colors">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 z-10">
        {/* Left Text */}
        <div className="flex flex-col justify-start items-start gap-3 text-left pt-6 md:pt-12 md:pl-6">
          {/* Glowing Dot + Tagline */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-blue-500 shadow-md animate-ping-slow" />
            <p className="text-sm uppercase tracking-wide font-semibold text-black dark:text-blue-400">
              2025 #1 Fastest Growing Product by G2
            </p>
          </div>

          {/* Heading and sublines */}
          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
            AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Video Generator</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-300 text-sm md:text-lg -mt-2">
            Create cinematic videos
          </p>

          {/* Paragraph */}
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-lg">
            Just describe your idea or upload your image. Our AI video generator writes the script,
            voices the lines, and edits the entire video. Whether it’s a TikTok ad, product demo,
            explainer, or tutorial — turn any text, image, or audio into a complete video in minutes.
          </p>

          {/* CTA Button */}
          <button className="mt-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-blue-500 transition shadow-lg shadow-blue-500/30">
            Get Started for Free
          </button>
        </div>

        <div className="flex justify-center items-center relative">
          <video
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-xl w-full h-auto max-h-[900px] shadow-xl relative z-10"
          />
{isDark && (
  <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-600 blur-[80px] opacity-70 z-[-1]" />
)}
        </div>
      </div>

      {/* Bottom Tech Bar */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-30">
        <div className="relative w-full">
          <div className="absolute inset-0 dark:bg-transparent bg-gradient-to-r from-transparent via-gray-100/5 to-transparent backdrop-blur-2xl rounded-t-xl pointer-events-none" />
          <motion.div
            className="flex items-center gap-28 py-5 px-12 whitespace-nowrap relative z-10"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
          >
            {Array.from({ length: 3 }).flatMap((_, i) =>
              techItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`${i}-${index}`}
                    className="flex flex-col items-center transition-all duration-300 opacity-60 hover:opacity-100 group cursor-pointer"
                  >
                    <Icon
                      className={`text-4xl transition-all duration-300 dark:bg-transparent bg-white text-gray-400 group-hover:${item.color}`}
                    />
                    <span
                      className={`text-sm mt-1 text-gray-400 group-hover:${item.color}`}
                    >
                      {item.name}
                    </span>
                  </div>
                );
              })
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
