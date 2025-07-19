const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Build the Future with Us
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Launch intelligent products with beautiful user interfaces powered by AI.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-full font-medium bg-black text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-full font-medium border border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
