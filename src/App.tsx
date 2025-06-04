import React, { ReactNode, useState } from "react";
import { Switch, Route, Redirect } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "@/pages/Dashboard";
import { AuthProvider, useAuthContext } from "./contexts/AuthContext";
import { queryClient } from "@/lib/queryClient";
import Login from "@/pages/Login";
import NotFound from "@/pages/not-found";
import { TooltipProvider } from "@ui/tooltip";
import { Toaster } from "@ui/toaster";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import OptimizationPhases from "@/pages/OptimizationPhases";
import Posts from "@/pages/Posts";
import Reviews from "@/pages/Reviews";
import Media from "@/pages/Media";
import Badge from "@/pages/Badge";
import Billing from "@/pages/Billing";

// Define props for ProtectedRoute
type ProtectedRouteProps = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuthContext();

  if (loading) return null;
  if (!user) return <Redirect to="/login" />;
  return <>{children}</>;
}

// Define props for Layout
type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        <main className="flex-1 overflow-y-auto p-6 mt-4 lg:mt-0">
          {children}
        </main>
      </div>
    </div>
  );
}

function Router() {
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

  return (
    <Switch>
      {/* Login route */}
      <Route path="/login">
        {user ? <Redirect to="/dashboard" /> : <Login />}
      </Route>

      {/* Protected routes */}
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

      <Route path="/billing">
        <ProtectedRoute>
          <Layout>
            <Billing />
          </Layout>
        </ProtectedRoute>
      </Route>

      {/* Root redirect */}
      <Route path="/">
        <Redirect to={user ? "/dashboard" : "/login"} />
      </Route>

      {/* 404 Not Found */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

// Main App component
export default function App() {
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
