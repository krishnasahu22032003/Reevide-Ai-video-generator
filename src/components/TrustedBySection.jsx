import React, { useRef, useState } from "react";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

const TrustedBySection = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="platform" className="relative w-full overflow-hidden bg-white dark:bg-[#0b0b0b] text-black dark:text-white">
      {/* Top decorative gradient glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-32 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 blur-[100px] opacity-40 z-10 pointer-events-none" />

      {/* Content Heading */}
      <div className="relative z-20 max-w-6xl mx-auto px-8 lg:px-16 pt-24 pb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 text-transparent bg-clip-text drop-shadow-md">
          Trusted by over 85,000+ customers
        </h2>

        <p className="text-lg mt-5 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Reevid helps businesses and creators create jaw-dropping AI-generated videos at scale. Join thousands who already trust us to redefine how videos are created.
        </p>
      </div>

      {/* Video Showcase */}
      <div className="relative w-full px-6 md:px-20 pb-24">
        <div className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden rounded-[2.5rem] shadow-[0_20px_60px_-10px_rgba(128,0,255,0.3)] border border-white/10 dark:border-white/5">

          {/* Video */}
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-[2.5rem]"
            src="/videos/video.mp4"
            autoPlay
            loop
            muted
            preload="auto"
            playsInline
          />

          {/* Overlay gradient for visual appeal */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/30 z-10 rounded-[2.5rem]" />

          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="absolute cursor-pointer bottom-6 left-6 z-20 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition"
          >
            {isMuted ? <HiSpeakerXMark size={26} /> : <HiSpeakerWave size={26} />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
