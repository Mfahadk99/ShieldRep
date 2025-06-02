import { Achievement } from "@/types/user";

interface AchievementCardProps {
  achievement: Achievement;
  progress?: number;
  maxProgress?: number;
}

export const AchievementCard = ({
  achievement,
  progress,
  maxProgress,
}: AchievementCardProps) => {
  const isUnlocked = achievement.isUnlocked;
  const hasProgress = progress !== undefined && maxProgress !== undefined;

  const getIconColor = (category: string, isUnlocked: boolean) => {
    if (!isUnlocked) return "text-gray-400";

    switch (category) {
      case "photos":
        return "text-green-600";
      case "reviews":
        return "text-orange-600";
      case "posts":
        return "text-blue-600";
      case "streak":
        return "text-red-600";
      default:
        return "text-purple-600";
    }
  };

  const getBgColor = (category: string, isUnlocked: boolean) => {
    if (!isUnlocked) return "bg-gray-200";

    switch (category) {
      case "photos":
        return "bg-green-100";
      case "reviews":
        return "bg-orange-100";
      case "posts":
        return "bg-blue-100";
      case "streak":
        return "bg-red-100";
      default:
        return "bg-purple-100";
    }
  };

  const getBorderColor = (category: string, isUnlocked: boolean) => {
    if (!isUnlocked) return "border-gray-200";

    switch (category) {
      case "photos":
        return "border-green-200";
      case "reviews":
        return "border-orange-200";
      case "posts":
        return "border-blue-200";
      case "streak":
        return "border-red-200";
      default:
        return "border-purple-200";
    }
  };

  return (
    <div
      className={`flex items-center space-x-4 p-3 rounded-2xl border ${
        isUnlocked
          ? `${getBgColor(achievement.category, true)} ${getBorderColor(
              achievement.category,
              true
            )}`
          : "bg-gray-50 border-gray-200"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${getBgColor(
          achievement.category,
          isUnlocked
        )}`}
      >
        <i
          className={`fas fa-${achievement.iconName} text-lg ${getIconColor(
            achievement.category,
            isUnlocked
          )}`}
        ></i>
      </div>

      <div className="flex-1">
        <h4
          className={`font-semibold ${
            isUnlocked ? "text-gray-900" : "text-gray-600"
          }`}
        >
          {achievement.title}
        </h4>
        {achievement.description && (
          <p className="text-sm text-gray-500">{achievement.description}</p>
        )}
      </div>

      <div className="text-xs px-2 py-1 rounded-lg font-medium">
        {isUnlocked ? (
          <span className="bg-green-100 text-green-600">Unlocked!</span>
        ) : hasProgress ? (
          <span className="bg-gray-200 text-gray-600">
            {progress}/{maxProgress}
          </span>
        ) : (
          <span className="bg-gray-200 text-gray-500">Locked</span>
        )}
      </div>
    </div>
  );
};
