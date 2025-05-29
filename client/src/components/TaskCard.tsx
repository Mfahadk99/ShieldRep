import { TaskItem } from '@/types/user';

interface TaskCardProps {
  task: TaskItem;
  onTaskClick?: (task: TaskItem) => void;
}

export const TaskCard = ({ task, onTaskClick }: TaskCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'photos': return 'bg-purple-50 text-purple-600';
      case 'reviews': return 'bg-orange-50 text-orange-600';
      case 'posts': return 'bg-green-50 text-green-600';
      case 'profile': return 'bg-blue-50 text-blue-600';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div 
      className={`flex items-start space-x-4 p-4 rounded-2xl transition-all duration-200 cursor-pointer ${
        task.isCompleted ? 'bg-green-50' : 'bg-gray-50 hover:bg-gray-100'
      }`}
      onClick={() => onTaskClick?.(task)}
    >
      <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
        task.isCompleted 
          ? 'border-green-500 bg-green-500' 
          : 'border-blue-500'
      }`}>
        {task.isCompleted && (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </div>
      
      <div className="flex-1">
        <h4 className={`font-semibold ${task.isCompleted ? 'text-green-800' : 'text-gray-900'}`}>
          {task.title}
        </h4>
        {task.description && (
          <p className="text-sm text-gray-600 mt-1">{task.description}</p>
        )}
        <div className="flex items-center mt-2">
          <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${getCategoryColor(task.category)}`}>
            +{task.xpReward} XP
          </span>
        </div>
      </div>
      
      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  );
};
