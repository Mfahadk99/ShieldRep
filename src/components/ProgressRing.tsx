interface ProgressRingProps {
  score: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export const ProgressRing = ({ 
  score, 
  size = 128, 
  strokeWidth = 8, 
  className = "" 
}: ProgressRingProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg 
        className="transform -rotate-90" 
        width={size} 
        height={size}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E5EA"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-500 ease-out"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#007AFF" />
            <stop offset="100%" stopColor="#5856D6" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Score display */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900">{score}</div>
          <div className="text-sm text-gray-500">/ 100</div>
        </div>
      </div>
    </div>
  );
};
