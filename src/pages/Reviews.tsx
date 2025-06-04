import React from "react";
import { Star, Users, CheckCircle, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const Reviews = () => {
  const recentReviews = [
    {
      id: 1,
      author: "Sarah M.",
      rating: 5,
      text: "Excellent service! Highly recommend...",
      date: "1 day ago",
      replied: true,
    },
    {
      id: 2,
      author: "John D.",
      rating: 4,
      text: "Good experience overall, but...",
      date: "3 days ago",
      replied: false,
    },
    {
      id: 3,
      author: "Emma L.",
      rating: 5,
      text: "Outstanding quality and customer service...",
      date: "5 days ago",
      replied: true,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Reviews</h1>
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-900">4.8</span>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 text-blue-500 fill-current" />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {recentReviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl border border-blue-100 shadow-sm p-6 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {review.author}
                    </h4>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= review.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{review.text}</p>
                <div className="flex items-center space-x-2">
                  {review.replied ? (
                    <span className="text-sm text-green-600 flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4" />
                      <span>Replied</span>
                    </span>
                  ) : (
                    <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center space-x-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>Reply</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Reviews;
