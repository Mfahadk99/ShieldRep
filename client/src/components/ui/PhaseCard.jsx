import React from "react";
import { CheckCircle, ChevronRight } from "lucide-react";

const PhaseCard = ({ phase }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
              phase.status === "completed"
                ? "bg-green-500"
                : phase.status === "in-progress"
                ? "bg-blue-500"
                : "bg-gray-400"
            }`}
          >
            {phase.status === "completed" ? (
              <CheckCircle className="w-6 h-6" />
            ) : (
              phase.id
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {phase.title}
            </h3>
            <p className="text-gray-600">{phase.description}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900">
            {phase.progress}%
          </div>
          <div className="text-sm text-gray-500">Complete</div>
        </div>
      </div>

      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              phase.status === "completed"
                ? "bg-green-500"
                : phase.status === "in-progress"
                ? "bg-blue-500"
                : "bg-gray-400"
            }`}
            style={{ width: `${phase.progress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {phase.items.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 text-sm text-gray-600"
          >
            <div
              className={`w-2 h-2 rounded-full ${
                index < Math.floor((phase.items.length * phase.progress) / 100)
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            ></div>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-end">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <span>Continue</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PhaseCard;
