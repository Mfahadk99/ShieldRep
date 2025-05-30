import React from "react";
import { Camera, Image } from "lucide-react";

const Media = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Media</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Camera className="w-4 h-4" />
          <span>Upload Photos</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Business Photos
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
              >
                <Image className="w-8 h-8 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Interior Photos
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
              >
                <Image className="w-8 h-8 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Team Photos</h3>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
              >
                <Image className="w-8 h-8 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
