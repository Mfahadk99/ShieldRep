import React from "react";
import { useLocation } from "wouter";
import {
  LayoutDashboard,
  FileText,
  BarChart,
  ThumbsUp,
  Image,
  BadgePercent,
  Shield,
  X,
  BadgeDollarSign,
  DollarSign,
  DollarSignIcon,
} from "lucide-react";

const menuItems = [
  { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { path: "/optimization", icon: FileText, label: "Optimization" },
  { path: "/posts", icon: BarChart, label: "Posts" },
  { path: "/reviews", icon: ThumbsUp, label: "Reviews" },
  { path: "/media", icon: Image, label: "Media" },
  { path: "/badge", icon: BadgePercent, label: "Badge" },
  { path: "/billing", icon: BadgeDollarSign, label: "Billing" },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [location, navigate] = useLocation();

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:inset-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-[73px] border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-lg text-gray-800">Shield Rep</span>
          </div>
          <button
            className="lg:hidden text-gray-500 hover:text-gray-800"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          {menuItems.map(({ path, icon: Icon, label }) => {
            const isActive = location === path;
            return (
              <button
                key={path}
                onClick={() => {
                  navigate(path);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center px-6 py-3 text-left transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {label}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
