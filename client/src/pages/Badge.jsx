import React from "react";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

const Badge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Badge</h1>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-lg animate-pulse"
        >
          <Award className="w-16 h-16 text-white" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-bold text-gray-900 mb-4"
        >
          Bronze Badge Achieved!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 mb-6"
        >
          You've completed your basic optimization and earned your first badge.
          Keep improving to unlock Silver and Gold badges!
        </motion.p>

        <div className="grid grid-cols-3 gap-4 mt-8">
          {/* Bronze - Achieved */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center shadow-inner">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900">Bronze</h4>
            <p className="text-sm text-green-600">Achieved</p>
          </motion.div>

          {/* Silver - Locked */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="text-center opacity-50 cursor-not-allowed"
          >
            <div className="bg-gray-200 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
              <Award className="w-8 h-8 text-gray-400" />
            </div>
            <h4 className="font-semibold text-gray-900">Silver</h4>
            <p className="text-sm text-gray-500">Locked</p>
          </motion.div>

          {/* Gold - Locked */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="text-center opacity-50 cursor-not-allowed"
          >
            <div className="bg-gray-200 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
              <Award className="w-8 h-8 text-gray-400" />
            </div>
            <h4 className="font-semibold text-gray-900">Gold</h4>
            <p className="text-sm text-gray-500">Locked</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Badge;
