import { signInWithGoogle } from "@/lib/firebase";

export default function Login() {
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-500">
      <div className="max-w-md w-full">
        {/* App Logo and Branding */}
        <div className="text-center mb-8 animate-slide-up">
          <div className="w-20 h-20 bg-white rounded-3xl shadow-2xl mx-auto mb-6 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-blue-500"
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
          <h1 className="text-4xl font-bold text-white mb-2">Shield Rep</h1>
          <p className="text-blue-100 text-lg">
            Optimize your Google Business Profile
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white bg-opacity-10 backdrop-blur-xl border border-white border-opacity-20 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Welcome Back
          </h2>
          <p className="text-blue-100 mb-8">
            Continue with your Google account to access your business dashboard
          </p>

          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white text-gray-900 py-4 px-6 rounded-2xl font-semibold flex items-center justify-center space-x-3 hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          <p className="text-blue-100 text-sm mt-6 leading-relaxed">
            By continuing, you agree to our{" "}
            <a href="#" className="text-white underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-white underline">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Feature Preview */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="text-white">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-2xl mx-auto mb-2 flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <p className="text-sm text-blue-100">Track Progress</p>
          </div>
          <div className="text-white">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-2xl mx-auto mb-2 flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-sm text-blue-100">Earn Rewards</p>
          </div>
          <div className="text-white">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-2xl mx-auto mb-2 flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H9a1 1 0 010 2H7.771l.062-.245.124-.49.497-.497.302-.302L8.771 12zM7 3.5A1.5 1.5 0 018.5 2h3A1.5 1.5 0 0113 3.5v1A1.5 1.5 0 0111.5 6h-3A1.5 1.5 0 017 4.5v-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-sm text-blue-100">AI Powered</p>
          </div>
        </div>
      </div>
    </div>
  );
}
