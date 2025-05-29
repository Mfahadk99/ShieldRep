import { useState } from 'react';
import { signOutUser } from '@/lib/firebase';
import { useAuthContext } from '@/contexts/AuthContext';
import { ProgressRing } from '@/components/ProgressRing';

export default function Dashboard() {
  const { userProfile } = useAuthContext();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const nextLevelXP = Math.ceil((userProfile?.level || 1) * 500);
  const progressToNext = ((userProfile?.currentXP || 0) / nextLevelXP) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h1 className="font-bold text-gray-900">Shield Rep</h1>
                <p className="text-sm text-gray-500">{userProfile?.businessName || 'Your Business'}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Streak Counter */}
              <div className="flex items-center space-x-2 bg-orange-50 px-3 py-2 rounded-xl">
                <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-orange-600">{userProfile?.streak || 0}</span>
                <span className="text-sm text-orange-600">day streak</span>
              </div>
              
              {/* Notifications */}
              <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              
              {/* User Profile */}
              <div className="relative">
                <button 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded-xl transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {userProfile?.displayName?.split(' ').map(n => n[0]).join('') || 'U'}
                    </span>
                  </div>
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-100">
                      {userProfile?.email}
                    </div>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Settings
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Help & Support
                    </button>
                    <button 
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Welcome Section */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome back, {userProfile?.displayName || 'User'}!
            </h2>
            <p className="text-gray-600 mb-6">
              Ready to optimize your Google Business Profile today?
            </p>
            
            {/* Progress Overview */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Overall Score */}
              <div className="md:col-span-1 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Health Score</h3>
                <ProgressRing score={72} className="mx-auto mb-4" />
                <p className="text-gray-600">Good progress! Keep optimizing.</p>
              </div>
              
              {/* User Stats */}
              <div className="md:col-span-2 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Level</h4>
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{userProfile?.level || 1}</div>
                  <div className="text-sm text-gray-600">Current level</div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Experience</h4>
                    <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{userProfile?.currentXP || 0}</div>
                  <div className="text-sm text-gray-600">XP earned</div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-4 col-span-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-500">Progress to Level {(userProfile?.level || 1) + 1}</span>
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
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
          
          <div className="grid md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              <svg className="w-8 h-8 mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Run Audit</span>
              <span className="text-sm opacity-80">Profile analysis</span>
            </button>
            
            <button className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              <svg className="w-8 h-8 mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Add Photos</span>
              <span className="text-sm opacity-80">Upload images</span>
            </button>
            
            <button className="flex flex-col items-center p-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              <svg className="w-8 h-8 mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Create Post</span>
              <span className="text-sm opacity-80">Share updates</span>
            </button>
            
            <button className="flex flex-col items-center p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              <svg className="w-8 h-8 mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold">View Reviews</span>
              <span className="text-sm opacity-80">Manage responses</span>
            </button>
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-6 text-white">
          <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="mb-6 opacity-90">
            Connect your Google Business Profile to start optimizing and earning XP points!
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-50 transition-colors duration-200">
            Connect Business Profile
          </button>
        </div>
      </div>
    </div>
  );
}