import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  DollarSign,
  MessageSquare,
  Settings,
  GraduationCap,
  BarChart3,
  Trophy,
  LogOut,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth, UserRole } from "@/contexts/AuthContext";
import { SheetClose } from "@/components/ui/sheet";

const getNavItems = (role: UserRole) => {
  switch (role) {
    case "teacher":
      return [
        { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
        { icon: BookOpen, label: "My Courses", href: "/dashboard/courses" },
        { icon: Users, label: "Students", href: "/dashboard/students" },
        { icon: DollarSign, label: "Revenue", href: "/dashboard/revenue" },
        { icon: MessageSquare, label: "Messages", href: "/dashboard/messages" },
        { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
      ];
    case "student":
      return [
        { icon: LayoutDashboard, label: "Home", href: "/dashboard" },
        { icon: GraduationCap, label: "My Learning", href: "/dashboard/my-courses" },
        { icon: BookOpen, label: "Catalog", href: "/dashboard/catalog" },
        { icon: Trophy, label: "Achievements", href: "/dashboard/certificates" },
        { icon: MessageSquare, label: "Messages", href: "/dashboard/messages" },
      ];
    case "admin":
      return [
        { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
        { icon: Users, label: "Users", href: "/dashboard/users" },
        { icon: BookOpen, label: "Courses", href: "/dashboard/courses" },
        { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
        { icon: ShieldCheck, label: "Security", href: "/dashboard/security" },
      ];
    default:
      return [];
  }
};

export function UnifiedMobileSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  if (!user) return null;

  const navItems = getNavItems(user.role);
  const isActive = (href: string) => href === "/dashboard" ? location.pathname === href : location.pathname.startsWith(href);

  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex h-14 items-center gap-2 border-b px-4">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-coursera-blue">
          <GraduationCap className="h-5 w-5 text-white" />
        </div>
        <span className="text-lg font-bold">LearnAI</span>
      </div>
      <div className="p-4 border-b">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar} />
            <AvatarFallback className="bg-coursera-blue text-white">{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-muted-foreground capitalize">{user.role}</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {navItems.map((item) => (
          <SheetClose asChild key={item.href}>
            <Link to={item.href} className={cn("flex items-center gap-3 px-3 py-2.5 text-sm font-medium", isActive(item.href) ? "bg-coursera-blue-light text-coursera-blue" : "text-muted-foreground hover:bg-muted")}>
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          </SheetClose>
        ))}
      </nav>
      <div className="border-t p-3 space-y-1">
        <SheetClose asChild>
          <Link to="/dashboard/settings" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted">
            <Settings className="h-5 w-5" /><span>Settings</span>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <button onClick={() => { logout(); navigate("/login"); }} className="flex w-full items-center gap-3 px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted">
            <LogOut className="h-5 w-5" /><span>Log out</span>
          </button>
        </SheetClose>
      </div>
    </div>
  );
}
