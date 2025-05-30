import React from "react";
import { Clock, FileText } from "lucide-react";
import { motion } from "framer-motion";

const Posts = () => {
  const recentPosts = [
    {
      id: 1,
      title: "Summer Sale - 30% Off All Services",
      date: "2 days ago",
      status: "published",
    },
    {
      id: 2,
      title: "New Team Member Welcome",
      date: "1 week ago",
      status: "published",
    },
    {
      id: 3,
      title: "Holiday Hours Update",
      date: "2 weeks ago",
      status: "draft",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-3xl font-bold text-blue-900">Posts</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Create New Post
        </button>
      </div>

      {/* Posts List */}
      <div className="grid gap-4">
        {recentPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              {/* Left: Title and Meta */}
              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  {post.title}
                </h3>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.status === "published"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {post.status}
                  </span>
                </div>
              </div>

              {/* Right: Action */}
              <button className="text-blue-400 hover:text-blue-600 transition">
                <FileText className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
