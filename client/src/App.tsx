import React, { useState } from "react";
import { Switch, Route, Redirect } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider, useAuthContext } from "@/contexts/AuthContext";
import { queryClient } from "./lib/queryClient";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import OptimizationPhases from "@/pages/OptimizationPhases";
import Posts from "@/pages/Posts";
import Reviews from "@/pages/Reviews";
import Media from "@/pages/Media";
import Badge from "@/pages/Badge";
import NotFound from "@/pages/not-found";

// Protected Route wrapper
function ProtectedRoute({ children }) {
  const { user, loading } = useAuthContext();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Redirect to="/login" />;
  }

  return <>{children}</>;
}

// Layout with Sidebar and Header
function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-6 mt-4 lg:mt-0">
          {children}
        </main>
      </div>
    </div>
  );
}

// Router with conditional routes
function Router() {
  const { user, loading } = useAuthContext();

  return (
    <Switch>
      <Route path="/login">
        {/* Fix: Don't render login page at all while loading */}
        {loading ? (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Checking session...</p>
            </div>
          </div>
        ) : user ? (
          <Redirect to="/dashboard" />
        ) : (
          <Login />
        )}
      </Route>

      <Route path="/dashboard">
        <ProtectedRoute>
          <Layout>
            <Dashboard />
          </Layout>
        </ProtectedRoute>
      </Route>

      <Route path="/optimization">
        <ProtectedRoute>
          <Layout>
            <OptimizationPhases />
          </Layout>
        </ProtectedRoute>
      </Route>

      <Route path="/posts">
        <ProtectedRoute>
          <Layout>
            <Posts />
          </Layout>
        </ProtectedRoute>
      </Route>

      <Route path="/reviews">
        <ProtectedRoute>
          <Layout>
            <Reviews />
          </Layout>
        </ProtectedRoute>
      </Route>

      <Route path="/media">
        <ProtectedRoute>
          <Layout>
            <Media />
          </Layout>
        </ProtectedRoute>
      </Route>

      <Route path="/badge">
        <ProtectedRoute>
          <Layout>
            <Badge />
          </Layout>
        </ProtectedRoute>
      </Route>

      <Route path="/">
        {loading ? (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <p className="text-gray-600">Checking authentication...</p>
          </div>
        ) : user ? (
          <Redirect to="/dashboard" />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

// Main App
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
