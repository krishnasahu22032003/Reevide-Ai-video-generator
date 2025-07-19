import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaGlobe,
  FaDiscord,
} from "react-icons/fa";
import { SiReact, SiOpenai, SiVercel } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden w-full px-6 md:px-16 pt-20 pb-10 bg-[#f9f9ff] dark:bg-[#0a0a0a] text-gray-800 dark:text-gray-200">
      {/* Gradient Background Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-400 opacity-20 blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500 opacity-20 blur-[150px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
            Reevid
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
            Reevid is the fastest way to turn text into hyper-realistic videos. Trusted by content creators, educators, and brands around the world.
          </p>
          <div className="flex gap-4 mt-6 text-xl text-gray-600 dark:text-gray-300">
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
            <FaGithub className="hover:text-black dark:hover:text-white cursor-pointer" />
            <FaGlobe className="hover:text-green-500 cursor-pointer" />
            <FaDiscord className="hover:text-indigo-500 cursor-pointer" />
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Product</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-pink-500 cursor-pointer">How It Works</li>
            <li className="hover:text-pink-500 cursor-pointer">AI Avatars</li>
            <li className="hover:text-pink-500 cursor-pointer">Templates</li>
            <li className="hover:text-pink-500 cursor-pointer">Pricing</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-pink-500 cursor-pointer">Blog</li>
            <li className="hover:text-pink-500 cursor-pointer">Help Center</li>
            <li className="hover:text-pink-500 cursor-pointer">Guides</li>
            <li className="hover:text-pink-500 cursor-pointer">Community</li>
          </ul>
        </div>

        {/* Tech Stack / Built With */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Powered By</h4>
          <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 text-2xl">
            <SiReact title="React" />
            <SiOpenai title="OpenAI" />
            <SiVercel title="Vercel" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t mt-16 pt-6 border-gray-200 dark:border-white/10 text-sm text-gray-600 dark:text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <span>© {new Date().getFullYear()} Reevid. All rights reserved.</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-pink-500">Privacy Policy</a>
          <a href="#" className="hover:text-pink-500">Terms of Use</a>
          <a href="#" className="hover:text-pink-500">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
