import React, { useState } from "react";
import {
  Clock,
  FileText,
  Plus,
  Calendar,
  Edit3,
  Eye,
  MoreVertical,
  CheckCircle2,
  Clock3,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Step 1: Import the new modal component and its form data type
import CreatePostModal, { PostFormData } from "../components/post/CreatePostModal";

// --- Types ---
interface Post {
  id: number;
  title: string;
  date: string;
  status: "published" | "draft";
  post: string;
}

interface PostHeaderProps {
  onCreatePost: () => void;
  postsCount: number;
}

interface PostsCalendarProps {
  recentPosts: Post[];
}

// --- PostHeader Component ---
const PostHeader: React.FC<PostHeaderProps> = ({ onCreatePost, postsCount }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-blue-100/50">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent mb-2">
            Posts Calendar
          </h1>
          <p className="text-sm sm:text-base text-gray-600">Schedule and manage your content with our beautiful calendar view</p>
        </div>
        
        <button 
          onClick={onCreatePost}
          className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-3 rounded-xl sm:rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-medium group"
        >
          <Plus size={18} className="group-hover:rotate-90 transition-transform" />
          <span className="hidden sm:inline">Schedule New Post</span>
          <span className="sm:hidden">New Post</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-white/60 backdrop-blur-sm rounded-xl   sm:rounded-2xl p-3 sm:p-4 border border-white/50">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-3 bg-blue-100 rounded-xl"><FileText size={16} className="sm:w-5 sm:h-5 text-blue-600" /></div>
            <div><p className="text-xl sm:text-2xl font-bold text-gray-900">{postsCount}</p><p className="text-xs sm:text-sm text-gray-600">Scheduled Posts</p></div>
          </div>
        </div>
        <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/50">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-3 bg-green-100 rounded-xl"><CheckCircle2 size={16} className="sm:w-5 sm:h-5 text-green-600" /></div>
            <div><p className="text-xl sm:text-2xl font-bold text-gray-900">{postsCount > 0 ? Math.floor(postsCount * 0.6) : 0}</p><p className="text-xs sm:text-sm text-gray-600">Published</p></div>
          </div>
        </div>
        <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/50 sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-3 bg-yellow-100 rounded-xl"><Clock3 size={16} className="sm:w-5 sm:h-5 text-yellow-600" /></div>
            <div><p className="text-xl sm:text-2xl font-bold text-gray-900">{postsCount > 0 ? Math.ceil(postsCount * 0.4) : 0}</p><p className="text-xs sm:text-sm text-gray-600">Drafts</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- PostsCalendar Component ---
const PostsCalendar: React.FC<PostsCalendarProps> = ({ recentPosts }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const formatDateForComparison = (date: Date) => `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  
  const getPostsForDate = (day: number): Post[] => {
    const dateStr = `${day.toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()}`;
    return recentPosts.filter(post => post.date === dateStr);
  };
  
  const navigateMonth = (direction: number) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };
  
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-16 sm:h-20 md:h-24 border border-gray-100"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const postsForDay = getPostsForDate(day);
      const isToday = formatDateForComparison(new Date()) === `${day.toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()}`;
      days.push(
        <div key={day} className={`h-16 sm:h-20 md:h-24 border border-gray-100 p-1 sm:p-2 cursor-pointer transition-all hover:bg-blue-50 ${isToday ? 'bg-blue-100 border-blue-300' : 'bg-white'} ${selectedDate === day ? 'ring-2 ring-blue-500' : ''}`} onClick={() => setSelectedDate(selectedDate === day ? null : day)}>
          <div className={`text-xs sm:text-sm font-medium mb-1 ${isToday ? 'text-blue-600' : 'text-gray-700'}`}>{day}{isToday && <span className="ml-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full inline-block"></span>}</div>
          <div className="space-y-0.5 sm:space-y-1">
            {postsForDay.slice(0, window.innerWidth < 640 ? 1 : 2).map((post, index) => (
              <div key={post.id} className={`text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg truncate ${post.status === 'published' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-yellow-100 text-yellow-700 border border-yellow-200'}`} title={post.title}>
                {post.title}
              </div>
            ))}
            {postsForDay.length > (window.innerWidth < 640 ? 1 : 2) && (
              <div className="text-xs text-gray-500 font-medium">+{postsForDay.length - (window.innerWidth < 640 ? 1 : 2)} more</div>
            )}
          </div>
        </div>
      );
    }
    return days;
  };
  
  const selectedDatePosts = selectedDate ? getPostsForDate(selectedDate) : [];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
            <p className="text-blue-100 mt-1 text-sm sm:text-base">Click on dates to view posts</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => navigateMonth(-1)} className="p-2 hover:bg-white/20 rounded-xl transition-colors"><ChevronLeft size={20} /></button>
            <button onClick={() => setCurrentDate(new Date())} className="px-3 sm:px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl transition-colors text-xs sm:text-sm font-medium">Today</button>
            <button onClick={() => navigateMonth(1)} className="p-2 hover:bg-white/20 rounded-xl transition-colors"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>
      <div className="p-3 sm:p-6">
        <div className="grid grid-cols-7 gap-0 mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-xs sm:text-sm font-semibold text-gray-600 py-2">
              <span className="hidden sm:inline">{day}</span>
              <span className="sm:hidden">{day.slice(0, 1)}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-0 border border-gray-200 rounded-xl overflow-hidden">
          {renderCalendar()}
        </div>
      </div>

      {selectedDate && selectedDatePosts.length > 0 && (
        <div className="border-t border-gray-200 bg-gray-50 p-4 sm:p-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-sm sm:text-base">
            <Calendar size={18} className="text-blue-600" />
            Posts for {monthNames[currentDate.getMonth()]} {selectedDate}, {currentDate.getFullYear()}
          </h3>
          <div className="space-y-3">
            {selectedDatePosts.map(post => (
              <div key={post.id} className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base truncate">{post.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">{post.post}</p>
                    <div className={`inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${post.status === 'published' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-yellow-100 text-yellow-700 border border-yellow-200'}`}>
                      {post.status === 'published' ? (
                        <>
                          <CheckCircle2 size={12} /><span className="hidden sm:inline">Published</span><span className="sm:hidden">Pub</span>
                        </>
                      ) : (
                        <>
                          <Clock3 size={12} /><span>Draft</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                    <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"><Eye size={14} className="text-gray-400" /></button>
                    <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"><Edit3 size={14} className="text-gray-400" /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- Main Posts Page Component ---
const Posts: React.FC = () => {
  const [recentPosts, setRecentPosts] = useState<Post[]>([
    { id: 1, title: "Summer Sale - 30% Off", date: "17/06/2025", status: "published", post: "Don't miss out on our biggest summer sale!" },
    { id: 2, title: "New Team Members", date: "18/06/2025", status: "published", post: "We're excited to introduce new team members." },
    { id: 3, title: "Holiday Hours Update", date: "20/06/2025", status: "draft", post: "Please note our updated holiday hours." },
    { id: 4, title: "New Product Launch", date: "25/06/2025", status: "draft", post: "Get ready for our most innovative product yet!" },
    { id: 5, title: "Customer Success Stories", date: "28/06/2025", status: "published", post: "Read inspiring stories from our customers." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreatePost = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmitPost = (formData: PostFormData) => {
    const dateObj = new Date(formData.date);
    const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()}`;

    const newPost: Post = {
      id: recentPosts.length + 1,
      title: formData.title,
      date: formattedDate,
      status: "draft",
      post: formData.prompt,
    };

    setRecentPosts(prev =>
      [newPost, ...prev].sort(
        (a, b) =>
          new Date(b.date.split("/").reverse().join("-")).getTime() -
          new Date(a.date.split("/").reverse().join("-")).getTime()
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        <PostHeader
          onCreatePost={handleCreatePost}
          postsCount={recentPosts.length}
        />

        <PostsCalendar recentPosts={recentPosts} />

        <CreatePostModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmitPost}
        />
      </div>
    </div>
  );
};

export default Posts;
