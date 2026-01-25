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
  GraduationCap,
  BarChart3,
  FileText,
  Sparkles,
  LogOut,
  ShieldCheck,
  Sliders,
  ShoppingCart,
  Trophy,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth, UserRole } from "@/contexts/AuthContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SheetClose } from "@/components/ui/sheet";

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
        { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
        { icon: GraduationCap, label: "My Courses", href: "/dashboard/my-courses" },
        { icon: BookOpen, label: "Browse Courses", href: "/dashboard/catalog" },
        { icon: FileText, label: "Assignments", href: "/dashboard/assignments" },
        { icon: Trophy, label: "Certificates", href: "/dashboard/certificates" },
        { icon: Target, label: "Learning Path", href: "/dashboard/learning-path" },
        { icon: MessageSquare, label: "Messages", href: "/dashboard/messages" },
        { icon: ShoppingCart, label: "My Cart", href: "/dashboard/cart" },
      ];
    case "admin":
      return [
        { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
        { icon: Users, label: "User Management", href: "/dashboard/users" },
        { icon: BookOpen, label: "Course Moderation", href: "/dashboard/courses" },
        { icon: DollarSign, label: "Revenue", href: "/dashboard/revenue" },
        { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
        { icon: ShieldCheck, label: "Security", href: "/dashboard/security" },
        { icon: Sliders, label: "AI Settings", href: "/dashboard/ai-settings" },
      ];
    default:
      return [];
  }
};

const bottomNav: NavItem[] = [
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  { icon: HelpCircle, label: "Help Center", href: "/dashboard/help" },
];

export function UnifiedMobileSidebar() {
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
        return "Student";
      case "admin":
        return "Administrator";
      default:
        return role;
    }
  };

  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-sidebar-border px-4">
        <SheetClose asChild>
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-primary">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold">LearnAI</span>
          </Link>
        </SheetClose>
      </div>

      {/* Main Navigation */}
      <ScrollArea className="flex-1 p-3">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <SheetClose key={item.href} asChild>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-foreground"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-sidebar-primary px-1.5 text-xs text-white">
                    {item.badge}
                  </span>
                )}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </ScrollArea>

      {/* Bottom Navigation */}
      <div className="border-t border-sidebar-border p-3">
        {bottomNav.map((item) => (
          <SheetClose key={item.href} asChild>
            <Link
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-foreground"
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span>{item.label}</span>
            </Link>
          </SheetClose>
        ))}
      </div>

      {/* User Profile */}
      <div className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-3 rounded-lg px-3 py-2.5">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1 overflow-hidden">
            <p className="truncate text-sm font-medium">{user.name}</p>
            <p className="truncate text-xs text-sidebar-muted">
              {getRoleLabel(user.role)}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLogout}
            className="h-8 w-8 text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-foreground"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
