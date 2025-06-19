// src/components/CreatePostModal.tsx

import React, { useState } from "react";
import {
  Target,
  TrendingUp,
  Users,
  Edit3,
  Sparkles,
  CheckCircle2,
  Plus,
  X,
  Calendar,
  ArrowRight,
} from "lucide-react";

// Define a type for the form data to be used in both files
export type PostFormData = {
  title: string; 
  date: string;
  prompt: string;
};

// Define the type for the component's props
interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: PostFormData) => void;
}

const CreatePostModal = ({
  isOpen,
  onClose,
  onSubmit,
}: CreatePostModalProps) => {
  const [formData, setFormData] = useState<PostFormData>({
    title: "",
    date: "",
    prompt: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingSteps = [
    { text: "Analyzing your brand voice...", icon: Target },
    { text: "Researching trending keywords...", icon: TrendingUp },
    { text: "Optimizing for engagement...", icon: Users },
    { text: "Crafting compelling content...", icon: Edit3 },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.date || !formData.prompt) {
      alert("Please fill in all fields");
      return;
    }
    setIsLoading(true);
    setLoadingStep(0);
    // Use a loop for the loading steps
    for (let i = 0; i < loadingSteps.length; i++) {
      setLoadingStep(i + 1);
      await new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5 seconds per step
    }
    onSubmit(formData);
    // Reset state after submission
    setFormData({ title: "", date: "", prompt: "" });
    setIsLoading(false);
    setLoadingStep(0);
    onClose();
  };

  const handleClose = () => {
    if (!isLoading) {
      setFormData({ title: "", date: "", prompt: "" });
      onClose();
    }
  };

  if (!isOpen) return null;

  // FIXED: Full-screen loading overlay with proper z-index and positioning
  if (isLoading) {
    return (
      <div 
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#1e1b4b] via-[#4338ca] to-[#1e1b4b] flex items-center justify-center"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          margin: 0,
          padding: 0
        }}
      >
        <div className="w-full max-w-md mx-auto px-4">
          <div className="text-center text-white mb-10">
           
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              Creating Your Post
            </h1>
            <p className="text-lg text-indigo-200">
              AI is crafting the perfect content for you...
            </p>
          </div>

          <div className="space-y-4">
            {loadingSteps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = loadingStep > index + 1;
              const isActive = loadingStep === index + 1;

              return (
                <div
                  key={index}
                  className={`flex items-center p-4 rounded-xl transition-all duration-500 transform ${
                    isCompleted 
                      ? "bg-green-500/20 border border-green-400/30 scale-105" 
                      : isActive 
                      ? "bg-blue-500/20 border border-blue-400/30 scale-105" 
                      : "bg-white/10 border border-white/20"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all duration-500 ${
                      isCompleted 
                        ? "bg-green-500 shadow-lg shadow-green-500/30" 
                        : isActive 
                        ? "bg-blue-500 shadow-lg shadow-blue-500/30" 
                        : "bg-white/20"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 size={24} className="text-white" />
                    ) : (
                      <Icon 
                        size={24} 
                        className={`text-white ${isActive ? 'animate-pulse' : ''}`} 
                      />
                    )}
                  </div>
                  <span
                    className={`flex-grow text-lg font-medium transition-all duration-500 ${
                      isCompleted 
                        ? "text-green-300" 
                        : isActive 
                        ? "text-blue-200" 
                        : "text-white/70"
                    }`}
                  >
                    {step.text}
                  </span>
                  {isActive && (
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        
        </div>
      </div>
    );
  }

  // Modal form - FIXED: Removed problematic animate classes
  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: '16px'
      }}
    >
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-lg border border-white/30 transform scale-100 opacity-100 transition-all duration-300">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                <Plus size={20} className="text-white" />
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Create New Post
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <X size={20} className="text-gray-400" />
            </button>
          </div>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Post Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors bg-gray-50/50 backdrop-blur-sm"
                placeholder="What's your post about?"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Publish Date
              </label>
              <div className="relative">
                <Calendar
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors bg-gray-50/50 backdrop-blur-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Content Prompt
              </label>
              <textarea
                name="prompt"
                value={formData.prompt}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors resize-none bg-gray-50/50 backdrop-blur-sm"
                placeholder="Describe what you want to write about..."
              />
            </div>
            <div className="flex gap-3 pt-4">
              <button
                onClick={handleClose}
                className="flex-1 px-6 py-3 border-2 border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-all font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Create Post{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;