import { UnifiedDashboard } from "@/components/layout/UnifiedDashboard";
import { useAuth } from "@/contexts/AuthContext";
import { TeacherDashboardContent } from "@/components/dashboard/TeacherDashboardContent";
import { StudentDashboardContent } from "@/components/dashboard/StudentDashboardContent";
import { AdminDashboardContent } from "@/components/dashboard/AdminDashboardContent";

export default function UnifiedDashboardPage() {
  const { user } = useAuth();

  const getTitle = () => {
    switch (user?.role) {
      case "teacher":
        return "Instructor Dashboard";
      case "student":
        return "My Learning Dashboard";
      case "admin":
        return "Admin Dashboard";
      default:
        return "Dashboard";
    }
  };

  const getSubtitle = () => {
    return `Welcome back, ${user?.name || "User"}!`;
  };

  const renderContent = () => {
    switch (user?.role) {
      case "teacher":
        return <TeacherDashboardContent />;
      case "student":
        return <StudentDashboardContent />;
      case "admin":
        return <AdminDashboardContent />;
      default:
        return <div>Invalid role</div>;
    }
  };

  return (
    <UnifiedDashboard title={getTitle()} subtitle={getSubtitle()}>
      {renderContent()}
    </UnifiedDashboard>
  );
}
