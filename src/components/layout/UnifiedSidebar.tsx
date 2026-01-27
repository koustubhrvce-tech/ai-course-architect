import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  DollarSign,
  MessageSquare,
  Star,
  Tag,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BarChart3,
  FileText,
  LogOut,
  ShieldCheck,
  Sliders,
  ShoppingCart,
  Trophy,
  Target,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth, UserRole } from "@/contexts/AuthContext";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
  badge?: string;
}

const getNavItems = (role: UserRole): NavItem[] => {
  switch (role) {
    case "teacher":
      return [
        { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
        { icon: BookOpen, label: "My Courses", href: "/dashboard/courses", badge: "12" },
        { icon: Users, label: "Students", href: "/dashboard/students" },
        { icon: DollarSign, label: "Revenue", href: "/dashboard/revenue" },
        { icon: Tag, label: "Promotions", href: "/dashboard/promotions" },
        { icon: Star, label: "Reviews", href: "/dashboard/reviews" },
        { icon: MessageSquare, label: "Messages", href: "/dashboard/messages", badge: "3" },
        { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
      ];
    case "student":
      return [
        { icon: LayoutDashboard, label: "Home", href: "/dashboard" },
        { icon: GraduationCap, label: "My Learning", href: "/dashboard/my-courses" },
        { icon: BookOpen, label: "Catalog", href: "/dashboard/catalog" },
        { icon: FileText, label: "Assignments", href: "/dashboard/assignments" },
        { icon: Trophy, label: "Achievements", href: "/dashboard/certificates" },
        { icon: Target, label: "Goals", href: "/dashboard/learning-path" },
        { icon: MessageSquare, label: "Messages", href: "/dashboard/messages" },
        { icon: ShoppingCart, label: "Cart", href: "/dashboard/cart" },
      ];
    case "admin":
      return [
        { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
        { icon: Users, label: "Users", href: "/dashboard/users" },
        { icon: BookOpen, label: "Courses", href: "/dashboard/courses" },
        { icon: DollarSign, label: "Revenue", href: "/dashboard/revenue" },
        { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
        { icon: ShieldCheck, label: "Security", href: "/dashboard/security" },
        { icon: Sliders, label: "Settings", href: "/dashboard/ai-settings" },
      ];
    default:
      return [];
  }
};

const bottomNav: NavItem[] = [
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  { icon: HelpCircle, label: "Help", href: "/dashboard/help" },
];

export function UnifiedSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  if (!user) return null;

  const navItems = getNavItems(user.role);

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const getRoleLabel = (role: UserRole) => {
    switch (role) {
      case "teacher":
        return "Instructor";
      case "student":
        return "Learner";
      case "admin":
        return "Administrator";
      default:
        return role;
    }
  };

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 flex h-screen flex-col bg-white border-r border-border transition-all duration-300 max-md:hidden",
        collapsed ? "w-[70px]" : "w-[260px]"
      )}
    >
      {/* Logo */}
      <div className="flex h-14 items-center justify-between border-b border-border px-4">
        {!collapsed && (
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-coursera-blue">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold">LearnAI</span>
          </Link>
        )}
        {collapsed && (
          <div className="flex h-8 w-8 items-center justify-center rounded bg-coursera-blue mx-auto">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
        )}
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-3 scrollbar-thin">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors",
              isActive(item.href)
                ? "bg-coursera-blue-light text-coursera-blue border-l-2 border-coursera-blue -ml-[2px]"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!collapsed && (
              <>
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-coursera-blue px-1.5 text-xs text-white">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </Link>
        ))}
      </nav>

      {/* Create Course Button for Teachers */}
      {!collapsed && user.role === "teacher" && (
        <div className="px-3 pb-3">
          <Link to="/dashboard/courses/new">
            <Button className="w-full gap-2 bg-coursera-blue hover:bg-coursera-blue-hover">
              <Plus className="h-4 w-4" />
              Create Course
            </Button>
          </Link>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="border-t border-border p-3">
        {bottomNav.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors",
              isActive(item.href)
                ? "bg-coursera-blue-light text-coursera-blue"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </div>

      {/* User Profile */}
      <div className="border-t border-border p-3">
        <div
          className={cn(
            "flex items-center gap-3 px-3 py-2.5",
            collapsed ? "justify-center" : ""
          )}
        >
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.avatar} />
            <AvatarFallback className="bg-coursera-blue text-white text-sm">
              {user.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-sm font-medium">{user.name}</p>
              <p className="truncate text-xs text-muted-foreground">
                {getRoleLabel(user.role)}
              </p>
            </div>
          )}
          {!collapsed && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-border text-muted-foreground hover:text-foreground shadow-sm"
      >
        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>
    </aside>
  );
}
