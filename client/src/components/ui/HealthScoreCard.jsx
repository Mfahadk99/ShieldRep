import React from "react";

const HealthScoreCard = ({ score }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Health Score</h2>
          <p className="text-blue-100">
            Your Google Business Profile optimization level
          </p>
        </div>
        <div className="text-right">
          <div className="text-5xl font-bold">{score}</div>
          <div className="text-blue-100">out of 100</div>
        </div>
      </div>
      <div className="mt-6">
        <div className="w-full bg-blue-400 rounded-full h-3">
          <div
            className="bg-white h-3 rounded-full transition-all duration-500"
            style={{ width: `${score}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default HealthScoreCard;
