import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { UnifiedSidebar } from "./UnifiedSidebar";
import { UnifiedTopBar } from "./UnifiedTopBar";

interface UnifiedDashboardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export function UnifiedDashboard({ children, title, subtitle }: UnifiedDashboardProps) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex min-h-screen w-full bg-muted">
      <UnifiedSidebar />
      <div className="flex flex-1 flex-col pl-[260px] max-md:pl-0">
        <UnifiedTopBar title={title} subtitle={subtitle} />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
