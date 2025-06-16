// import React from "react";
// import { Clock, FileText } from "lucide-react";
// import { motion } from "framer-motion";
// import PostsCalendar from "@/components/Posts/PostsCalendar";

// const PostHeader = () => {
//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h1 className="text-3xl font-bold text-blue-900">Posts</h1>
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//           Create New Post
//         </button>
//       </div>
//     </div>
//   );
// };

// const Posts = () => {
//   const recentPosts: any[] = [
//     {
//       id: 1,
//       title: "Summer Sale - 30% Off All Services",
//       date: "14/06/2025",
//       status: "published",
//       post: "This is a test post",
//     },
//     {
//       id: 2,
//       title: "New Team Member Welcome",
//       date: "14/06/2025",
//       status: "published",
//       post: "This is a test post",
//     },
//     {
//       id: 3,
//       title: "Holiday Hours Update",
//       date: "14/06/2025",
//       status: "draft",
//       post: "This is a test post",
//     },
//   ];
//   return (
//     <div className="space-y-6">
//       <PostHeader />
//       <PostsCalendar recentPosts={recentPosts} />
//     </div>
//   );
// };

// export default Posts;



// import React, { useState } from "react";
// import { Clock, FileText, X } from "lucide-react";
// import { motion } from "framer-motion";
// import PostsCalendar from "@/components/Posts/PostsCalendar";

import React, { useState } from "react";
import { Clock, FileText, X } from "lucide-react";
import { motion } from "framer-motion";
import PostsCalendar from "@/components/Posts/PostsCalendar";

// Create Post Modal Component
const CreatePostModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    prompt: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingSteps = [
    "Doing keyword research...",
    "Optimizing your services...",
    "Reviewing competitors...",
    "Updating your media...",
    "Done!"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.date || !formData.prompt) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setLoadingStep(0);

    // Simulate the loading sequence
    for (let i = 0; i < loadingSteps.length; i++) {
      setLoadingStep(i);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    // Submit the data
    onSubmit(formData);
    
    // Reset form and close modal
    setFormData({ title: '', date: '', prompt: '' });
    setIsLoading(false);
    setLoadingStep(0);
    onClose();
  };

  const handleClose = () => {
    if (!isLoading) {
      setFormData({ title: '', date: '', prompt: '' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        {isLoading ? (
          // Loading Screen
          <div className="text-center py-8">
            <div className="mb-6">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            </div>
            <div className="space-y-3">
              {loadingSteps.map((step, index) => (
                <div key={index} className={`text-sm ${
                  index === loadingStep 
                    ? 'text-blue-600 font-medium' 
                    : index < loadingStep 
                      ? 'text-green-600' 
                      : 'text-gray-400'
                }`}>
                  {index < loadingStep ? '✓' : index === loadingStep ? '○' : '○'} {step}
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Form
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Create New Post</h2>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter post title"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                  Prompt
                </label>
                <textarea
                  id="prompt"
                  name="prompt"
                  value={formData.prompt}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Enter your prompt"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const PostHeader = ({ onCreatePost }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-blue-900">Posts</h1>
        <button 
          onClick={onCreatePost}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create New Post
        </button>
      </div>
    </div>
  );
};

const Posts = () => {
  const [recentPosts, setRecentPosts] = useState([
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
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreatePost = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitPost = (formData) => {
    // Convert date format from YYYY-MM-DD to DD/MM/YYYY
    const dateObj = new Date(formData.date);
    const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()}`;
    
    const newPost = {
      id: recentPosts.length + 1,
      title: formData.title,
      date: formattedDate,
      status: "draft",
      post: formData.prompt,
    };

    setRecentPosts(prev => [newPost, ...prev]);
  };

  return (
    <div className="space-y-6">
      <PostHeader onCreatePost={handleCreatePost} />
      <PostsCalendar recentPosts={recentPosts} />
      
      <CreatePostModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitPost}
      />
    </div>
  );
};

export default Posts;