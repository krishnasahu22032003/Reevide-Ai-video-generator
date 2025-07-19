import React, { useState } from "react";

const plans = {
  monthly: [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for individuals exploring AI videos.",
      features: ["Export 720p", "10 videos/month", "Basic templates"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      description: "For creators and small teams.",
      features: ["Export 1080p", "50 videos/month", "Premium templates", "Priority support"],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored enterprise-grade solution.",
      features: ["Unlimited videos", "4K Export", "AI API access", "Dedicated support"],
      highlight: false,
    },
  ],
  yearly: [
    {
      name: "Starter",
      price: "$90",
      description: "Save 20% with annual billing.",
      features: ["Export 720p", "10 videos/month", "Basic templates"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$290",
      description: "Best value for pros and teams.",
      features: ["Export 1080p", "50 videos/month", "Premium templates", "Priority support"],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Custom billing & support for orgs.",
      features: ["Unlimited videos", "4K Export", "AI API access", "Dedicated support"],
      highlight: false,
    },
  ],
};

const PricingSection = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <section  id="pricing"className="relative w-full py-28 px-6 md:px-16 bg-white dark:bg-[#0b0b0b] text-gray-900 dark:text-white transition-colors duration-500">
      {/* Gradient Glow */}
      <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[120%] h-72 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 blur-[140px] opacity-20 dark:opacity-30 z-0" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
          Our Pricing Plans
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Whether you're just starting or scaling up — we've got a plan for you.
        </p>

        {/* Toggle Switch */}
        <div className="mt-8 flex items-center justify-center gap-3 relative z-10">
          <div className="flex bg-gray-100 dark:bg-white/10 backdrop-blur-lg rounded-full p-1 border border-gray-200 dark:border-white/10 shadow-lg">
            {["monthly", "yearly"].map((type) => (
              <button
                key={type}
                onClick={() => setBilling(type)}
                className={`cursor-pointer px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  billing === type
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md"
                    : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
                }`}
              >
                {type === "monthly" ? "Monthly" : "Yearly"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans[billing].map((plan, index) => (
          <div
            key={index}
            className={`group relative p-8 rounded-[28px] bg-white dark:bg-white/5 backdrop-blur-2xl border border-gray-200 dark:border-white/10 shadow-lg transition-all duration-300 ease-in-out cursor-pointer hover:scale-[1.02] hover:shadow-xl hover:border-pink-400/50 dark:hover:border-pink-500/30 ${
              plan.highlight
                ? "ring-2 ring-pink-300/50 dark:ring-pink-500/40 scale-[1.03]"
                : ""
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 right-5 px-3 py-1 text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold shadow-md animate-pulse">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
              {plan.name}
            </h3>
            <p className="text-4xl font-extrabold text-pink-600 dark:text-indigo-400">
              {plan.price}
              {plan.price !== "Custom" && (
                <span className="text-base font-medium text-gray-500 dark:text-gray-400"> /mo</span>
              )}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{plan.description}</p>

            <ul className="mt-6 space-y-3">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center text-sm text-gray-800 dark:text-gray-200"
                >
                  <span className="w-2 h-2 mr-3 bg-pink-500 dark:bg-indigo-400 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full py-3 text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow hover:brightness-110 transition-all duration-300 cursor-pointer">
              {plan.price === "Custom" ? "Contact Us" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
