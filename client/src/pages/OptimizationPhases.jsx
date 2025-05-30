import React from "react";
import PhaseCard from "../components/ui/PhaseCard";
import { optimizationPhases } from "../data/mockData";

const OptimizationPhases = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">
          Optimization Phases
        </h1>
        <div className="text-sm text-gray-500">
          Complete all phases to maximize your Health Score
        </div>
      </div>

      <div className="space-y-4">
        {optimizationPhases.map((phase) => (
          <PhaseCard key={phase.id} phase={phase} />
        ))}
      </div>
    </div>
  );
};

export default OptimizationPhases;
