import { useAuthContext } from "@/contexts/AuthContext";
import { ProgressRing } from "@/components/ProgressRing";
import { TaskCard } from "@/components/TaskCard";
import { AchievementCard } from "@/components/AchievementCard";
import { TaskItem, Achievement, AppStats } from "@/types/user";
import { useBusinessInsights, useBusinessMedia, useBusinessPosts, useBusinessProfiles, useBusinessReviews } from "@/hooks/useBusinessProfile";
import { calculateHealthScore } from "@/utils/getHealthScore";
import { mockAchievements, mockTasks } from "@/data/mockData";

export default function Dashboard() {
  const { userProfile } = useAuthContext();

  const { data: businessProfiles } = useBusinessProfiles();
  const insights = useBusinessInsights(businessProfiles?.locations[0].locationName || "");
  const reviews = useBusinessReviews(businessProfiles?.locations[0].locationName || "");
  const media = useBusinessMedia(businessProfiles?.locations[0].locationName || "");
  const posts = useBusinessPosts(businessProfiles?.locations[0].locationName || "");

  // if (
  //   insights.isLoading ||
  //   reviews.isLoading ||
  //   media.isLoading ||
  //   posts.isLoading
  // )
  //   return <div>Loading health score...</div>;

  const scoreData = calculateHealthScore({
    insights: insights.data,
    reviews: reviews.data,
    media: media.data,
    posts: posts.data,
  });

  console.log("scoreData",scoreData);
  // Mock data for demonstration
  const mockStats: AppStats = {
    profileViews: 1247,
    totalReviews: 127,
    photosAdded: 23,
    postsPublished: 8,
  };

  const completedTasks = mockTasks.filter((task) => task.isCompleted).length;
  const nextLevelXP = Math.ceil((userProfile?.level || 1) * 500);
  const progressToNext = ((userProfile?.currentXP || 0) / nextLevelXP) * 100;

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Top Navigation */}

      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Progress Overview */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Overall Score */}
            <div className="md:col-span-1 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Profile Health Score
              </h3>
              <ProgressRing score={72} className="mx-auto mb-4" />
              <p className="text-gray-600">Good progress! Keep optimizing.</p>
            </div>

            {/* Quick Stats */}
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">Profile Views</h4>
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {mockStats.profileViews.toLocaleString()}
                </div>
                <div className="text-sm text-green-600">
                  <svg
                    className="w-4 h-4 inline mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  +23% this week
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">Total Reviews</h4>
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {mockStats.totalReviews}
                </div>
                <div className="text-sm text-gray-600">4.2 average rating</div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">Photos Added</h4>
                  <svg
                    className="w-5 h-5 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {mockStats.photosAdded}
                </div>
                <div className="text-sm text-green-600">
                  <svg
                    className="w-4 h-4 inline mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  +5 this month
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">
                    Posts Published
                  </h4>
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {mockStats.postsPublished}
                </div>
                <div className="text-sm text-gray-600">
                  Last post 2 days ago
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Task List and Achievements */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Action Items */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Today's Tasks</h3>
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                {completedTasks}/{mockTasks.length} Complete
              </span>
            </div>

            <div className="space-y-4">
              {mockTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onTaskClick={(task) =>
                    console.log("Clicked task:", task.title)
                  }
                />
              ))}
            </div>

            <button className="w-full mt-4 py-3 text-blue-600 font-semibold hover:bg-blue-50 rounded-2xl transition-colors duration-200">
              View All Tasks
            </button>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Achievements</h3>
              <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                Level {userProfile?.level || 1}
              </span>
            </div>

            {/* Level Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">
                  Progress to Level {(userProfile?.level || 1) + 1}
                </span>
                <span className="text-sm font-medium text-blue-600">
                  {userProfile?.currentXP || 0}/{nextLevelXP} XP
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(progressToNext, 100)}%` }}
                />
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="space-y-4">
              {mockAchievements.map((achievement, index) => (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                  progress={index === 1 ? 7 : undefined}
                  maxProgress={index === 1 ? 10 : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:shadow-lg transition-all duration-200 transform hover:scale-110">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
