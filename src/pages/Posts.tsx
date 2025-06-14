import React from "react";
import { Clock, FileText } from "lucide-react";
import { motion } from "framer-motion";
import PostsCalendar from "@/components/Posts/PostsCalendar";

const PostHeader = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-blue-900">Posts</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Create New Post
        </button>
      </div>
    </div>
  );
};

const Posts = () => {
  const recentPosts: any[] = [
    {
      id: 1,
      title: "Summer Sale - 30% Off All Services",
      date: "14/06/2025",
      status: "published",
      post: "This is a test post",
    },
    {
      id: 2,
      title: "New Team Member Welcome",
      date: "14/06/2025",
      status: "published",
      post: "This is a test post",
    },
    {
      id: 3,
      title: "Holiday Hours Update",
      date: "14/06/2025",
      status: "draft",
      post: "This is a test post",
    },
  ];
  return (
    <div className="space-y-6">
      <PostHeader />
      <PostsCalendar recentPosts={recentPosts} />
    </div>
  );
};

export default Posts;
