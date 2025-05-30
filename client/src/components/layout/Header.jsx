// // Header.jsx
// import React, { useState } from "react";
// import { useAuthContext } from "@/contexts/AuthContext";
// import { signOutUser } from "@/lib/firebase";

// const Header = ({ toggleSidebar }) => {
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const { userProfile } = useAuthContext();
//   const handleSignOut = async () => {
//     try {
//       await signOutUser();
//     } catch (error) {
//       console.error("Sign out error:", error);
//     }
//   };

//   return (
//     <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
//       <div className="max-w-6xl mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Left: Logo + Button */}
//           <div className="flex items-center space-x-3">
//             {/* Mobile Menu Button */}
//             <button
//               onClick={toggleSidebar}
//               className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-1 mr-2"
//               aria-label="Open sidebar menu"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>

//             {/* App Logo */}
//             <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
//               <svg
//                 className="w-6 h-6 text-white"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </div>

//             <div>
//               <h1 className="font-bold text-gray-900">Shield Rep</h1>
//               <p className="text-sm text-gray-500">
//                 {userProfile?.businessName || "Your Business"}
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center space-x-4">
//             {/* Streak Counter */}
//             <div className="flex items-center space-x-2 bg-orange-50 px-3 py-2 rounded-xl">
//               <svg
//                 className="w-4 h-4 text-orange-500"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               <span className="font-semibold text-orange-600">
//                 {userProfile?.streak || 0}
//               </span>
//               <span className="text-sm text-orange-600">day streak</span>
//             </div>

//             {/* Notifications */}
//             <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200">
//               <svg
//                 className="w-5 h-5 text-gray-500"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
//               </svg>
//               <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
//             </button>

//             {/* User Profile */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowProfileMenu(!showProfileMenu)}
//                 className="flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded-xl transition-colors duration-200"
//               >
//                 <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
//                   <span className="text-white text-sm font-semibold">
//                     {userProfile?.displayName
//                       ?.split(" ")
//                       .map((n) => n[0])
//                       .join("") || "U"}
//                   </span>
//                 </div>
//                 <svg
//                   className="w-4 h-4 text-gray-500"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>

//               {showProfileMenu && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
//                   <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-100">
//                     {userProfile?.email}
//                   </div>
//                   <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
//                     Settings
//                   </button>
//                   <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
//                     Help & Support
//                   </button>
//                   <button
//                     onClick={handleSignOut}
//                     className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
//                   >
//                     Sign Out
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import { signOutUser } from "@/lib/firebase";

const Header = ({ toggleSidebar }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { userProfile } = useAuthContext();

  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSidebar}
              className="md:hidden text-gray-500 hover:text-gray-700 p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Open sidebar menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div>
                <h1 className="font-bold text-gray-900 text-base">
                  Shield Rep
                </h1>
                <p className="text-sm text-gray-500 truncate max-w-[120px] sm:max-w-none">
                  {userProfile?.businessName || "Your Business"}
                </p>
              </div>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            {/* Streak */}
            <div className="flex items-center gap-2 bg-orange-50 px-3 py-2 rounded-xl">
              <svg
                className="w-4 h-4 text-orange-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold text-orange-600">
                {userProfile?.streak || 0}
              </span>
              <span className="text-sm text-orange-600">day streak</span>
            </div>

            {/* Notifications */}
            <button className="relative p-2 hover:bg-gray-100 rounded-xl transition">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* User Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-xl transition"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">
                    {userProfile?.displayName
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("") || "U"}
                  </span>
                </div>
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50">
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
  );
};

export default Header;
