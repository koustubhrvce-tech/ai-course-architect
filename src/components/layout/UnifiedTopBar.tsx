import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Search, Plus, Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UnifiedMobileSidebar } from "./UnifiedMobileSidebar";

interface UnifiedTopBarProps {
  title?: string;
  subtitle?: string;
}

export function UnifiedTopBar({ title, subtitle }: UnifiedTopBarProps) {
  const { user } = useAuth();
  const [showSearch, setShowSearch] = useState(false);

  const getActionButton = () => {
    switch (user?.role) {
      case "teacher":
        return (
          <Link to="/dashboard/courses/create">
            <Button size="sm" className="gap-2 bg-lms-blue hover:bg-lms-blue/90">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Create Course</span>
            </Button>
          </Link>
        );
      case "student":
        return (
          <Link to="/dashboard/catalog">
            <Button size="sm" className="gap-2 bg-lms-blue hover:bg-lms-blue/90">
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Browse Courses</span>
            </Button>
          </Link>
        );
      case "admin":
        return (
          <Link to="/dashboard/users">
            <Button size="sm" className="gap-2 bg-lms-purple hover:bg-lms-purple/90">
              <Sparkles className="h-4 w-4" />
              <span className="hidden sm:inline">AI Reports</span>
            </Button>
          </Link>
        );
      default:
        return null;
    }
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background px-4 md:px-6">
      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-[260px]">
          <UnifiedMobileSidebar />
        </SheetContent>
      </Sheet>

      {/* Title Section */}
      <div className="hidden md:block">
        {title && (
          <div>
            <h1 className="text-xl font-semibold text-foreground">{title}</h1>
            {subtitle && (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-2 md:gap-4 ml-auto">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-64 pl-9 bg-muted/50"
          />
        </div>

        {/* Mobile Search Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
        </Button>

        {/* AI Quick Actions */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Sparkles className="h-5 w-5 text-lms-purple" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem className="gap-2">
              <Sparkles className="h-4 w-4 text-lms-purple" />
              AI Assistant
            </DropdownMenuItem>
            {user?.role === "teacher" && (
              <DropdownMenuItem className="gap-2">
                <Sparkles className="h-4 w-4 text-lms-purple" />
                Generate Course Outline
              </DropdownMenuItem>
            )}
            {user?.role === "student" && (
              <DropdownMenuItem className="gap-2">
                <Sparkles className="h-4 w-4 text-lms-purple" />
                Find Courses for Me
              </DropdownMenuItem>
            )}
            {user?.role === "admin" && (
              <DropdownMenuItem className="gap-2">
                <Sparkles className="h-4 w-4 text-lms-purple" />
                Platform Health Report
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-lms-rose p-0 text-xs">
            3
          </Badge>
        </Button>

        {/* Role-specific Action */}
        {getActionButton()}
      </div>
    </header>
  );
}
