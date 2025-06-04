import React from "react";
import { motion } from "framer-motion";
import { CreditCard, CheckCircle2 } from "lucide-react";

const billingPlans = [
  {
    title: "Starter",
    price: "$9",
    frequency: "/mo",
    description: "Best for small local businesses",
    features: ["1 Location", "Basic Analytics", "Email Support"],
  },
  {
    title: "Pro",
    price: "$29",
    frequency: "/mo",
    description: "Perfect for growing teams",
    features: ["5 Locations", "Advanced Analytics", "Priority Support"],
  },
  {
    title: "Enterprise",
    price: "$99",
    frequency: "/mo",
    description: "Ideal for large organizations",
    features: ["Unlimited Locations", "Dedicated Manager", "Custom Reports"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Billing = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-white px-4 py-10 md:px-12 lg:px-24"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-extrabold text-blue-800">
          Choose Your Plan
        </h1>
        <p className="text-gray-600 mt-3">
          Flexible pricing to suit all business sizes.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-8 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {billingPlans.map((plan) => (
          <motion.div
            key={plan.title}
            variants={cardVariants}
            className="rounded-2xl shadow-lg border border-blue-100 bg-gradient-to-tr from-blue-50 to-white p-6 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-blue-900">
                {plan.title}
              </h2>
              <CreditCard className="text-blue-600" />
            </div>
            <p className="text-blue-600 font-bold text-3xl">
              {plan.price}
              <span className="text-sm font-medium text-gray-600">
                {plan.frequency}
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-2 mb-4">
              {plan.description}
            </p>

            <ul className="space-y-2 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Billing;
